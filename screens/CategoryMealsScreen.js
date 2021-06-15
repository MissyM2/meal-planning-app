import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id == catId)
    return(
        <View style={styles.screen}>
            <Text>The Category MealScreen</Text>
            <Text>{selectedCategory.title}</Text>
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

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        title: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    
    };

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