import { Box } from '@mui/material';
import profileImage from '../assets/Images/images.png';

function LeftCard() {
  return (
    <Box sx={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          border: '2px solid black',
          borderTop: 'none' ,
          borderLeft: 'none',
          borderRight:{ xs:'none' , md: '2px solid black' } ,
          minHeight: { xs: '250px', sm: '400px', md: '440px' },
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Profile"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box
        sx={{
          bgcolor: 'darkcyan',
          border: '2px solid black',
          borderTop: 'none',
          borderBottom: {xs: '2px solid black' , md: 'none'} ,
          borderRight:{ xs:'none' , md: '2px solid black' } ,
          borderLeft: 'none' ,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: '50px', sm:'70px', md: '90px' },
          fontSize: { xs: '0.85rem',sm: '1rem', md: '1rem' },
        }}
      >
        Profile Name
      </Box>
    </Box>
  );
}

export default LeftCard;