import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { useController } from 'react-hook-form';

type TProps = {
    name: any;
    control: any;
};

export const Component: React.FC<TProps> = ({ name, control }: TProps) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name
  });
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={field.value}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => field.onChange}
      >
        <Picker.Item label="português (Brasil)" value="br" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    picker: {
        width: 195,
        height: 20
    }
});

export default Component;