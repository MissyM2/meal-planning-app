import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
            <Button title="Go Back to Categories" onPress={()=>{
                props.navigation.popToTop();
            }} />
        </View>
    )
};

// take you back to root screen:  popToTop();

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;