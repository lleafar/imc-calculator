import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    progressBar:{
        alignItems:"center",
        borderRadius: 50,
        width: "50%",
        height: 5,
        top: 50
    },
    tick:{
        color: '#fff',
        fontWeight:'bold',
        fontSize: 30,
        height: 25,
        top: -15,
    },
    abaixo:{
        color: '#fff',
        fontWeight:'bold',
        fontSize: 30,
        height: 25,
        top: -15,
        paddingLeft: 150,
    },
    ideal:{
        color: '#fff',
        fontWeight:'bold',
        fontSize: 30,
        height: 25,
        top: -15,
        paddingRight: 150,
    },
    poucoAcima:{
        color: '#fff',
        fontWeight:'bold',
        fontSize: 30,
        height: 25,
        top: -15,
        paddingRight: 0,
    },
    acima:{
        color: '#fff',
        fontWeight:'bold',
        fontSize: 30,
        height: 25,
        top: -15,
        paddingLeft: 50,
    },
    obesidade:{
        color: '#fff',
        fontWeight:'bold',
        fontSize: 30,
        height: 25,
        top: -15,
        paddingLeft: 150,
    },
    progressContext: {
        bottom: 0,
        alignItems: "center",
        width: "100%",
        height: "20%", 
    },
    textForm:{
        color:"#fff",
        paddingLeft: 12,
        fontSize: 15,
        fontWeight: "bold"
    },
});

export default styles