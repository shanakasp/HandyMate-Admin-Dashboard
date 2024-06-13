import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  ExpandMore as ExpandMoreIcon,
  HomeOutlined as HomeOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  PaymentOutlined as PaymentOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  RateReviewOutlined as RateReviewOutlinedIcon,
} from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
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
          marginBottom: "25px",
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
            fontSize: "0.85rem",
            fontWeight: 600,

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

        marginBottom: "20px",
        color: selected === title || isHovered ? colorsidemenu : "#FFF",
        paddingLeft: "20px",
      }}
      onClick={() => setSelected(title)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography
        sx={{
          fontSize: "0.85rem",
          fontWeight: 600,
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

  const CustomTypography = styled(Typography)(({ theme }) => ({
    "& .white-text": {
      color: "#FFFFFF",
    },
    "& .lk-text": {
      color: "#FED876",
      fontWeight: 700,
    },
  }));

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
              margin: "15px 65px 20px 0",
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
                <CustomTypography variant="h2">
                  <span className="white-text">Fixit</span>
                  <span className="lk-text">.lk</span>
                </CustomTypography>
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
              to="/userMngmnt"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              suffix={
                isCollapsed ? null : isUserManagementCollapsed ? (
                  <ChevronRightIcon />
                ) : (
                  <ExpandMoreIcon />
                )
              }
              onClick={() =>
                setIsUserManagementCollapsed(!isUserManagementCollapsed)
              }
            >
              {!isCollapsed && !isUserManagementCollapsed && (
                <Box sx={{ pl: 4 }}>
                  <Subtopic
                    title="Reported Users"
                    to="/userMngmnt/reported-users"
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
              title="Payment Management"
              to="/payments"
              icon={<PaymentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
        {!isCollapsed && (
          <Box sx={{ marginTop: "20%" }}>
            <Box sx={{ borderTop: "1px solid #C3C3C3CC", m: "20px" }}>
              <Box ml="-10px" mt="15px" display="flex" alignItems="center">
                <Box>
                  <img
                    alt="profile-user"
                    width="70px"
                    height="70px"
                    src={`../../assets/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>

                <Box ml="10px">
                  <Typography fontWeight="bold" sx={{ color: "#FFF" }}>
                    User ABC Hasthiya
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ color: "#C0BFBF", fontWeight: 300 }}
                  >
                    hasthiya@gmail.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    paddingLeft: "10px",
                    cursor: "pointer",
                    color: "#FFFFFF",
                  }}
                >
                  <ExitToAppOutlinedIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
