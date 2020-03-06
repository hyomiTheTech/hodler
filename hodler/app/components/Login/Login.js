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

const Login = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Hodler</Title>
        </Body>
        <Right />
      </Header>
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
          <Button style={styles.signup} block>
            <Text>Signup</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Login;
