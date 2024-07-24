import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";

interface BackButtonProps {
  path?: string;
  label?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ path, label, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else {
      navigate(-1);
    }
  };

  return (
    <IconButton
      onClick={handleClick}
      size="small"
      color="primary"
      style={{
        display: "flex",
        alignItems: "center",
        background: "none",
        border: "none",
      }}
      className={`flex mb-2 items-center gap-1 bg-slate-900 ${className}`}
    >
      <FaChevronLeft />
      <p className="text-sm font-bold">{label}</p>
    </IconButton>
  );
};

export default BackButton;
