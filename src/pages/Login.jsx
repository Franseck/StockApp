import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import image from "../assets/result2.svg"
import logo from "../assets/Logo.png"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import useApiRequests from "../services/useApiRequests"
import { Formik, Form } from "formik"
import { object, string } from "yup"



const Login = () => {
  const { login } = useApiRequests()

  const loginSchema = object({
    password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .matches(/\d+/, "Password must contain a number")
    .matches(/[a-z]/, "Password must contain one lowercase letter")
    .matches(/[A-Z]/, "Password must contain one uppercase letter")
    .matches(/[!/[@$!%*?&]+/, "Password must contain one special character (@$!%*?&)"),

    email: string()
    .email("Please enter a valid email.")
    .required("Email is required"),
  })

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
            STOCK INVENTORY APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6} style={{alignItems:"center", justifyContent:"center", textAlign:"center", justifyItems:"center"}}>
    
          <img src={logo} alt="logo"
            style={{
 width:150,
 borderRadius:15,

            }}
   />
          <Typography
            variant="h4"
            align="center"
            mt={2}
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
                   login(values)
       
              actions.resetForm()
              actions.setSubmitting(false) 
            }}
          >
            {({
              isSubmitting,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width:300 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    onBlur={handleBlur}
                    helperText={errors.email}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box  style={{fontFamily: "Special Elite"}} sx={{ textAlign: "center", mt: 3 }}>
            <Link to="/register">Don't have an account?</Link>
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
