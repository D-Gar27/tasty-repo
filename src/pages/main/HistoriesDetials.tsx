
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

import { useLocation } from "react-router-dom";

import BackButton from '../../components/shared/BackButton';
import { foodList } from '../../lib/data/foodList';
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
      label: "Chose Meat",
      type: "single", // or "multi"
      items: [
        { name: "Pork", price: 0 },
        { name: "Chicken", price: 2 },
        { name: "Beef", price: 0 },
      ],
    },
  };

const HistoriesDetials = () => {
    const [selectedFood, setSelectedFood] = useState([]);
    const theme = useTheme();
    const [quantity, setQuantity] = useState(1);
    const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
    const [selectedMeat, setSelectedMeat] = useState<string>("");
    const [request, setRequest] = useState("");

  

    useEffect(() => {
      
        
      
        setSelectedFood(foodList.filter(el => el.id === 1));
      }, [ foodList]);
    return (
        <Box pt={2} pb={8} maxWidth={420} marginInline="auto">
          
          <Card sx={{ marginTop: "4px", bgcolor: theme.palette.primary.main }}>
            <CardContent className="flex items-center gap-4">
              <img
                src={
                  "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg"
                }
                alt={selectedFood[0]?.name}
                width="100%"
                className="w-full aspect-square object-cover max-w-24"
                height="auto"
              />
              <Box>
                <Typography variant="h4" color="white" sx={{ fontSize: "1.25rem" }}>
                  {selectedFood[0]?.name || "Food Name"}
                </Typography>
    
                <Typography variant="h5" color="white" fontWeight={700}>
                  ${selectedFood[0]?.price.toFixed(2)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Typography mt={2} variant="body1">
            {selectedFood[0]?.description}
          </Typography>
          <FormControl component="fieldset" fullWidth margin="normal">
            <Box>
              <Typography fontWeight={700}>
                {sampleMenuItem.toppings.label}
              </Typography>
              {selectedFood[0]?.toppings?.items.map((item) => (
                    <div className="w-full flex justify-between" key={item.name}>
                      {item.name}
                      {item.price !== 0 && <p>{item.price} Ks</p>}
                    </div>
                  ))}
            </Box>
          </FormControl>
          
      
       
        </Box>
      );
  
}

export default HistoriesDetials