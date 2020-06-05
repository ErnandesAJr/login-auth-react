import React from "react";
import { connect } from "react-redux";

const Profile = ({ user }) => (
  <div>
    <strong>Nome {user.name}</strong>
    <br />
    <strong>Avatar {user.avatar}</strong>
    <br />
    <strong>Token {user.token}</strong>
    <br />
    <strong>Email {user.email}</strong>
  </div>
);

export default connect((state) => ({
  user: state.user,
}))(Profile);
