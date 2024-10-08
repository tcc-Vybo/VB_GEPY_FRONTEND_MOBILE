import { StyleSheet, Text } from 'react-native';
import {
  CardNewsView,
  CardNewsViewLeft,
  CardNewsViewRight,
  CardNewsImageViewLeft,
  CardNewsImageViewRight,
  CardNewsImage,
} from './styles';
import { useEffect, useState } from 'react';

export default function NewsCards({ cardTipe }) {
  const [stateTest, setStateTest] = useState();

  useEffect(() => {
    setStateTest(cardTipe);
  }, []);

  return (
    <>
      {cardTipe % 2 == 1 ? (
        <CardNewsView>
            <CardNewsImageViewLeft style={styles.boxWithShadow}>
              <CardNewsImage
                source={{ uri: 'https://placehold.co/400.png?text=Image+1' }}
              />
            </CardNewsImageViewLeft>
          <CardNewsViewRight style={styles.boxWithShadow}>
            <Text>1</Text>
          </CardNewsViewRight>
        </CardNewsView>
      ) : (
        <CardNewsView>
          <CardNewsViewLeft style={styles.boxWithShadow}>
            <Text>2</Text>
          </CardNewsViewLeft>
          <CardNewsImageViewRight style={styles.boxWithShadow}>
            <CardNewsImage
              source={{ uri: 'https://placehold.co/400.png?text=Image+2' }}
            />
          </CardNewsImageViewRight>
        </CardNewsView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 7.5,
  }
});
