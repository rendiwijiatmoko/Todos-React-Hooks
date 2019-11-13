import React from 'react';
import {
  View
} from 'react-native';

import TodoForm from './src/TodoForm';
import TodoList from './src/TodoList';

function App () {
  return(
    <View>
      <TodoForm />
      <TodoList /> 
    </View>
  );
}

export default App;