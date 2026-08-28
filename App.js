import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  TextInput,
  Pressable,
} from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import styles from './styles';
import { db, firebaseReady, collection, addDoc, getDocs } from './firebase';

export default function App() {
  const { width } = useWindowDimensions();
  const isWide = width >= 600;

  const [userName, setUserName] = useState('Maria');
  const [isOnline, setIsOnline] = useState(true);
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Revisar layout', category: 'Trabalho' },
    { id: 2, text: 'Atualizar status', category: 'Pessoal' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [quantity, setQuantity] = useState(1);
  const [firebaseMessage, setFirebaseMessage] = useState('');

  const categories = ['Todos', 'Pessoal', 'Trabalho', 'Estudo'];

  const products = [
    { id: 1, name: 'Camiseta Flex', price: 'R$ 59,90', stock: 4 },
    { id: 2, name: 'Mochila Pro', price: 'R$ 249,90', stock: 0 },
    { id: 3, name: 'Fone Studio', price: 'R$ 189,90', stock: 8 },
  ];

  const filteredTasks =
    selectedCategory === 'Todos'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  useEffect(() => {
    const loadTasksFromFirebase = async () => {
      if (!db) {
        setFirebaseMessage('Firebase ainda não configurado. Configure o projeto para salvar os dados.');
        return;
      }

      try {
        const snapshot = await getDocs(collection(db, 'tasks'));
        const firebaseTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          category: doc.data().category,
        }));

        if (firebaseTasks.length > 0) {
          setTasks(firebaseTasks);
          setFirebaseMessage('Dados carregados do Firebase com sucesso.');
        } else {
          setFirebaseMessage('Firebase conectado, mas ainda não há tarefas salvas.');
        }
      } catch (error) {
        setFirebaseMessage('Não foi possível carregar os dados do Firebase.');
      }
    };

    loadTasksFromFirebase();
  }, []);

  const addTask = async () => {
    if (!taskInput.trim()) return;

    const category = selectedCategory === 'Todos' ? 'Pessoal' : selectedCategory;
    const newTask = { text: taskInput.trim(), category };

    if (db) {
      try {
        const docRef = await addDoc(collection(db, 'tasks'), newTask);
        setTasks((currentTasks) => [
          ...currentTasks,
          { ...newTask, id: docRef.id },
        ]);
        setFirebaseMessage('Tarefa salva no Firebase.');
      } catch (error) {
        setFirebaseMessage('Erro ao salvar no Firebase.');
      }
    } else {
      setTasks((currentTasks) => [
        ...currentTasks,
        { id: Date.now(), ...newTask },
      ]);
      setFirebaseMessage('Firebase não configurado, dados salvos localmente.');
    }

    setTaskInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />

      <View style={[styles.main, isWide ? styles.row : styles.column]}>
        <View style={styles.leftColumn}>
          <Card title="Perfil" content="Informações do usuário e resumo rápido." />

          <View style={styles.infoBox}>
            <Text style={styles.sectionTitle}>Status do usuário</Text>
            <TextInput
              value={userName}
              onChangeText={setUserName}
              placeholder="Digite seu nome"
              style={styles.input}
            />

            <Pressable
              style={[styles.toggleButton, isOnline ? styles.toggleButtonOn : styles.toggleButtonOff]}
              onPress={() => setIsOnline((prev) => !prev)}
            >
              <Text style={styles.toggleButtonText}>{isOnline ? 'Disponível agora' : 'Offline no momento'}</Text>
            </Pressable>
          </View>

          <View style={styles.taskBox}>
            <Text style={styles.sectionTitle}>Lista de tarefas</Text>

            <View style={styles.filterRow}>
              {categories.map((category) => (
                <Pressable
                  key={category}
                  style={[
                    styles.filterButton,
                    selectedCategory === category && styles.filterButtonActive,
                  ]}
                  onPress={() => setSelectedCategory(category)}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      selectedCategory === category && styles.filterButtonTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.taskInputRow}>
              <TextInput
                value={taskInput}
                onChangeText={setTaskInput}
                placeholder="Nova tarefa"
                style={[styles.input, styles.taskInput]}
              />
              <Pressable style={styles.addButton} onPress={addTask}>
                <Text style={styles.addButtonText}>Adicionar</Text>
              </Pressable>
            </View>

            {filteredTasks.map((task) => (
              <View key={task.id} style={styles.taskItem}>
                <Text style={styles.taskText}>• {task.text}</Text>
                <Text style={styles.taskCategory}>{task.category}</Text>
              </View>
            ))}

            {firebaseMessage ? <Text style={styles.firebaseText}>{firebaseMessage}</Text> : null}
          </View>
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

          <View style={styles.quantityBox}>
            <Text style={styles.sectionTitle}>Quantidade do pedido</Text>
            <View style={styles.quantityRow}>
              <Pressable style={styles.qtyButton} onPress={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
                <Text style={styles.qtyButtonText}>-</Text>
              </Pressable>

              <Text style={styles.quantityValue}>{quantity}</Text>

              <Pressable style={styles.qtyButton} onPress={() => setQuantity((prev) => prev + 1)}>
                <Text style={styles.qtyButtonText}>+</Text>
              </Pressable>
            </View>
            <Text style={styles.quantityInfo}>Olá, {userName}! Você selecionou {quantity} item(ns).</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito com Flexbox • Projeto autoral</Text>
      </View>
    </SafeAreaView>
  );
}
