import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1
    },

    imagem:{
        flex: 1,
    },
    
    header : {
        padding: 32,
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

    imagemTabela:{
        flex:1,
        marginTop: -350
    },

    tabela:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },

    botao : {
        alignItems: "center"
    },  

    button : {
        backgroundColor:"#FFF",
        borderRadius:8,
        width: 100,
        height: 20, 
    },

    buttonContent : {
        textAlign:"center"
    }
})