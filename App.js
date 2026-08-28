import React from 'react';
import { SafeAreaView, View, Text, StatusBar, useWindowDimensions } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import styles from './styles';

export default function App() {
  const { width } = useWindowDimensions();
  const isWide = width >= 600;

  const userOnline = true;
  const products = [
    { id: 1, name: 'Camiseta Flex', price: 'R$ 59,90', stock: 4 },
    { id: 2, name: 'Mochila Pro', price: 'R$ 249,90', stock: 0 },
    { id: 3, name: 'Fone Studio', price: 'R$ 189,90', stock: 8 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />

      <View style={[styles.main, isWide ? styles.row : styles.column]}>
        <View style={styles.leftColumn}>
          <Card title="Perfil" content="Informações do usuário e resumo rápido." />

          <View style={styles.infoBox}>
            <Text style={styles.sectionTitle}>Status do usuário</Text>
            {userOnline ? (
              <Text style={styles.statusOnline}>Disponível agora</Text>
            ) : (
              <Text style={styles.statusOffline}>Offline no momento</Text>
            )}
          </View>

          <Card title="Atividades" content="Lista de tarefas ou cards com resumo." />
        </View>

        <View style={styles.rightColumn}>
          <Card title="Detalhes" content="Conteúdo mais amplo, usa flex para ocupar espaço." large />

          <View style={styles.productSection}>
            <Text style={styles.sectionTitle}>Estoque</Text>

            {products.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <View style={styles.productHeader}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                </View>

                {product.stock > 0 ? (
                  <Text style={styles.stockAvailable}>Em estoque: {product.stock} unidades</Text>
                ) : (
                  <Text style={styles.stockUnavailable}>Sem estoque no momento</Text>
                )}

                {product.stock > 0 ? (
                  <Text style={styles.actionButton}>Comprar</Text>
                ) : (
                  <Text style={styles.actionButtonDisabled}>Indisponível</Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito com Flexbox • Projeto autoral</Text>
      </View>
    </SafeAreaView>
  );
}
