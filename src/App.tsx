import React from "react";
import { Provider } from 'react-redux'
import './App.css'
import { Container, Typography, Box } from "@mui/material";
import store from './store/store';
import AddHabitForm from "./components/add-habit-form";


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habitya
          </Typography>
          <AddHabitForm />
        </Box>
      </Container>
    </Provider>
  );
};

export default App
