import { Box, Typography, Paper, List, ListItemText } from "@mui/material";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const sampleHistories = [
  {
    success: true,
    orderId: "12345",
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
    date: "2023-07-10",
  },
  {
    success: false,
    orderId: "67890",
    items: [
      {
        name: "Pizza",
        quantity: 1,
        toppings: ["Pepperoni", "Cheese"],
        price: 12.99,
      },
    ],
    total: 12.99,
    date: "2023-06-15",
  },
];

const Histories = () => {
  const theme = useTheme();

  return (
    <Box pt={2} pb={8} maxWidth={600} marginInline="auto">
      <Typography variant="h5" fontWeight={700} mb={2} align="center">
        Order Histories
      </Typography>
      <List>
        {sampleHistories.map((order) => (
          <Link to={`/histories/${order.orderId}`}>
            <Paper
              key={order.orderId}
              sx={{
                p: 2,
                borderRadius: 2,
                mb: 2,
                boxShadow: "none",
                border: `1px solid ${theme.palette.divider}`,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ListItemText
                primary={`Order #${order.orderId}`}
                secondary={`Date: ${order.date}`}
              />
              <Typography variant="body1" fontWeight={700}>
                {order.total} Ks
              </Typography>
            </Paper>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Histories;
