import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #fca104;
  padding: 15px 80px;
  padding-left: 8%;
  padding-right: 8%;
  justify-content: space-between;
  img{
    width: 60px;
    height: 50px;
    cursor: pointer;
  }
  .buttonExit {
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    color: white;
    transition: 0.5s;
  }
  .containerRight{
    display: flex;
    align-items: center;
    gap: 25px;
    .avatarDiv{
      cursor: pointer;
      
    }
  }

`;
