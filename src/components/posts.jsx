import { useContext } from "react";
import { HomeContext } from "../contexts/contexHome";
import { PostsStyled } from "../styles/post";
import Avatar, { genConfig } from "react-nice-avatar";
import { RiDeleteBin5Line } from "react-icons/ri";

export const Posts = () => {
  const {
    PostsSave,
    setModalPostOn,
    modalPostOn,
    setPostsModalSave,
    user,
    setIdPost,
    ModalDeletePost, setModalDeletePost
  } = useContext(HomeContext);
  return (
    <PostsStyled>
      {PostsSave.length > 0 ? (
        <ul>
          {PostsSave.map((posts) => {
            const avatar = JSON.parse(posts.user.avatar);
            const myConfig = genConfig(avatar);

            return (
              <li
                onClick={() => {
                  setModalPostOn(!modalPostOn);
                  setPostsModalSave(posts);
                }}
              >
                <div
                  className="postHeadear"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Avatar
                    style={{ width: "60px", height: "60px" }}
                    {...myConfig}
                  />
                  <span>{posts.user.fullName}</span>
                  {user.id === posts.user.id ? (
                    <RiDeleteBin5Line
                      className="deletePost"
                      onClick={() => { setIdPost(posts.id)
                        setModalDeletePost(!ModalDeletePost)
                      }}
                    />
                  ) : null}
                </div>
                <div className="mainPost">
                  <h3>{posts.title}</h3>
                  <p>{posts.publication}</p>
                </div>
                <div className="imgPosts">
                  {posts.Img == null ? null : <img src={posts.Img} alt="" />}
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </PostsStyled>
  );
};
