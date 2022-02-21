import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useController } from 'react-hook-form';

type TProps = {
    name: any;
    control: any;
    placeholder?: string;
};

const Component:React.FC<TProps> = ({ name, control, placeholder }: TProps) => {
    const { field } = useController({
      control,
      defaultValue: '',
      name
    });
    
    return ( 
        <TextInput 
            value={field.value}
            onChangeText={field.onChange}
            style={styles.input}
            placeholder={placeholder}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#e4e6e8',
        borderWidth: 1,
        fontFamily: 'Montserrat',
        width: 100 + '%',
        margin: 10,
        borderRadius: 6,
        padding: 10
    }
});

export default Component;