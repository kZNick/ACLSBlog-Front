import { RegisterPage } from "../../styles/register";
import Innovation from "../../assets/Innovation.gif";
import logoOrage from "../../assets/logoOrage2.png"
import { RegisterForm } from "./registerForm";

export const Register = () => {
  return (
    <RegisterPage>
      <img src={logoOrage} alt="" className="logoForm"/>
      <RegisterForm />
      <img src={Innovation} alt="" className="ImgRegister" />
    </RegisterPage>
  );
};
