import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiAclsBlog } from "../services/api";

export const RegisterLoginContext = createContext({});

export const RegisterLoginProvider = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("aclsTokenUser");

  useEffect(()=>{
    if(token){
      navigate("/");
    }
  },[])

  const handleSubmitLogin = async (data) => {
    setLoading(true);
    const newData = {
      email: data.email.toLowerCase(),
      password: data.password 
    }
    try {
      const response = await apiAclsBlog.post("/login", newData);
      toast.success("Login feito com Sucesso", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.setItem("aclsTokenUser", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Email invalido ou senha invalida", {
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
      setLoading(false);
    }
  };

  const handleSubmitRegister = async (
    datas
  ) => {
    const newData = {
      fullName: datas.fullName,
      email: datas.email.toLowerCase(),
      password: datas.password 
    }
    try {
      setLoading(true);
      const response = await apiAclsBlog.post("/users", newData);
      toast.success("😁 Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const login = {
        email: datas.email,
        password: datas.password,
      };
      handleSubmitLogin(login);
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
      const erroEmail = "Email already exists";

      if (errorMessage === erroEmail) {
        toast.error("Email já esta Cadastrado", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      }

      if(errorMessage  !== erroEmail){
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
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterLoginContext.Provider
     value={{ loading, handleSubmitLogin,handleSubmitRegister}}>
      <Outlet />
    </RegisterLoginContext.Provider>
  );
};