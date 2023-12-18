import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { apiAclsBlog } from "../services/api";
import { toast } from "react-toastify";

export const HomeContext = createContext({});

export const HomeProvider = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [modalAvatar, setModalAvatar] = useState(false);
  const [openModlaEdit, setOpenModlaEdit] = useState(false);
  const [modalDeleteUser, setModalDeleteUser] = useState(false);
  const [PostsSave, setPostsSave] = useState({});
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imgOn, setImgOn] = useState(false);
  const [urlImgSave, setUrlImgSave] = useState("");
  const [modalPostOn, setModalPostOn] = useState(false);
  const [postsModalSave, setPostsModalSave] = useState({});
  const [ModalDeletePost, setModalDeletePost] = useState(false);
  const [idPost, setIdPost] = useState(0);
  const [savedComments, setSavedComments] = useState("");

  const [configAvatar, setConfigAvatar] = useState({
    sex: "man",
    faceColor: "#AC6651",
    earSize: "big",
    eyeStyle: "smile",
    noseStyle: "long",
    mouthStyle: "smile",
    shirtStyle: "hoody",
    glassesStyle: "round",
    hairColor: "#000000",
    hairStyle: "thick",
    hatStyle: "none",
    hatColor: "#1b1f4b",
    eyeBrowStyle: "up",
    shirtColor: "#0d1a1c",
    bgColor: "linear-gradient(45deg,  #fca104 0%, #ffe857 100%)",
  });
  const [userAvatar, setUserAvatar] = useState({
    sex: "man",
    faceColor: "#AC6651",
    earSize: "big",
    eyeStyle: "smile",
    noseStyle: "long",
    mouthStyle: "smile",
    shirtStyle: "hoody",
    glassesStyle: "round",
    hairColor: "#000000",
    hairStyle: "thick",
    hatStyle: "none",
    hatColor: "#1b1f4b",
    eyeBrowStyle: "up",
    shirtColor: "#0d1a1c",
    bgColor: "linear-gradient(45deg, #fca104 0%, #ffe857 100%)",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("aclsTokenUser");
  const headerApi = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const userApi = async () => {
    try {
      setLoading(true);
      const api = await apiAclsBlog.get("/users", headerApi);
      setUser(api.data);
      setModalAvatar(true);
      if (api.data.avatar !== null) {
        setModalAvatar(false);
        const avatar = JSON.parse(api.data.avatar);
        setUserAvatar(avatar);
        setConfigAvatar(avatar);
      }
    } catch (error) {
      console.log(error);
      toast.warn("🤐Sessão expirada", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.removeItem("ContactsTokenUser");
      navigate("/login");
      localStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  const postsApi = async () => {
    try {
      setLoading(true);
      const api = await apiAclsBlog.get("/post", headerApi);
      const arrayOriginal = api.data;
      const arrayInverted = [...arrayOriginal].reverse();
      setPostsSave(arrayInverted);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      navigate("/login");
    }

    if (token) {
      userApi();
      postsApi();
    }
  }, []);

  const saveAvatar = async () => {
    const avatarJson = JSON.stringify(configAvatar);
    const avatrData = {
      avatar: avatarJson,
    };
    try {
      setLoading(true);
      const requestResult = await apiAclsBlog.patch(
        `/users`,
        avatrData,
        headerApi
      );
      setUser(requestResult.data);
      const avatar = JSON.parse(requestResult.data.avatar);
      setUserAvatar(avatar);
      toast.success("Avatar salvo", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast.error("😅Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setModalAvatar(false);
      setLoading(false);
    }
  };

  const editUser = async (datas) => {
    const avatarJson = JSON.stringify(configAvatar);
    datas.avatar = avatarJson;
    try {
      setLoading(true);
      const requestResult = await apiAclsBlog.patch(`/users`, datas, headerApi);
      setUser(requestResult.data);
      const avatar = JSON.parse(requestResult.data.avatar);
      setUserAvatar(avatar);
      toast.success("Alterações salvas com sucesso", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.data.message;
      const erroPhone = "telefone already exists";
      const erroEmail = "Email already exists";

      if (errorMessage === erroEmail) {
        toast.error("Email já esta Cadastrado", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      if (errorMessage !== erroEmail && errorMessage !== erroPhone) {
        toast.error("😅Ops! Algo deu errado", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } finally {
      setOpenModlaEdit(!openModlaEdit);
      setLoading(false);
    }
  };

  const deleteUsers = async () => {
    try {
      setLoading(true);
      const requestResult = await apiAclsBlog.delete(`/users`, headerApi);
      toast.success("Conta deletado Com sucesso", {
        position: "top-right",
      });
      localStorage.removeItem("ContactsTokenUser");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
      toast.error("😅Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setModalDeleteUser(!modalDeleteUser);
      setLoading(false);
    }
  };

  const createPublication = async () => {
    const dataObj = {
      title: title,
      publication: text,
    };
    if (urlImgSave !== "") {
      dataObj.Img = urlImgSave;
    }
    console.log(dataObj);
    try {
      setLoading(true);
      const requestResult = await apiAclsBlog.post(`/post`, dataObj, headerApi);
      console.log(requestResult);
      postsApi();
      toast.success("Post publicado com sucesso!", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast.error("😅Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setText("");
      setTitle("");
      setUrlImgSave("");
      setLoading(false);
    }
  };

  const deletePost = async () => {
    try {
      setLoading(true);
      const requestResult = await apiAclsBlog.delete(
        `/post/${idPost}`,
        headerApi
      );
      postsApi();
      toast.success("Post foi deletado Com sucesso", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast.error("😅Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setModalDeletePost(!ModalDeletePost);
      setLoading(false);
    }
  };

  const createComments = async (idPost) => {
    try {
      setLoading(true);
      if (savedComments === "") {
        throw new Error("Digite algo para comentar");
      }
      const comementsData = {
        content: savedComments,
      };
      console.log(comementsData);
      const results = await apiAclsBlog.post(
        `/comment/${idPost}`,
        comementsData,
        headerApi
      );
      toast.success("Comentário publicado com sucesso!", {
        position: "top-right",
      });
      setSavedComments("");
      setModalPostOn(!modalPostOn);
      postsApi();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteComments = async (idComment) => {
    console.log(idComment)
    try {
      setLoading(true);
      const requestResult = await apiAclsBlog.delete(
        `/comment/${idComment}`,
        headerApi
      );
      console.log(requestResult)
      postsApi();
      toast.success("Comentário foi deletado Com sucesso", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast.error("😅Ops! Algo deu errado", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setModalPostOn(!modalPostOn)
      setLoading(false);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        loading,
        setLoading,
        configAvatar,
        setConfigAvatar,
        modalAvatar,
        setModalAvatar,
        user,
        userAvatar,
        setUserAvatar,
        saveAvatar,
        openModlaEdit,
        setOpenModlaEdit,
        modalDeleteUser,
        setModalDeleteUser,
        editUser,
        deleteUsers,
        PostsSave,
        title,
        setTitle,
        imgOn,
        setImgOn,
        text,
        setText,
        urlImgSave,
        setUrlImgSave,
        createPublication,
        postsModalSave,
        setPostsModalSave,
        modalPostOn,
        setModalPostOn,
        deletePost,
        idPost,
        setIdPost,
        ModalDeletePost,
        setModalDeletePost,
        savedComments,
        setSavedComments,
        createComments,
        deleteComments
      }}
    >
      <Outlet />
    </HomeContext.Provider>
  );
};
