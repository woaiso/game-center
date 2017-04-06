import * as React from 'react';

export const Page = (props) => (
  <div className="page">{props.children}</div>
);

export const Content = (props) => (
  <div className="content">
    <div className="fixed-content" />
    <div className="scroll-content">
      {props.children}
    </div>
  </div>
);

interface SliderProps {
  className?: string
}

export const Slider = ({ className = '' }) => (
  <div className={`swiper-container ${className}`}>
    <div className="swiper-wrapper">
      <div className="swiper-slide">Slide 1</div>
      <div className="swiper-slide">Slide 2</div>
      <div className="swiper-slide">Slide 3</div>
    </div>
    <div className="swiper-pagination" />
  </div>
);
