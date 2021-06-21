import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
    
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
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


export default CategoryMealScreen;