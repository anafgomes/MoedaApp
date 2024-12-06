import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const DollarScreen = () => {
  const [dollarRate, setDollarRate] = useState(null);
  const [error, setError] = useState(null);

  const fetchDollarRate = async () => {
    try {
      const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL');
      const data = response.data;
      setDollarRate(data.USDBRL.ask);
    } catch (err) {
      setError('Erro ao carregar os dados. Tente novamente mais tarde.');
      console.error('Erro ao obter cotação do dólar', err);
    }
  };

  useEffect(() => {
    fetchDollarRate();
    const interval = setInterval(fetchDollarRate, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/dolar.png')} style={styles.image} />
      <Text style={styles.title}>O dólar está:</Text>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <Text style={styles.rate}>
          {dollarRate ? `R$ ${dollarRate}` : 'Carregando...'}
        </Text>
      )}
      <Button title="Atualizar Cotação" onPress={fetchDollarRate} color="#ADE858" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00162A',
  },
  title: {
    fontSize: 24,
    color: '#ADE858',
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  rate: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  error: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
});

export default DollarScreen;