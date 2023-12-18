import styled from "styled-components";

export const RegisterPage = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: #001220;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .logoForm {
    width: 100px;
    position: absolute;
    top: 25px;
    left: 24px;
  }
  .ImgRegister {
    width: 30%;
    position: absolute;
    bottom: 2%;
    right: 10%;
  }
  @media (max-width: 1000px) {
    .ImgRegister {
      width: 40%;
    }
  }
  @media (max-width: 850px) {
    .ImgRegister {
      width: 50%;
      right: 0;
    }
  }
  @media (max-width: 550px) {
    .ImgRegister {
      width: 80%;
      right: 0;
    }
  }
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  width: 600px;
  max-width: 80%;
  max-height: 80%;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  border-radius: 10px;
  padding: 25px;
  z-index: 2;
  gap: 10px;
  .HeaderForm {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 700;
      font-size: 35px;
      background: #fca104;
      background: linear-gradient(to top, #fca104 29%, #ffe857 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .react-wavy-transitions__wavy-link {
      color: #828282;
      font-weight: 500;
      font-size: 1rem;
      text-decoration: none;
      transition: 0.5s;
    }
    .react-wavy-transitions__wavy-link:hover {
      color: white;
    }
  }
  .Inpults {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
    input {
      background-color: transparent;
      height: 40px;
      border-radius: 10px;
      border: 2px solid #7e5103;
      font-size: 1rem;
      padding-left: 10px;
      color: white;
    }
    label {
      font-size: 1rem;
      color: #fca104;
      margin-left: 5px;
      position: absolute;
      top: -10px;
      left: 10px;
      background-color: #0d1e2b;
      padding: 0px 5px;
    }
    .error {
      position: absolute;
      color: #e60000;
      font-weight: 400;
      font-size: 0.75rem;
      left: 15px;
      bottom: -15px;
    }
    .inputError {
      border: 2px solid #e60000;
    }
  }
  .buttonRegister {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    height: 35px;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 10px;
    background-color: #fca104;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.8s;
    img {
      width: 50px;
      max-width: 100%;
    }
  }
  @media (max-width: 850px) {
    .HeaderForm {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
