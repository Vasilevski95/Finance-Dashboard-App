import { Link, useLocation } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

const Navbar = () => {
  const { palette } = useTheme();
  const location = useLocation();

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>
      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            style={{
              color:
                location.pathname === "/"
                  ? palette.primary[100]
                  : palette.grey[700],
              textDecoration: "none",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box>
          <Link
            to="/predictions"
            style={{
              color:
                location.pathname === "/predictions"
                  ? palette.primary[100]
                  : palette.grey[700],
              textDecoration: "none",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
