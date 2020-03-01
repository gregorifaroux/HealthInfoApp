import React from "react";
import { View } from "react-native";
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  Card
} from "@ui-kitten/components";
import { KeyboardAvoidingView } from "../commmon/KeyboardAvoidingView";
import { sendEmail } from "../commmon/sendEmail";

export const ContactScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [message, setMessage] = React.useState();

  const styles = useStyleSheet(themedStyles);

  const onSendPress = () => {
    //    navigation && navigation.goBack();
    sendEmail("info@info.info", "Question from HealthAppInfo", message, {
      cc: email
    }).then(() => {
      console.log("Our email successful provided to device mail ");
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.signInLabel} category="s1">
          Contact us any time with your questions, comments, or feedback. We
          will respond promptly.
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input
          label="Email address"
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Message"
          placeholder="Enter your comments, questions..."
          textStyle={{ height: 150 }}
          multiline={true}
          numberOfLines={10}
          maxLength={500}
          style={{ maxHeight: 200 }}
          value={message}
          onChangeText={setMessage}
        />
      </Layout>
      <Button style={styles.signInButton} onPress={onSendPress}>
        SEND
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1"
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    paddingHorizontal: 16
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16
  },
  signInLabel: {
    marginTop: 16
  },
  signInButton: {
    marginHorizontal: 16,
    marginVertical: 32
  },
  messageInput: {
    marginTop: 16
  }
});
