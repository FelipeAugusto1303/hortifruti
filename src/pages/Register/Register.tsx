import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
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
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseSuccess = () => setOpenSuccess(false);
  const handleCloseError = () => setOpenError(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      handleCreateUser(values.email, values.password)
        .then(() => {
          createUser({ name: values.name, email: values.email }).then(() => {
            setOpenSuccess(true);

            setTimeout(() => {
              navigate("/hortifruti/login");
            }, 3000);
          });
        })
        .catch((err) => {
          setOpenError(true);
          throw Error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box component="img" src="./logo.png" alt="logo-image" width="200px" />
      <Typography variant="subtitle1">
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
          variant="contained"
          sx={{ marginTop: "20px" }}
        >
          Cadastrar{" "}
          {isLoading && (
            <CircularProgress
              size={20}
              sx={{ marginLeft: "10px", color: "#fff" }}
            />
          )}
        </Button>
        <Button
          onClick={() => navigate("/hortifruti/login")}
          fullWidth
          variant="text"
          sx={{ marginTop: "20px" }}
        >
          Voltar pro login
        </Button>
      </form>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Cadastro feito com êxito !
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          O Email já existe !
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
