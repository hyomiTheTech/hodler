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

import styles from "../Login/styles";

const Signup = () => {
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
          <Item last>
            <Input placeholder="Password Confirm" />
          </Item>
        </Form>
        <View style={styles.buttons}>
          <Button style={styles.signup} block>
            <Text>Signup</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Signup;
