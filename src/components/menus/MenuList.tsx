import React, { useEffect, useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import MenuItem from "./MenuItem";
import axios from "axios";

export default function MenuList() {
  const [food, setFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch food items
  const getFoodList = async (category = null) => {
    try {
      const endpoint = category
        ? `https://tasty-test-nestjs.onrender.com/api/foods?category=${category}`
        : "https://tasty-test-nestjs.onrender.com/api/foods";
      const response = await axios.get(endpoint);
      setFood(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch categories
  const getCategoryList = async () => {
    try {
      const response = await axios.get('https://tasty-test-nestjs.onrender.com/api/categories');
      setCategories(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  // Initial load
  useEffect(() => {
    getFoodList(); // Load all food items initially
    getCategoryList(); // Load all categories
  }, []);

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    getFoodList(categoryId); // Fetch food items based on the selected category
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" mb={2}>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "contained" : "outlined"}
            onClick={() => handleCategoryClick(category.id)}
            sx={{ margin: "0 8px" }}
          >
            {category.name}
          </Button>
        ))}
      </Box>

      <ul className="pb-20 pt-4 px-4 w-full">
        <Grid
          container
          columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
          spacing={{ xs: 2, md: 3 }}
          sx={{
            placeItems: "center",
          }}
        >
          {food.map((item, index) => (
            <Grid key={index} component="li" item xs={1}>
              <MenuItem data={item} />
            </Grid>
          ))}
        </Grid>
      </ul>
    </div>
  );
}
