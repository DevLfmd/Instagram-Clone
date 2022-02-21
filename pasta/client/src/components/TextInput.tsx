import React from 'react';
import { TextInput } from 'react-native';

type TProps = { 
    value: any;
    onChange: (value: any) => void;
    placeholder: string;
    keyboardType: "default" | "numeric" | "email-address" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "phone-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | "visible-password";
    style?: any;
};

const Component: React.FC<TProps> = ({ value, onChange, placeholder, keyboardType, style }) => (    
    <TextInput
        onChangeText={(value) => onChange(value)}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={style}
    />
);

export default Component;