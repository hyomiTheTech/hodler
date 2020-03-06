import React from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  View,
  Left,
  Body,
  Right,
  Title
} from "native-base";

import styles from "./styles";

const Login = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Form style={styles.container}>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
        <View style={styles.buttons}>
          <Button style={styles.button} block>
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
