import { AnimetionBackgraud } from "../../components/animention";
import { AnimentionStyled } from "../../styles/animetion";
import { LoginPage } from "../../styles/login";
import { FormLogin } from "./formLogin";
import imgLogin from "../../assets/imgLogin3.gif";
import logoOrage from "../../assets/logoOrage2.png"

export const Login = () => {
  return (
    <LoginPage>
      <img src={logoOrage} alt="" className="logoForm"/>
      <FormLogin />
      <div className="imgContainer">
        <img src={imgLogin} alt="" />
      </div>
      <AnimetionBackgraud />
    </LoginPage>
  );
};
