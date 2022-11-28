import {  StyleSheet,  View, Text  } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>ToDo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingTop: 50,
        height: 85,
        backgroundColor: '#fc75a3'
    },
    text:{
        fontSize: 16,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center'
    }
});
