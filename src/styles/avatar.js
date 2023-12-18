import styled from "styled-components";

export const AvatarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: rgba(18, 18, 20, 0.3);
  z-index: 2;
  .conteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 25px;
    padding: 15px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    .buttons {
      display: flex;
      gap: 5px;
      width: 100%;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      flex-wrap: wrap;
      button {
        padding: 5px;
        border: 2px solid #084972;
        background-color: transparent;
        color: #084972;
        border-radius: 10px;
        cursor: pointer;
      }
    }
    .SaveAvatar {
      padding: 10px;
      background-color: white;
      border-radius: 10px;
      color: #084972;
      font-weight: 700;
      border: 2px solid #084972;
      cursor: pointer;
    }
    .avatarTex {
      display: flex;
      width: 80%;
      align-items: center;
      justify-content: center;
      margin-top: 25px;
      margin-bottom: 5px;
      h2 {
        font-size: 1.2rem;
        color: #084972;
      }
    }
  }
`;

export const AvatarEdit = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-left: 15px;
  .buttons {
    display: flex;
    width: 100%;
    gap: 5px;
    align-items:center ;
    flex-wrap: wrap;
    button{
      padding: 15px;
      width: fit-content;
    }
  }
`;
