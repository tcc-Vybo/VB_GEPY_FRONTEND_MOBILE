import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import LogoPng from '../../assets/Logo.png';
import { LoggedUser, LoggedUserName, Logo, SafeHeader } from './styles';

export default function UserHeader() {
  return (
    <SafeHeader>
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
