import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrap>
      <h1>HEADER</h1>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;
