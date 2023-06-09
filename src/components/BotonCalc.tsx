import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string;
    color?: any ;
    ancho?: boolean;
    accion: (numeroTexto: string) => void;
}

export const BotonCalc = ( { texto, color = '#2D2D2D', ancho=false, accion }:Props ) => {
    return (
        <TouchableOpacity
            onPress={ () => accion( texto ) }
        >
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


