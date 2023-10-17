import { View, Text,Image,ScrollView, FlatList, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import Homestyle from './style.js'
import { fakeActivity } from '../../fakeData/fakeActivity.js'
import { ListSymptomes } from '../../fakeData/fakeSymptome.js'
import { FakeDoctor } from '../../fakeData/fakeDoctor.js'
import { useNavigation } from '@react-navigation/native'

// import ListSymptomes from '../../fakeData/fakeSymptome.js'
//import SVG_HOSPITAL from "../../assets/imgs/svg/assets/imgs/svg/undraw_medicine_b-1-ol.svg"



const Home = ({navigation}) => {
  
  return (
    <ScrollView >
      <View style={ Homestyle.header }>
        <Text >Joel</Text>
        <Image style={{width:50,height:50,borderRadius:100,marginTop:20}} source={require('../../assets/jo.jpg')}/>
      </View>

      {/* fin header */}
     
     
      <FlatList
        data={fakeActivity} 
        keyExtractor={Item=>Item.id} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
        return (

          <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}  style={{flexDirection:'column',marginLeft:15,marginTop:15,marginBottom:15,backgroundColor:'white',padding:10,elevation:5}}>
            
            <Image style={{width:50,height:50,borderRadius:100,marginTop:2}} source={require('../../assets/Mobile.png')}/>
            <Text style={{fontWeight:'bold'}} >{item.domain}</Text>
            <Text style={{marginTop:5,fontSize:10}}>{item.nom}</Text>
          </TouchableOpacity>
        
        )}}  
      />

    {/* Liste Symptomes*/}

      <View style={{marginHorizontal:15}}>
        <Text style={{fontWeight:'bold'}}>Quel symptomes avez-vous?</Text>
      </View>

      <FlatList
          data={ListSymptomes}
          keyExtractor={Item=>Item.id} 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>{
          return <TouchableOpacity style={{marginLeft:15,marginTop:15}}>
            <View style={{flexDirection:'row',backgroundColor:'white',alignItems:'center',borderRadius:5}}>
            <Image style={{width:50,height:50,borderRadius:100}} source={require('../../assets/img1.png')}/>
            <Text style={{fontWeight:'bold',marginRight:10}} >{item.libelle}</Text>
            </View>
          </TouchableOpacity>
        }}  
        />

      {/* Liste Docteur */}

      <View style={{marginLeft:15,marginTop:15,justifyContent:'space-between',flexDirection:'row',marginRight:15}}>
        <Text>Liste des Docteurs</Text>
        <TouchableOpacity>
          <Text style={{color:'blue'}}>Afficher Tout</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop:15}}>
        {
          FakeDoctor.map((item,index)=>{
           return(
            <TouchableOpacity onPress={()=>navigation.navigate('Screen2',{item})} key={item.id} style={{backgroundColor:'white',flexDirection:'row',marginHorizontal:15,padding:15,marginBottom:15,elevation:5,borderRadius:10}}>
            <Image source={{uri: `${item.img}`}} style={{width:50,height:50,borderRadius:100}}/>
              <View style={{flexDirection:'colum'}}>
                <Text style={{marginLeft:5}} >{item.name}</Text>
                <Text style={{marginTop:15,backgroundColor:'blue',padding:5,borderRadius:10,color:'white'}}>{item.speciality}</Text>
              </View>
            </TouchableOpacity>
           ) 
          })
        }
      </View>

    </ScrollView>
  )
}

export default Home