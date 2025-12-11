import { View } from 'react-native';
import { Button } from 'react-native-paper'
import styles from './style';

export default function CapacityButton({type}) {
    return(
        <View>
            <Button
                mode='outlined'
                labelStyle={{fontSize: 32, lineHeight: 50}}  
                textColor='#003566'
                style={styles.button}
            >
                {type}
            </Button>

        </View>

    );
}