import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import styled, { css } from "styled-components";

const Root = styled.div`
  .awssld__wrapper {
    height: 400px;
  }
  .awssld__bullets {
    bottom: 22px;
    z-index: 4;
  }
  .awssld__bullets button {
    background: #9d9d9d;
    width: 12px;
    height: 12px;
    margin: 5px 7px;
    border-radius: 50%;
  }
  .awssld__bullets .awssld__bullets--active {
    background: #32b60b;
    width: 20px;
    height: 9px;
    border-radius: 30%;
  }
  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-right:after {
    background-color: #848484;
  }
  .awssld__controls button {
    &:hover {
      background-color: #ececec9e;
    }
  }
`;

const ImageCarousel = () => {
  return (
    <Root>
      <AwesomeSlider
        animation="openAnimation"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src="https://webstaging.yevry.com/static/media/Banner-yevry.c84fd74a.png" />
        <div data-src="https://webstaging.yevry.com/static/media/Banner-yevry.c84fd74a.png" />
        <div data-src="https://webstaging.yevry.com/static/media/Banner-yevry.c84fd74a.png" />
      </AwesomeSlider>
    </Root>
  );
};

export default ImageCarousel;
