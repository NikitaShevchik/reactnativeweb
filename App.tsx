import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Press me"
        touchSoundDisabled
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Button
        title="Press me"
        touchSoundDisabled
        color="#f194ff"
        onPress={() => Alert.alert('AAAAAAAAAAAAAAAAAAAA')}
      />
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
