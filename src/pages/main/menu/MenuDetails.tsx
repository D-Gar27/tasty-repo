import React, { useState } from "react";
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

interface Topping {
  name: string;
  price: number;
}

const sampleMenuItem = {
  name: "Customizable Burger",
  description: "Build your own burger with a variety of toppings and extras.",
  price: 7.99,
  imageUrl: "path/to/your/image.jpg", // Add the path to your image here
  toppings: {
    label: "Choose Meat",
    type: "single", // or "multi"
    items: [
      { name: "Pork", price: 0 },
      { name: "Chicken", price: 0 },
      { name: "Beef", price: 0 },
    ],
  },
};

const MenuDetails = () => {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [selectedMeat, setSelectedMeat] = useState<string>("");
  const [request, setRequest] = useState("");

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
    setSelectedMeat(event.target.value);
  };

  const handleAddToCart = () => {
    const totalToppingPrice = selectedToppings.reduce(
      (acc, topping) => acc + topping.price,
      0
    );
    const finalPrice = (sampleMenuItem.price + totalToppingPrice) * quantity;
    alert(`Final Price: $${finalPrice.toFixed(2)}`);
  };

  return (
    <Box pt={2} pb={8} maxWidth={420} marginInline="auto">
      <BackButton path="/main" label="Menus" className="-translate-x-2" />
      <Card sx={{ marginTop: "4px", bgcolor: theme.palette.primary.main }}>
        <CardContent className="flex items-center gap-4">
          <img
            src={
              "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg"
            }
            alt={sampleMenuItem.name}
            width="100%"
            className="w-full aspect-square object-cover max-w-24"
            height="auto"
          />
          <Box>
            <Typography variant="h4" color="white" sx={{ fontSize: "1.25rem" }}>
              {sampleMenuItem.name}
            </Typography>

            <Typography variant="h5" color="white" fontWeight={700}>
              ${sampleMenuItem.price.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Typography mt={2} variant="body1">
        {sampleMenuItem.description}
      </Typography>
      <FormControl component="fieldset" fullWidth margin="normal">
        <Box>
          <Typography fontWeight={700}>
            {sampleMenuItem.toppings.label}
          </Typography>
          {sampleMenuItem.toppings.type === "single" ? (
            <RadioGroup value={selectedMeat} onChange={handleMeatChange}>
              {sampleMenuItem.toppings.items.map((item) => (
                <div className="w-full flex justify-between" key={item.name}>
                  <FormControlLabel
                    value={item.name}
                    control={<Radio />}
                    sx={{ fontSize: "0.8rem" }}
                    label={item.name}
                  />
                  {item.price !== 0 && <p>{item.price} Ks</p>}
                </div>
              ))}
            </RadioGroup>
          ) : (
            <FormGroup>
              {sampleMenuItem.toppings.items.map((item) => (
                <div className="w-full flex justify-between" key={item.name}>
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
                  {item.price !== 0 && <p>{item.price} Ks</p>}
                </div>
              ))}
            </FormGroup>
          )}
        </Box>
      </FormControl>
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
