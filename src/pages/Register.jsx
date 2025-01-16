import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import logo from "../assets/Logo.png"
import image from "../assets/finance.jpg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import useApiRequests from "../services/useApiRequests"
import { Formik } from "formik"
import RegisterForm, { registerSchema } from "../components/Registerform"


const Register = () => {

  const {register} = useApiRequests()

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
    
          <img src={logo} alt="logo"
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

<Formik
         initialValues={{
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          register(values)
          actions.resetForm()
          actions.setSubmitting(false)
        }}
component={(props) => <RegisterForm {...props} />}
>
</Formik>
    
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={6} style={{alignItems:"center", justifyContent:"center", textAlign:"center"}}>
    
    <img src={image} alt="foto"
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
