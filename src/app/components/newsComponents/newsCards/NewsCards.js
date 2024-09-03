import { Text } from "react-native";
import {
  CardNewsView,
  CardNewsViewLeft,
  CardNewsViewRight,
  CardNewsImageViewLeft,
  CardNewsImageViewRight,
  CardNewsImage,
} from "./styles";
import { useEffect, useState } from "react";
import { ShadowedView } from "react-native-fast-shadow";

export default function NewsCards({ cardTipe }) {
  const [stateTest, setStateTest] = useState();

  useEffect(() => {
    setStateTest(cardTipe);
  }, [cardTipe]);

  return (
    <>
      {stateTest === 1 ? (
        <CardNewsView>
          <CardNewsImageViewLeft>
            <ShadowedView
              style={{
                shadowOpacity: 0.4,
                shadowRadius: 12,
                shadowOffset: {
                  width: 5,
                  height: 3,
                },
              }}
            >
              <CardNewsImage
                source={{ uri: "https://placehold.co/400.png?text=Image+1" }}
              />
            </ShadowedView>
          </CardNewsImageViewLeft>
          <CardNewsViewRight>
            <Text>🙂</Text>
          </CardNewsViewRight>
        </CardNewsView>
      ) : (
        <CardNewsView>
          <CardNewsViewLeft></CardNewsViewLeft>
          <CardNewsImageViewRight>
            <CardNewsImage
              source={{ uri: "https://placehold.co/400.png?text=Image+2" }}
            />
          </CardNewsImageViewRight>
        </CardNewsView>
      )}
    </>
  );
}
