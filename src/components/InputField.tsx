import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../theme/colors";

interface Props extends TextInputProps {
  placeholder: string;
  value: string;
  secure?: boolean;
}

export default function InputField({
  placeholder,
  value,
  secure,
  ...rest
}: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      secureTextEntry={secure}
      placeholderTextColor={colors.gray}
      style={styles.input}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.gray1,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    fontSize: 15,
    color: colors.text,
  },
});
