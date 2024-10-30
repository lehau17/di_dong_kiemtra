import React, {useState} from 'react';
import { View, Image, Text, Input, TextInput, TouchableOpacity } from 'react-native';

export default function Screen_01({navigation}) {


  const [name, setName] = useState("")
    
    




  return (
    <View style={{ flex: 1, alignItems :"center", justifyContent:"space-around", padding:10}}>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={{ width: '100%', height: '40%', borderRadius:20 }}
      />
      <Text style={{color:"purple", fontSize:20, fontWeight:700}}>MANAGE YOUR TASK</Text>
     
      <TextInput
        style={{border:"1px solid black", width:"80%", padding:10, borderRadius:20,fontWeight:700, color:"gray"}}
        placeholder="Enter your name ..."
        onChangeText={(text)=>{
          setName(text)
        }}
      />
      <TouchableOpacity style={{backgroundColor:"#0081f1", width:"50%", padding:15, borderRadius:20}} 
      
      
      onPress={()=>{
        if(name==""){
          return
        }
      navigation.navigate("Dashboard", {name: name})}}>
        <Text style={{textAlign:"center", color:"white", fontWeight:700}}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}
