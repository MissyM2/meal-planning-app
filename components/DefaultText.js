import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
    return <Text style={StyleSheet.text}>{props.children}</Text>
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});

export default DefaultText;
