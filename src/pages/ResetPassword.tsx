import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CssBaseline,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields.",
      });
      return;
    }

    // Simulate API call
    Swal.fire({
      title: "Sending Reset Link...",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Email Sent",
        text: "Reset link has been sent to your email.",
      });
      setEmail("");
      setPassword("");
    }, 1000);
  };

  return (
    <main className="w-screen h-screen grid place-items-center bg-slate-200">
      <CssBaseline />
      <Card
        sx={{
          padding: "2rem",
          minWidth: "30rem",
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="New Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Reset Link
            </Button>
          </Box>
          <Link href="/login" variant="body2" sx={{ mt: 2 }}>
            Remembered your password? Log in
          </Link>
        </Box>
      </Card>
    </main>
  );
};

export default ResetPassword;
