import {  StyleSheet,  View, Text, TouchableHighlight  } from 'react-native';
import { onPressInterface } from '../Types/Types';
import { Entypo } from '@expo/vector-icons';

export default function ListItem({element, onPress}: {element: any, onPress: onPressInterface}) {
    return (
        <>
        <TouchableHighlight>
            <View style={styles.flexitem}>
                <View style={styles.item}>
                    <Text style={styles.text}>{element.text}</Text>
                </View>
                <View>
                    <Entypo onPress={()=> onPress(element.key)} name="cross" size={34} color="white" />
                </View>
            </View>
        </TouchableHighlight>
        </>
    );
}


const styles = StyleSheet.create({
    item:{
        backgroundColor:  '#fc75a3',
        borderRadius: 10,
        width: 250,
        marginBottom: 5,
    },
    text:{
        padding: 20,
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    delete:{
        color: '#000',
        backgroundColor: 'yellow',
        width: 50,
        height: 50
    },
    flexitem:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
