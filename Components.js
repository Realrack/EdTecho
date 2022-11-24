import { auth } from "./App";

export const Savedata = (Id, Name, Phone) => {
  return new Promise(function (resolve, reject) {
    let key;
    if (Id != null) {
      key = Id;
    } else {
      key = database().ref().push().key;
    }
    let dataToSave = {
      Id: key,
      Name: Name,
      PhoneNo: Phone,
    };
    database()
      .ref("users/" + key)
      .update(dataToSave)
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
