import React from "react";
import { Paper, Button } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <Button className="CheckButton">
        <img src={item.image} alt={item.title} width="100%" />
      </Button>
    </Paper>
  );
}

export default Item;