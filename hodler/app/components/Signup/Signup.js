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

import styles from "../Signup/styles";

import Firebase from "../../firebaseConfig";
import { TextInput } from "react-native-gesture-handler";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Welcome to Hodler!!");
      })
      .then(() => navigation.navigate("Login"))
      .catch(err => console.log(err));
  };
  return (
    <Container>
      <Content>
        <Form style={styles.container}>
          <Item>
            <Input placeholder="E-Mail" onChangeText={setEmail} />
          </Item>
          <Item>
            <Input placeholder="Password" onChangeText={setPassword} />
          </Item>
          {/* <Item>
            <Input placeholder="Password Confirm" />
          </Item> */}
        </Form>

        <View style={styles.buttons}>
          <Button onPress={handleSignUp} style={styles.button} block>
            <Text>Signup</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Signup;
