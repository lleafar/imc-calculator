import React from "react" 
import {View, TextInput, Text, TouchableOpacity, Image, Vibration, Keyboard, Pressable} from "react-native"
import ResultImc from "./ResultImc/";
import ProgressBar from "./ProgressBar/index";
import styles from "./style";

export default function Form(){

const male = "../../../assets/male.png"
const female = "../../../assets/female.png"
const [heigth, setHeight] = React.useState(null)
const [weigth, setWeight] = React.useState(null)
const [messageImc, setMessageImc] = React.useState("preencha o peso e altura")
const [imc, setImc] = React.useState(null)   
const [textButton, setTextButton] = React.useState("Calcular")
const [isMalePressed, setIsMalePressed] = React.useState(true)
const [isFemalePressed, setIsFemalePressed] = React.useState(false)
const [classificacao, setClassificacao] = React.useState("")
const [tick, setTick] = React.useState(null)
const [errorMessage, setErrorMessage] = React.useState(null)

function imcCalculator(){
    var pes = (weigth/(heigth*heigth))
    setImc(pes)

    if(isMalePressed){
       
        if(pes < 20.7){
          //abaixo
          setClassificacao("Abaixo do Peso")
          setTick(1)
        }else if(pes < 26.5){
          //ideal
          setClassificacao("Peso Ideal");
          setTick(2)
        }else if(pes < 27.9){
          //pouco acima do peso  
          setClassificacao("Pouco Acima do Peso")
          setTick(3)
        }else if(pes < 31.2){
          //acima do peso
          setClassificacao("Acima do Peso")
          setTick(4)
        }else if(pes >= 31.2){
            setClassificacao("Obesidade")
            setTick(5)
        }else if(isFemalePressed){
            if(pes< 19.10){
                //abaixo
                setClassificacao("Abaixo do Peso")
                setTick(1)
              }else if(pes < 25.90){
                //ideal
                setClassificacao("Peso Ideal")
                setTick(2)
              }else if(pes < 27.40){
                //pouco acima do peso  
                setClassificacao("Pouco Acima do Peso")
                setTick(3)
              }else if(pes < 32.40){
                //acima do peso
                setClassificacao("Acima do Peso")
                setTick(4)
              }else if(pes > 32.40){
                  setClassificacao("Obesidade")
                  setTick(5)
              }
            }
    }

}

function validationImc(){
    if(weigth != null && heigth != null){
        Keyboard.dismiss()
        imcCalculator();
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é:")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    }else{
        validateFields()
        setImc(null)
        setTick(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
        setClassificacao("")
    }
}

function validateFields(){
    if(errorMessage == null){
        setErrorMessage("Campo obrigatório*")
        Vibration.vibrate()
    }
}

function selectMale(){
    setIsMalePressed(true)
    setIsFemalePressed(false)
}

function selectFemale(){
    setIsMalePressed(false)
    setIsFemalePressed(true) 
}

    return(
        
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            
            <View style={styles.form}>
               <View style={styles.iconBox}>
                <TouchableOpacity onPress={() => selectMale()}>
                    <Image source={require(male)} style={isMalePressed ? styles.imagePressed: styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => selectFemale()}>
                    <Image source={require(female)} style={isFemalePressed ? styles.imagePressed : styles.image}/>
                </TouchableOpacity>
               </View>
               <Text style={styles.textForm}>Altura</Text>
               <Text style={styles.error}>{errorMessage}</Text>
               <TextInput style={styles.input} onChangeText={setHeight} value={heigth} placeholder="Ex. 1.75" placeholderTextColor = "#595959" keyboardType="numeric"/>
               <Text style={styles.textForm}>Peso</Text>
               <Text style={styles.error}>{errorMessage}</Text>
               <TextInput style={styles.input} onChangeText={setWeight} value={weigth} placeholder="Ex. 75.36" placeholderTextColor = "#595959" keyboardType="numeric"/> 
               <TouchableOpacity style={styles.button} onPress={() => validationImc()}>
                    <Text style={styles.textForm}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            {imc != null ? 
            <View style={styles.results}>
                  <ResultImc messageResultImc={messageImc} resultImc={imc.toFixed(2)}/>
                  <ProgressBar classificacao={classificacao} num={tick}/>
            </View>
           : <Text/>}
        </Pressable>
    );
}

