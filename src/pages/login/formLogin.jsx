import React from 'react';
import { LoginForm } from "../../styles/login";
import logoOrage from "../../assets/logoOrage.png";
import { WavyLink } from "react-wavy-transitions";
import { useContext } from "react";
import { RegisterLoginContext } from "../../contexts/contexLoginRegister";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

export const FormLogin = () => {
  const { handleSubmitLogin, loading } = useContext(RegisterLoginContext);

  const formSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Senha obrigatória'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <LoginForm onSubmit={handleSubmit(handleSubmitLogin)}>
      <h2>Login</h2>
      <img src={logoOrage} alt="" className="logoForm" />
      <div className="Inpults">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" required={true} {...register("email")} />
      </div>
      <div className="Inpults">
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" required={true} {...register("password")} />
      </div>
      <div className="buttons">
        <WavyLink
          className="register"
          to="/Register"
          direction="up"
          duration={1500}
          color="#fca104"
        >Cadastrar</WavyLink>
        <button className="buttonLogin" type="submit" disabled={loading ? true : false}>{loading ? "Carregando" : "Entrar"}</button>
      </div>
    </LoginForm>
  );
};
