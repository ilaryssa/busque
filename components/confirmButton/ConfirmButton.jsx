import { View } from 'react-native';
import { Button } from 'react-native-paper'
import styles from './style'

export default function ConfirmButton({type, message}) {
    return(
        <View>
            <Button
                mode='outlined'
                labelStyle={{fontSize: 32, lineHeight: 50, }} 
                textColor='#fffeee'
                style={styles.button}
                onPress={() => console.log(message)}
            >
                {type}
            </Button>

        </View>

    );
}