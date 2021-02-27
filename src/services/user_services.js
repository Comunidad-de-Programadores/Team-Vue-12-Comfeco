import { db, auth } from "@/firebase";

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
