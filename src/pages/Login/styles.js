import styled from "styled-components";

export const Container = styled.div({
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  height: "100vh",
  "background-color": "lightblue",
});

export const Form = styled.form`
  width: 400px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cbdee9;
  border-radius: 10px;

  img {
    height: 150px;
    margin: 10px 0 40px;
  }

  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  input {
    flex: 1;
    height: 60px;
    margin-bottom: 20px;
    padding: 5px 20px;
    color: #777;
    font-size: 20px;
    width: 100%;
    border: 2px groove #ddd;
    border-radius: 10px;
    box-shadow: 2px 3px #ddd;
    &::placeholder {
      color: #999;
      border-radius: 10px;
    }
  }

  button {
    color: #fff;
    font-size: 19px;
    background: #082a68;
    height: 56px;
    border: 0;
    border-radius: 10px;
    width: 50%;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;
