import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail', 
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }} />
        );
    }
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const selectedCategory = CATEGORIES.find(cat => cat.id == catId)
    return(
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals} 
                renderItem={renderMealItem}
                style={{width: '100%'}} 
            />
        </View>
    )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        title: selectedCategory.title,
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