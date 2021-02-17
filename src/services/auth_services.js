import { auth } from "@/firebase";

function verifyEmailAndPassword({ email, password }) {
  if (!email || !password) throw "email or password nulo";
  if (
    email.constructor.name !== "Email" ||
    password.constructor.name !== "Password"
  )
    throw "values is not Email or Password class";
}

export const signInWithEmailAndPassword = ({ email, password }) => {
  verifyEmailAndPassword({ email: email, password: password });
  return auth.signInWithEmailAndPassword(email.getValue(), password.getValue());
};

export const isUserAuthenticated = () => {
  const user = auth.currentUser;
  console.log("user", user);
  if (user) return true;
  return false;
};

export const registerWithEmailAndPassword = ({ email, password }) => {
  verifyEmailAndPassword({ email: email, password: password });
  return auth.createUserWithEmailAndPassword(
    email.getValue(),
    password.getValue()
  );
};

export const signOut = () => {
  return auth.signOut();
};
