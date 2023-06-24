import React from "react";
import { Paper, Button } from "@mui/material";

function Item({ item }) {
  return (
    <Paper sx={{ margin: "0px", boxShadow: "none" }}>
      <Button className="CheckButton" sx={{ padding: "0px" }}>
        <img src={item.image} alt={item.title} width="100%" />
      </Button>
    </Paper>
  );
}

export default Item;
