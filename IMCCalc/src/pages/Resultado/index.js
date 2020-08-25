import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
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
            return(<Text style = {styles.textDescription}>
                Índices abaixo de 18.5 não são considerados saudáveis segundo a OMS, entretanto, a pessoa pode muito bem apresentar um biotipo longilíneo e ser saudável. 
                </Text>)
        }

        else if(value >= 18.5 && value <=24.9)
        {
            return(<Text style = {styles.textDescription}>
                Índice normal, fazendo exercícios, comendo corretamente, não se deve ter algum problema relacionado a peso
                </Text>)
        }

        else if(value >= 25 && value <=29.9)
        {
            return(<Text style = {styles.textDescription}>
                Índice elevado, relacionado a sobrepeso, procure um médico especializado e reorganize a sua saúde
                </Text>)
        }
        
        else if(value >= 30 && value <=34.9)
        {
            return(<Text style = {styles.textDescription}>
                Índice IMC muito elevado, categoria Obesidade II, procure um médico ou um nutricionista 
                </Text>)
        }

        else if(value >= 35.0 && value <=39.9)
        {
            return(<Text style = {styles.textDescription}>
                Obesidade Severa, grau II, se recomenda que você procure um nutricionista ou um médico especializado urgentemente
                </Text>)
        }

        else
        {
            return(<Text style = {styles.textDescription}>
                Obesidade Severa, grau III, se recomenda que você procure um nutricionista ou um médico especializado urgentemente
                </Text>)
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
                        title = "Voltar para a Home">
                        <Feather name = "arrow-left" 
                            size = {40}
                            color = "#000"/>
                    </TouchableOpacity>
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