import { db } from "@/firebase";
const db_name = "data-landing";

export const getLeadersService = function(callback) {
  return db
    .collection(db_name)
    .doc("leaders")
    .onSnapshot(callback);
};
export const getSponsorsService = function(callback) {
  return db
    .collection(db_name)
    .doc("sponsors")
    .onSnapshot(callback);
};
