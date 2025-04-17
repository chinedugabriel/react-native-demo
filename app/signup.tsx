import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../firebaseconfig'; 
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseconfig';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const router = useRouter();
    const auth = getAuth(app);

  const handleSignUp = () => {
    
          createUserWithEmailAndPassword(auth,email, password)
          .then(() => {
              Alert.alert('Success', 'Account created successfully');
              () => router.navigate('./login');
          })
      .catch(error => Alert.alert('Error', error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
        <View style={{gap:10}}>
            <Text>Email:</Text>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
                />
          </View>
      <View style={{gap:10}}>
        <Text>Password:</Text>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      </View>

      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

        <Text style={styles.textWrapper}>
             Already have an account?  
            <Link href="/" style={styles.switchText}>
                Log in
            </Link>
        </Text>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    },
  textWrapper: {
    marginTop: 15,
    textAlign: 'center',
    gap:5,
  },
  switchText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#1E90FF',
  },
});

export default SignUpScreen;
