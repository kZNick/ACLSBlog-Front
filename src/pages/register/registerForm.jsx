import { WavyLink } from "react-wavy-transitions";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useContext } from "react";
import { FormRegister } from "../../styles/register";
import { RegisterLoginContext } from "../../contexts/contexLoginRegister";
import { yupResolver } from "@hookform/resolvers/yup";

export const RegisterForm = () => {
  const { handleSubmitRegister, loading } = useContext(RegisterLoginContext);

  const formSchema = yup.object().shape({
    fullName: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email(),
    password: yup.string().required("Senha Obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Senha Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormRegister onSubmit={handleSubmit(handleSubmitRegister)}>
      <div className="HeaderForm">
        <h2>Cadastro</h2>
        <WavyLink
          color="#ffffff"
          to="/Login"
          duration={1500}
          className="comeBack"
        >
          Retornar para o login
        </WavyLink>
      </div>
      <div className="Inpults">
        <label htmlFor="fullName">Nome completo</label>
        <input
          type="text"
          id="fullName"
          {...register("fullName")}
          className={errors.fullName && "inputError"}
        />
        <span className="error">{errors.fullName?.message}</span>
      </div>

      <div className="Inpults">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={errors.email && "inputError"}
        />
        <span className="error">{errors.email?.message}</span>
      </div>

      <div className="Inpults">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className={errors.password && "inputError"}
        />
        <span className="error">{errors.password?.message}</span>
      </div>

      <div className="Inpults">
        <label htmlFor="confirmPassword">Confirme sua senha</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          className={errors.confirmPassword && "inputError"}
        />
        <span className="error">{errors.confirmPassword?.message}</span>
      </div>

      <button
        type="submit"
        className="buttonRegister"
        disabled={loading ? true : false}
      >
        {loading ? "Carregando" : "Criar Conta"}
      </button>
    </FormRegister>
  );
};
