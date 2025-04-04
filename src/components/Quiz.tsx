import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Paper,
  LinearProgress,
} from '@mui/material';
import { questions, Question } from '../data/questions';

interface QuizProps {
  onComplete: (score: number, wrongAnswers: number[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);

  // Shuffle questions on component mount
  useEffect(() => {
    // Create a copy of the questions array
    const questionsCopy = [...questions];
    
    // Fisher-Yates shuffle algorithm
    for (let i = questionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
    }
    
    setShuffledQuestions(questionsCopy);
    setAnswers(Array(questionsCopy.length).fill(''));
  }, []);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    const incorrect: number[] = [];

    answers.forEach((answer, index) => {
      if (answer === shuffledQuestions[index].correctAnswer) {
        score++;
      } else {
        incorrect.push(index);
      }
    });

    setWrongAnswers(incorrect);
    onComplete(score, incorrect);
  };

  // Don't render anything until questions are shuffled
  if (shuffledQuestions.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h5">Loading quiz...</Typography>
      </Box>
    );
  }

  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  const currentQuestionData = shuffledQuestions[currentQuestion];
  const options = [
    { label: 'A', value: currentQuestionData.optionA },
    { label: 'B', value: currentQuestionData.optionB },
    { label: 'C', value: currentQuestionData.optionC },
    { label: 'D', value: currentQuestionData.optionD },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ mb: 4, height: 10, borderRadius: 5 }}
      />
      
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Question {currentQuestion + 1} of {shuffledQuestions.length}
        </Typography>
        
        <Typography variant="h5" sx={{ mb: 4 }}>
          {currentQuestionData.question}
        </Typography>

        <FormControl component="fieldset" sx={{ width: '100%' }}>
          <RadioGroup
            value={answers[currentQuestion]}
            onChange={handleAnswerChange}
          >
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.value}
                control={<Radio />}
                label={`${option.label}. ${option.value}`}
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={answers[currentQuestion] === ''}
          >
            {currentQuestion === shuffledQuestions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Quiz; 