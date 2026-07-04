import { Box } from '@mui/material';

function OuterWrapper({ children }) {
  return (
    <Box
      sx={{
        bgcolor:'darkturquoise',
        margin: '1cm',   
        border: '3px solid black',
        padding: '20px',
      }}
    >
      {children}
    </Box>
  );
}

export default OuterWrapper;