import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Button } from 'react-native';
import UserHeader from '../../components/userHeader';

import NewsCards from '../../components/newsCards/NewsCards';

const cards = [1, 2, 3];

export default function News() {
  return (
    <View style={styles.container}>
      <UserHeader />

      <ScrollView style={{paddingTop: 5, paddingBottom: 5}}>
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
    backgroundColor: '#8300E4',
    paddingBottom: 20,
  },
  scrollView: {
    backgroundColor: '#000',
    width: 200,
    height: 400,
  },
});
