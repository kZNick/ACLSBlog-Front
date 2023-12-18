import { useContext } from "react";
import { HomeContext } from "../../contexts/contexHome";
import { PostPublicationStyled } from "../../styles/post";
import Avatar, { genConfig } from "react-nice-avatar";
import { BiImages } from "react-icons/bi";

export const PostPublication = () => {
  const {
    userAvatar,
    user,
    title,
    setTitle,
    imgOn,
    setImgOn,
    text,
    setText,
    urlImgSave,
    setUrlImgSave,
    createPublication,
  } = useContext(HomeContext);
  const myConfig = genConfig(userAvatar);
  return (
    <PostPublicationStyled>
      <div className="headerPost">
        <Avatar style={{ width: "80px", height: "80px" }} {...myConfig} />
        <h3>{user.fullName}</h3>
      </div>
      <div className="containerInpults">
        <div className="Inpults">
          <label htmlFor="fullName">Titulo da Publicação</label>
          <input
            type="text"
            id="fullName"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="texAreaDiv">
          <textarea
            className="postTextarea"
            placeholder="Faça uma Publicação..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
          {imgOn ? (
            <input
              type="text"
              className="urlPost"
              placeholder="Url da imagem"
              value={urlImgSave}
              onChange={(event) => setUrlImgSave(event.target.value)}
            />
          ) : null}
          <BiImages
            className="imgPost"
            onClick={() => {
              setImgOn(!imgOn);
              setUrlImgSave("");
            }}
          />
        </div>
      </div>
      <div className="divButton">
        <button
          onClick={() => {
            createPublication();
          }}
        >
          Postar
        </button>
      </div>
    </PostPublicationStyled>
  );
};
