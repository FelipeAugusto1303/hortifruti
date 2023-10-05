import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createUser, handleCreateUser } from "../../services/firebaseService";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string().required("O nome é obrgatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

const Register: React.FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Aqui você pode enviar os dados de login para o servidor ou executar a lógica desejada
      handleCreateUser(values.email, values.password)
        .then((response) => {
          createUser({ name: values.name, email: values.email }).then(() =>
            navigate("/hortifruti/login")
          );
        })
        .catch((err) => console.log(err));
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
          id="name"
          label="Nome Completo"
          type="name"
          variant="outlined"
          margin="normal"
          autoComplete="name"
          {...formik.getFieldProps("name")}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
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
          Cadastrar
        </Button>
        <Button
          onClick={() => navigate("/hortifruti/login")}
          fullWidth
          sx={{ color: "#ea1d2c", marginTop: "20px" }}
        >
          Voltar pro login
        </Button>
      </form>
    </Box>
  );
};

export default Register;
