import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const image =
  "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg";

export default function MenuItem() {
  const navigate = useNavigate();
  return (
    <Card
      component="button"
      onClick={() =>
        navigate("/main/menu-details", {
          state: {
            id: "fff",
          },
        })
      }
      className="relative mx-auto sm:w-52 sm:h-56 w-48 h-52"
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image={image}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
      <CardContent className="absolute z-20 -bottom-4">
        <Typography
          gutterBottom
          component="h5"
          color="white"
          fontSize="1.25rem"
          fontWeight="700"
        >
          Lizard
        </Typography>
        <Typography variant="body2" color="white">
          3,000 MMK
        </Typography>
      </CardContent>
    </Card>
  );
}
