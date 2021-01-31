import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Link, Router } from "@reach/router";
import FancyDiv from "components/FancyDiv";
import Dynamic from "containers/Dynamic";
import { Cursor } from "components/Cursor";

import "./app.css";

import styled from "styled-components";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

const TopBar = styled.nav({
  height: 150,
});

function App() {
  const customCursorEnabled = true;
  return (
    <Root>
      <TopBar>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/dynamic">Dynamic</Link>
        </div>
      </TopBar>
      <div className="content">
        <FancyDiv>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
      {customCursorEnabled && <Cursor />}
    </Root>
  );
}

export default App;
