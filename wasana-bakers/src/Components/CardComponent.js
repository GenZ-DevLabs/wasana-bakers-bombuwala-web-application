import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/system';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import cardData from "../helper/designsMainPage.json"; 

const CardContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', 
});

const StyledCard = styled(Card)({
  width: 'calc(18% - 20px)', 
  margin: '20px',
  cursor: 'pointer',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.6)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '96.25%',
});

const StyledCardContent = styled(CardContent)({
  padding: '10px',
  '&:last-child': {
    paddingBottom: '10px',
  },
});

const Title = styled(Typography)({
    textAlign: 'center',
    margin: '20px 0', 
    fontWeight: 'bold', 
    fontFamily: 'Arial, sans-serif', 
  });

const Home = () => {
  return <h2>Home Page</h2>;
};

const DesignDetails = () => {
  return <h2>Design Details Page</h2>;
};

const CardComponent = () => {
  const renderCards = () => {
    return cardData.map((card, index) => (
      <StyledCard key={index}>
        <StyledCardMedia image={card.imageUrl} title={card.title} />
        <StyledCardContent>
          <Typography variant="h6" component="h6">
            {card.title}
          </Typography>
        </StyledCardContent>
      </StyledCard>
    ));
  };

  return (
    <Router>
      <Title variant="h4" component="h1">
        Icing Cake Designs
      </Title>
      <Routes>
        <Route path="./Components/Footer" element={<Home />} />
        <Route path="./Components/Footer" element={<DesignDetails />} />
      </Routes>
      <CardContainer>{renderCards()}</CardContainer>
    </Router>
  );
};

export default CardComponent;
