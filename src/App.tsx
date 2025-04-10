import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Container, Box, Button, Typography } from '@mui/material';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { Analytics } from "@vercel/analytics/react"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);

  const handleStartQuiz = () => {
    setIsQuizStarted(true);
    setShowResults(false);
    setScore(0);
    setWrongAnswers([]);
  };

  const handleQuizComplete = (finalScore: number, incorrectAnswers: number[]) => {
    setScore(finalScore);
    setWrongAnswers(incorrectAnswers);
    setShowResults(true);
    setIsQuizStarted(false);
  };

  return (
    <>
    <Analytics />
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4,
          }}
        >
          {!isQuizStarted && !showResults && (
            <Box textAlign="center">
              <Typography variant="h3" component="h1" gutterBottom>
                Forest Management Quiz
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleStartQuiz}
                sx={{ mt: 4 }}
              >
                Attend Quiz
              </Button>
            </Box>
          )}

          {isQuizStarted && (
            <Quiz onComplete={handleQuizComplete} />
          )}

          {showResults && (
            <Results
              score={score}
              wrongAnswers={wrongAnswers}
              onRestart={handleStartQuiz}
            />
          )}
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App; 
