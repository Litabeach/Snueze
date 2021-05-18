import React from "react";
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
//import { withStyles } from '@material-ui/core/styles';
//import Rating from '@material-ui/lab/Rating';
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function HealthRating(props) {
    // const StyledRating = withStyles({
    //     iconFilled: {
    //         color: '#ff6d75',
    //     },
    //     iconHover: {
    //         color: '#ff3d47',
    //     },
    // })(Rating);

    return (
        <div>
            

            {/* <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">How was your quality of sleep?</Typography>
          <StyledRating
            name="customized-color"
            defaultValue={2}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box> */}
        </div>
    );
}

export default HealthRating;
