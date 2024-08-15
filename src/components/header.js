import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import desert from "../images/night_desert.jpg";

const HeaderWrapper = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  background-image: url(${desert}); // Set the background image
  background-size: cover; // Ensure the image covers the entire header
  background-position: center; // Center the image
`;

const SiteTitle = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: var(--header-text-color);

  &:hover,
  &:focus {
    color: var(--header-text-hover-color);
  }
`;

const Logo = styled.img`
  margin: 0;
  height: 20px;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <SiteTitle to="/">{siteTitle}</SiteTitle>
    <Logo
      alt="Night Desert" src={desert}
    />
  </HeaderWrapper>
);

export default Header;
