import { HeaderStyled } from "../styles/header";
import Logo from "../assets/LogoWhite2.png";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../contexts/contexHome";
import { useContext } from "react";
import Avatar, { genConfig } from "react-nice-avatar";

export const Header = () => {
  const navigate = useNavigate();
  const { modalAvatar, userAvatar,setOpenModlaEdit ,openModlaEdit} = useContext(HomeContext);
  const myConfig = genConfig(userAvatar);
  return (
    <HeaderStyled>
      <img src={Logo} alt="" />
      <div className="containerRight">
        <div className="avatarDiv" onClick={() => setOpenModlaEdit(!openModlaEdit)}>
          <Avatar style={{ width: "50px", height: "50px" }} {...myConfig} />
        </div>
        <RxExit
          className="buttonExit"
          onClick={() => {
            localStorage.removeItem("aclsTokenUser");
            navigate("/Login");
          }}
        />
      </div>
    </HeaderStyled>
  );
};
