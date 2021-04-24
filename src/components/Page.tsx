import { motion } from "framer-motion";
import styled from "styled-components";
import { gridBorderRadius } from "./Grid";

export const PageContainer = styled(motion.div)({
  verticalAlign: "middle",
  textAlign: "left",
  display: "inline-block",
  maxWidth: 320,
  paddingTop: 30,
  paddingBottom: 30,
  position: "relative",
  "@media (min-width: 480px)": { maxWidth: 440 },
  "@media (min-width: 768px)": { maxWidth: 730 },
  "@media (min-width: 1200px)": {
    maxWidth: 1100,
    paddingTop: 100,
    paddingBottom: 100,
  },
});

export const PageHero = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (min-width: 480px)": {},
  "@media (min-width: 768px)": {
    flexDirection: "row",
  },
  "@media (min-width: 1200px)": {},
});

const xsPageItemSize = 190;
const smPageItemSize = 240;
const mdPageItemSize = 280;
const lgPageItemSize = 330;

export const PageHeroImage = styled(motion.div)({
  borderRadius: gridBorderRadius,
  position: "relative",
  width: xsPageItemSize,
  minWidth: xsPageItemSize,
  height: xsPageItemSize,
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  backgroundRepeat: "no-repeat",
  marginBottom: 50,
  "@media (min-width: 480px)": {
    width: smPageItemSize,
    minWidth: smPageItemSize,
    height: smPageItemSize,
  },
  "@media (min-width: 768px)": {
    marginBottom: 0,
    width: mdPageItemSize,
    minWidth: mdPageItemSize,
    height: mdPageItemSize,
  },
  "@media (min-width: 1200px)": {
    width: lgPageItemSize,
    minWidth: lgPageItemSize,
    height: lgPageItemSize,
  },
});

export const PageHeroContent = styled.div({
  paddingLeft: 0,
  textAlign: "center",

  "@media (min-width: 480px)": {},
  "@media (min-width: 768px)": {
    textAlign: "left",
    paddingLeft: 30,
  },
  "@media (min-width: 1200px)": {
    paddingLeft: 100,
  },
});

export const PageTitle = styled.h3({
  margin: 0,
  padding: 0,
  paddingBottom: 20,
  flexGrow: 1,
  fontSize: 24,
  fontFamily: "Montserrat",
  fontWeight: 700,
  "@media (min-width: 480px)": {
    fontSize: 30,
  },
  "@media (min-width: 768px)": {
    fontSize: 30,
  },
  "@media (min-width: 1200px)": {
    paddingBottom: 60,
    fontSize: 42,
  },
});

export const PageDescription = styled.p({
  position: "relative",
  fontSize: 14,
  fontFamily: "Montserrat",
  lineHeight: 1.8,
  margin: 0,
  padding: 0,
  paddingLeft: 0,
  color: "#444",

  "@media (min-width: 480px)": {},
  "@media (min-width: 768px)": {
    fontSize: 16,
    paddingLeft: 30,
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: 2,
      height: 60,
      backgroundColor: "#000",
    },
  },
  "@media (min-width: 1200px)": {
    paddingLeft: 100,
  },
});
