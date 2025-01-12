import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import logo from "../assets/Logo.png"
import image from "../assets/finance.jpg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link, useNavigate } from "react-router-dom"

import TextField from "@mui/material/TextField"

const Register = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="xl" >
      <Grid
        container
        justifyContent="center"
        textAlign={"center"}
        alignItems={"center"}
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK INVENTORY APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6} style={{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
    
          <img src={logo}
            style={{
 width:150,
 borderRadius:15,
marginTop:20,
            }}
   />
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="User Name"
              name="username"
              id="userName"
              type="text"
              variant="outlined"
            />
            <TextField
              label="First Name"
              name="first_name"
              id="firstName"
              type="text"
              variant="outlined"
            />
            <TextField
              label="Last Name"
              name="last_name"
              id="last_name"
              type="text"
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
            />
            <TextField
              label="password"
              name="password"
              id="password"
              type="password"
              variant="outlined"
            />
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={6} style={{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
    
    <img src={image}
      style={{
width:450,
marginTop:100,
borderRadius:15,

      }}
/>
</Grid>
      </Grid>
    </Container>
  )
}

export default Register
