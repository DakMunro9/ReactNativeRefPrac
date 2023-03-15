
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // fetch

  const getProductsFromApi = () => {
    return fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        console.log (json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  getProductsFromApi()

  return (
    <View style={styles.container}>
      <Text>1Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
