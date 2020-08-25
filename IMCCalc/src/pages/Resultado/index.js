import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'

import styles from './styles';
import imagem from '../../../assets/background.jpg';
import tabela from '../../../assets/tabela.jpg';

const Resultado = () => {
    const { goBack } = useNavigation();
    const route = useRoute();
    const valor = route.params.imc;

    function description(value){
        if(value <= 18.5)
        {
            return(<Text style = {styles.textDescription}>Índices abaixo de 18.5 não são considerados saudáveis segundo a OMS, entretanto, a pessoa pode muito bem apresentar um biotipo longilíneo e ser saudável. </Text>)
        }
        else if(value >= 32)
        {
            return(<Text style = {styles.textDescription}>Índice IMC muito elevado, categoria Obesidade II, procure um médico ou um nutricionista </Text>)
        }
    }

    function backHome(){
        goBack();
    }
    
    return (
        <View style = {styles.container}>

            <ImageBackground
                source = {imagem}
                style = {styles.imagem}>

                <View style={styles.botao}>
                    <TouchableOpacity 
                        onPress = {backHome}
                        title = "Voltar para a Home"
                        style = {styles.button}
                    ><Text style={styles.buttonContent}></Text></TouchableOpacity>
                </View>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>
                        Seu IMC: {valor}
                    </Text>
                    {description(valor)}
                </View>


                <View style={styles.imagemTabela}>
                    <Image
                        source = {tabela}
                        style = {styles.tabela}/>
                </View>



            </ImageBackground>

        </View>
    );

}

export default Resultado;