import React, { useState, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './style/StyleSchema'
import CustomButton from './button/CustomButton'

export default function App() {  
  const [temp, setTemp] = useState(null)
  const [temp2, setTemp2] = useState(null)
  const [temp3, setTemp3] = useState(null)
  const [pressedcf, setPressedcf] = useState(false)
  const [pressedck, setPressedck] = useState(false)
  const [pressedkf, setPressedkf] = useState(false)
  useEffect(() => {
    setPressedcf(false)
    setPressedck(false)
    setPressedkf(false)
  }, [])  
  const buttonCF = () => {    
    setTemp(parseInt(temp)-273.15)
    setTemp2(parseInt(temp)*9/5-459.67)
    setTemp3(parseInt(temp))
    setPressedcf(true)
  }
  const buttonCK = () => {    
    setTemp((parseInt(temp)-32)*5/9)
    setTemp2((parseInt(temp)+459.67)*5/9)
    setTemp3(parseInt(temp))
    setPressedck(true)
  }
  const buttonKF = () => {    
    setTemp(parseInt(temp)+273.15)
    setTemp2(parseInt(temp)*9/5+32)
    setTemp3(parseInt(temp))
    setPressedkf(true)
  }  
  return (
    <View style={styles.container}>    
      {!pressedcf && !pressedck && !pressedkf ? 
        <View style={styles.container}>
          <TextInput  style={styles.input}
                      keyboardType='numeric'
                      placeholder='Value'
                      maxLength={10}
                      value= {temp}
                      onChangeText={(e) => setTemp(e)}/>                    
          <View  style={styles.styleButton}>        
          <CustomButton text='Convert To Celsius & Fahrenheit' onPress={buttonCF}/>
          </View>
          <View  style={styles.styleButton}>        
          <CustomButton text='Convert To Celsius & Kelvin' onPress={buttonCK}/>
          </View>
          <View  style={styles.styleButton}>        
          <CustomButton text='Convert To Kelvin & Fahrenheit' onPress={buttonKF}/>
          </View>
        </View>
      :
        <View style={styles.container}>
        {pressedcf && temp3 < 10000000000 && temp3 > -10000000000 ?
          <View style={styles.container}>
            <Text style={styles.text}>
            {temp3} Kelvin = {temp.toFixed(2)} Celsius
            </Text>  
            <Text style={styles.text}>
            {temp3} Kelvin = {temp2.toFixed(2)} Fahrenheit
            </Text>    
            <View  style={styles.styleButton}>        
            <CustomButton text='Perform another conversion' onPress={() => {
                                                        setPressedcf(false)
                                                        setTemp(null)
                                                        setTemp2(null)
                                                        setTemp3(null)
                                                        }}/>
          </View>
          </View>
        :
          <View style={styles.container}> 
          {pressedck && temp3 < 10000000000 && temp3 > -10000000000 ?    
            <View style={styles.container}>
              <Text style={styles.text}>
              {temp3} Fahrenheit = {temp.toFixed(2)} Celsius
              </Text>  
              <Text style={styles.text}>
              {temp3} Fahrenheit = {temp2.toFixed(2)} Kelvin
              </Text>    
              <View  style={styles.styleButton}>        
              <CustomButton text='Perform another conversion' onPress={() => { 
                                                          setPressedck(false)
                                                          setTemp(null)
                                                          setTemp2(null)
                                                          setTemp3(null)
                                                          }}/>
              </View>
            </View>
          : 
          <View style={styles.container}>  
          {pressedkf && temp3 < 10000000000 && temp3 > -10000000000 ?       
          <View style={styles.container}>
            <Text style={styles.text}>
            {temp3} Celsius  = {temp.toFixed(2)} Kelvin
            </Text>  
            <Text style={styles.text}>
            {temp3} Celsius = {temp2.toFixed(2)} Fahrenheit
            </Text>    
            <View  style={styles.styleButton}>        
            <CustomButton text='Perform another conversion' onPress={() => {
                                                        setPressedkf(false)
                                                        setTemp(null)
                                                        setTemp2(null)
                                                        setTemp3(null)
                                                        }}/>
            </View>
          </View>
          :
          <View style={styles.container}>
          <Text style={styles.text}>Enter a number!</Text>
          <CustomButton text='Try Again' onPress={() => {
                                                        setPressedcf(false)
                                                        setPressedck(false)
                                                        setPressedkf(false)
                                                        setTemp(null)
                                                        setTemp2(null)
                                                        setTemp3(null)
                                                        }}/>
          </View>
          }
          </View>
          }                                            
          </View>         
        }  
        </View>              
      }
    </View>
  )
}

