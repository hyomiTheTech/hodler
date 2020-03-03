import React from "react";
import { AppLoading } from "expo";
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
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

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
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 400
  },
  button: {
    marginTop: 50
  },
  signup: {
    marginTop: 10
  },
  buttons: {
    flexDirection: "column",
    alignSelf: "center",
    width: "70%"
  }
});
