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

const signup = () => {
  const [countryCode, setCountryCode] = useState("+49");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;

  const onSignup = () => {};

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Lets get started!</Text>
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

      <Link href={"/login"} asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </Link>

      <View style={{flex: 1}}/>

      <TouchableOpacity
        onPress={onSignup}
        style={[
          defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
      >
        <Text style={defaultStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
};

export default signup;

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
