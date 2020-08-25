import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

import imagem from '../../../assets/background.jpg'
import styles from './styles'


const Home = () => {
    const {navigate} = useNavigation();
    const [heightInput, onChangeHeight] = useState("");
    const [weightInput, onChangeWeight] = useState("");

    const resultado = () => {
        const valor = Number(weightInput)/(Number(heightInput)**2)
        navigate('Resultado', {imc:Math.floor(valor)})
        onChangeHeight('')
        onChangeWeight('')
    }

    const isValid = (weightInput.length > 0 && heightInput.length > 0)

    
    return(
        <View style = {styles.container}>
            <ImageBackground
                source = {imagem}
                style = {styles.imagem}>

                <View style = {styles.header}>
                    <Text style={styles.title}>IMC Calc</Text>
                </View>


                <View style={styles.main}>
                    <Text style = {styles.text}>Insira a sua altura</Text>
                    
                    <View style = {styles.input}>
                        <TextInput
                            style = {styles.inputButton}
                            keyboardType= 'number-pad'
                            value = {heightInput}
                            onChangeText={text => onChangeHeight(text)}
                            placeholder = "Exemplo: 1.75"
                        />       
                    </View>

                    <Text style = {styles.text}>Insira o seu peso</Text>
                    <View style = {styles.input}>
                        <TextInput 
                            style = {styles.inputButton}
                            keyboardType= 'number-pad'
                            value = {weightInput}
                            onChangeText={text => onChangeWeight(text)}
                            placeholder ='Insira o peso em quilos'
                        />
                    </View>

                    <View style = {styles.botao}>
                        <TouchableOpacity 
                            onPress = {resultado}
                            title = "Calcular IMC"
                            disabled = {!isValid}
                            style = {styles.button}>
                        <Text style={styles.buttonContent}>Calcular IMC</Text>
                        </TouchableOpacity>

                    </View>    
                </View>
            </ImageBackground>
        </View>
    );
};


export default Home;