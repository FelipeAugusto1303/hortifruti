import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";
import { handleSignIn } from "../../services/firebaseService";

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
  const [isLoading, setIsLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleCloseSuccess = () => setOpenSuccess(false);
  const handleCloseError = () => setOpenError(false);

  useEffect(() => {
    if (userData !== null && userData!.length > 0) {
      setTimeout(() => navigate("/hortifruti/"), 3000);
    }
  }, [userData]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      handleSignIn(values.email, values.password)
        .then((response) => {
          signIn(response.user.email);
          setOpenSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setOpenError(true);
        })
        .finally(() => setIsLoading(false));
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
          Entrar{" "}
          {isLoading && (
            <CircularProgress
              size={20}
              sx={{ marginLeft: "10px", color: "#fff" }}
            />
          )}
        </Button>
        <Button
          fullWidth
          variant="text"
          sx={{ marginTop: "10px" }}
          onClick={() => navigate("/hortifruti/register")}
        >
          Cadastre-se
        </Button>
        <Button
          fullWidth
          variant="text"
          sx={{ marginTop: "10px" }}
          onClick={() => navigate("/hortifruti/")}
        >
          Voltar para a tela inicial
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
          Login feito com êxito !
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
          Email/Senha invalidos !
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
