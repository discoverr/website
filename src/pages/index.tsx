import React from "react";
// import { useRouteData } from "react-static";
// import { Post } from "types";
import useMedia from "react-use/lib/useMedia";
import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";

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
      style={{
        backgroundColor: props.backgroundColor,
        gridColumn: "span " + props.size,
        gridRow: "span " + props.size,
      }}
      onClick={props.onSelect}
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

const xsGridItemSize = 144;
const smGridItemSize = 144;
const mdGridItemSize = 202;
const lgGridItemSize = 270;

const Container = styled(motion.div)({
  maxWidth: 320,
  margin: "auto auto",
  display: "grid",
  gridTemplateColumns: `repeat(2, ${xsGridItemSize}px)`,
  gridTemplateRows: `repeat(${xsGridItemSize}px)`,
  columnGap: 30,
  rowGap: 30,
  "@media (min-width: 680px)": {
    maxWidth: 668,
    gridTemplateColumns: `repeat(4, ${smGridItemSize}px)`,
    gridTemplateRows: `repeat(${smGridItemSize}px)`,
  },
  "@media (min-width: 960px)": {
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

      {/* <AnimatePresence>
        {selectedItem && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
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
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                maxWidth: 960,
                margin: "auto auto",
                paddingTop: 150,
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
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
                  }}
                ></motion.div>
                <div>
                  <h3
                    style={{
                      margin: 0,
                      padding: 0,
                      paddingLeft: 90,
                      flexGrow: 1,
                      fontSize: 42,
                      fontFamily: "Montserrat",
                      fontWeight: 700,
                    }}
                  >
                    Historien om hvordan software blev kunst og discoverr blev
                    artist.
                  </h3>
                </div>
              </div>
              <div>
                <h5>{selectedItem.id}</h5>
                <h2>{selectedItem.id}</h2>
                <button onClick={() => setSelectedItem(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </AnimateSharedLayout>
  );
};
