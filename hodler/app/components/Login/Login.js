import React, { useState } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  View
} from "native-base";

import { Alert } from "react-native";

import styles from "./styles";

import Firebase from "../../firebaseConfig";

const Login = ({ navigation }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(`Hi ${email}`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Content>
        <Form style={styles.container}>
          <Item>
            <Input onChangeText={setEmail} placeholder="E-Mail" />
          </Item>
          <Item last>
            <Input onChangeText={setPassword} placeholder="Password" />
          </Item>
        </Form>
        <View style={styles.buttons}>
          <Button onPress={handleLogin} style={styles.button} block>
            <Text>Login</Text>
          </Button>
          <Button
            onPress={() => navigation.navigate("Signup")}
            style={styles.signup}
            block
          >
            <Text>Signup</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
