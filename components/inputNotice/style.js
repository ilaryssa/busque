import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
    },
    textInput: {
        padding: 10,
        borderColor: '#003566',
        borderWidth: 1,
        margin: 12,
        borderRadius: 28,
        height: 200,
    },
    button: {
        width: '30%', 
        alignSelf: 'flex-end',
        marginEnd: 20,
        backgroundColor: '#003566'
    },
    buttonDelete: {
        margin: 20,
        backgroundColor: '#fffeee',
    }
})

export default styles;