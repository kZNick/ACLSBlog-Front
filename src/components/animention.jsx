import loadin from "../assets/loadin.gif"
import { AnimentionStyled, LoadingAnimetions } from "../styles/animetion";

export const AnimetionBackgraud = () => {
  return (
    <AnimentionStyled>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </AnimentionStyled>
  );
};

export const Loading = () =>{
  return(
    <LoadingAnimetions>
      <img src={loadin} alt="" />
      <h1>Loading...</h1>
    </LoadingAnimetions>
  )
}
