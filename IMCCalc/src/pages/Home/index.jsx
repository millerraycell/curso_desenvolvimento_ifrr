import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import imagem from '../../../assets/background.jpg'


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

const styles = StyleSheet.create({
    imagem:{
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
},
    header:{
        marginTop: 100,
        alignItems: 'center',
        justifyContent : "center",
    },

    container: {
        flex: 1,
    },

    main:{
        padding : 32,
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

    input:{
        alignItems:"center",
    },  

    inputButton:{
        width: 300,
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