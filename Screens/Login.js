import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground,Image,TextInput,ScrollView,TouchableOpacity,Alert} from 'react-native';


export default class Login extends Component{

  constructor(props){
      super(props);
      this.state = {
        Username: " ",
        Password: " ",
      };
  }

  handlPress(){
    Alert.alert("You Have Clicked It!")
  }

  render() {
    return (
      <ImageBackground source={require('./img/bg.png')} 
                       style={styles.container}>
            
            <ScrollView>
            <View style={styles.header}>
                <Image
                    source={require("./img/Mark.png")}
                    style={styles.mark} 
                />
            </View>
            
            
            <View style={styles.username}>
                <Image
                    source={require('./img/User.png')}
                    style={styles.User}
                />
                <TextInput
                    style={styles.name}
                    placeholder="Username"
                    onChangeText= {(Username) => this.setState({Username})}
                />
            </View>

            <View style={styles.username}>
                <Image
                    source={require('./img/lock.png')}
                    style={styles.User}
                />
                <TextInput
                    style={styles.name}
                    placeholder="Password"
                    onChangeText= {(Password) => this.setState({Password})} 
                />
            </View>

            <View style={styles.forget}>
              <TouchableOpacity onPress={this.handlPress}>
                <Text style={styles.forgetpassword}> Forget Password </Text> 
              </TouchableOpacity>    
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={this.handlPress}> 
                    <Text style={styles.signin}> Sign In </Text> 
                </TouchableOpacity> 
            </View>

            <View style={styles.footer}>
                <Text style={styles.Dont}> Don't have an account? </Text> 

                <TouchableOpacity onPress={this.handlPress}>
                    <Text style={styles.SignUp}> Sign Up </Text> 
                </TouchableOpacity>
            </View>
            
            </ScrollView>
            
           
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    alignItems:'center',
    justifyContent:'center',
    margin: 40
  },
  mark:{
    width:150,
    height: 150,
  },
  username: {
      flexDirection:"row",
      backgroundColor:"transparent",
      borderBottomWidth: 0.4,
      borderBottomColor: "#817F80",
      margin:5,
  },
  User:{
      width:25,
      height:25,
      marginLeft: 30, 
      marginTop: 10,    
  },
  name:{
      fontSize: 20,
      marginLeft: 20,
      color:"#E6E6E6"     
  },
  forget:{
      alignItems:'flex-end',
      marginRight: 20,
      marginTop: 5,
  },
  forgetpassword:{
      fontSize:15,
      color:"#A5A4A2"
  },
  button:{
      marginTop: 50,
      backgroundColor:"#FF3366",
      height: 50,
  },
  signin:{
      fontSize:20, 
      textAlign: "center",
      marginTop: 10,
      color:"#fff"
  },
  footer:{
      flexDirection:"row",
      marginTop: 20,
      alignItems:"center",
      justifyContent:"center"
  },
  Dont:{
      fontSize:15,
      color:"#A3A3A1"
  },
  SignUp:{
      fontSize:15,
      color:"#fff",
  },

});