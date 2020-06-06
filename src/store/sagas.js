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
    }, 2000);
  });
}

function* asyncSignIn(action) {
  const response = yield call(loginPost, action.email, action.name);
  const { name, email, token, avatar } = response;
  console.log(response);
  yield put(push("/profile"));

  yield put({ type: "user/SIGN_IN", name, email, avatar, token });
}

export default function* root() {
  yield all([takeLatest("user/SAGASIGN_IN", asyncSignIn)]);
}
