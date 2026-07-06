import { Box } from '@mui/material';
import { Grid } from '@mui/material';

function OuterWrapper({ children }) {
  return (
    <Box
      sx={{
        bgcolor:'darkturquoise',
        margin: { xs: '0cm', sm: '0.4cm', md: '1cm' },
        border: '3px solid black',
        padding: { xs: '0.1cm', sm: '0.2cm', md: '0.5cm' },
      }}
    >
      {children}
    </Box>
  );
}

export default OuterWrapper;