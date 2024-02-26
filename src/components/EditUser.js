import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../global";
import { Button, TextField } from '@mui/material';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

function EditUser() {
    const { userid } = useParams(); //get parameters from URL

    const [user, setUser] = useState(null);
    useEffect(() => {
        axios.get(`${API}/${userid}`)
            .then((response) => setUser(response.data));
    }, [userid]);

    return (
        user ? <EditUserForm user={user} /> : "Loading..."
    );
}

function EditUserForm({ user }) {
    const navigate = useNavigate();
    const [name, setName] = useState(user.name || "");
    const [email, setEmail] = useState(user.email || "");
    const [username, setUsername] = useState(user.username || "");
    const [street, setStreet] = useState(user.address?.street || "");
    const [suite, setSuite] = useState(user.address?.suite || "");
    const [city, setCity] = useState(user.address?.city || "");
    const [zipcode, setZipcode] = useState(user.address?.zipcode || "");
    const [lat, setLat] = useState(user.address?.geo?.lat || "");
    const [lng, setLng] = useState(user.address?.geo?.lng || "");
    const [phone, setPhone] = useState(user.phone || "");
    const [website, setWebsite] = useState(user.website || "");
    const [companyname, setCompanyName] = useState(user.company?.name || "");
    const [catchPhrase, setCatchPhrase] = useState(user.company?.catchPhrase || "");
    const [bs, setBS] = useState(user.company?.bs || "");
    const { width, height } = useWindowSize();
    const [isSaved, setIsSaved] = useState(false);
    return (
        <div className="add-product-form">
            {/* Your form inputs */}
            <h6>EDIT USERS</h6>
            <TextField className="txt" label="Name" variant="outlined" value={name}
                onChange={(event) => setName(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Email" variant="outlined" value={email}
                onChange={(event) => setEmail(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="UserName" variant="outlined" value={username}
                onChange={(event) => setUsername(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Street" variant="outlined" value={street}
                onChange={(event) => setStreet(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Suite" variant="outlined" value={suite}
                onChange={(event) => setSuite(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="City" variant="outlined" value={city}
                onChange={(event) => setCity(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Zipcode" variant="outlined" value={zipcode}
                onChange={(event) => setZipcode(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Latitute" variant="outlined" value={lat}
                onChange={(event) => setLat(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Longitude" variant="outlined" value={lng}
                onChange={(event) => setLng(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Phone" variant="outlined" value={phone}
                onChange={(event) => setPhone(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Website" variant="outlined" value={website}
                onChange={(event) => setWebsite(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Company Name" variant="outlined" value={companyname}
                onChange={(event) => setCompanyName(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="Catch Phrase" variant="outlined" value={catchPhrase}
                onChange={(event) => setCatchPhrase(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <TextField className="txt" label="BS" variant="outlined" value={bs}
                onChange={(event) => setBS(event.target.value)} sx={{
                    width: '100%', // Set the width to 100% for responsiveness
                    maxWidth: 500, // Set a maximum width if needed
                    '@media (max-width:600px)': {
                        maxWidth: '100%', // Adjust the maximum width for smaller screens
                    },
                }} />
            <br />
            <br />
            <div className="flexclass" >
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setIsSaved(true);
                        const updateUser = {
                            name: name,
                            email: email,
                            username: username,
                            address: {
                                street: street,
                                suite: suite,
                                city: city,
                                zipcode: zipcode,
                                geo: {
                                    lat: lat,
                                    lng: lng
                                }
                            },
                            phone: phone,
                            website: website,
                            company: {
                                name: companyname,
                                catchPhrase: catchPhrase,
                                bs: bs
                            }
                        };
                        axios.put(`${API}/${user.id}`, updateUser, {
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            }
                        })
                            .then((data) => console.log(data))
                            .then(() => navigate("/"))
                    }}
                >
                    Save
                </Button>
                <Button variant="contained" onClick={() => navigate(-1)}>Back</Button>
                {isSaved && <Confetti width={width} height={height} />}
            </div>
        </div>
    );
}

export default EditUser;
