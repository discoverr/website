import React from "react";
// import { useRouteData } from "react-static";
// import { Post } from "types";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  hide: { opacity: 1 },
};

const GridItem = (props: {
  layoutId: string;
  size: number;
  item: any;
  onSelect: () => void;
}) => {
  return (
    <motion.div
      layoutId={props.layoutId}
      variants={item}
      style={{
        backgroundColor: props.item.backgroundColor,
        gridColumn: "span " + props.size,
        gridRow: "span " + props.size,
      }}
      onClick={props.onSelect}
    >
      <div style={{ display: "block", width: "100%", paddingTop: "100%" }} />
    </motion.div>
  );
};

// const GridItem = (props: { size: number }) => {
//   const animation = useAnimation();
//   const [ref, inView, entry] = useInView({
//     threshold: 0.1,
//     delay: 200,
//   });

//   const variants = {
//     show: {
//       opacity: 1,
//     },
//     hidden: {
//       opacity: 0,
//     },
//   };

//   React.useEffect(() => {
//     if (inView && entry) {
//       animation.start("show");
//     } else {
//       animation.start("hidden");
//     }
//   }, [animation, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       animate={animation}
//       initial="hidden"
//       variants={variants}
//       style={{
//         backgroundColor: "black",
//         gridColumn: "span " + props.size,
//         gridRow: "span " + props.size,
//       }}
//     >
//       <div style={{ display: "block", width: "100%", paddingTop: "100%" }} />
//     </motion.div>
//   );
// };

const boxes = [
  {
    id: "1",
    size: 2,
    backgroundColor: "#000000",
  },
  {
    id: "2",
    size: 1,
    backgroundColor: "#000000",
  },
  {
    id: "3",
    size: 1,
    backgroundColor: "#000000",
  },
  {
    id: "4",
    size: 1,
    backgroundColor: "#000000",
  },
  {
    id: "5",
    size: 1,
    backgroundColor: "#000000",
  },
  {
    id: "6",
    size: 1,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "7",
    size: 1,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "8",
    size: 2,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "9",
    size: 1,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "10",
    size: 1,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "11",
    size: 2,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "12",
    size: 1,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "13",
    size: 0,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "14",
    size: 1,
    backgroundColor: "#f2f2f2",
  },
  {
    id: "15",
    size: 1,
    backgroundColor: "#f2f2f2",
  },
];

const container = {
  hidden: {},
  enter: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  hide: {},
};

export default () => {
  // const { posts }: { posts: Post[] } = useRouteData();
  const [selectedItem, setSelectedItem] = React.useState(null);
  const enteredRed = React.useRef(false);

  if (selectedItem) {
    enteredRed.current === true;
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div
        variants={container}
        initial="hidden"
        animate={selectedItem === null ? "enter" : "hide"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 329px)",
          gridTemplateRows: "repeat(329px)",
          columnGap: 30,
          rowGap: 30,
        }}
      >
        {boxes.map((item) => (
          <GridItem
            layoutId={item.id}
            item={item}
            size={item.size}
            onSelect={() => setSelectedItem(item)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
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
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
