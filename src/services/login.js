//Axios

class Login {
  /**
   * Simulating a login request
   */
  loginPost(email, password) {
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

  isAuthenticated = () => {
    // You must check if the token is in the localstorage to know if it is authenticated or not
    return false;
  };
}

export default Login;
