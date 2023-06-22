import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Slideshow from "./Components/Slideshow";
import Footer from "./Components/Footer";
import CardComponent from "./Components/CardComponent"
import { styled } from '@mui/system';

const CardContainer = styled('div')({
  width: '80%', // Set the desired width
  margin: '0 auto', // Center the div horizontally
});

function App() {
  return (
    <>
      <Slideshow />
      <CardContainer>
        <CardComponent />
      </CardContainer>
      <Footer />
    </>
  );
}

export default App;
