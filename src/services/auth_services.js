import { db, auth } from "@/firebase";
import { setDataUserService } from "@/services/user_services";

export const signInWithEmailAndPassword = ({ email, password }) => {
  if (!email || !password) throw "email or password nulo";
  return auth.signInWithEmailAndPassword(email.getValue(), password.getValue());
};

export const isUserAuthenticated = () => {
  const user = auth.currentUser;
  if (user) return true;
  return false;
};

export const registerUserService = async function({
  email,
  password,
  nickname
}) {
  if (!email || !password || !nickname)
    throw "email, nickname or password nulo";

  var docRef = db
    .collection("nicknames")
    .doc(nickname.getValue().toLowerCase());

  await db.runTransaction(async transaction => {
    const doc = await transaction.get(docRef);
    if (doc.exists) {
      throw { code: "not_available" };
    }
    await transaction.set(docRef, {});
  });

  try {
    await auth.createUserWithEmailAndPassword(
      email.getValue(),
      password.getValue()
    );
  } catch (e) {
    await docRef.delete();
    throw e;
  }

  localStorage.setItem("isAuth", true);
  await setDataUserService({ nickname: nickname.getValue() });
};

export const signOut = () => {
  return auth.signOut();
};
