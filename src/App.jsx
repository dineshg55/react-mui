import { Box } from '@mui/material';
import OuterWrapper from './Components/OuterWrapper';
import InnerWrapper from './Components/InnerWrapper';
import LeftCard from './Components/LeftCard';
import RightCard from './Components/RightCard';
import { Grid } from '@mui/material';

function App() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Grid size={{ xs: 12, md: 6, lg: 6}}>
          <LeftCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6}}>
          <RightCard />
        </Grid>
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default App;