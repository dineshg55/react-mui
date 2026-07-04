import { Box } from '@mui/material';

function RightCard() {
  return (
      <Box
      sx={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '440px',
      }}
    >

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Box
          sx={{
            bgcolor:'yellow',
            border: '2px solid black',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Center Aligned
        </Box>
        <Box
          sx={{
            bgcolor:'darkcyan',
            border: '2px solid black',
            borderTop: 'none',
            flex: 1,
            display: 'flex',
            alignItems: 'flesStart',
            justifyContent: 'center',
          }}
        >
          Top Center Aligned
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box
          sx={{
            bgcolor: 'yellow',
            flex: 1,
            border: '2px solid black',
            borderTop: 'none',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          Top Left
        </Box>
        <Box
          sx={{
            bgcolor: 'blueviolet',
            flex: 1,
            border: '2px solid black',
            borderTop: 'none',
            borderLeft: 'none',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          Bottom
        </Box>
        <Box
          sx={{
            bgcolor:'yellow',
            flex: 1,
            border: '2px solid black',
            borderTop: 'none',
            borderLeft: 'none',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          Bottom Right
        </Box>
      </Box>
    </Box>
  );
}

export default RightCard;