
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'





export default function App(){

  

  const [age,setAge] = useState([]);
  const [input,setinput] = useState('')
  const textinputer = (val) => {
      setinput(val)
  } 
 
  
  const getdata = async () =>{
    try{
    
     await AsyncStorage.getItem('token');
     const user = await AsyncStorage.getItem('token');
     const userage = JSON.parse(user)
     
       setAge(userage)
      //  setAge(data => [...data,{key:Math.random().toString(),age:userage.age}])
       console.group(userage)
       
      
     
    }catch(e){
      console.log(e);
    }
 }

  const saveData = async () =>{
    

    try{
     
     
      setAge(age => [...age,{key:Math.random().toString(),age:input}]);
      if(age !== null){
        const data = JSON.stringify(age)
        await AsyncStorage.setItem('token',data);
      }
     
    }catch(e){
      console.log(e)
    }
  }

  




  

  return(
    <ScrollView>
      <Text style={{marginTop:100}}>Hello World</Text>
     <TextInput onChangeText={textinputer} />
      <Button onPress={saveData} title='save data' />
      <Button onPress={getdata} title='retrive data' />
      {/* <Button onPress={clear} title='clear data' /> */}
      {/* <Button onPress={printer} title='print data' /> */}
      <View >
                    
                    {age.map((task)=> <Text key={task.key}  >{task.age}</Text>)}
      </View>
      </ScrollView>
     

   
  )
}


// []{}

