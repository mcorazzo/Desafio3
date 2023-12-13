import { ActivityIndicator } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import ProductsByCategoryScreen from "./src/screens/ProductsByCategoryScreen";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");

  const [fontLoaded] = useFonts({
    "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontLoaded) return <ActivityIndicator />;

  const onSelectCategory = (category) => {
    setCategorySelected(category);
  };
  
  return (
    <>      
      {categorySelected ? (
        <ProductsByCategoryScreen category={categorySelected} />
      ) : (
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
      )}
    </>
  );
}
