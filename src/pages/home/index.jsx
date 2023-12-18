import { WavyLink } from "react-wavy-transitions";
import { HomeMain } from "../../styles/Home";
import { Header } from "../../components/header";
import { useContext } from "react";
import { HomeContext } from "../../contexts/contexHome";
import { AvatarModal, DeletePost, DeleteUser, EditProfile, PostModal } from "./modalsHome";
import { PostPublication } from "./postHome";
import { Posts } from "../../components/posts";


export const Home = () => {
  const { modalAvatar, userAvatar,openModlaEdit,modalDeleteUser,modalPostOn,ModalDeletePost } = useContext(HomeContext);
  return (
    <>
      {modalAvatar ? <AvatarModal /> : null}
      {openModlaEdit ? <EditProfile /> : null}
      {modalDeleteUser ? <DeleteUser/> : null}
      {modalPostOn ? <PostModal /> : null}
      {ModalDeletePost  ? <DeletePost /> : null}
      <HomeMain>
        <Header />
        <h2>Forum</h2>
        <PostPublication/>
        <Posts/>
      </HomeMain>
    </>
  );
};
