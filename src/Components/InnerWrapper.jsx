import { Box } from '@mui/material';
import { Grid } from '@mui/material';

function InnerWrapper({ children }) {
  return (
    <Grid
      container
      sx={{ 
        border:{ xs: '2px solid black' ,  md: '3px solid black'}
      }}
      spacing={{ xs: 1, md: 2 }}
    >
      {children}
    </Grid>
  );
}

export default InnerWrapper;