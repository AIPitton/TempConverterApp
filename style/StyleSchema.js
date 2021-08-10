import { StyleSheet, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft:10,
      paddingRight:10,
      paddingTop:50,
      paddingBottom:10,
    },
    text: {
      color: "#6A6D70",
      backgroundColor: '#FFFFFF',
      fontSize: 20,
      alignItems: 'center',
      padding:10,
      borderWidth: 1,
      borderColor:"#FDFDFE",
      borderRadius:20,
      marginBottom:20,
      marginTop:20,
    },
    styleButton: {
      marginTop: 30,
    },
    input: {
      borderWidth: 1,
      borderColor: '#FDFDFE',
      backgroundColor: '#FFFFFF',
      padding: 20,
      margin:20,
      width: windowWidth*0.8,
      color: "#6A6D70",
      fontSize: 20,
      alignItems: 'center',
      borderRadius:20,
    }
  });

  export default styles