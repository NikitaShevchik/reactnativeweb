import {useState} from 'react'
import {  StyleSheet,  View, TextInput, Button, Text, Platform, SafeAreaView  } from 'react-native';
import { callbackFormInterface } from '../Types/Types';

export default function FormComponent({callback}: callbackFormInterface) {
    const [text, setText] = useState('')
    const onChange = (text: string) =>{
        setText(text)
    }
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='I want todo...'/>
            <Button onPress={()=> callback(text)} color={Platform.OS === 'android' ? '#17181f' : '#fff'}title='Add ToDo'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 40,
        fontSize: 16,
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
    }
});
