import { Box } from '@mui/material';

function InnerWrapper({ children }) {
  return (
    <Box
      sx={{
        border: '2px solid black',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '1cm',
      }}
    >
      {children}
    </Box>
  );
}

export default InnerWrapper;