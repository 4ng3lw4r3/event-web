import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import userlogin from '../assets/userlogin.svg'
import LoginForm from "../components/LoginForm";

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <div>
      <Box 
      width="1000" 
      backgroundColor={theme.palette.background.alt} 
      p="1rem 6%"
      textAlign="center"
      >
      <Typography
        fontWeight="light"
        fontSize="32px"
        color="primary"
      >
        Let's go out°•*⁀➷•
      </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
          <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem" }}
          >
           ...and have some fun?

          </Typography>
          <LoginForm />
      </Box>
    </div>
  );
};

export default Login;
