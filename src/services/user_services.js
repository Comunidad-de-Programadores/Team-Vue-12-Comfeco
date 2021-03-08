import { db, auth } from "@/firebase";
import { stateField } from "@/services/enums.js";

const db_name = "users";

export const setDataUserService = async function({ nickname }) {
  const user = auth.currentUser;
  if (!user || !nickname) return;
  const dataToSend = {
    createAt: new Date(),
    updateAt: new Date(),
    nick: nickname,
    email: user.email
  };
  await db
    .collection(db_name)
    .doc(user.uid)
    .set(dataToSend);
};
export const existNicknameService = async function({ nickname }) {
  const result = await db
    .collection("nicknames")
    .doc(nickname.toLowerCase())
    .get();
  if (result.exists) {
    return true;
  }
  return false;
};

export const getUserService = function(callback) {
  const user = auth.currentUser;
  return db
    .collection(db_name)
    .doc(user.uid)
    .onSnapshot(callback);
};

export const updateUserService = async function({
  email,
  password,
  data,
  nickname
}) {
  console.log(email, password, data, nickname);
  const collectionNicks = db.collection("nicknames");
  const dataToSend = {
    updateAt: new Date(),
    ...data
  };
  if (nickname) {
    dataToSend.nick = nickname;
    const docRefNewNick = collectionNicks.doc(nickname.toLowerCase());
    const docRefOldNick = collectionNicks.doc(data.nick.toLowerCase());

    await db.runTransaction(async transaction => {
      const doc = await transaction.get(docRefNewNick);
      if (doc.exists) {
        throw { code: stateField.NOT_AVAILABLE };
      }
      await transaction.set(docRefNewNick, {});
      console.log(data.nick.toLowerCase());
      await transaction.delete(docRefOldNick);
    });
  }
  try {
    const user = auth.currentUser;
    console.log(user);
    if (!user) throw { code: "no-auth" };
    if (password) {
      await user.updatePassword(password);
    }
    if (email) {
      dataToSend.email = email;
      await user.updateEmail(email);
    }
    console.log(dataToSend);
    await db
      .collection(db_name)
      .doc(user.uid)
      .set(dataToSend);
  } catch (e) {
    console.log("error", e);
    if (nickname) {
      await collectionNicks.doc(nickname.toLowerCase()).delete();
      await collectionNicks.doc(data.nick.toLowerCase()).set({});
    }
    throw e;
  }
};
