import { DISCOUNT_TYPE } from "constants";
import React from "react";
import { getMealImage } from "utils";
import { Card, CardInfo, DiscoutType, PriceContainer } from "./style";

function MealCard({ mealInfo }) {
  const { productName, description, event: discountType, fixedPrice, image, originalPrice } = mealInfo;
  return (
    <Card>
      <img src={getMealImage(image)} alt={productName} />
      <CardInfo>
        <h4>{productName}</h4>
        <p>{description}</p>
        <PriceContainer>
          <span>{fixedPrice}</span>
          <span>{originalPrice}</span>
        </PriceContainer>
        {discountType && (
          <DiscoutType isLaunchingDiscount={discountType === DISCOUNT_TYPE.launching}>{discountType}</DiscoutType>
        )}
      </CardInfo>
    </Card>
  );
}
export default MealCard;
