import React from "react" 
import {View, Text, Share, TouchableOpacity} from "react-native"
import styles from "./style";

export default function ResultImc(props){



    return(
        <View>
            <Text style={styles.textRes}>{props.messageResultImc}</Text>
            <Text style={styles.textResImc}>{props.resultImc}</Text>
        </View>
    );
}