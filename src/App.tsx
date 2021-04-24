import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import { Cursor } from "components/Cursor";
import { AppBar } from "components/AppBar";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const customCursorEnabled = true;
  return (
    <Root>
      <AppBar />
      <React.Suspense fallback={<div />}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
      {customCursorEnabled && <Cursor />}
    </Root>
  );
}

export default App;
