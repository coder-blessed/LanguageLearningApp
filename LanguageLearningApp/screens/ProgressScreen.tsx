import React from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native';

const ProgressScreen = () => {
  const totalLessons = 10;
  const completedLessons = 7;
  const quizPerformance = 80; // percentage

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Progress</Text>
      <View style={styles.progressSection}>
        <Text style={styles.label}>Lessons Completed: {completedLessons}/{totalLessons}</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={completedLessons / totalLessons}
          color="tomato"
        />
      </View>
      <View style={styles.progressSection}>
        <Text style={styles.label}>Quiz Performance: {quizPerformance}%</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={quizPerformance / 100}
          color="tomato"
        />
      </View>
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
    marginBottom: 20,
    color: 'black',
  },
  progressSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
});

export default ProgressScreen;
