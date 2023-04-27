import React from "react";
import styled from "styled-components";
import Container from "../../../common/Container";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <Column>
            <Link href="/">Protocols (Trade Supply Earn)</Link>
          </Column>
          <Column>
            <Link href="/">About (Guides Docs)</Link>
          </Column>
          <Column>
            <Link href="/">Support (Help Contact)</Link>
          </Column>
          <Column>
            <Logo>
              <img src="/assets/logo.svg" alt="" />
              <p>BorB</p>
            </Logo>
          </Column>
        </Grid>
        <Bottom>
          <p>© {new Date().getFullYear()} BorB</p>
          <div className="icons">
            <img src="/assets/twitter.svg" alt="" />
            <img src="/assets/github.svg" alt="" />
            <img src="/assets/redit.svg" alt="" />
          </div>
        </Bottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
.icons img{
  padding:5px;
}

`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 197px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 64px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    grid-template-columns: 107px 92px;
    grid-gap: 60px;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h6`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
`;
const Link = styled.a`
  color: var(--grey);
  opacity: 0.8;
  font-size: 14px;
  font-weight: 400;
  transition: 0.2s all ease;
  &:nth-child(n + 2) {
    margin-top: 12px;
  }

  &:hover,
  &:active {
    opacity: 1;
  }
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 32px;
    margin-left: 8px;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 61px;
  border-top: 1px solid #dadee6;
  p {
    font-weight: 400;
    font-size: 14px;
  }
  a {
    color: var(--grey);
    opacity: 0.8;
    font-size: 14px;
    font-weight: 400;
    &:hover,
    &:active {
      opacity: 1;
    }
  }
`;
