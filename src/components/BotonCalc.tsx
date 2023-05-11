import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: String;
    color: any ;
}

export const BotonCalc = ( {texto, color = '#9B9B9B'}:Props ) => {
    return (
        <View 
            style={{
                ...styles.boton,
                backgroundColor:color

            }}
        >
            <Text style={styles.botonTexto}>{texto}</Text>
        </View>
    )
}


