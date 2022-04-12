import './App.css';
import { Box, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div style={{textAlign: 'center',marginTop: '50px'}}>
          <Box sx={{bgcolor: '#001e3c',display: 'inline-flex',borderRadius: 4, px: 7, py: 5,boxShadow: 5}}>
          <Button onClick={ () => dispatch(increment) } variant="contained">Increment</Button>
          <Typography variant="button" gutterBottom color="common.white" sx={{ display: 'inline', px: 2, m: "auto",fontSize: 'h6.fontSize'}}>
            {counter}
          </Typography>
          <Button onClick={ () => dispatch(decrement)} variant="contained">Decrement</Button>
          </Box>
    </div>

  );
}

export default App;
