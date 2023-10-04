import React, { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, userData } = useAppContext();

  useEffect(() => {
    if (userData !== null && userData!.length > 0) {
      navigate("/");
    }
  }, [userData]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      signIn(values.email, values.password);
    },
  });
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box component="img" src="./logo.png" alt="logo-image" width="200px" />
      <Typography variant="subtitle1" sx={{ color: "#ccc" }}>
        Digite seu email e senha para utilizar a plataforma da Hortifruti
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          autoComplete="email"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          label="Senha"
          type="password"
          variant="outlined"
          margin="normal"
          autoComplete="current-password"
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          type="submit"
          fullWidth
          sx={{ backgroundColor: "#ea1d2c", marginTop: "20px", color: "#fff" }}
        >
          Entrar
        </Button>
        <Button
          fullWidth
          sx={{ color: "#ea1d2c", marginTop: "10px" }}
          onClick={() => navigate("/register")}
        >
          Cadastre-se
        </Button>
        <Button
          fullWidth
          sx={{ color: "#ea1d2c", marginTop: "10px" }}
          onClick={() => navigate("/")}
        >
          Voltar para a tela inicial
        </Button>
      </form>
    </Box>
  );
};

export default Login;
