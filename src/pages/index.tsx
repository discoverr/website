import React from "react";
// import { useRouteData } from "react-static";
// import { Post } from "types";

import { Volume2 } from "react-feather";
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";
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
import { useInView } from "react-intersection-observer";

import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const SampleNextArrow = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: CustomArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

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
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
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

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Player = () => {
  const muteTimerRef = React.useRef<NodeJS.Timeout>();
  const playerRef = React.useRef<HTMLVideoElement>();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.9,
  });
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) {
      handleShowMute();
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  }, [inView]);

  const handleShowMute = () => {
    if (muteTimerRef.current) clearTimeout(muteTimerRef.current);
    controls.start("visible");
    muteTimerRef.current = setTimeout(() => {
      controls.start("hidden");
    }, 2000);
  };

  const handleMute = () => {
    playerRef.current.muted = !playerRef.current.muted;
  };
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      onMouseMove={handleShowMute}
      onMouseLeave={() => controls.start("hidden")}
    >
      <video
        ref={playerRef}
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: gridBorderRadius,
        }}
      >
        <source
          src="https://previews.customer.envatousercontent.com/h264-video-previews/65102354-7ae4-4d1b-935e-d0bbdb6b9675/31285894.mp4"
          type="video/mp4"
        />
      </video>
      <motion.button
        variants={variants}
        animate={controls}
        initial="hidden"
        whileHover={{
          opacity: 1,
          scale: 1.1,
        }}
        whileTap={{ opacity: 1, scale: 1.3 }}
        style={{
          position: "absolute",
          right: 24,
          bottom: 24,
          border: "none",
          backgroundColor: "rgba(66,66,66,0.7)",
          padding: 16,
          borderRadius: 16,
          color: "#fff",
          width: 64,
          height: 64,
        }}
        onClick={handleMute}
        {...hoverProps}
      >
        <Volume2 />
      </motion.button>
    </div>
  );
};

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
              <Player />
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
            Component: BrainTile,
          }}
          item2={{
            id: 8,
            image:
              "https://festivalofauthors.ca/wp-content/uploads/2020/10/Cardinal-Cliff-Headshot_square.png",
            Component: BrainTile,
          }}
          item3={{
            id: 9,
            image:
              "https://www.tedxmarin.org/wp-content/uploads/Headshot-Harash-300px-square.jpg",
            Component: BrainTile,
          }}
          item4={{
            id: 10,
            image:
              "https://www.psrbrokerage.com/wp-content/uploads/alex-earthy-headshot-square.png",
            Component: BrainTile,
          }}
          onSelect={setSelectedItem}
        />
      </Container>

      <Footer />
      <Overlay page={selectedItem} onClose={() => setSelectedItem(null)} />
    </AnimateSharedLayout>
  );
};
