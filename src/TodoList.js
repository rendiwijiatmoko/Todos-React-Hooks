import React, {useState} from 'react';
import{
    View,
    FlatList
}from 'react-native';

const TodoList = () => {
    const [value, setValue] = useState([
        {
            id:1,
            todos:'React'
        },
        {
            id:2,
            todos:'Flutter'
        }
    ]);

    const Item = ({title}) => {
        <View>
            {title}
        </View>
    }

    return(
        <View>
            <FlatList
                data = {value}
                renderItem = {({ item }) => <Item title={item.todos} />}
                keyExtractor= {item => item.id}
            />
        </View>
    );
}

export default TodoList;