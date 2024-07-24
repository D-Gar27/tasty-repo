import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Rating,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import BackButton from "../../components/shared/BackButton";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const sampleOrder = {
  success: true,
  items: [
    {
      name: "Customizable Burger",
      quantity: 2,
      toppings: ["Beef", "Cheese", "Lettuce"],
      price: 15.98,
    },
    {
      name: "Fries",
      quantity: 1,
      toppings: [],
      price: 2.99,
    },
  ],
  total: 18.97,
};

const Summary = () => {
  const theme = useTheme();
  const [rating, setRating] = useState<number | null>(0);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleContinue = () => {
    // Implement continue action
    alert("Continue button clicked");
  };

  return (
    <Box pt={2} pb={8} maxWidth={420} marginInline="auto">
      <BackButton path="/main" label="Menus" className="-translate-x-2" />
      <Box my={2}>
        <Grid container alignItems="center" justifyContent="center">
          {sampleOrder.success ? (
            <FaCheck className="text-green-500 text-2xl" />
          ) : (
            <MdClose className="text-red-500 text-3xl" />
          )}
        </Grid>
        <Typography
          variant="h6"
          fontWeight={700}
          color={sampleOrder.success ? "success.main" : "error.main"}
          align="center"
        >
          {sampleOrder.success ? "Order Successful!" : "Order Failed"}
        </Typography>
        <Typography textAlign="center" variant="body1" color="darkslategray">
          Thank you for being a part of our journey. We value your support.
        </Typography>
      </Box>
      <Typography mt={2} variant="body1" fontWeight={700}>
        Order Summary
      </Typography>
      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          mb: 3,
          mt: 2,
          boxShadow: "none",
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6" fontWeight={700}>
            ${sampleOrder.total.toFixed(2)}
          </Typography>
        </Box>
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Order Items" />
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {sampleOrder.items.map((item, index) => (
                <ListItem key={index} sx={{ pl: 4 }}>
                  <ListItemText
                    primary={item.name}
                    secondary={`Quantity: ${
                      item.quantity
                    } | Price: $${item.price.toFixed(
                      2
                    )} | Toppings: ${item.toppings.join(", ")}`}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Paper>
      <Typography mt={2} variant="body1" fontWeight={700}>
        Feedback
      </Typography>
      <Box display="flex" alignItems="center" mt={1}>
        <Rating
          name="order-feedback"
          value={rating}
          onChange={(_, newValue) => {
            setRating(newValue);
          }}
        />
      </Box>
      <TextField
        label="Leave a comment"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleContinue}
        sx={{ mt: 2, boxShadow: "none", textTransform: "none" }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Summary;
