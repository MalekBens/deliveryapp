import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
var categoryLink = "https://img.freepik.com/free-psd/sale-discount-offer-icon-isolated-3d-render-illustration_47987-7809.jpg?w=826&t=st=1669234866~exp=1669235466~hmac=6d9b2b462a6df14187c05049741bf9fe5df76955ca4986917c5fbf5bf62b8157"

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Cards */}
      <CategoryCard
        imgUrl={categoryLink}
        title="Test"
      />
      <CategoryCard
        imgUrl={categoryLink}
        title="Test"
      />
      <CategoryCard
        imgUrl={categoryLink}
        title="Test"
      />
      <CategoryCard
        imgUrl={categoryLink}
        title="Test"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=1380&t=st=1669233244~exp=1669233844~hmac=d0c23888c033a0c27cd8b507a2541677d5b1b9662776f18c190c15febad4df4b"
        title="Test"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=1380&t=st=1669233244~exp=1669233844~hmac=d0c23888c033a0c27cd8b507a2541677d5b1b9662776f18c190c15febad4df4b"
        title="Test"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=1380&t=st=1669233244~exp=1669233844~hmac=d0c23888c033a0c27cd8b507a2541677d5b1b9662776f18c190c15febad4df4b"
        title="Test"
      />
    </ScrollView>
  );
};

export default Categories;
