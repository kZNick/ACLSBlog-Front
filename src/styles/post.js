import styled from "styled-components";

export const PostPublicationStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 80px;
  gap: 15px;
  h3 {
    font-size: 30px;
    background: #fca104;
    background: linear-gradient(to top, #fca104 29%, #ffe857 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .headerPost {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  .containerInpults {
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
        border: 2px solid #fca104;
        font-size: 1rem;
        padding-left: 10px;
        color: #8b5d0d;
      }
      label {
        font-size: 1rem;
        color: #fca104;
        margin-left: 5px;
        position: absolute;
        top: -10px;
        left: 10px;
        background-color: white;
        padding: 0px 5px;
        border-radius: 20px;
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
    .texAreaDiv {
      width: 100%;
      margin-top: 15px;
      position: relative;
      .postTextarea {
        border-radius: 15px;
        border: 2px solid #fca104;
        padding: 20px;
        width: 100%;
        margin: 0 auto;
        width: 100%;
        height: 200px;
        font-size: 1.1rem;
        font-weight: 500;
        resize: none;
        color: #8b5d0d;
        font-size: 18px;
        font-weight: 600;
      }
      .urlPost {
        position: absolute;
        bottom: 10px;
        left: 15px;
        border-radius: 15px;
        border: 2px solid #fca104;
        width: 80%;
        padding: 5px 15px;
      }
      .imgPost {
        position: absolute;
        bottom: 15px;
        right: 15px;
        font-size: 20px;
        color: #8b5d0d;
        cursor: pointer;
      }
    }
  }
  .divButton {
    display: flex;
    width: 100%;
    justify-content: end;
    button {
      padding: 10px 15px;
      border-radius: 15px;
      border: none;
      background-color: #fca104;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const PostsStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 25px;
  margin-bottom: 50px;
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 30px;
    li {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 30px;
      padding: 15px;
      border-radius: 20px;
      border: 2px solid rgba(252, 161, 4, 0.5);
      .postHeadear {
        display: flex;
        align-items: center;
        gap: 25px;
        position: relative;
        span {
          font-size: 18px;
          font-weight: 600;
        }
        .deletePost{
          position: absolute;
          right: 20px;
          font-size: 20px;
          color: #7e5103;
          cursor: pointer;
          :hover{
            background-color: aqua;
          }
        }
        .deletePost:hover{
            color: red;
          }
      }
      .mainPost {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 25px;
        h3 {
        }
      }
      .imgPosts {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(252, 161, 4, 0.1);
        border-radius: 10px;
        object-fit: cover;
        overflow: hidden;
        img {
          max-width: 100%;
        }
      }
    }
  }
`;
