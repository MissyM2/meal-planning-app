import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    console.log(props);

    return(
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title="Go to Meals!" onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals'})
            }}/>
        </View>
    )
};

// could also use replace() with props.navigation.replace('screenName'): 
//no back button and no forward automation -- login screen where
// user shouldn't be able to go back to login screen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;
