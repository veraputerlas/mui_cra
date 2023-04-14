import { Container } from '@mui/material';
import './App.css';
import Header from '../ui/Header';
import MultiActionAreaCard from '../ui/Card'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  return (
    <div className="App">
    <Header/>
    <Container maxWidth="md" sx={{mt: '20px'}}>    
    <Grid 
    container spacing={2} 
    rowSpacing={2} 
    columnSpacing={{ xs: 2, sm: 2, md: 2}}>
 <Grid item xs={12} sm={6} md={4}>
    <Item> <MultiActionAreaCard/></Item>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Item><MultiActionAreaCard/></Item>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Item><MultiActionAreaCard/></Item>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Item><MultiActionAreaCard/></Item>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Item><MultiActionAreaCard/></Item>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Item><MultiActionAreaCard/></Item>
  </Grid>
  </Grid>
    </Container>
    </div>
  );
}

export default App;
