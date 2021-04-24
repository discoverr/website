import React from "react";
import styled from "styled-components";

import { DiscoverrLogo } from "components/DiscoverrLogo";

const TopBar = styled.nav({
  height: 150,
  maxWidth: 1170,
  margin: "auto auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// const StyledLink = styled(Link)({
//   fontFamily: "Poppins",
//   fontSize: 14,
//   fontWeight: 500,
//   color: "#000",
//   marginLeft: 40,
//   textDecoration: "none",
//   textTransform: "uppercase",
// });

//
export const AppBar = () => {
  return (
    <TopBar>
      <DiscoverrLogo />
      {/* <div>
            <StyledLink to="/" {...hoverProps}>
              Home
            </StyledLink>
            <StyledLink to="/about" {...hoverProps}>
              About
            </StyledLink>
            <StyledLink to="/blog" {...hoverProps}>
              Blog
            </StyledLink>
          </div> */}
    </TopBar>
  );
};
