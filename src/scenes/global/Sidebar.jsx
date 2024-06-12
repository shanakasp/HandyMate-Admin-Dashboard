import {
  ContactsOutlined as ContactsOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  ReceiptOutlined as ReceiptOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const colorsidemenutext = "#FED876";
const colorsidemenu = "#0E2F54";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MenuItem
      active={selected === title}
      style={{
        position: "relative",
        marginBottom: "30px",
        color: selected === title || isHovered ? colorsidemenu : "#FFF",
      }}
      onClick={() => setSelected(title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      icon={React.cloneElement(icon, {
        sx: {
          color: selected === title || isHovered ? colorsidemenu : "#FFF",
        },
      })}
    >
      <Typography
        sx={{
          fontSize: "0.9rem",
          color: selected === title || isHovered ? colorsidemenu : "#FFF",
        }}
      >
        {title}
      </Typography>
      <Link to={to} />

      {isHovered && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "90%",
            borderRadius: "5px",
            height: "100%",
            backgroundColor: colorsidemenutext,
            color: colorsidemenu,
            zIndex: -1,
          }}
        />
      )}
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const location = window.location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(location.replace(/^\//, ""));

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colorsidemenu} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-menu-item.active": {
          backgroundColor: `${colorsidemenutext} !important`,
          width: "90%",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: `${colorsidemenutext} !important`,
            color: `${colorsidemenu} !important`,
            "& .MuiTypography-root": {
              color: `${colorsidemenu} !important`,
            },
          },
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  sx={{ color: "white" }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
                <Typography variant="h3" color="#FFF">
                  FIXIT.LK
                </Typography>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="User Management"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{ m: "10px 0 0 0", color: "#FFF" }}
              >
                Ed Roh
              </Typography>
              <Typography variant="h5" sx={{ color: "#FFF" }}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
