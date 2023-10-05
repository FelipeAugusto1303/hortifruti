import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ItemCard from "../../components/ItemCard/ItemCard";
import { getAllFruits } from "../../services/firebaseService";
import { onSnapshot } from "firebase/firestore";

const StorePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const q = getAllFruits();
    onSnapshot(q, (querySnapshot) => {
      setItems(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
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
          return <ItemCard key={item.id} item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default StorePage;
