import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import LogoPng from '../../assets/Logo.png';
import { LoggedUser, LoggedUserName, Logo, SafeHeader } from './styles';
import { StyleSheet } from 'react-native';


export default function UserHeader() {
  return (
    <SafeHeader style={styles.boxWithShadow}>
      <Logo source={LogoPng} />
      <LoggedUser>
        <LoggedUserName>Yara Mendes</LoggedUserName>
        <Ionicons
          name="person-circle"
          size={32}
          color="#6700b3"
        />
      </LoggedUser>
    </SafeHeader>
  );
}
const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
  },
});