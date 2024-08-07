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
}

const MenuDetails = () => {
  const selectedFood = useSelectedFood((state) => state.selectedFood);
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [selectedMeat, setSelectedMeat] = useState<string>("");
  const [request, setRequest] = useState("");

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
    setSelectedMeat(selectedFood.toppings[0].items.filter((el)=> el.id == id  ));

  };

  const handleAddToCart = () => {
    const totalToppingPrice = selectedToppings.reduce(
      (acc, topping) => acc + topping.price,
      0
    );
let  finalPrice = (selectedFood.price + totalToppingPrice) * quantity;
    if(selectedFood.toppings[0].is_radio){
       finalPrice = (selectedFood.price + selectedMeat[0].add_on_price) * quantity;

    }
    alert(`Final Price: $${finalPrice.toFixed(2)}`);
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
              <RadioGroup value={selectedMeat} onChange={handleMeatChange}>
                {selectedFood.toppings[0].items?.map((item) => (
                  <div className="w-full flex justify-between" key={item.id}>
                    <FormControlLabel
                      value={item.id}
                      control={<Radio />}
                      sx={{ fontSize: "0.8rem" }}
                      label={item.name}
                      checked ={selectedMeat[0].id == item.id}
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
