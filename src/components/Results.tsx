import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { questions } from '../data/questions';

interface ResultsProps {
  score: number;
  wrongAnswers: number[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ score, wrongAnswers, onRestart }) => {
  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Quiz Results
        </Typography>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h2" color="primary" gutterBottom>
            {score}/{totalQuestions}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {percentage.toFixed(1)}%
          </Typography>
        </Box>

        {wrongAnswers.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Questions to Review:
            </Typography>
            <List>
              {wrongAnswers.map((questionIndex) => {
                const question = questions[questionIndex];
                return (
                  <React.Fragment key={questionIndex}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" color="error">
                            Question {questionIndex + 1}: {question.question}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" color="success.main">
                            Correct Answer: {question.correctAnswer}
                          </Typography>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </List>
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onRestart}
          >
            Try Again
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Results; 