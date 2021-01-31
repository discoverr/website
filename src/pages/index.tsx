import React from "react";
// import { useRouteData } from "react-static";
// import { Post } from "types";
import useMedia from "react-use/lib/useMedia";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";

import { hoverProps } from "../components/Hoverable";
import { DiscoverrLogo } from "../components/DiscoverrLogo";

import { X } from "react-feather";
import { RemoveScroll } from "react-remove-scroll";

const item = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  hide: { opacity: 1 },
};

const GridItem = (props: {
  layoutId: string;
  size: number;
  backgroundColor: string;
  onSelect: () => void;
}) => {
  return (
    <motion.div
      layoutId={props.layoutId}
      variants={item}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: props.backgroundColor,
        backgroundImage:
          "url('https://i.pinimg.com/originals/fc/68/f8/fc68f86873c9c661e84ad442cf8fb6cf.gif')",
        backgroundSize: "cover",

        gridColumn: "span " + props.size,
        gridRow: "span " + props.size,
        // borderRadius: 24,
      }}
      onClick={props.onSelect}
      {...hoverProps}
    >
      <div style={{ display: "block", width: "100%", paddingTop: "100%" }} />
    </motion.div>
  );
};

const GridSection = ({
  color,
  mainRight,
  mainItem,
  item1,
  item2,
  item3,
  item4,
  onSelect,
}: {
  color: string;
  mainRight?: boolean;
  mainItem: any;
  item1: any;
  item2: any;
  item3: any;
  item4: any;
  onSelect: (item: any) => void;
}) => {
  const isOverXS = useMedia("(min-width: 680px)");
  return (
    <React.Fragment>
      {(!mainRight || !isOverXS) && (
        <GridItem
          key={mainItem.id}
          layoutId={mainItem.id}
          backgroundColor={color}
          size={2}
          onSelect={() => onSelect({ ...mainItem, backgroundColor: color })}
        />
      )}
      <GridItem
        key={item1.id}
        layoutId={item1.id}
        backgroundColor={color}
        size={1}
        onSelect={() => onSelect({ ...item1, backgroundColor: color })}
      />
      <GridItem
        key={item2.id}
        layoutId={item2.id}
        backgroundColor={color}
        size={1}
        onSelect={() => onSelect({ ...item2, backgroundColor: color })}
      />
      {mainRight && isOverXS && (
        <GridItem
          key={mainItem.id}
          layoutId={mainItem.id}
          backgroundColor={color}
          size={2}
          onSelect={() => onSelect({ ...mainItem, backgroundColor: color })}
        />
      )}
      <GridItem
        key={item3.id}
        layoutId={item3.id}
        backgroundColor={color}
        size={1}
        onSelect={() => onSelect({ ...item3, backgroundColor: color })}
      />
      <GridItem
        key={item4.id}
        layoutId={item4.id}
        backgroundColor={color}
        size={1}
        onSelect={() => onSelect({ ...item4, backgroundColor: color })}
      />
    </React.Fragment>
  );
};

const container = {
  hidden: {},
  enter: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  hide: {},
};

const xsGridItemSize = 152;
const smGridItemSize = 210;
const mdGridItemSize = 160;
const lgGridItemSize = 270;

const Container = styled(motion.div)({
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

const PageContainer = styled(motion.div)({
  maxWidth: 320,
  position: "relative",
  zIndex: 2,
  "@media (min-width: 480px)": { maxWidth: 440 },
  "@media (min-width: 768px)": { maxWidth: 730 },
  "@media (min-width: 1200px)": { maxWidth: 1100 },
});

const PageHero = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media (min-width: 480px)": {},
  "@media (min-width: 768px)": {
    flexDirection: "row",
  },
  "@media (min-width: 1200px)": {},
});

const xsPageItemSize = 210;
const smPageItemSize = 240;
const mdPageItemSize = 280;
const lgPageItemSize = 330;

const PageHeroImage = styled(motion.div)({
  position: "relative",
  width: xsPageItemSize,
  minWidth: xsPageItemSize,
  height: xsPageItemSize,
  backgroundImage:
    "url('https://i.pinimg.com/originals/fc/68/f8/fc68f86873c9c661e84ad442cf8fb6cf.gif')",
  backgroundSize: "cover",
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

const PageHeroContent = styled.div({
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

const PageTitle = styled.h3({
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

const PageDescription = styled.p({
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

const FooterBar = styled.div({
  padding: "100px 0",
  maxWidth: 1170,
  margin: "auto auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default () => {
  // const { posts }: { posts: Post[] } = useRouteData();
  const [selectedItem, setSelectedItem] = React.useState(null);
  const enteredRed = React.useRef(false);

  if (selectedItem) {
    enteredRed.current === true;
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <Container
        variants={container}
        initial="hidden"
        animate={selectedItem === null ? "enter" : "hide"}
      >
        <GridSection
          color="#000"
          mainItem={{ id: 1 }}
          item1={{ id: 2 }}
          item2={{ id: 3 }}
          item3={{ id: 4 }}
          item4={{ id: 5 }}
          onSelect={setSelectedItem}
        />
        <GridSection
          color="#f2f2f2"
          mainRight
          mainItem={{ id: 6 }}
          item1={{ id: 7 }}
          item2={{ id: 8 }}
          item3={{ id: 9 }}
          item4={{ id: 10 }}
          onSelect={setSelectedItem}
        />
      </Container>

      <FooterBar>
        <DiscoverrLogo />
        <p
          style={{
            position: "relative",
            fontSize: "16px",
            fontFamily: "Montserrat",
            lineHeight: 1.8,
            margin: 0,
            padding: 0,
            paddingLeft: 100,
            color: "#ccc",
          }}
        >
          @ 2020, Discoverr. Lavet med passion af Discoverr.
        </p>
      </FooterBar>
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "#fff",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  zIndex: 10,
                  top: 30,
                  right: 30,
                  padding: 0,
                  margin: 0,
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                }}
                onClick={() => setSelectedItem(null)}
                {...hoverProps}
              >
                <X size={40} />
              </button>
            </motion.div>
            <RemoveScroll>
              <PageContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <PageHero>
                  <PageHeroImage
                    layoutId={selectedItem.id}
                    onClick={() => setSelectedItem(null)}
                    {...hoverProps}
                  />
                  <PageHeroContent>
                    <PageTitle>
                      The public is more familiar with bad design than good
                      design.
                    </PageTitle>
                    <PageDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus non vulputate ipsum, id dignissim ante. Cras
                      posuere eros justo, pulvinar dignissim neque cursus non.
                      Ut sed purus vestibulum lacus tristique bibendum.
                    </PageDescription>
                  </PageHeroContent>
                </PageHero>
              </PageContainer>
            </RemoveScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
