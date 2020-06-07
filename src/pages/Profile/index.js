import React from "react";
import { connect } from "react-redux";
import { Creators as UserActions } from "~/store/ducks/user";

const Profile = ({ user, signOut }) => (
  <div>
    <h1>É TRETAAAAAA É TRETAAAAAA</h1>
    <strong>Nome {user.name}</strong>
    <br />
    <strong>Avatar {user.avatar}</strong>
    <br />
    <strong>Token {user.token}</strong>
    <br />
    <strong>Email {user.email}</strong>
    <button onClick={() => signOut()}>Sair</button>
  </div>
);

export default connect(
  (state) => ({
    user: state.user,
  }),
  UserActions
)(Profile);
