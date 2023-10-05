import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemButton from "../ItemButton/ItemButton";
import { useAppContext } from "../../context/appContext";

type ItemCardProps = {
  item: any;
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { cart, updateItemToCart } = useAppContext();
  const [itemIndex, setItemIndex] = useState<number | null>(null);

  useEffect(() => {
    if (cart !== null) {
      setItemIndex(cart.items.findIndex((element) => element.id === item.id));
    }
  }, [cart]);

  const handleUpdate = (item: any, action: "INCREMENT" | "DECREMENT") => {
    updateItemToCart(item, action);
  };

  return (
    <Box
      data-testid="itemcard-container"
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px",
        height: "300px",
        borderRadius: "20px",
        border: "1px solid #ccc",
      }}
    >
      <Box
        component="img"
        alt="item-image"
        src={item.data.image}
        width="200px"
        sx={{ borderRadius: "20px" }}
      />
      <Typography variant="body2">{item.data.name}</Typography>
      <Typography variant="body1">R$ {item.data.price.toFixed(2)}</Typography>
      <Divider />
      <ItemButton
        handleUpdateItem={handleUpdate}
        item={item}
        cartItem={itemIndex !== null ? cart?.items[itemIndex] : null}
      />
    </Box>
  );
};

export default ItemCard;
