import { motion } from "framer-motion";
import styled from "styled-components";

const containerVariants = {
  hidden: {},
  enter: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  hide: {},
};

const xsGridItemSize = 152;
const smGridItemSize = 210;
const mdGridItemSize = 160;
const lgGridItemSize = 270;

//
export const Container = styled(motion.div)({
  maxWidth: 320,
  margin: "auto auto",
  display: "grid",
  gridTemplateColumns: `repeat(2, ${xsGridItemSize}px)`,
  gridTemplateRows: `repeat(${xsGridItemSize}px)`,
  columnGap: 15,
  rowGap: 15,
  "@media (min-width: 480px)": {
    maxWidth: 440,
    gridTemplateColumns: `repeat(2, ${smGridItemSize}px)`,
    gridTemplateRows: `repeat(${smGridItemSize}px)`,
  },
  "@media (min-width: 768px)": {
    maxWidth: 730,
    columnGap: 30,
    rowGap: 30,
    gridTemplateColumns: `repeat(4, ${mdGridItemSize}px)`,
    gridTemplateRows: `repeat(${mdGridItemSize}px)`,
  },
  "@media (min-width: 1200px)": {
    maxWidth: 1170,
    gridTemplateColumns: `repeat(4, ${lgGridItemSize}px)`,
    gridTemplateRows: `repeat(${lgGridItemSize}px)`,
  },
});

Container.defaultProps = {
  variants: containerVariants,
};
