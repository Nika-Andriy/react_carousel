import React, { useState } from 'react';
import './Carousel.scss';

type Props = {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};

const Carousel: React.FC<Props> = ({ images, itemWidth, frameSize, step }) => {
  const [translateX, setTranslateX] = useState(0);
  const gap = 5;
  const maxStartIndex = images.length - frameSize;
  const scrollNext = () => {
    setTranslateX(prev => Math.min(prev + step, maxStartIndex));
  };

  const scrollPrev = () => {
    setTranslateX(prev => Math.max(prev - step, 0));
  };

  const isDisabledPrev = translateX === 0;
  const isDisabledNext = translateX === maxStartIndex;

  return (
    <div className="Carousel">
      <button
        type="button"
        onClick={() => {
          if (!isDisabledPrev) {
            scrollPrev();
          }
        }}
        className={`button ${isDisabledPrev ? 'disabled' : ''}`}
        data-cy="previous"
      >
        {'<'}
      </button>

      <div
        className="Container"
        style={{ width: `${frameSize * itemWidth}px` }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(-${translateX * (itemWidth + gap)}px)`,
          }}
        >
          {images.map((img, index) => {
            return (
              <li key={index}>
                <img
                  src={img}
                  alt={index.toString()}
                  className="Carousel-img"
                  width={itemWidth}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => {
          if (!isDisabledNext) {
            scrollNext();
          }
        }}
        className={`button ${isDisabledNext ? 'disabled' : ''}`}
        data-cy="next"
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
