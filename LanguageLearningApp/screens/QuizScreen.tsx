import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const quizQuestions = [
  {
    id: '1',
    question: 'What is the Spanish word for "Hello"?',
    options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
    correctAnswer: 'Hola',
  },
  {
    id: '2',
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
];

const QuizScreen = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerPress = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      alert(`Quiz completed! Your score is ${score}/${quizQuestions.length}`);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz</Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <FlatList
        data={currentQuestion.options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedAnswer === item && { backgroundColor: '#d3f4ff' },
            ]}
            onPress={() => handleAnswerPress(item)}
            disabled={!!selectedAnswer}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedAnswer && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={styles.nextButtonText}>Next Question</Text>
        </TouchableOpacity>
      )}
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
  question: {
    fontSize: 18,
    marginBottom: 15,
    color: 'black',
  },
  optionButton: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: 'tomato',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default QuizScreen;
