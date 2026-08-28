import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function Card({ title, content, large }) {
  return (
    <View style={[styles.card, large ? styles.cardLarge : null]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );
}
