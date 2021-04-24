import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "react-feather";
import { RemoveScroll } from "react-remove-scroll";
import styled from "styled-components";

import { hoverProps } from "./Hoverable";

export const PageClose = styled.button({
  position: "absolute",
  zIndex: 10,
  top: 15,
  right: 15,
  padding: 0,
  margin: 0,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  "@media (min-width: 480px)": {
    top: 30,
    right: 30,
  },
});

export const StyledRemoveScroll = styled(RemoveScroll)({
  height: "100%",
  width: "100%",
  overflowX: "hidden",
  overflowY: "auto",
  textAlign: "center",
  zIndex: 2,
  "&:after": {
    width: 0,
    height: "100%",
    content: "''",
    display: "inline-block",
    "vertical-align": "middle",
  },
});

export type OverlayPage = {
  Component: React.ComponentType<{ page: OverlayPage; onClose: () => void }>;
  id: string | number;
  image?: string;
  icon?: string;
  backgroundColor?: string;
};

//
export interface IOverlayProps {
  page: OverlayPage;
  onClose: () => void;
}
export const Overlay = (props: IOverlayProps) => {
  return (
    <AnimatePresence>
      {props.page && (
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
            <PageClose onClick={props.onClose} {...hoverProps}>
              <X size={40} />
            </PageClose>
          </motion.div>
          <StyledRemoveScroll>
            {props.page.Component && (
              <props.page.Component page={props.page} onClose={props.onClose} />
            )}
          </StyledRemoveScroll>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
