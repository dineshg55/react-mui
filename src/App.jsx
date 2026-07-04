import { Box } from '@mui/material';
import OuterWrapper from './Components/OuterWrapper';
import InnerWrapper from './Components/InnerWrapper';
import LeftCard from './Components/LeftCard';
import RightCard from './Components/RightCard';

function App() {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <LeftCard />
        <RightCard/>
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default App;