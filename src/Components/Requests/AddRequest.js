import React, { useState } from "react";
import "./AddRequest.css";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import BloodRequest from "./BloodRequest";
import HealthRequest from "./HealthRequest";
import EducationRequest from "./EducationRequest";
import FoodRequest from "./FoodRequest";
import ClothesRequest from "./ClothesRequest";
import MissingPersonRequest from "./MissingPersonRequest";

function AddRequest({ type }) {
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    setOpen(false);
  };
  const handlePopper = () => {
    if (type === "blood") {
      return <BloodRequest openvalue={open} cancel={handleCancel} />;
    }
    if (type === "health") {
      return <HealthRequest openvalue={open} cancel={handleCancel} />;
    }
    if (type === "education") {
      return <EducationRequest openvalue={open} cancel={handleCancel} />;
    }
    if (type === "food") {
      return <FoodRequest openvalue={open} cancel={handleCancel} />;
    }
    if (type === "clothes") {
      return <ClothesRequest openvalue={open} cancel={handleCancel} />;
    }
    if (type === "missing-person") {
      return <MissingPersonRequest openvalue={open} cancel={handleCancel} />;
    }
  };
  return (
    <div className="request">
      <div className="popper">{handlePopper()}</div>
      <div className="add-btn">
        <IconButton>
          <AddIcon
            onClick={() => {
              setOpen(true);
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default AddRequest;
