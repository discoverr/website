import React from "react";
// import { useRouteData } from "react-static";
// import { Post } from "types";
import { AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

import { hoverProps } from "../components/Hoverable";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import {
  FullWidthItem,
  gridBorderRadius,
  GridSection,
  LargeItem,
} from "components/Grid";
import {
  PageContainer,
  PageDescription,
  PageHero,
  PageHeroContent,
  PageHeroImage,
  PageTitle,
} from "components/Page";
import { OverlayPage, Overlay } from "components/Overlay";

const brainSVG = require("../assets/brain.svg");
// const usersSVG = require("../assets/users.svg");
const playSVG = require("../assets/play.svg");
// const mailSVG = require("../assets/mail.svg");
const heartSVG = require("../assets/heart.svg");
const vcardSVG = require("../assets/vcard.svg");

const MainItem = (props: { backgroundColor: string }) => {
  return (
    <LargeItem backgroundColor={props.backgroundColor}>
      <div
        style={{
          margin: "auto",
          padding: 50,
          display: "block",
          marginTop: 0,
          marginLeft: 0,
        }}
      >
        <h4
          style={{
            color: "#fff",
            fontSize: 54,
            fontWeight: 300,
            fontFamily: "Montserrat",
            margin: 0,
            padding: 0,
          }}
        >
          Hvor software bliver til <b>kunst</b> og kunder bliver til{" "}
          <b>venner</b>.
        </h4>
        <hr
          style={{
            backgroundColor: "#fff",
            height: 2,
            width: 60,
            border: "none",
            margin: "50px 0",
            display: "block",
          }}
        />
      </div>
    </LargeItem>
  );
};

const StyledLinkList = styled.ul({
  display: "table",
  margin: 0,
  padding: 0,
  "& > li": {
    position: "relative",
    marginRight: 20,
    paddingRight: 20,
    float: "left",
    display: "inline-block",
    listStyle: "none",
  },
  "& > li > a, & > li > button": {
    display: "block",
    fontWeight: 500,
    position: "relative",
    color: "#000000",
    textDecoration: "none",
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
  },
  "& > li:after": {
    top: "50%",
    right: "-2px",
    width: "4px",
    height: "4px",
    content: '""',
    lineHeight: 1,
    position: "absolute",
    borderRadius: "100%",
    backgroundColor: "#dddddd",
    transform: "translateY(-50%)",
  },
});

const SecondaryItem = (props: { backgroundColor: string }) => {
  return (
    <LargeItem backgroundColor={props.backgroundColor}>
      <div
        style={{
          margin: "auto",
          padding: 50,
          display: "block",
          marginTop: 0,
          marginLeft: 0,
        }}
      >
        <h4
          style={{
            color: "#000",
            fontSize: 54,
            fontWeight: 300,
            fontFamily: "Montserrat",
            margin: 0,
            padding: 0,
          }}
        >
          Vi er stolte over <b>100%</b> kunde tilfredshed lige siden{" "}
          <b>12.12.12</b>
        </h4>
        <button
          style={{
            color: "#fff",
            height: 45,
            border: "none",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "Poppins",
            lineHeight: "45px",
            padding: "0 30px",
            borderRadius: gridBorderRadius / 2,
            textAlign: "center",
            backgroundColor: "#000",
            margin: "60px 0",
          }}
          {...hoverProps}
        >
          Let's Talk
        </button>
        <StyledLinkList>
          <li>
            <a href="#" {...hoverProps}>
              Facebook
            </a>
          </li>
          <li>
            <a href="#" {...hoverProps}>
              Facebook
            </a>
          </li>
          <li>
            <a href="#" {...hoverProps}>
              Facebook
            </a>
          </li>
        </StyledLinkList>
      </div>
    </LargeItem>
  );
};

const VideoTile = ({}: { page: OverlayPage; onClose: () => void }) => (
  <PageContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div
      style={{
        maxWidth: "100%",
        width: 1200,
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/jk6sz25OZgw?controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          height: 600,
          backgroundColor: "black",
          width: "100%",
        }}
      ></iframe>
    </div>
  </PageContainer>
);

const BrainTile = ({
  page,
  onClose,
}: {
  page: OverlayPage;
  onClose: () => void;
}) => (
  <PageContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero>
      <PageHeroImage
        layoutId={`${page.id}`}
        onClick={onClose}
        style={{
          backgroundColor: page.backgroundColor,
          backgroundImage: page.icon
            ? "url('" + page.icon + "')"
            : page.image
            ? "url('" + page.image + "')"
            : undefined,
          backgroundSize: page.icon ? "50%" : page.image ? "100%" : undefined,
        }}
        {...hoverProps}
      />
      <PageHeroContent>
        <PageTitle>
          The public is more familiar with bad design than good design.
        </PageTitle>
        <PageDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          vulputate ipsum, id dignissim ante. Cras posuere eros justo, pulvinar
          dignissim neque cursus non. Ut sed purus vestibulum lacus tristique
          bibendum.
        </PageDescription>
      </PageHeroContent>
    </PageHero>
  </PageContainer>
);

const PeopleTile = ({
  page,
  onClose,
}: {
  page: OverlayPage;
  onClose: () => void;
}) => (
  <PageContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero>
      <PageHeroImage
        layoutId={`${page.id}`}
        onClick={onClose}
        style={{
          backgroundColor: page.backgroundColor,
          backgroundImage: page.icon
            ? "url('" + page.icon + "')"
            : page.image
            ? "url('" + page.image + "')"
            : undefined,
          backgroundSize: page.icon ? "50%" : page.image ? "100%" : undefined,
        }}
        {...hoverProps}
      />
      <PageHeroContent>
        <PageTitle>
          The public is more familiar with bad design than good design.
        </PageTitle>
        <PageDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          vulputate ipsum, id dignissim ante. Cras posuere eros justo, pulvinar
          dignissim neque cursus non. Ut sed purus vestibulum lacus tristique
          bibendum.
        </PageDescription>
      </PageHeroContent>
    </PageHero>
    <div
      style={{
        marginTop: 100,
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/jk6sz25OZgw?controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          height: 600,
          backgroundColor: "black",
          width: "100%",
        }}
      ></iframe>
    </div>
  </PageContainer>
);

const PlaneTile = ({
  page,
  onClose,
}: {
  page: OverlayPage;
  onClose: () => void;
}) => (
  <PageContainer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <PageHero>
      <PageHeroImage
        layoutId={`${page.id}`}
        onClick={onClose}
        style={{
          backgroundColor: page.backgroundColor,
          backgroundImage: page.icon
            ? "url('" + page.icon + "')"
            : page.image
            ? "url('" + page.image + "')"
            : undefined,
          backgroundSize: page.icon ? "50%" : page.image ? "100%" : undefined,
        }}
        {...hoverProps}
      />
      <PageHeroContent>
        <PageTitle>
          The public is more familiar with bad design than good design.
        </PageTitle>
        <PageDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          vulputate ipsum, id dignissim ante. Cras posuere eros justo, pulvinar
          dignissim neque cursus non. Ut sed purus vestibulum lacus tristique
          bibendum.
        </PageDescription>
      </PageHeroContent>
    </PageHero>
    <div
      style={{
        marginTop: 100,
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/jk6sz25OZgw?controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          height: 600,
          backgroundColor: "black",
          width: "100%",
        }}
      ></iframe>
    </div>
  </PageContainer>
);

export default () => {
  // const { posts }: { posts: Post[] } = useRouteData();
  const [selectedItem, setSelectedItem] = React.useState<OverlayPage | null>(
    null
  );
  const enteredRed = React.useRef(false);

  if (selectedItem) {
    enteredRed.current === true;
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <Container
        initial="hidden"
        animate={selectedItem === null ? "enter" : "hide"}
      >
        <GridSection
          color="#000"
          mainItem={<MainItem backgroundColor="#000" />}
          item1={{ id: 2, icon: playSVG, Component: VideoTile }}
          item2={{ id: 3, icon: brainSVG, Component: BrainTile }}
          item3={{ id: 4, icon: heartSVG, Component: PeopleTile }}
          item4={{ id: 5, icon: vcardSVG, Component: PlaneTile }}
          onSelect={setSelectedItem}
        />
        <FullWidthItem backgroundColor="#222">
          <div style={{ position: "relative" }}>
            <div
              style={{ display: "block", width: "100%", paddingTop: "50%" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            >
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: gridBorderRadius,
                }}
              >
                <source
                  src="https://previews.customer.envatousercontent.com/h264-video-previews/c61473fe-5bba-4b42-b4a1-6c061ea1cccf/21464794.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </FullWidthItem>
        <GridSection
          color="#f2f2f2"
          mainRight
          mainItem={<SecondaryItem backgroundColor="#eee" />}
          item1={{
            id: 7,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB16S8HQZMkH8NFwn4pOL4TtDxfLKG8zHgig&usqp=CAU",
            Component: PlaneTile,
          }}
          item2={{
            id: 8,
            image:
              "https://festivalofauthors.ca/wp-content/uploads/2020/10/Cardinal-Cliff-Headshot_square.png",
            Component: PlaneTile,
          }}
          item3={{
            id: 9,
            image:
              "https://www.tedxmarin.org/wp-content/uploads/Headshot-Harash-300px-square.jpg",
            Component: PlaneTile,
          }}
          item4={{
            id: 10,
            image:
              "https://www.psrbrokerage.com/wp-content/uploads/alex-earthy-headshot-square.png",
            Component: PlaneTile,
          }}
          onSelect={setSelectedItem}
        />
      </Container>

      <Footer />
      <Overlay page={selectedItem} onClose={() => setSelectedItem(null)} />
    </AnimateSharedLayout>
  );
};
