import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const [text, setText] = useState(null)

  const handleButtonPress: VoidFunction = () => {
    Alert.alert('Do you want to set Text', 'Set text upper?', [{text: 'Set', onPress: ()=>setText(()=> 'Setted from the button')}, {text: 'Del', onPress: ()=> setText(null)}])
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <Text numberOfLines={1} onPress={()=> Alert.alert('Lorem ipsum dolor sit amet consectetur adipisicing elit.')} >Lorem...</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      {text? <Text>{text}</Text> : null}
      <Button
        title="Set Up Text"
        touchSoundDisabled
        color={'pink'}
        onPress={handleButtonPress}
      />
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonYellow:{
    backgroundColor: 'yellow',
    color: '#000'
  }
});
