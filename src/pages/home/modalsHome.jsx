import { useContext } from "react";
import { AvatarStyled } from "../../styles/avatar";
import { HomeContext } from "../../contexts/contexHome";
import Avatar, { genConfig } from "react-nice-avatar";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormUpdat, ModalEditProfile, ModalPost } from "../../styles/modals";
import { AvatarComponet } from "../../components/avatar";
import { AiOutlineSend } from "react-icons/ai";

export const AvatarModal = () => {
  const { configAvatar, setConfigAvatar, saveAvatar } = useContext(HomeContext);

  const handleAttributeChange = (attribute, options) => {
    const currentValue = configAvatar[attribute];
    const currentIndex = options.indexOf(currentValue);
    const nextIndex = (currentIndex + 1) % options.length;
    const nextValue = options[nextIndex];
    setConfigAvatar((prevConfig) => ({
      ...prevConfig,
      [attribute]: nextValue,
    }));
  };
  const myConfig = genConfig(configAvatar);
  return (
    <AvatarStyled>
      <div className="conteiner">
        <div className="avatarTex">
          <h2>
            "Olá! Seja bem-vindo(a)! Antes de começarmos vamos deixar seu avatar
            com a sua cara. Personalize-o do jeito que mais te representa!"
          </h2>
        </div>
        <div>
          <Avatar
            style={{ width: "150px", height: "150px" }}
            {...myConfig}
            className="avatarConfig"
          />
        </div>
        <div className="buttons">
          <button
            onClick={() =>
              handleAttributeChange("faceColor", ["#AC6651", "#F9C9B6"])
            }
          >
            Cor
          </button>
          <button
            onClick={() =>
              handleAttributeChange("hairStyle", [
                "normal",
                "thick",
                "mohawk",
                "womanLong",
                "womanShort",
              ])
            }
          >
            Penteado
          </button>
          <button
            onClick={() =>
              handleAttributeChange("hatStyle", ["none", "beanie", "turban"])
            }
          >
            Chapéu
          </button>
          <button
            onClick={() =>
              handleAttributeChange("eyeStyle", ["circle", "oval", "smile"])
            }
          >
            Olho
          </button>
          <button
            onClick={() =>
              handleAttributeChange("glassesStyle", ["none", "round", "square"])
            }
          >
            Óculos
          </button>
          <button
            onClick={() =>
              handleAttributeChange("noseStyle", ["short", "long", "round"])
            }
          >
            Nariz
          </button>
          <button
            onClick={() =>
              handleAttributeChange("mouthStyle", ["laugh", "smile", "peace"])
            }
          >
            Boca
          </button>
          <button
            onClick={() =>
              handleAttributeChange("shirtStyle", ["hoody", "short", "polo"])
            }
          >
            Camisa
          </button>
        </div>
        <button className="SaveAvatar" onClick={() => saveAvatar()}>
          Salvar Avatar
        </button>
      </div>
    </AvatarStyled>
  );
};

export const EditProfile = () => {
  const {
    user,
    openModlaEdit,
    setOpenModlaEdit,
    editUser,
    setModalDeleteUser,
    modalDeleteUser,
  } = useContext(HomeContext);

  const formSchema = yup.object().shape({
    fullName: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalEditProfile>
      <FormUpdat onSubmit={handleSubmit(editUser)}>
        <span
          className="closeModal"
          onClick={() => setOpenModlaEdit(!openModlaEdit)}
        >
          X
        </span>
        <div className="HeaderForm">
          <h2>Editar Perfil</h2>
        </div>
        <AvatarComponet />
        <div className="Inpults">
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            defaultValue={user.fullName}
          />
          <label htmlFor="fullName">Nome</label>
          <span className="error">{errors.fullName?.message}</span>
        </div>
        <div className="Inpults">
          <input
            type="text"
            id="email"
            {...register("email")}
            defaultValue={user.email}
          />
          <label htmlFor="email">Email</label>
          <span className="error">{errors.email?.message}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setOpenModlaEdit(!openModlaEdit);
            setModalDeleteUser(!modalDeleteUser);
          }}
        >
          Deletar Conta
        </button>
        <button className="buttonLogin" type="submit">
          Salvar alterações
        </button>
      </FormUpdat>
    </ModalEditProfile>
  );
};

export const DeleteUser = () => {
  const { setModalDeleteUser, modalDeleteUser, deleteUsers } =
    useContext(HomeContext);
  return (
    <ModalEditProfile>
      <div className="deleteContact">
        <h2>Tem certeza de que deseja excluir</h2>
        <div>
          <button className="buttonYes" onClick={() => deleteUsers()}>
            Sim
          </button>
          <button onClick={() => setModalDeleteUser(!modalDeleteUser)}>
            Não
          </button>
        </div>
      </div>
    </ModalEditProfile>
  );
};

export const DeletePost = () => {
  const { deletePost, ModalDeletePost, setModalDeletePost } =
    useContext(HomeContext);
  return (
    <ModalEditProfile>
      <div className="deleteContact">
        <h2>Tem certeza de que deseja excluir esse Post</h2>
        <div>
          <button className="buttonYes" onClick={() => deletePost()}>
            Sim
          </button>
          <button onClick={() => setModalDeletePost(!ModalDeletePost)}>
            Não
          </button>
        </div>
      </div>
    </ModalEditProfile>
  );
};

export const PostModal = () => {
  const {
    setModalPostOn,
    modalPostOn,
    createComments,
    setSavedComments,
    postsModalSave,
    setPostsModalSave,
  } = useContext(HomeContext);
  const avatar = JSON.parse(postsModalSave.user.avatar);
  const myConfig = genConfig(avatar);
  return (
    <ModalPost>
      <div className="modalPost">
        <span
          className="closeModal"
          onClick={() => setModalPostOn(!modalPostOn)}
        >
          X
        </span>
        <section className="posts">
          <div className="headerPost">
            <Avatar style={{ width: "50px", height: "50px" }} {...myConfig} />
            <span>{postsModalSave.user.fullName}</span>
          </div>
          <div className="postContent">
            <p>{postsModalSave.publication}</p>
            {postsModalSave.Img == null ? null : (
              <div className="imgPostsss">
                <img src={postsModalSave.Img} alt="" />
              </div>
            )}
          </div>
        </section>
        <section className="commentsContent">
          <ul className="commentsList">
            {postsModalSave.comments.length === 0 ? (
              <li>Essa publicao não tem comentários ainda</li>
            ) : (
              <>
                {postsModalSave.comments.map((comment, index) => {
                  const avatarComment = JSON.parse(comment.user.avatar);
                  const commentAvatar = genConfig(avatarComment);
                  return (
                    <li key={index}>
                      <div>
                        <Avatar
                          style={{ width: "50px", height: "50px" }}
                          {...commentAvatar}
                        />
                      <span>{comment.user.fullName}</span>
                      </div>
                      <p>{comment.content}</p>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
          <AiOutlineSend
            className="sendIcon"
            onClick={() => createComments(postsModalSave.id)}
          />
          <input
            type="text"
            onChange={(event) => setSavedComments(event.target.value)}
          />
        </section>
      </div>
    </ModalPost>
  );
};
