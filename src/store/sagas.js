import { takeLatest, put, all, call } from "redux-saga/effects";
import { push } from "connected-react-router";

function loginPost(email, password) {
  console.log(email);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: "Maria Bonita",
        email: "mariabonita@email.com",
        token: "es0546504eq98as489asd5naksbdah01",
        avatar: "uma foto bonita da maria",
      };
      resolve(user);
      // const error = {
      //   status: "503",
      //   message: "TA PEGANDO FOGO BIXO",
      // };
      // reject(error);
    }, 2000);
  });
}

function* asyncSignIn(action) {
  try {
    /**
     * If the login is successful, update the user data and redirect him to the next page
     */
    const response = yield call(loginPost, action.email, action.name);
    const { name, email, token, avatar } = response;
    yield put(push("/profile"));
    yield put({ type: "user/SIGN_IN", name, email, avatar, token });
  } catch (error) {
    /**
     * If the login is not successful it updates the login error params by sending to another reducer
     */
    console.log("Error");
    yield put({
      type: "user/ERROR",
      status: error.status,
      message: error.message,
    });
  }
}

export default function* root() {
  yield all([takeLatest("user/SAGASIGN_IN", asyncSignIn)]);
}
