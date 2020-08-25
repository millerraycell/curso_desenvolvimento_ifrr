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
        marginTop : -50,
        fontFamily: 'Roboto_700Bold',
        fontSize: 32,
    },

    textDescription :{
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Roboto_500Medium',
        textAlign:"justify"
    },

    imagemTabela:{
        flex: 1,
        padding: 32,
        marginTop: -350
    },

    tabela:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },

    botao : {
        marginTop: 40,
        marginLeft: 20,
    },
})