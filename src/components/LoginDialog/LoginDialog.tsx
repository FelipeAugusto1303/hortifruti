import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type LoginDialogProps = {
  open: boolean;
  handleClose: () => void;
};

const LoginDialog: React.FC<LoginDialogProps> = ({ open, handleClose }) => {
  const navigate = useNavigate();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Realize o login na plataforma
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="body2">
            Para continuar com a operação desejada, por favor realize o login na
            plataforma Hortifruti.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/hortifruti/login")}
          sx={{
            borderRadius: "8px",
          }}
        >
          Continuar com o Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
