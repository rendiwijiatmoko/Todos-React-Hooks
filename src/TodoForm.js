import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button
}from 'react-native';

const TodoForm = ({saveTodo}) => {
    const [todos, setTodos] = useState('');

    add = () => {
        setValue(...todos, todos)
    }

    return(
        <View>
            <TextInput 
                placeholder="Add todos"
                value = {todos}
                onChangeText = {e => setTodos(e)}
            />
            <Button 
                title="add"
                onPress={() => {add}}
            />
            <Text>
                {todos}
            </Text>
        </View>
    );
}

export default TodoForm;