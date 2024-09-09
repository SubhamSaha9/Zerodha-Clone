import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";

export default function CardComponent({ cardData }) {
  const handleShare = () => {
    copy(cardData.link);
    toast.success("Link copied to clipboard");
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={cardData.name}
        height="140"
        image={cardData.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {cardData.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cardData.desc.split(" ").splice(0, 18).join(" ")}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleShare}>
          Share
        </Button>
        <Button size="small" variant="outlined">
          <NavLink
            to={cardData.link}
            target="0"
            style={{ textDecoration: "none" }}
          >
            Visit page
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
}
