import { Box, Button, Card, CssBaseline, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/reset-password");
  };
 
  return (
    <main className=" w-screen h-screen grid place-items-center bg-slate-200">

<Card sx={{ padding: "1.25rem", minWidth: "30rem"  , }}>
<CssBaseline />
<Box 
sx={{
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
}}
>
  
<Typography component='h1' variant="h5">
  Reset Password
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
<TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
</Box>

</Card>

    </main>
  )
}

export default ForgotPassword