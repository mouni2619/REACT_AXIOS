import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../global';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
// Define the form validation schema using Yup
const formValidationsSchema = yup.object({
  name: yup.string().min(2, 'Need a longer name').required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  username: yup.string().min(2, 'Need a longer username').required('Username is required'),
  street: yup.string().min(2, 'Need a longer street').required('Street is required'),
  suite: yup.string().min(2, 'Need a longer suite').required('Suite is required'),
  city: yup.string().min(2, 'Need a longer city').required('City is required'),
  zipcode: yup.string().min(2, 'Need a longer zipcode').required('Zipcode is required'),
  lat: yup.string().min(2, 'Need a longer latitude').required('Latitude is required'),
  lng: yup.string().min(2, 'Need a longer longitude').required('Longitude is required'),
  phone: yup.string().min(2, 'Need a longer phone number').required('Phone number is required'),
  website: yup.string().min(2, 'Need a longer website').required('Website is required'),
  companyname: yup.string().min(2, 'Need a longer company name').required('Company name is required'),
  catchPhrase: yup.string().min(2, 'Need a longer catch phrase').required('Catch phrase is required'),
  bs: yup.string().min(2, 'Need a longer BS').required('BS is required'),
});

// Define the AddUser component
export default function AddUser() {
  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();
  // Initialize Formik form management
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      lat: '',
      lng: '',
      phone: '',
      website: '',
      companyname: '',
      catchPhrase: '',
      bs: '',
    },
    validationSchema: formValidationsSchema,
    onSubmit: (values) => {
      // console.log('On Submit', values);
      const newUser = {
        name: values.name,
        email: values.email,
        username: values.username,
        address: {
          street: values.street,
          suite: values.suite,
          city: values.city,
          zipcode: values.zipcode,
          geo: {
            lat: values.lat,
            lng: values.lng,
          },
        },
        phone: values.phone,
        website: values.website,
        company: {
          name: values.companyname,
          catchPhrase: values.catchPhrase,
          bs: values.bs,
        },
      };

      axios
        .post(API, newUser, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then((response) => {
          //   console.log(response.data);
          navigate('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  });
  // Function to display validation errors for a specific form field
  const displayError = (field) => {
    return formik.touched[field] && formik.errors[field] ? (
      <div style={{ color: 'red' }}>{formik.errors[field]}</div>
    ) : null;
  };
  // Render the AddUser form
  return (
    <section className="add-product-form">
      <form onSubmit={formik.handleSubmit}>
        <h6 style={{ textAlign: 'center', paddingTop: "10px" }}>ADD USER INFORMATION</h6>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={formik.values.name}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('name')}
        <br />
        <br />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          fullWidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('email')}
        <br />
        <br />
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('username')}
        <br /> <br />
        <TextField
          id="street"
          name="street"
          label="Street"
          variant="outlined"
          fullWidth
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('street')}
        <br /> <br />
        <TextField
          id="suite"
          name="suite"
          label="Suite"
          variant="outlined"
          fullWidth
          value={formik.values.suite}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('suite')}
        <br /> <br />
        <TextField
          id="city"
          name="city"
          label="City"
          variant="outlined"
          fullWidth
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('city')}
        <br /> <br />
        <TextField
          id="zipcode"
          name="zipcode"
          label="Zipcode"
          variant="outlined"
          fullWidth
          value={formik.values.zipcode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('zipcode')}
        <br /> <br />
        <TextField
          id="lat"
          name="lat"
          label="Latitude"
          variant="outlined"
          fullWidth
          value={formik.values.lat}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('lat')}
        <br /> <br />
        <TextField
          id="lng"
          name="lng"
          label="Longitude"
          variant="outlined"
          fullWidth
          value={formik.values.lng}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('lng')}
        <br /> <br />
        <TextField
          id="phone"
          name="phone"
          label="Phone"
          variant="outlined"
          fullWidth
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('phone')}
        <br /> <br />
        <TextField
          id="website"
          name="website"
          label="Website"
          variant="outlined"
          fullWidth
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('website')}
        <br /> <br />
        <TextField
          id="companyname"
          name="companyname"
          label="Company Name"
          variant="outlined"
          fullWidth
          value={formik.values.companyname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('companyname')}
        <br /> <br />
        <TextField

          id="catchPhrase"
          name="catchPhrase"
          label="Catch Phrase"
          variant="outlined"
          fullWidth
          value={formik.values.catchPhrase}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('catchPhrase')}
        <br /> <br />
        <TextField

          id="bs"
          name="bs"
          label="BS"
          variant="outlined"
          fullWidth
          value={formik.values.bs}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: '100%', // Set the width to 100% for responsiveness
            maxWidth: 500, // Set a maximum width if needed
            '@media (max-width:600px)': {
              maxWidth: '100%', // Adjust the maximum width for smaller screens
            },
          }}
        />
        {displayError('bs')}
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <Button type="submit" variant="contained">
            Add User
          </Button>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </form>
    </section>
  );
}

