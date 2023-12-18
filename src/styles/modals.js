import styled from "styled-components";

export const ModalEditProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: rgba(18, 18, 20, 0.5);
  z-index: 99;
  .deleteContact {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    max-width: 80%;

    padding: 20px;
    h2 {
      color: #084972;
    }
    background-color: #ffffff;
    border-radius: 15px;
    gap: 10px;
    div {
      display: flex;
      gap: 5px;
      width: 100%;
      button {
        width: 100%;
        height: 50px;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        color: #ffffff;
        border: none;
        background-color: #fca104;
        border-radius: 8px;
        cursor: pointer;
      }
      .buttonYes{
        background-color: transparent;
        color: red;
        border: 2px solid red;
        transition: 1s;
      }
      .buttonYes:hover{
        background-color: red;
        color: white;
      }
    }
  }
`;

export const FormUpdat = styled.form`
  display: flex;
  width: 390px;
  max-height: 100%;
  max-width: 95%;
  margin: 0 auto;
  gap: 30px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  font-family: "Khula", sans-serif;
  position: relative;
  h2 {
    margin-top: 20px;
    color: #084972;
  }
  .closeModal {
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  .Inpults {
    display: flex;
    align-items: center;
    width: 90%;
    height: 70px;
    margin: 0 auto;
    position: relative;
    .error {
      position: absolute;
      color: #e60000;
      font-weight: 400;
      font-size: 0.75rem;
      left: 15px;
      bottom: -15px;
    }
    label {
      position: absolute;
      font-weight: 400;
      font-size: 1rem;
      font-family: "Inter", sans-serif;
      color: #999999;
      padding: 20px;
      top: -6px;
      font-size: 0.875rem;
    }

    :valid ~ label,
    :focus ~ label {
      top: -6px;
      font-size: 0.875rem;
      background-color: #ffffff;
      padding: 3px;
      left: 15px;
    }
    input {
      width: 100%;
      height: 60px;
      border: 2px solid #fca104;
      border-radius: 8px;
      font-weight: 400;
      font-size: 1rem;
      padding-left: 20px;
      background-color: #ffffff;
    }
    .inputError {
      border: 2px solid #e60000;
    }
  }
  button{
    width: 90%;
    height: 50px;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    color: #fca104;
    border: none;
    background-color: transparent;
    border: 2px solid #fca104;
    border-radius: 8px;
    cursor: pointer;
  }
  .buttonLogin {
    width: 90%;
    height: 50px;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    color: #ffffff;
    border: none;
    background-color: #fca104;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 50px;
    img{
      max-width: 100%;
    }
  }

  @media (min-width: 850px) {
    width: 800px;
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const ModalPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  z-index: 10;
  .modalPost {
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 650px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    .posts {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      .headerPost {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 10px;
        gap: 10px;
        img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, darkblue, darkorchid) border-box;
          border: 3px solid transparent;
          cursor: pointer;
          object-fit: cover;
        }
        span {
          font-weight: 700;
          font-size: 1rem;
          color: #7e5103;
        }
      }
      .postContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 350px;
        gap: 15px;
        padding: 15px;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          word-break: break-word;
        }
        .imgPostsss {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          border-radius: 10px;
          object-fit: cover;
          background-color: rgba(252, 161, 4, 0.1);
          overflow: hidden;
          img {
            max-width: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .commentsContent {
      display: flex;
      flex-direction: column;
      height: 200px;
      width: 100%;
      border-radius: 0px 0px 20px 20px;
      align-items: end;
      position: relative;
      .commentsList {
        list-style: none;
        display: flex;
        flex-direction: column;
        width: 95%;
        height: 170px;
        margin: 0 auto;
        display: flex;
        overflow-y: auto;
        gap: 15px;
        li {
          display: flex;
          gap: 5px;
          margin-top: 5px;
          align-items: center;
          width: 100%;
          flex-direction: column;
          div{
            display: flex;
            width: 100%;
            align-items: center;
            gap: 10px;
          }
          span {
            font-weight: 700;
            font-size: 1rem;
          }
          p {
            padding: 15px;
            width: 100%;
            background-color: #eeedf0;
            border-radius: 20px;
          }
        }
      }
      input {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 0px 0px 20px 20px;
        border-top: 2px solid #fca104;
        padding-left: 20px;
      }
      .sendIcon {
        position: absolute;
        bottom: 10px;
        right: 20px;
        cursor: pointer;
      }
    }
    .closeModal {
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px;
      font-size: 1.2rem;
      font-weight: 700;
      padding: 5px 10px;
      cursor: pointer;
      border: none;
      background-color: transparent;
    }
  }
  @media (min-width: 850px) {
    .modalPost {
      max-width: 1200px;
      flex-direction: row;
      .posts {
        width: 60%;
        height: 100%;
        border-right: 2px solid #fca104;
        .postContent {
          height: 100%;
          border-radius: 0px 0px 0px 20px;
        }
      }
      .imgPostsss {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 450px;
        border-radius: 10px;
        object-fit: cover;
        background-color: #ebe6f5;
        overflow: hidden;
        img {
        }
      }
      .commentsContent {
        width: 40%;
        height: 100%;
        .commentsList {
          margin-top: 30px;
          height: 100%;
        }
      }
      .closeModal {
        z-index: 11;
      }
    }
  }
`;