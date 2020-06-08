//Axios

class Login {
  /**
   * Simulating a login request
   */
  loginPost(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          name: email.split("@")[0],
          email: email,
          token: `${password}troll`,
          avatar: `uma foto bonita dx ${email.split("@")[0]}`,
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

  isAuthenticated = () => {
    return false;
  };
}

export default Login;
