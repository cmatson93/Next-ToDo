import Link from 'next/link';

import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #5c946e;
  color: #2a2d34;
  align-items: center;
  /* width: 100%; */
  h1:hover,
  h3:hover {
    color: #a7b3ac;
    cursor: pointer;
  }
`;

const Nav = () => (
  <StyledNav>
    <Link href="/add">
        <h3>Add</h3>
    </Link>
    <Link href="/">
      <h1>ToDO App</h1>
    </Link>
    <Link href="/list">
      <h3>ToDos</h3>
    </Link>
  </StyledNav>
);

export default Nav;