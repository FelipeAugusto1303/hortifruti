import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ItemCard from "../../components/ItemCard/ItemCard";
import { getAllFruits } from "../../services/firebaseService";
import { onSnapshot } from "firebase/firestore";
import { Item } from "../../common/model";
import { StyledItemsContainer } from "./StorePage.style";

const StorePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<Item[] | []>([]);

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
      <StyledItemsContainer>
        {items.length > 0
          ? items
              .filter((item) =>
                item.data.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => {
                return <ItemCard key={item.id} item={item} />;
              })
          : null}
      </StyledItemsContainer>
    </Box>
  );
};

export default StorePage;
