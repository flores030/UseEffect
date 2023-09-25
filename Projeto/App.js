import React from 'react';
import { View, FlatList, Text } from 'react-native';

const nomes = [
  'Ana Maria',
  'Bruno Alves',
  'Carlos José',
  'Daniel Martins',
  'Efraim Gomes',
  'Francisco Junior',
];

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Lista de Usuários
      </Text>
      <FlatList
        data={nomes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
