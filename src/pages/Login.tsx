// src/SignIn.js
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaLock } from "react-icons/fa6";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";



export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://tasty-test-nestjs.onrender.com/api/auth/login', {
        email,
        password,
      });
      const token = response.data.result.access_token;
      const userId = response.data.result.user.id;
      
      

      // Store token in localStorage
      localStorage.setItem('access_token', token);
      localStorage.setItem('user_id', userId);

      setIsAuthenticated(true);
      Swal.fire('Success', 'Logged in successfully!', 'success');
      navigate('/main');
    } catch (error) {
      Swal.fire('Error', 'Login failed. Please check your credentials.', 'error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuthenticated(false);
    Swal.fire('Success', 'Logged out successfully!', 'success');
  };

  return (
    <main className="w-screen h-screen grid place-items-center bg-slate-200">
      <Card sx={{ padding: "1.25rem", maxWidth: "30rem" }}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <FaLock />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isAuthenticated ? 'Welcome!' : 'Sign in'}
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            {!isAuthenticated ? (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </>
            ) : (
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
            {!isAuthenticated && (
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Card>
    </main>
  );
}
