import styled from "styled-components";

export const LoginPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: #ffffff;
  .imgContainer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 600px;
    max-width: 50%;
    img {
      width: 100%;
      overflow: hidden;
    }
  }
  .logoForm {
    width: 100px;
    position: absolute;
    top: 25px;
    left: 24px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  width: 500px;
  background-color: aquamarine;
  padding: 25px 50px;
  gap: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.17);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  z-index: 3;
  h2 {
    font-size: 30px;
    background: #fca104;
    background: linear-gradient(to top, #fca104 29%, #ffe857 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .logoForm {
    width: 1px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .Inpults {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    color: #7e5103;
    label {
      font-size: 18px;
      padding-left: 15px;
    }
    input {
      width: 100%;
      border-radius: 15px;
      height: 35px;
      border: 2px solid #be7d0e;
      padding: 15px;
      font-size: 18px;
      color: #4d3205;
    }
  }
  .buttons{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    button {
      background-color: transparent;
      padding: 5px 15px;
      border-radius: 15px;
      border: 2px solid #be7d0e;
      color: #be7d0e;
      font-size: 20px;
      cursor: pointer;
      width: 100%;
    }
    .buttonLogin {
      color: white;
      background-color: #fca104;
      border: 2px solid #fca104;
      margin-bottom: 25px;
    }
    .buttonLogin:hover {
      background-color: rgba(252, 161, 4, 0.2);
      color: #fca104;
      transition: 1s;
    }
  }
`;
