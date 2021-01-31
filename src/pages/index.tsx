import React from "react";
// import { useRouteData } from "react-static";
// import { Post } from "types";
import useMedia from "react-use/lib/useMedia";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";

import { hoverProps } from "../components/Hoverable";

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
        // backgroundImage:
        //   "url('https://i.pinimg.com/originals/fc/68/f8/fc68f86873c9c661e84ad442cf8fb6cf.gif')",
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
const smGridItemSize = 156;
const mdGridItemSize = 202;
const lgGridItemSize = 270;

const Container = styled(motion.div)({
  maxWidth: 320,
  margin: "auto auto",
  display: "grid",
  gridTemplateColumns: `repeat(2, ${xsGridItemSize}px)`,
  gridTemplateRows: `repeat(${xsGridItemSize}px)`,
  columnGap: 15,
  rowGap: 15,
  "@media (min-width: 680px)": {
    maxWidth: 668,
    gridTemplateColumns: `repeat(4, ${smGridItemSize}px)`,
    gridTemplateRows: `repeat(${smGridItemSize}px)`,
  },
  "@media (min-width: 960px)": {
    columnGap: 30,
    rowGap: 30,
    maxWidth: 900,
    gridTemplateColumns: `repeat(4, ${mdGridItemSize}px)`,
    gridTemplateRows: `repeat(${mdGridItemSize}px)`,
  },
  "@media (min-width: 1200px)": {
    maxWidth: 1170,
    gridTemplateColumns: `repeat(4, ${lgGridItemSize}px)`,
    gridTemplateRows: `repeat(${lgGridItemSize}px)`,
  },
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  maxWidth: 1100,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    layoutId={selectedItem.id}
                    style={{
                      position: "relative",
                      width: "329px",
                      minWidth: "329px",
                      height: "329px",
                      backgroundColor: selectedItem.backgroundColor,
                      // backgroundImage:
                      //   "url('https://i.pinimg.com/originals/fc/68/f8/fc68f86873c9c661e84ad442cf8fb6cf.gif')",
                      backgroundSize: "cover",
                    }}
                    {...hoverProps}
                  ></motion.div>
                  <div
                    style={{
                      paddingLeft: 90,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        padding: 0,
                        paddingBottom: 60,
                        flexGrow: 1,
                        fontSize: 42,
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                      }}
                    >
                      The public is more familiar with bad design than good
                      design.
                    </h3>
                    <p
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        fontFamily: "Montserrat",
                        lineHeight: 1.8,
                        margin: 0,
                        padding: 0,
                        paddingLeft: 100,
                        color: "#444",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: 2,
                          height: 60,
                          backgroundColor: "#000",
                        }}
                      ></span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus non vulputate ipsum, id dignissim ante. Cras
                      posuere eros justo, pulvinar dignissim neque cursus non.
                      Ut sed purus vestibulum lacus tristique bibendum.
                    </p>
                  </div>
                </div>
              </motion.div>
            </RemoveScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
