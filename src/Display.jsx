import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  .selected {
    background-color: green;
    color: white;
  }

  canvas {
    position: absolute;
    top: 0px;
  }

  p { 
    margin: 0; 
    font-size: 15.5px;
  }
`

function amISelected(word, selectedTexts) {
  return selectedTexts.includes(word);
}

const Display = ({ texts, selectedTexts }) => (
  <Container>
    {texts.map(text => (
      <p>{text}</p>
    ))}
    <canvas></canvas>
  </Container>
)

export default Display;