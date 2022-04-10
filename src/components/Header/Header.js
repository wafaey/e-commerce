import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./Header.css";

function Header({ cartProducts }) {
  return (
    <div className="Header">
      <h2>BEJAMAS_</h2>
      <Badge badgeContent={cartProducts.length} color="secondary">
        <ShoppingCartOutlinedIcon
          fontSize="large"
          style={{ cursor: "pointer" }}
        />
      </Badge>
    </div>
  );
}

export default Header;
