import { Box } from '@mui/material';
import profileImage from '../assets/Images/images.png';

function LeftCard() {
  return (
    <Box sx={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          border: '2px solid black',
          minHeight: '450px',
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
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '90px',
        }}
      >
        Profile Name
      </Box>
    </Box>
  );
}

export default LeftCard;