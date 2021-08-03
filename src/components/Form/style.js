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
    textProgressBar:{
        color:"#fff",
        paddingLeft: 12,
        fontSize: 15,
        fontWeight: "bold"
    },
    iconBox:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image:{
        opacity: 0.3,
        marginTop: -20,
        width: 100, 
        height: 100,
          
    },   
    imagePressed:{
        opacity: 1,
        marginTop: -20,
        width: 100, 
        height: 100,
    },  
    formContext: {
        borderRadius:10,
        backgroundColor: "#1B1B1B",
        color: '#fff',
        bottom: 0,
        alignItems: "center",
        width: "80%",
        height: "70%", 
        elevation: 20,
        shadowColor: "#595959",

    },    
    results: {
        backgroundColor: "#1B1B1B",
        color: '#fff',
        width: "100%",
        height: "10%",
        bottom: 0,
        alignItems: "center",
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop: 30,
        padding: 20, 

    },
    input:{
        color:"#fff",
        borderRadius: 50,
        backgroundColor: "#202020",
        paddingLeft: 12,
        marginBottom: 10,
    },
    textForm:{
        color:"#fff",
        paddingLeft: 12,
        fontSize: 15,
        fontWeight: "bold"
    },
    button:{
        borderRadius: 50,
        backgroundColor: '#4A00E0',
        alignItems: 'center',
        padding: 5,
        marginTop: 20,
    },
    error:{
        fontSize: 10,
        color:'red',
        paddingLeft: 12,
        fontWeight: 'bold'
    }
});

export default styles