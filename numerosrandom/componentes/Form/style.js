import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fromContext: {
        width:"100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#134FAF",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    from:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },

    formLAbel:{
        color:"#000000",
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: "bold"
    },
    formInput:{
        width: "90%",
        backgroundColor: "#fffafa",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonSorteio:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        backgroundColor: "#46892B",
        paddingTop:14,
        paddingBottom: 14,
        marginLeft:12,
        margin:30
    },
    textButtonS:{
        fontSize:20,
        color: "#EAF12D"
    },
    resultado:{
        flex: 1,
        marginTop: 15,
        paddingTop:60,
        borderRadius: 100,
        alignItems: 'center',
        width: "100%",
    },

    numeroSorteado:{
        fontSize:48,
        color:"#EAF12D",
        fontWeight: "bold"
    },

    textoInformacao:{
        fontSize:18,
        color:"#EAF12D",
        fontWeight:'bold',
    }
})

export default styles