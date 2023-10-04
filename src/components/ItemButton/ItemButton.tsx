import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";

const ItemButton: React.FC = () => {
  const [teste, setTest] = useState(0);

  const { count, increment, decrement } = useAppContext();

  const handleModifyItem = (action: "ADD" | "SUB") => {
    switch (action) {
      case "ADD":
        setTest((prev) => prev + 1);
        break;
      case "SUB":
        if (teste >= 0) {
          setTest((prev) => prev - 1);
        }
    }
  };
  return (
    <>
      {count === 0 ? (
        <Button
          data-testid="add-item-button"
          sx={{
            backgroundColor: "#ea1d2c",
            color: "#fff",
            width: "70%",
            marginTop: "10px",
          }}
          onClick={increment}
        >
          Adicionar Item
        </Button>
      ) : (
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
            border: "1px solid #ccc",
            borderRadius: "30px",
            width: "95%",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#ea1d2c",
              color: "#fff",
              fontSize: "20px",
              height: "40px",
              borderRadius: "30px 0px 0px 30px",
            }}
            onClick={increment}
          >
            +
          </Button>
          <Typography variant="body2">{count}</Typography>
          <Button
            sx={{
              backgroundColor: "#ea1d2c",
              color: "#fff",
              fontSize: "20px",
              height: "40px",
              borderRadius: "0px 30px 30px 0px",
            }}
            onClick={decrement}
          >
            -
          </Button>
        </Box>
      )}
    </>
  );
};

export default ItemButton;
