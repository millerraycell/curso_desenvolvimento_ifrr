import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';

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
            <View style = {styles.header}>
                <Text style={styles.title}>IMC Calc</Text>
            </View>


            <View style={styles.main}>
                <Text style = {styles.text}>Insira a sua altura</Text>
                <TextInput
                    style = {styles.inputButton}
                    keyboardType= 'number-pad'
                    value = {heightInput}
                    onChangeText={text => onChangeHeight(text)}
                    placeholder = "Exemplo: 1.75"
                />
                
                <Text style = {styles.text}>Insira o seu peso</Text>
                <TextInput 
                    style = {styles.inputButton}
                    keyboardType= 'number-pad'
                    value = {weightInput}
                    onChangeText={text => onChangeWeight(text)}
                    placeholder ='Insira o peso em quilos'
                />

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

        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        marginTop: 100,
        alignItems: 'center',
        justifyContent : "center",
    },

    container: {
        flex: 1,
        padding: 32,
        backgroundColor:'#9A9EC7'
    },

    main:{
        flex:1,
        justifyContent: 'center',
    },

    title:{
        fontFamily: "Roboto_700Bold",
        fontWeight: "700",
        fontSize: 50,
    },

    text:{
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        marginBottom : 10,
    }, 

    inputButton:{
        textAlign:"center",
        borderRadius:8,
        backgroundColor:'#FFFFFF',
        marginBottom: 10,
    },

    botao :{
        alignItems:"center"
    },

    button : {
        marginTop: 20,
        backgroundColor:"#FFF",
        borderRadius:8,
        width:100,
        height: 20, 
    },


    buttonContent : {
        textAlign:"center"
    }
})

export default Home;