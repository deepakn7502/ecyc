import React, { useEffect, useState } from "react";
import { Avatar, Button, Divider, SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BloodIcon from "@mui/icons-material/Bloodtype";
import HealthIcon from "@mui/icons-material/HealthAndSafety";
import BookIcon from "@mui/icons-material/MenuBook";
import FoodIcon from "@mui/icons-material/FoodBank";
import ClothesIcon from "@mui/icons-material/Checkroom";
import PersonIcon from "@mui/icons-material/Person";
import AddPersonIcon from "@mui/icons-material/PersonAdd";
import InfoIcon from "@mui/icons-material/Info";
import "./Sidebar.css";

import { auth, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const nav = [
    {
      title: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      title: "Blood Donation",
      icon: <BloodIcon />,
      link: "/blood",
    },
    {
      title: "Health",
      icon: <HealthIcon />,
      link: "/health",
    },
    {
      title: "Education",
      icon: <BookIcon />,
      link: "/education",
    },
    {
      title: "Food",
      icon: <FoodIcon />,
      link: "/food",
    },
    {
      title: "Clothes",
      icon: <ClothesIcon />,
      link: "/clothes",
    },
    {
      title: "Missing Person",
      icon: <PersonIcon />,
      link: "/missing_person",
    },
  ];

  const nav_info = [
    {
      title: "Invite Friends",
      icon: <AddPersonIcon />,
      link: "/invite-friends",
    },
    {
      title: "Info",
      icon: <InfoIcon />,
      link: "/info",
    },
  ];

  const [userDetails, setuserDetails] = useState({});

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const getCurrentUser = async () => {
      const docRef = doc(db, "User_Bio_Data", user?.email);
      const dataset = await getDoc(docRef);
      setuserDetails(dataset.data());
    };
    getCurrentUser();
  }, []);

  const gotoEditProfile = () => {
    window.location.pathname = "edit-profile";
  };
  return (
    <div children className="sidebar">
      <div
        className="iconbutton"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        className="swipeable-divider"
      >
        <div className="profile">
          <Avatar src={userDetails?.img} />
          <h2>{userDetails?.Name}</h2>
          <p>{userDetails?.Email}</p>
          <div className="edit-profile">
            <Button onClick={gotoEditProfile}>Edit Profile</Button>
          </div>
        </div>
        <Divider />
        <div className="divider">
          <ul>
            {nav.map((val, key) => {
              return (
                <li
                  onClick={() => {
                    window.location.pathname = val.link;
                    key = { key };
                  }}
                >
                  <div className="item">
                    <div className="item-icon">{val.icon}</div>
                    <h2 className="item-title">{val.title}</h2>
                  </div>
                </li>
              );
            })}
          </ul>
          <Divider />
        </div>
        <div className="divider">
          <ul>
            {nav_info.map((val, key) => {
              return (
                <li
                  onClick={() => {
                    window.location.pathname = val.link;
                    key = { key };
                  }}
                >
                  <div className="item">
                    <div className="item-icon">{val.icon}</div>
                    <h2 className="item-title">{val.title}</h2>
                  </div>
                </li>
              );
            })}
          </ul>
          <Divider />
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default Sidebar;
