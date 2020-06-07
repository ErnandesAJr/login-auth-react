import { all } from "redux-saga/effects";
import { login } from "./ducks/user";

export default function* root() {
  yield all([login]);
}
