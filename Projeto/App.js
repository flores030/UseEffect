import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [nomes, setNomes] = useState([
    'Ana Maria',
    'Bruno Alves',
    'Carlos José',
    'Daniel Martins',
    'Efraim Gomes',
    'Francisco Junior'
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={nomes}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default App;
