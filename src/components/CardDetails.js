import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { deepOrange, lightGreen, teal, pink, blue, deepPurple } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';

// Function to generate a color based on the user's name
const generateColor = (name) => {
    const colors = [deepOrange, lightGreen, teal, pink, blue,deepPurple];
    const index = name.charCodeAt(0) % colors.length;
    const colorIndex = colors[index] ? index : 0; 
    return colors[colorIndex][500];
};
// Styled component for the expand button
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})
(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
// CardDetails component
export default function CardDetails({ user, deleteButton, editButton,  }) {
    const [expanded, setExpanded] = React.useState(false);
    // Function to handle expand/collapse of the card content
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
   
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card className="cardw" sx={{ maxWidth: 345, backgroundColor:"blanchedalmond" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: generateColor(user.name) }} aria-label="recipe">
                            {user.name.substring(0, 1)}
                        </Avatar>
                    }
                    title=<b>{user.name}</b>
                    subheader={user.email}
                />
                <CardContent>
                    {/* Address details */}
                <Typography variant="subtitle2" style={{ fontWeight: "bold", fontSize:"13px" }}>ADDRESS:</Typography>
                    <Typography variant="body2" color="text.secondary">
                        
                   
                        {user.address.street},
                        {user.address.suite},
                        {user.address.city},
                        {user.address.zipcode},
                            {user.address.geo && user.address.geo.lat && user.address.geo.lng ? `${user.address.geo.lat}, ${user.address.geo.lng}` : ''}
                    </Typography>
                </CardContent>
                 {/* Card actions (edit, delete, expand) */}
                <CardActions disableSpacing>
                  {editButton}
                    {deleteButton}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                 {/* Collapsible content for additional details */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent >
                        <Typography paragraph sx={{fontSize:"14px"}} >
                            <span style={{color:"darkblue"}}>Phone :</span> {user.phone}
                        </Typography>
                        <Typography paragraph sx={{fontSize:"14px"}} >
                        <span style={{color:"darkblue"}}>Website :</span> {user.website}
                        </Typography>
                        <Typography paragraph sx={{fontSize:"14px"}} >
                        <span style={{color:"darkblue"}}>Company Details :</span>  {user.company.name} {user.company.catchPhrase} {user.company.bs}
                        </Typography>
                       
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}
