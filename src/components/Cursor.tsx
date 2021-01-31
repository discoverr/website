import { motion, useMotionValue } from "framer-motion";
import React from "react";

import { useCursorStore } from "../stores/useCustorStore";

const variants = {
  hide: {
    scale: 0,
  },
  idle: {
    scale: 1,
  },
  hover: {
    scale: 2,
  },
  clicked: {
    scale: 0.5,
  },
};

export const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const { hover, clicked, visible } = useCursorStore();

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };
    useCursorStore.getState().enable();
    document.body.classList.add("custom-cursor");
    window.addEventListener("mousemove", moveCursor);

    document.addEventListener("mouseup", useCursorStore.getState().onMouseUp);
    document.addEventListener(
      "mousedown",
      useCursorStore.getState().onMouseDown
    );
    document.addEventListener("mouseleave", useCursorStore.getState().hide);
    document.addEventListener("mouseenter", useCursorStore.getState().show);
    return () => {
      useCursorStore.getState().disable();
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", moveCursor);

      document.removeEventListener(
        "mouseup",
        useCursorStore.getState().onMouseUp
      );
      document.removeEventListener(
        "mousedown",
        useCursorStore.getState().onMouseDown
      );
      document.removeEventListener(
        "mouseleave",
        useCursorStore.getState().hide
      );
      document.removeEventListener(
        "mouseenter",
        useCursorStore.getState().show
      );
    };
  }, []);

  return (
    <motion.div
      variants={variants}
      className="cursor"
      animate={
        visible ? (clicked ? "clicked" : hover ? "hover" : "idl") : "hide"
      }
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  );
};
