import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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