import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native'

const Resultado = () => {
    const { goBack } = useNavigation();
    const route = useRoute();
    const valor = route.params.imc;

    function backHome(){
        goBack();
    }
    return (
        <View style = {style.container}>
            <View style={style.header}>
                <Text style={style.textHeader}>
                    Seu IMC é:
                    {valor !== undefined ? <Text>{valor}</Text> : <Text>Insira um valor válido</Text>}
                </Text>
                <Text sytle={style.textHeader}>Descrição do tipo de dieta</Text>
            </View>

            <Button 
                onPress = {backHome}
                title = "Voltar para Home"
            ></Button>

        </View>
    );

}
const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 32,
        backgroundColor:'#9A9EC7'
    },
    
    header : {
        marginTop: 40,
    },

    textHeader:{
        fontFamily: 'Roboto_700Bold',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    }
})

export default Resultado;