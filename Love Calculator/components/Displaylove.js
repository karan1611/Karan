import { AppLoading } from 'expo';
import React from 'react'
import { StyleSheet, Text, View  } from 'react-native';



const Displaylove=(prop)=>{
    console.log(prop)
    
    if(prop.data=="loading"){
        return<Text style={styles.text}>Wait For Results</Text>
    }
    if(prop.data.message){
        return <Text style= {styles.text}>Sorry !! somthing went wrong calculate again</Text>
    }
    else{
        return(
            <View style= {styles.container}>
            <Text style= {styles.text}>{prop.data.percentage}</Text>
            <Text style= {styles.text}>{prop.data.result}</Text>
        </View>
    )
} 
}
export default Displaylove;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    text:{
        fontSize: 30,
        textAlign:"center"
    }
});
