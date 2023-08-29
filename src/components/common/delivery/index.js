import React from "react";
import "./delivery.css";
import Filters from "../filters";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";
import ExploreSection from "../exploreSection";
import { restaurants } from "../../../data/restaurant";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="ri-equalizer-fill"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+ ",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="ri-arrow-up-down-line"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurants in Bengaluru"
      />
    </div>
  );
};

export default Delivery;
