import { Box } from '@mui/material';

function OuterWrapper({ children }) {
  return (
    <Box
      sx={{
        bgcolor:'darkturquoise',
        margin: { xs: '0.3cm', sm: '0.5cm', md: '1cm' },
        border: '3px solid black',
        padding: { xs: '0.2cm', sm: '0.3cm', md: '0.5cm' },
      }}
    >
      {children}
    </Box>
  );
}

export default OuterWrapper;