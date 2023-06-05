import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>oi</small>
      </Title>
      <Paragrafo>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Paragrafo>
    </Container>
  );
}
