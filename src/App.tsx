import React from "react";
import { Root, Routes, addPrefetchExcludes,  } from "react-static";
import { Link, Router } from "@reach/router";
import { Cursor } from "components/Cursor";
import { DiscoverrLogo } from "components/DiscoverrLogo";
import { hoverProps } from "components/Hoverable";

import "./app.css";

import styled from "styled-components";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

const TopBar = styled.nav({
  height: 150,
  maxWidth: 1170,
  margin: "auto auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const StyledLink = styled(Link)({
  fontFamily: "Poppins",
  fontSize: 14,
  fontWeight: 500,
  color: "#000",
  marginLeft: 22,
  textDecoration: "none",
  textTransform: "uppercase",
});

function App() {
  const customCursorEnabled = true;
  return (
    <Root>
      <TopBar>
        <DiscoverrLogo />
        <div>
          <StyledLink to="/" {...hoverProps}>
            Home
          </StyledLink>
          <StyledLink to="/about" {...hoverProps}>
            About
          </StyledLink>
          <StyledLink to="/blog" {...hoverProps}>
            Blog
          </StyledLink>
        </div>
      </TopBar>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
      {customCursorEnabled && <Cursor />}
    </Root>
  );
}

export default App;
