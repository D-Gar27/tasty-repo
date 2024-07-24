import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import BackButton from "../../components/shared/BackButton";

// const STRIPE_SECRET_KEY = "sk_test_D4eevBFs9v0jJgZqXfwShXXN00muSzaCps";
const STRIPE_PUBLISH_KEY = "pk_test_x5mqKzKPxTLAhJPDcR1yKdyF00UbyzTT3F";
const stripePromise = loadStripe(STRIPE_PUBLISH_KEY);

const cartItems = [
  {
    id: 1,
    name: "Customizable Burger",
    price: 7.99,
    quantity: 2,
  },
  {
    id: 2,
    name: "Deluxe Pizza",
    price: 12.99,
    quantity: 1,
  },
];

const calculateTotalPrice = () => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const CheckoutPage = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth="md">
      <BackButton
        path="/main/cart"
        label="Cart"
        className="mt-4 -translate-x-2"
      />
      <Box mt={1} mb={4}>
        <Typography variant="h5" component="h1" fontWeight={700} gutterBottom>
          Checkout
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please review your order and enter your payment details below to
          complete the purchase.
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 3, mt: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6" fontWeight={700}>
              {calculateTotalPrice()}Ks
            </Typography>
          </Box>
          <List>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Cart" />
              {open ? <FaChevronUp /> : <FaChevronDown />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {cartItems.map((item) => (
                  <ListItem key={item.id} sx={{ pl: 4 }}>
                    <ListItemText
                      primary={item.name}
                      secondary={`Quantity: ${
                        item.quantity
                      } | Price: $${item.price.toFixed(2)}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Paper>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
