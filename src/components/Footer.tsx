import React from "react";
import styled from "styled-components";

const FooterBar = styled.div({
  padding: "100px 0",
  maxWidth: 1170,
  margin: "auto auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

//
export interface IFooterProps {}
export const Footer = () => {
  return (
    <FooterBar>
      <p
        style={{
          position: "relative",
          fontSize: "13px",
          fontFamily: "Montserrat",
          lineHeight: 1.8,
          margin: 0,
          padding: 0,
          color: "#ccc",
        }}
      >
        @ 2020, Discoverr. Lavet med passion af Discoverr.
      </p>
    </FooterBar>
  );
};
