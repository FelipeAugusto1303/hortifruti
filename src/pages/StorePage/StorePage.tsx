import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StorePage: React.FC = () => {
  const [search, setSearch] = useState("");
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
    </Box>
  );
};

export default StorePage;
