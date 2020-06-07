import { all } from "redux-saga/effects";
import { login, logoff } from "./ducks/user";

/**
 * If you are going to create another reducer service, import it from the duck folder and add * it to the "all" array
 */
export default function* root() {
  yield all([login, logoff]);
}
