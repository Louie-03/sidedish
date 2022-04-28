import React from "react";
import Loader from "components/Loader";
import Carousel from "components/Carousel";
import { Container, Header } from "./style";

// 캐러셀
const IMAGE_COUNT = 4;
const MEAL_IMAGE_SIZE = 300;
const parentWidth = 1280;

const MealContainer = ({ meals }) => {
  const { mealHeader, mealCards } = meals;
  return (
    <Container>
      <Header>{mealHeader}</Header>
      {mealCards.length ? <Carousel cards={mealCards} /> : <Loader />}
    </Container>
  );
};

export default MealContainer;
