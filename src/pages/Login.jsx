import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import image from "../assets/result2.svg"
import logo from "../assets/Logo.png"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button, Card } from "@mui/material"

const Login = () => {
    return (
    <Container maxWidth="lg" style={{borderRadius:15}} sx={{bgcolor:"teal"}}>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6} style={{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
    
          <img src={logo}
            style={{
 width:150,
 borderRadius:15,

            }}
   />
      

          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
            />
            <TextField
              label="Password"
              name="password"
              id="password"
              type="password"
              variant="outlined"
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container sx={{width:450}}>
            <img  src={image} alt="img"  />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
