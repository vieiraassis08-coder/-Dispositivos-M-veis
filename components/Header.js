import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo} />
      <Text style={styles.title}>Meu App Flexbox</Text>
    </View>
  );
}
