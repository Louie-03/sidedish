import React, { useCallback, useState } from "react";
import MealCard from "components/MealCard";
import { AngleLeft, AngleRight, CarouselContainer, Container, IndexStatusContainer } from "./style";

const getCarouselDesign = (width, imageCount, imageSize) => {
  const size = imageSize;
  let count = imageCount;

  while (width < count * size) {
    if (count < 2) break;
    count -= 1;
  }
  const gap = Math.floor((width - imageSize * count) / count);
  // BUG: gap값 구할 때 count가 1이면 Infinity가 출력 됨
  return { gap, size };
};

const DEFAULT_CAROUSEL_INDEX = 0;
const IMAGE_COUNT = 4;
const MEAL_IMAGE_SIZE = 300;
const parentWidth = 1280;

// FIXME: -1, +1 같은 매직넘버 줄어야할까요?
const Carousel = ({ cards }) => {
  const carouselLegnth = Math.ceil(cards.length / IMAGE_COUNT);
  const MAX_CAROUSEL_INDEX = carouselLegnth - 1;
  const { gap, size } = getCarouselDesign(parentWidth, IMAGE_COUNT, MEAL_IMAGE_SIZE);
  const [headIndex, setHeadIndex] = useState(DEFAULT_CAROUSEL_INDEX);
  const [currentDisplay, setCurrentDisplay] = useState(headIndex * parentWidth);
  const checkLimitIndex = useCallback(
    (newIndex) => {
      if (newIndex > MAX_CAROUSEL_INDEX) {
        newIndex = DEFAULT_CAROUSEL_INDEX;
      } else if (newIndex < DEFAULT_CAROUSEL_INDEX) {
        newIndex = MAX_CAROUSEL_INDEX;
      }
      setCurrentDisplay(newIndex * parentWidth * -1);
      return newIndex;
    },
    [MAX_CAROUSEL_INDEX]
  );
  const moveLeft = useCallback(() => {
    setHeadIndex((prev) => checkLimitIndex(prev - 1));
  }, [checkLimitIndex]);
  const moveRight = useCallback(() => {
    setHeadIndex((prev) => checkLimitIndex(prev + 1));
  }, [checkLimitIndex]);
  return (
    <Container>
      <AngleLeft onClick={moveLeft} gap={gap} />
      <IndexStatusContainer gap={gap} activeIndex={headIndex}>
        {Array(carouselLegnth).fill(<li></li>)}
      </IndexStatusContainer>
      <CarouselContainer gap={gap} currentDisplay={currentDisplay}>
        <ul>
          {cards.map(({ id, ...mealInfo }) => (
            <MealCard key={id} mealInfo={mealInfo} size={size} />
          ))}
        </ul>
      </CarouselContainer>
      <AngleRight onClick={moveRight} gap={gap} />
    </Container>
  );
};

export default Carousel;
