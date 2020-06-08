import { Creators as UserActions } from "~/store/ducks/user";
import Logo from "~/assets/images/eitalasqueira.png";
import { Form, Container } from "./styles";
import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: this.props.user.email ? this.props.user.email : "",
    password: "",
    error: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha a todos os dados" });
    } else {
      this.props.signIn(email, password);
    }
  };

  render() {
    const { email, error } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="Eita Lasqueira logo" />
          {error && <p>{error}</p>}
          {this.props.user.message && <p>{this.props.user.message}</p>}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          {/* <hr /> */}
        </Form>
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user,
  }),
  UserActions
)(Login);
