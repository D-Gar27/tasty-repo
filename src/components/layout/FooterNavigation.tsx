import { useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { MdOutlineFastfood, MdOutlineShoppingCart } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function FooterNavigation() {
  const [value, setValue] = useState<null | number>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/main":
        setValue(0);
        break;
      case "/main/cart":
        setValue(1);
        break;
      case "/main/histories":
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  function handleTabChange(newValue: number) {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/main");
        break;
      case 1:
        navigate("/main/cart");
        break;
      case 2:
        navigate("/main/histories");
        break;
    }
  }

  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{
        boxShadow: 3,
      }}
      className="fixed bottom-0 left-0 w-full z-40"
      onChange={(_, newValue) => {
        handleTabChange(newValue);
      }}
    >
      <BottomNavigationAction
        label="Menus"
        icon={<MdOutlineFastfood className="text-2xl" />}
      />
      <BottomNavigationAction
        label="Cart"
        icon={<MdOutlineShoppingCart className="text-2xl" />}
      />
      <BottomNavigationAction
        label="Histories"
        icon={<FaHistory className="text-xl" />}
      />
    </BottomNavigation>
  );
}
