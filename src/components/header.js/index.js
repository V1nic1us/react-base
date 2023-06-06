import React from 'react';
import { FaHome, FaSingInAlt, FaUserAlt } from 'react-icons';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="">
        <FaHome size={24} />
      </a>
      <a href="">
        <FaSingInAlt size={24} />
      </a>
      <a href="">
        <FaUserAlt size={24} />
      </a>
    </Nav>
  );
}
