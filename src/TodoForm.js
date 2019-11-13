import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button
}from 'react-native';

const TodoForm = ({saveTodo}) => {
    const [value, setValeu] = useState('');

    return(
        <View>
            <TextInput 
                placeholder="Add todos"
                value = {value}
                onChangeText = {e => e.target.value}
            />
            <Button 
                title="add"
                onPress={() => alert('yo')}
            />
        </View>
    );
}

export default TodoForm;