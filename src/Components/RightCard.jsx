import { Box } from '@mui/material';
import { Grid } from '@mui/material';
function RightCard() {
  return (
      <Box
        sx={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          minHeight: { xs: '300px', sm: '400px', md: '532px' },
          fontSize: { xs: '0.8rem', sm:'1rem', md: '1rem' },
        }}
      >

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Box
          sx={{
            bgcolor:'yellow',
            border: '2px solid black',
            borderTop: { xs: '2px solid black' , md: 'none'},
            borderRight: 'none',
            borderLeft: { xs: 'none', md: '2px solid black'} ,
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
            borderRight: 'none' ,
            borderLeft: { xs: 'none', md: '2px solid black'} ,
            flex: 1,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          Top Center Aligned
        </Box>
      </Box>

      <Grid container sx={{ flex: 1 ,height:'100%' }}>
        <Grid size={4} 
          sx={{ 
            bgcolor:'yellow' ,
            border: '2px solid black', 
            borderTop: 'none', 
            borderBottom: 'none' ,
            borderLeft: { xs: 'none', md: '2px solid black'} ,
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'flex-start'
           }}
        >
            Top Left
        </Grid>
        <Grid size={4} 
          sx={{ 
            bgcolor:'blueviolet', 
            border: '2px solid black', 
            borderTop: 'none', 
            borderLeft: 'none', 
            borderBottom: 'none' ,
            display: 'flex', 
            alignItems: 'flex-end', 
            justifyContent: 'center'
            }}
          >
          Bottom
        </Grid>
        <Grid size={4} 
          sx={{ 
            bgcolor:'yellow' , 
            border: '1px solid black', 
            borderTop: 'none', 
            borderLeft: 'none', 
            borderBottom: 'none',
            display: 'flex', 
            alignItems: 'flex-end', 
            justifyContent: 'flex-end' 
            }}
          >
           Bottom Right
        </Grid>
      </Grid>
    </Box>
  );
}

export default RightCard;