import React, { useState } from 'react';
import { StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    onSubmit(username.trim());
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          returnKeyType="go"
          onSubmitEditing={handleSubmit}
          blurOnSubmit={true}
          enablesReturnKeyAutomatically={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 8,
    paddingRight: 16,
    borderColor: '#2a41cb',
    backgroundColor: '#eceef5',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#2a41cb',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#eceef5',
    fontWeight: 'bold',
  },
});

export default LoginForm;