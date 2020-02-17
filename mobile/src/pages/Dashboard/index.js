import React from 'react';
import { View } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import Background from '~/components/Background';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
