import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }

    getData();
  }, []);

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
