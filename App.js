import React from 'react';
import { SafeAreaView, View, Text, StatusBar, useWindowDimensions } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import styles from './styles';

export default function App() {
  const { width } = useWindowDimensions();
  const isWide = width >= 600;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />

      <View style={[styles.main, isWide ? styles.row : styles.column]}>
        <View style={styles.leftColumn}>
          <Card title="Perfil" content="Informações do usuário e resumo rápido." />
          <Card title="Atividades" content="Lista de tarefas ou cards com resumo." />
        </View>

        <View style={styles.rightColumn}>
          <Card title="Detalhes" content="Conteúdo mais amplo, usa flex para ocupar espaço." large />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito com Flexbox • Projeto autoral</Text>
      </View>
    </SafeAreaView>
  );
}
