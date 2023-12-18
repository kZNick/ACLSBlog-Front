import { Route, Routes } from "react-router-dom";
import { HomeProvider } from "../contexts/contexHome";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { RegisterLoginProvider } from "../contexts/contexLoginRegister";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<HomeProvider />}>
        <Route path="/" element={<Home />} />:
      </Route>
      <Route element={<RegisterLoginProvider/>}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    </Routes>
  );
};