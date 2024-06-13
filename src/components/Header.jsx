import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Header = ({ title, subtitle, amount }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb="30px"
    >
      <Box>
        <Typography
          variant="h2"
          color={colors.maincolor}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}{" "}
          <Button
            sx={{
              backgroundColor: "#D8EAF6",
              ml: 6,
              px: 4,
              cursor: "default",
            }}
          >
            <Typography color={colors.blueAccent[600]} fontWeight="bold">
              {amount}
            </Typography>
          </Button>
        </Typography>
        <Typography variant="h4" color={colors.maincolor}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
