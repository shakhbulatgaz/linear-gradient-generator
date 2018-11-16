import React, { PureComponent } from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vh;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 30px black;
`;

const Input = styled.input`
  display: block;
  width: 15vw;
  height: 1.5vw;
  font-size: 1em;
  padding: 10px 15px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  font-size: 1.25em;
  padding: 0.5vw 5vw;
`;

class App extends PureComponent {
  state = {
    firstColor: '#2edae6',
    secondColor: '#c12ebd',
  }

  setGradient = () => {
    const form = document.forms.colors;
    const formData = new FormData(form);
    this.setState({firstColor: formData.get('firstColor'), secondColor: formData.get('secondColor')})
  }

  render() {
    const {firstColor} = this.state;
    const {secondColor} = this.state; 
    return (
      <OuterContainer style={{background: `linear-gradient(${firstColor}, ${secondColor})`}}>
        <InnerBox>
          <form id='colors'>
            <Input name = 'firstColor' placeholder='#000000'/>
            <Input name = 'secondColor' placeholder='#000000'/>
          </form>
        <Button onClick={()=> this.setGradient()}>GO!</Button>
        </InnerBox>
      </OuterContainer>
    );
  }
}

export default App;
