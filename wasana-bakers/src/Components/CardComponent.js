import React from 'react';
import { styled } from '@mui/system';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import cardData from "../helper/designsMainPage.json"; 

const CardContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', 
});

const StyledCard = styled(Card)({
    width: 'calc(25% - 20px)', 
    margin: '10px',
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

const CardComponent = () => {
  const renderCards = () => {
    return cardData.map((card, index) => (
      <StyledCard key={index}>
        <StyledCardMedia image={card.imageUrl} title={card.title} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
          </Typography>
          <Button variant="contained" color="primary">
            {card.buttonName}
          </Button>
        </CardContent>
      </StyledCard>
    ));
  };

  return <CardContainer>{renderCards()}</CardContainer>;
};

export default CardComponent;
