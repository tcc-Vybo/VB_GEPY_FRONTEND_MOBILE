import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Button } from 'react-native';
import UserHeader from '../../components/userHeader';

import NewsCards from '../../components/newsComponents/newsCards/NewsCards';

const cards = [1, 2, 3, 4, 5, 6, 7];

export default function News() {
  return (
    <View style={styles.container}>
      <UserHeader />

      <ScrollView>
        {cards.map((card) => {
          return (
            <NewsCards
              key={card}
              cardTipe={card}
            />
          );
        })}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D7A1FF',
    paddingBottom: 20,
  },
  scrollView: {
    backgroundColor: '#000',
    width: 200,
    height: 400,
  },
});
