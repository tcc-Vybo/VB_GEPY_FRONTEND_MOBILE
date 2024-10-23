import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import UserHeader from '../../components/userHeader';

import { ParentView, ParentViewContent, ChildrenViewContent } from "./styles"

export default function Boletim() {
  return (
    <ParentView>
      <UserHeader />
      <ParentViewContent>
        <ChildrenViewContent style={styles.boxWithShadow}>
          
        </ChildrenViewContent>
      </ParentViewContent>
      
      <StatusBar style="auto" />
    </ParentView>
  );
}

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7
  },
});
