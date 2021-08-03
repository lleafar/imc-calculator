import React, {useState, useEffect} from "react" 
import {View, Text} from "react-native"
import {LinearGradient} from 'expo-linear-gradient';
import styles from "./style";

const ProgressBar = (props) => {
    const [oldProp, setProp] = useState(null);
    const [tick,setTick] = useState(styles.tick);

    useEffect(() => {
        if(oldProp != props.num){
            setTick(switchTickInBar())
            setProp(props.num)
        }
    });

    function switchTickInBar(){
        switch(props.num){
            case 1: return styles.abaixo;
            case 2: return styles.ideal;
            case 3: return styles.poucoAcima;
            case 4: return styles.acima;
            case 5: return styles.obesidade;
            default: return styles.tick;
        }
    }

    return(
        <View style={styles.progressContext}>
           <LinearGradient colors={['green','yellow','red']} style={styles.progressBar} start={{x: 0, y: 0.5}} end={{x: 1, y:0.5}}>
               <Text style={tick}>|</Text>
           </LinearGradient> 
           <Text style={styles.textForm}>{props.classificacao}</Text>
        </View>
    );
}

export default ProgressBar
