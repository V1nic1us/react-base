import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: white;
    margin: 0 10px;
    font-weight: bold;
  }
`;
