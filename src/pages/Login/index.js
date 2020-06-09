import { Creators as UserActions } from "~/store/ducks/user";
import Logo from "~/assets/images/eitalasqueira.png";
import { Form, Container } from "./styles";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Login({ user, signIn }) {
  const [email, setEmail] = useState(user.email ? user.email : "");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handleLocation);
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handleLocation({ coords }) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
      setMessageError("Preencha a todos os dados");
    } else {
      signIn(email, password, location);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <img src={Logo} alt="Eita Lasqueira logo" />
        {messageError && <p>{messageError}</p>}
        {user.message && <p>{user.message}</p>}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        {/* <hr /> */}
      </Form>
    </Container>
  );
}

export default connect(
  (state) => ({
    user: state.user,
  }),
  UserActions
)(Login);
