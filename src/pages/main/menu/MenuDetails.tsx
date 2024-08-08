import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Card,
  CardContent,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import BackButton from "../../../components/shared/BackButton";
import useSelectedFood from "../../../store/useSelectedFood";

interface Topping {
  name: string;
  price: number;
  id: string; // Add id to the Topping interface
}

const MenuDetails = () => {
  const selectedFood = useSelectedFood((state) => state.selectedFood);
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [selectedMeat, setSelectedMeat] = useState<Topping | null>(null); // Update type
  const [request, setRequest] = useState("");
  const [isTakeOut, setIsTakeOut] = useState(false); // New state for takeout option

  useEffect(() => {
    console.log(selectedFood.toppings[0].is_radio);
  }, [selectedFood]);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleToppingChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    topping: Topping
  ) => {
    if (event.target.checked) {
      setSelectedToppings((prev) => [...prev, topping]);
    } else {
      setSelectedToppings((prev) =>
        prev.filter((t) => t.name !== topping.name)
      );
    }
  };

  const handleMeatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value;
    const selected = selectedFood.toppings[0].items.find((el) => el.id === id);
    setSelectedMeat(selected ? selected : null);
  };

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("access_token"); // Retrieve the token from localStorage
    if (!userId || !selectedFood || !token) {
      alert("User ID, selected food, or token is missing");
      return;
    }

    const totalToppingPrice = selectedToppings.reduce(
      (acc, topping) => acc + topping.price,
      0
    );
    let finalPrice = (selectedFood.price + totalToppingPrice) * quantity;
    if (selectedFood.toppings[0].is_radio && selectedMeat) {
      finalPrice = (selectedFood.price + selectedMeat.add_on_price) * quantity;
    }

    const toppingItemIds = selectedToppings.map((t) => t.id);
    if (selectedMeat) {
      toppingItemIds.push(selectedMeat.id);
    }

    const payload = {
      userId,
      foodId: selectedFood.id,
      quantity,
      remark: request,
      isTakeOut,
      toppingItemIds,
    };

    try {
      const response = await fetch(
        "https://tasty-test-nestjs.onrender.com/api/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Add the Bearer token here
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert(`Order placed successfully! Order ID: ${data.id}`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart");
    }
  };

  return (
    <Box pt={2} pb={8} maxWidth={420} marginInline="auto">
      <BackButton path="/main" label="Menus" className="-translate-x-2" />
      <Card sx={{ marginTop: "4px", bgcolor: theme.palette.primary.main }}>
        <CardContent className="flex items-center gap-4">
          <img
            src={selectedFood?.image}
            alt={selectedFood?.name}
            width="100%"
            className="w-full aspect-square object-cover max-w-24"
            height="auto"
          />
          <Box>
            <Typography variant="h4" color="white" sx={{ fontSize: "1.25rem" }}>
              {selectedFood?.name || "Food Name"}
            </Typography>

            <Typography variant="h5" color="white" fontWeight={700}>
              {selectedFood?.price?.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Typography mt={2} variant="body1">
        {selectedFood?.description}
      </Typography>
      <FormControl component="fieldset" fullWidth margin="normal">
        {selectedFood?.toppings && (
          <Box>
            <Typography fontWeight={700}>
              {selectedFood.toppings.label}
            </Typography>
            {selectedFood.toppings[0].is_radio ? (
              <RadioGroup value={selectedMeat?.id || ""} onChange={handleMeatChange}>
                {selectedFood.toppings[0].items?.map((item) => (
                  <div className="w-full flex justify-between" key={item.id}>
                    <FormControlLabel
                      value={item.id}
                      control={<Radio />}
                      sx={{ fontSize: "0.8rem" }}
                      label={item.name}
                      checked={selectedMeat?.id === item.id}
                    />
                    {item.add_on_price !== 0 && <p>{item.add_on_price} Ks</p>}
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <FormGroup>
                {selectedFood.toppings[0].items?.map((item) => (
                  <div className="w-full flex justify-between" key={item.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedToppings.some(
                            (t) => t.name === item.name
                          )}
                          onChange={(e) => handleToppingChange(e, item)}
                          name={item.name}
                        />
                      }
                      label={item.name}
                    />
                    {item.add_on_price !== 0 && <p>{item.add_on_price} Ks</p>}
                  </div>
                ))}
              </FormGroup>
            )}
          </Box>
        )}
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={isTakeOut}
            onChange={(e) => setIsTakeOut(e.target.checked)}
            name="isTakeOut"
          />
        }
        label="Take Out"
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={600}>Quantity</Typography>
        <Box display="flex" alignItems="center">
          <IconButton
            size="small"
            color="primary"
            onClick={() => handleQuantityChange(-1)}
          >
            <FaMinus />
          </IconButton>
          <Typography variant="h6" mx={2}>
            {quantity}
          </Typography>
          <IconButton
            size="small"
            color="primary"
            onClick={() => handleQuantityChange(1)}
          >
            <FaPlus />
          </IconButton>
        </Box>
      </Box>
      <TextField
        label="Special Request"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddToCart}
        sx={{ mt: 2 }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default MenuDetails;
