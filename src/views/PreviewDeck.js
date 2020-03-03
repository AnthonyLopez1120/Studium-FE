import React from 'react';
import styled from 'styled-components';
import StyledTitleText from '../components/Styled/StyledTitleText';
import StyledDeckPreview from '../components/Styled/StyledDeckPreview';

const decks = [
  { card_name: 'Name this organ' },
  { card_name: 'Define Proximal.' },
  { card_name: '---- means towards the front' },
];

const PreviewDeck = props => {
  console.log('props', props);
  return (
    <StyledPreviewDeck>
      <StyledTitleText text={'Preview'} />
      <StyledPreviewDeckHolder>
        {decks.map(deck => {
          console.log(decks);

          return <StyledDeckPreview deck={deck} />;
        })}
      </StyledPreviewDeckHolder>
    </StyledPreviewDeck>
  );
};

PreviewDeck.propTypes = {};

const StyledPreviewDeck = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  min-height: 90%;
  width: 100%;
`;

const StyledPreviewDeckHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default PreviewDeck;