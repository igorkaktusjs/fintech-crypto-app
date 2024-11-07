import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { useState } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

enum SignInType {
  Phone,
  Email,
  Google,
  Apple
}

const Page = () => {
  const [countryCode, setCountryCode] = useState("+49");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  const onSignIn = async (type: SignInType) => {

    if(type === SignInType.Phone ) {

    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome Back</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code there
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={Colors.gray}
          placeholder="Mobile number"
          style={styles.input}
          keyboardType="numeric"
          value={countryCode}
          onChangeText={setCountryCode}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Mobile number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor={Colors.gray}
        />
      </View>

      <TouchableOpacity
        onPress={() => onSignIn(SignInType.Phone)}
        style={[
          defaultStyles.pillButton,
          phoneNumber !== " " ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
      >
        <Text style={defaultStyles.buttonText}>Continue</Text>
      </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
          <View style={{flex: 1, height: StyleSheet.hairlineWidth, backgroundColor:Colors.gray}}/>
          <Text style={{fontSize: 20, color: Colors.gray}}>or</Text>
          <View style={{flex: 1, height: StyleSheet.hairlineWidth, backgroundColor:Colors.gray}}/>
        </View>
        <TouchableOpacity 
          onPress={() => onSignIn(SignInType.Email)}
          style={[defaultStyles.pillButton,
          {flexDirection: 'row',
           justifyContent: 'center',
            alignItems:'center',
            gap: 16,
            marginTop: 20,
            backgroundColor: '#fff'
            }]}>
          <Ionicons name="mail" size={24} color="#000" />
          <Text>Continue with email</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => onSignIn(SignInType.Google)}
          style={[defaultStyles.pillButton,
          {flexDirection: 'row',
           justifyContent: 'center',
            alignItems:'center',
            gap: 16,
            marginTop: 20,
            backgroundColor: '#fff'
            }]}>
          <Ionicons name="logo-google" size={24} color="#000" />
          <Text>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => onSignIn(SignInType.Apple)}
          style={[defaultStyles.pillButton,
          {flexDirection: 'row',
           justifyContent: 'center',
            alignItems:'center',
            gap: 16,
            marginTop: 20,
            backgroundColor: '#fff'
            }]}>
          <Ionicons name="logo-apple" size={24} color="#000" />
          <Text>Continue with Apple</Text>
        </TouchableOpacity>



    </View>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
