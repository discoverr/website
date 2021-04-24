import React from "react";
import useMedia from "react-use/lib/useMedia";
import { motion } from "framer-motion";

import { hoverProps } from "./Hoverable";
import { OverlayPage } from "./Overlay";

export const gridBorderRadius = 0;
const item = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  hide: { opacity: 1 },
};

const GridItem = (props: {
  layoutId: string | number;
  size: number;
  backgroundColor: string;
  icon?: string;
  image?: string;
  onSelect: () => void;
}) => {
  return (
    <motion.div
      layoutId={`${props.layoutId}`}
      variants={item}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      style={{
        borderRadius: gridBorderRadius,
        color: "#fff",
        backgroundColor: props.backgroundColor,
        backgroundImage: props.icon
          ? "url('" + props.icon + "')"
          : props.image
          ? "url('" + props.image + "')"
          : undefined,
        backgroundSize: props.icon ? "50%" : props.image ? "100%" : undefined,
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
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

export const LargeItem = (props: {
  backgroundColor: string;
  children: any;
}) => {
  return (
    <motion.div
      variants={item}
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: gridBorderRadius,
        gridColumn: "span 2",
        gridRow: "span 2",
        // borderRadius: 24,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export const GridSection = ({
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
  mainItem: React.ReactNode;
  item1: OverlayPage;
  item2: OverlayPage;
  item3: OverlayPage;
  item4: OverlayPage;
  onSelect: (item: OverlayPage) => void;
}) => {
  const isOverXS = useMedia("(min-width: 680px)");
  return (
    <React.Fragment>
      {(!mainRight || !isOverXS) && mainItem}
      <GridItem
        key={item1.id}
        layoutId={item1.id}
        backgroundColor={color}
        icon={item1.icon}
        image={item1.image}
        size={1}
        onSelect={() => onSelect({ ...item1, backgroundColor: color })}
      />
      <GridItem
        key={item2.id}
        layoutId={item2.id}
        backgroundColor={color}
        icon={item2.icon}
        image={item2.image}
        size={1}
        onSelect={() => onSelect({ ...item2, backgroundColor: color })}
      />
      {mainRight && isOverXS && mainItem}
      <GridItem
        key={item3.id}
        layoutId={item3.id}
        backgroundColor={color}
        icon={item3.icon}
        image={item3.image}
        size={1}
        onSelect={() => onSelect({ ...item3, backgroundColor: color })}
      />
      <GridItem
        key={item4.id}
        layoutId={item4.id}
        backgroundColor={color}
        icon={item4.icon}
        image={item4.image}
        size={1}
        onSelect={() => onSelect({ ...item4, backgroundColor: color })}
      />
    </React.Fragment>
  );
};
