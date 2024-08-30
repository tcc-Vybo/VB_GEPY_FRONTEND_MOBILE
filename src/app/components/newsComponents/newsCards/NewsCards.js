import { View } from "react-native";
import { CardNewsView, CardNewsViewLeft, CardNewsViewRight, CardNewsImageViewLeft, CardNewsImageViewRight, CardNewsImage } from "./styles";
import { useEffect, useState } from "react";

export default function NewsCards({cardTipe}) {
  const [stateTest, setStateTest] = useState();

  useEffect(() => {
    setStateTest(cardTipe);
  });

  
  return (
    <View>
      {stateTest === 1 ? (
        <CardNewsView>
        {/* Coloque sombras aqui */}
          <CardNewsImageViewLeft>
            {/* Coloque sombras aqui */}
            <CardNewsImage
              source={{ uri: "https://placehold.co/400.png?text=Image+1" }}
            />
          </CardNewsImageViewLeft>
          <CardNewsViewRight></CardNewsViewRight>
        </CardNewsView>
      ) : (
        <CardNewsView>
          <CardNewsViewLeft></CardNewsViewLeft>
          <CardNewsImageViewRight>
            <CardNewsImage
              source={{ uri: "https://placehold.co/400.png?text=Image+1" }}
            />
          </CardNewsImageViewRight>
        </CardNewsView>
      )}
    </View>
  );
}
