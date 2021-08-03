import React, {useState, useEffect} from "react" 
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
    return setImc((weigth/(heigth*heigth)).toFixed(2))
}

useEffect(() => setProgressBar());


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

function setProgressBar(){
    if(isMalePressed){
        if(parseFloat(imc) < 20.70){
          //abaixo
          setClassificacao("Abaixo do Peso")
          setTick(1)
        }else if(parseFloat(imc) < 26.50){
          //ideal
          setClassificacao("Peso Ideal");
          setTick(2)
        }else if(parseFloat(imc) < 27.90){
          //pouco acima do peso  
          setClassificacao("Pouco Acima do Peso")
          setTick(3)
        }else if(parseFloat(imc) < 31.20){
          //acima do peso
          setClassificacao("Acima do Peso")
          setTick(4)
        }else if(parseFloat(imc) >= 31.20){
            setClassificacao("Obesidade")
            setTick(5)
        }
    }else if(isFemalePressed){
        if(parseFloat(imc) < 19.10){
            //abaixo
            setClassificacao("Abaixo do Peso")
            setTick(1)
          }else if(parseFloat(imc) < 25.90){
            //ideal
            setClassificacao("Peso Ideal")
            setTick(2)
          }else if(parseFloat(imc) < 27.40){
            //pouco acima do peso  
            setClassificacao("Pouco Acima do Peso")
            setTick(3)
          }else if(parseFloat(imc) < 32.40){
            //acima do peso
            setClassificacao("Acima do Peso")
            setTick(4)
          }else if(parseFloat(imc) > 32.40){
              setClassificacao("Obesidade")
              setTick(5)
          }
        }

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
                  <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                  <ProgressBar classificacao={classificacao} num={tick}/>
            </View>
           : <Text/>}
        </Pressable>
    );
}

