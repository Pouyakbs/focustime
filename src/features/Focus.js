import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [input, setInput] = useState();
  return (
    <View>
      <View
        style={
          Platform.OS == 'ios'
            ? styles.iosInputContainer
            : styles.androidInputContainer
        }>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="What Would You Like To Focus On?"
          value={input}
          onChangeText={(val) => {
            setInput(val);
          }}
        />
        <View style={styles.button}>
          <RoundedButton style={styles.button} title="+" size={50} onPress={() => addSubject(input)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  iosInputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  androidInputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
  },
  text: {
    color: colors.black,
  },
});
