import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  ChevronRight as ChevronRightIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  ExpandMore as ExpandMoreIcon,
  HomeOutlined as HomeOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  PaymentOutlined as PaymentOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  RateReviewOutlined as RateReviewOutlinedIcon,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const colorsidemenutext = "#FED876";
const colorsidemenu = "#0E2F54";

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  children,
  suffix,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const suffixIcon = suffix
    ? React.cloneElement(suffix, {
        sx: {
          color: selected === title || isHovered ? colorsidemenu : "#FFF",
        },
      })
    : null;

  return (
    <>
      <MenuItem
        active={selected === title}
        style={{
          position: "relative",
          marginBottom: "30px",
          color: selected === title || isHovered ? colorsidemenu : "#FFF",
        }}
        onClick={() => {
          setSelected(title);
          if (onClick) onClick();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        icon={
          icon
            ? React.cloneElement(icon, {
                sx: {
                  color:
                    selected === title || isHovered ? colorsidemenu : "#FFF",
                },
              })
            : null
        }
        suffix={suffixIcon}
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
      {children}
    </>
  );
};

const Subtopic = ({ title, to, selected, setSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MenuItem
      active={selected === title}
      style={{
        position: "relative",
        marginBottom: "30px",
        color: selected === title || isHovered ? colorsidemenu : "#FFF",
        paddingLeft: "20px",
      }}
      onClick={() => setSelected(title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
  const [isUserManagementCollapsed, setIsUserManagementCollapsed] =
    useState(true);

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
                <Typography variant="h3" color="#FED876">
                  Fixit.lk
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
              to="#"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              suffix={
                isUserManagementCollapsed ? (
                  <ChevronRightIcon />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              onClick={() =>
                setIsUserManagementCollapsed(!isUserManagementCollapsed)
              }
            >
              {!isUserManagementCollapsed && (
                <Box sx={{ pl: 4 }}>
                  <Subtopic
                    title="Reported Users"
                    to="/user-management/reported-users"
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Box>
              )}
            </Item>

            <Item
              title="Tasks"
              to="/tasks"
              icon={<CheckCircleOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Quotations"
              to="/quotations"
              icon={<DescriptionOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Review & Ratings"
              to="/reviews"
              icon={<RateReviewOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Payments Management"
              to="/payments"
              icon={<PaymentOutlinedIcon />}
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
                Jayani Weerasinghe
              </Typography>
              <Typography variant="h5" sx={{ color: "#FFF" }}>
                jay123@gmail.com
              </Typography>
            </Box>
          </Box>
        )}
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
