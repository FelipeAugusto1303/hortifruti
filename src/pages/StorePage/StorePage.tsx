import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ItemCard from "../../components/ItemCard/ItemCard";

const StorePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const items = [1, 2, 3, 4, 5];
  return (
    <Box>
      <Header />
      <TextField
        placeholder="Procure um item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon sx={{ marginRight: "10px" }} />,
        }}
        sx={{ width: "100%" }}
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {items.map((item) => {
          return <ItemCard />;
        })}
      </Box>
    </Box>
  );
};

export default StorePage;
