import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Category MealScreen</Text>
            <Button title="Go to Meal Details!" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                })
            }}/>
            <Button title="Go Back" onPress={() => {
                //props.navigation.goBack();
                props.navigation.pop();
            }} />
        </View>
    )
};

// can also use 'push' and don't need an object: i.e. if you are in a Folder 
// and want to move to another folder
// if you want to save and return to previous screen:  create a button with goBack()



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;