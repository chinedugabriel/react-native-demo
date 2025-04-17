import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, RefreshControl } from 'react-native';

interface itemProps{
    title: string;
    body: string;
}
type ListRenderItemInfo = any;

const FetchWithPullToRefresh = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      if (!refreshing) setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getData();
  };

  if (loading && !refreshing) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item: any) => item.id.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#4B4BB9']} />
      }
      renderItem={({ item }: any ) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
};

export default FetchWithPullToRefresh;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    margin: 7,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  error: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});
