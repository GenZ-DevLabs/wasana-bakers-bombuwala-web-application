import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Card, CardMedia, CardContent, Typography, Container, Backdrop, Modal } from '@mui/material';
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

const PopupContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const PopupCard = styled(Card)({
  width: '50%', 
  height: '60vh',
  padding: '20px',
  position: 'relative',
  display: 'flex',
});

const PopupCardMedia = styled(CardMedia)({
  flex: '1', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const PopupCardContent = styled(CardContent)({
  padding: '10px',
  '&:last-child': {
    paddingBottom: '10px',
  },
  flex: '1',
});

const DesignBoard = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card

  const openPopup = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <Container maxWidth="xl">
      <Title variant="h4" component="h1">
        Icing Cake Designs
      </Title>
      <CardContainer>
        {cardData.map((card, index) => (
          <StyledCard key={index} onClick={() => openPopup(card)}>
            <StyledCardMedia image={card.imageUrl} title={card.title} />
            <StyledCardContent>
              <Typography variant="h6" component="h6">
                {card.title}
              </Typography>
            </StyledCardContent>
          </StyledCard>
        ))}
      </CardContainer>
      <PopupModal open={selectedCard !== null} onClose={closePopup} card={selectedCard} />
    </Container>
  );
};

const DesignDetails = () => {
  return <h2>Design Details Page</h2>;
};

const PopupModal = ({ open, onClose, card }) => {
  if (!open || !card) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <PopupContainer>
        <PopupCard>
          <PopupCardMedia image={card.imageUrl} title={card.title} />
          <PopupCardContent>
            <Typography variant="h6" component="h6">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.button}
            </Typography>
          </PopupCardContent>
        </PopupCard>
      </PopupContainer>
    </Modal>
  );
};

const CardComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/design-details" element={<DesignDetails />} />
      </Routes>
      <DesignBoard />
    </Router>
  );
};

export default CardComponent;
