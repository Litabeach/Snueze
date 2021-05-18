import React from "react";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
// import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
// import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
// import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
// import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
// import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MoodRating(props) {
    // const customIcons = {
    //     1: {
    //       icon: <SentimentVeryDissatisfiedIcon />,
    //       label: 'Very Dissatisfied',
    //     },
    //     2: {
    //       icon: <SentimentDissatisfiedIcon />,
    //       label: 'Dissatisfied',
    //     },
    //     3: {
    //       icon: <SentimentSatisfiedIcon />,
    //       label: 'Neutral',
    //     },
    //     4: {
    //       icon: <SentimentSatisfiedAltIcon />,
    //       label: 'Satisfied',
    //     },
    //     5: {
    //       icon: <SentimentVerySatisfiedIcon />,
    //       label: 'Very Satisfied',
    //     },
    //   };

    //   function IconContainer(props) {
    //     const { value, ...other } = props;
    //     return <span {...other}>{customIcons[value].icon}</span>;
    //   }
    
    //   IconContainer.propTypes = {
    //     value: PropTypes.number.isRequired,
    //   };
    
  return (
   <div>
   
        {/* <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">How are you feeling right now?</Typography>
          <Rating
            name="customized-icons"
            defaultValue={2}
            getLabelText={(value) => customIcons[value].label}
            IconContainerComponent={IconContainer}
          />
        </Box> */}
    </div>
  );
}

export default MoodRating;
