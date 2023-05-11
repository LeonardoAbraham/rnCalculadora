import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: String;
    color?: any ;
    ancho?: boolean;
}

export const BotonCalc = ( {texto, color = '#2D2D2D', ancho=false}:Props ) => {
    return (
        <TouchableOpacity>
            <View 
                style={{
                    ...styles.boton,
                    backgroundColor:color,
                    width:(ancho) ? 180:80
                }}
            >
                <Text 
                    style={{
                        ...styles.botonTexto
                    }}
                >
                    {texto}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


