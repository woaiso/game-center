import * as React from 'react';

export const Page = (props) => (
  <div className="page">{props.children}</div>
);

export const Content = (props) => (
  <div className="content">
    <div className={"fixed-content" + (props.withTab ? ' with-tab' : '')} />
    <div className={"scroll-content" + (props.withTab ? ' with-tab' : '')}>
      {props.children}
    </div>
  </div>
);

interface SliderProps {
  className?: string
}

const slideImg = require('./../images/slide.png');

export const Slider = ({ className = '' }) => (
  <div className={`swiper-container ${className}`}>
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <img src={slideImg} />
      </div>
      <div className="swiper-slide">
        <img src={slideImg} />
      </div>
      <div className="swiper-slide">
        <img src={slideImg} />
      </div>
    </div>
    <div className="swiper-pagination" />
  </div>
);
