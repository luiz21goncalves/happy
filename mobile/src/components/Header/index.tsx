import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Container, Title, Button } from './styles';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const { goBack, navigate } = useNavigation();

  function handleNavigateToHomePage() {
    navigate('OrphanagesMap');
  }

  return (
    <Container>
      <Button onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </Button>

      <Title>{title}</Title>

      {showCancel ? (
        <Button onPress={handleNavigateToHomePage}>
          <Feather name="x" size={24} color="#ff669d" />
        </Button>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Header;
