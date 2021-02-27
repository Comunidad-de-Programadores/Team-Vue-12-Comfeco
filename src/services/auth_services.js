import { db, auth } from "@/firebase";
import { setDataUserService } from "@/services/user_services";

function verifyValues({ email, password, nickname }) {
  verifyEmailAndPassword({ email: email, password: password });
  if (!nickname) throw "nickname nulo";
  if (nickname.constructor.name !== "Nickname")
    throw "values is not a Nickname  class";
}
function verifyEmailAndPassword({ email, password }) {
  if (!email || !password) throw "email or password nulo";
  if (
    email.constructor.name !== "Email" ||
    password.constructor.name !== "Password"
  )
    throw "values is not Email, Nickname or Password class";
}

export const signInWithEmailAndPassword = ({ email, password }) => {
  verifyEmailAndPassword({ email: email, password: password });
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
  verifyValues({
    email: email,
    password: password,
    nickname: nickname
  });

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
  localStorage.setItem("isAuth", true);
  await auth.createUserWithEmailAndPassword(
    email.getValue(),
    password.getValue()
  );
  await setDataUserService({ nickname: nickname.getValue() });
};

export const signOut = () => {
  return auth.signOut();
};
