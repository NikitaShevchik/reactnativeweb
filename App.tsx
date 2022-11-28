import { useState } from 'react';
// import {nanoid as id} from 'nanoid'
import {  StyleSheet,  View, Text, FlatList  } from 'react-native';
import FormInput from './components/FormInput';
import Header from './components/Header';
import ListItem from './components/ListItem';
import { callbackFormInterface } from './Types/Types';

function id(){
  return Date.now().toString()
}

export default function App() {
  const [todo, setTodo] = useState([
    {text: 'Make coffee', key: '1'},
    {text: 'Play GoF / Dota', key: '2'},
    {text: 'Task from Artyom', key: '3'},
    {text: 'Food', key: '4'},
  ])

  const handleClick:any = (todoText: string) => {
    if (todoText){
      setTodo([{text: todoText, key: id()}, ...todo])
    }
  }
  const handleOnPress: any = (key: string) => {
    setTodo(todo.filter(todo => todo.key !== key))
  }
  return (
    <View style={styles.main}>
      <Header/>
      <View style={styles.list}>
        <View style={{ width:'100%'}}>
          <FormInput callback={handleClick}/>
        </View>
        <FlatList style={styles.flatlist} data={todo} renderItem={({item}) => (
          <ListItem element = {item} onPress={handleOnPress}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#17181f',
  },
  list:{
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  flatlist:{
    marginTop: 5
  }
});
