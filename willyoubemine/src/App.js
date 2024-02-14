import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import YesAndNoContext from './components/Buttons/YesAndNoContext';
import YesAndNo from './components/Buttons/YesAndNo';
import WillYouBeMyValentine from './components/MainText/WillYouBeMyValentine';
import { Typography, Stack, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F58EA6',
      contrastText: '#FBFBFF'
    },

    secondary: {
      main: '#A063CF',
      contrastText: '#FBFBFF'
    },
  }
})


const valentinePhrases = ['Will you be my valentine?', 'For forever?', 'And always?', 'Like forever and ever and always?', 'And ever and ever and ever?'];
const yesPhrases = ['Yes', 'Of Course!', 'Absolutely', 'How many times do I have to say it? YES!', 'You are so annoying, YES!'];
const finalMessage = 'Sabrina Danielle Brown, I love you with all of my heart, body and soul. I promise to cherish you, to honor you, to respect you, to protect you, to encourage you, to support you, to comfort you, and to be your best friend. I promise to be faithful to you, and to be there for you in good times and in bad. I promise to be your partner and equal in all things. There is no one else I would rather spend my life with.'

function App() {

  const [index, setIndex] = useState(0);

  const handleYesClick = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  if (index < yesPhrases.length ) {
  return (
    <ThemeProvider theme={theme}>
      <YesAndNoContext.Provider
        value={{ yesText: yesPhrases[index], onYesClick: handleYesClick }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          style={{ marginTop: "10rem", padding: "2rem"}}
        >
          <WillYouBeMyValentine text={valentinePhrases[index]} />
        </Box>
        <YesAndNo />
      </YesAndNoContext.Provider>
    </ThemeProvider>
  );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          style={{ marginTop: "10rem", padding: "5rem" }}
        >
          <Typography variant="body1" color="secondary">
            {" "}
            {finalMessage}{" "}
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="center">
          <Button
            onClick={() => window.location.reload()}
            variant="contained"
            color="secondary"
          >
            Reset
          </Button>
        </Stack>
      </ThemeProvider>
    );
  }
}

export default App;
