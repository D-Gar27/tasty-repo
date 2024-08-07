import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import useSelectedFood from "../../store/useSelectedFood";

interface MenuItemProps {
  data: {
    name: string;
    price: number;
    image: string;
    [key: string]: any;
  };
}

export default function MenuItem({ data }: MenuItemProps) {
  const { updateSelectedFood } = useSelectedFood();
  const navigate = useNavigate();

  return (
    <Card
      component="button"
      onClick={() => {
        updateSelectedFood(data);
        navigate("/main/menu-details");
      }}
      className="relative mx-auto sm:w-52 sm:h-56 w-48 h-52"
    >
      <CardMedia
        component="img"
        alt="Food Image"
        image={data.image}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
      <CardContent className="absolute z-20 -bottom-4">
        <Typography
          gutterBottom
          component="h5"
          color="white"
          fontSize="1.25rem"
          fontWeight="700"
        >
          {data.name}
        </Typography>
        <Typography variant="body2" color="white">
          {data.price}$
        </Typography>
      </CardContent>
    </Card>
  );
}
