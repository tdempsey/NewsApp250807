import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, Linking, TouchableOpacity } from 'react-native';
import Parser from 'rss-parser';

const parser = new Parser();

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      try {
        const feed = await parser.parseURL('https://example.com/feed');
        setItems(feed.items);
      } catch (err) {
        console.error('Failed to load feed', err);
      }
    }
    loadFeed();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
