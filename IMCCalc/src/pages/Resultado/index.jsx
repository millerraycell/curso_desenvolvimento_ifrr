import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'

const Resultado = () => {
    const { goBack } = useNavigation();
    const route = useRoute();
    const valor = route.params.imc;

    function description(value){
        if(value <= 18.5)
        {
            return(<Text style = {style.textDescription}>Índices abaixo de 18.5 não são considerados saudáveis segundo a OMS, entretanto, a pessoa pode muito bem apresentar um biotipo longilíneo e ser saudável. </Text>)
        }
        else if(value >= 32)
        {
            return(<Text style = {style.textDescription}>Índice IMC muito elevado, categoria Obesidade II, procure um médico ou um nutricionista </Text>)
        }
    }

    function backHome(){
        goBack();
    }
    
    return (
        <View style = {style.container}>
            <View style={style.header}>
                <Text style={style.textHeader}>
                    Seu IMC: {valor}
                </Text>
                {description(valor)}
            </View>

            <TouchableOpacity 
                onPress = {backHome}
                title = "Voltar para Home"
                style = {style.button}
            ><Text style={style.buttonContent}>Voltar</Text></TouchableOpacity>

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
    },

    textDescription :{
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Roboto_500Medium',
        textAlign:"justify"
    },

    button : {
        marginTop: 10,
        backgroundColor:"#FFF",
        borderRadius:8,
        width:100,
        height: 20, 
    },

    buttonContent : {
        textAlign:"center"
    }
})

export default Resultado;