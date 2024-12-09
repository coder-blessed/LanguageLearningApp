import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const lessons = [
  { id: '1', title: 'Introduction to Spanish' },
  { id: '2', title: 'Basic Vocabulary' },
  { id: '3', title: 'Common Phrases' },
];

const LessonsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lessons</Text>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.lessonCard}>
            <Text style={styles.lessonTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  lessonCard: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  lessonTitle: {
    fontSize: 18,
    color: 'black',
  },
});

export default LessonsScreen;
