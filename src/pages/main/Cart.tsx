import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  toppings: string[];
  request: string;
  imageUrl: string;
}

const dummyCartItems: CartItem[] = [
  {
    id: 1,
    name: "Customizable Burger",
    price: 7.99,
    quantity: 2,
    toppings: ["Pork", "Cheese", "Lettuce"],
    request: "Extra crispy",
    imageUrl:
      "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
  },
  {
    id: 2,
    name: "Deluxe Pizza",
    price: 12.99,
    quantity: 1,
    toppings: ["Pepperoni", "Mushrooms", "Olives"],
    request: "No onions",
    imageUrl:
      "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
  },
  {
    id: 3,
    name: "Deluxe Pizza",
    price: 12.99,
    quantity: 1,
    toppings: ["Pepperoni", "Mushrooms", "Olives"],
    request: "No onions",
    imageUrl:
      "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
  },
  {
    id: 4,
    name: "Deluxe Pizza",
    price: 12.99,
    quantity: 1,
    toppings: ["Pepperoni", "Mushrooms", "Olives"],
    request: "No onions",
    imageUrl:
      "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
  },
  {
    id: 5,
    name: "Deluxe Pizza",
    price: 12.99,
    quantity: 1,
    toppings: ["Pepperoni", "Mushrooms", "Olives"],
    request: "No onions",
    imageUrl:
      "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
  },
];

const CartPage = () => {
  const theme = useTheme();
  const [cartItems, setCartItems] = useState<CartItem[]>(dummyCartItems);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Box pt={2} pb={8} maxWidth={600} marginInline="auto">
      <Card sx={{ mt: 1 }}>
        <CardContent>
          <div className="flex justify-between">
            <Typography variant="h6">Total Price</Typography>
            <Typography variant="h6" fontWeight={700}>
              {calculateTotalPrice().toFixed(2)} Ks
            </Typography>
          </div>

          <Button
            onClick={handleCheckout}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1 }}
          >
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
      <Divider />
      <div className="divide-y">
        {cartItems.map((item) => (
          <Box key={item.id} sx={{ py: 2, position: "relative" }}>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center" mr={2}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="size-20 rounded object-cover"
                />
                <Box ml={2}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.price} Ks
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Toppings: {item.toppings.join(", ")}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Special Request: {item.request}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  <FaMinus />
                </IconButton>
                <Typography variant="h6" mx={2}>
                  {item.quantity}
                </Typography>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <FaPlus />
                </IconButton>
              </Box>
            </Box>
            <IconButton
              size="small"
              color="error"
              onClick={() => handleRemoveItem(item.id)}
              sx={{
                position: "absolute",
                bottom: "8px",
                right: "0px",
              }}
            >
              <FaTrash className="text-sm" />
            </IconButton>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default CartPage;
