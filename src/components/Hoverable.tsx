import React from "react";
import { useCursorStore } from "../stores/useCustorStore";

export const hoverProps = {
  onMouseEnter: () =>
    window.requestAnimationFrame(useCursorStore.getState().onMouseEnter),
  onMouseLeave: () =>
    window.requestAnimationFrame(useCursorStore.getState().onMouseLeave),
};

export const useHoverableProps = () => {
  return hoverProps;
};

export const Hoverable: React.FC = (props) => {
  const hoverProps = useHoverableProps();
  return <div {...hoverProps}>{props.children}</div>;
};
