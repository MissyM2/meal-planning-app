// the most basic navigation:  back and forth between screens
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen, 
        navigationOptions: {
            headerTitle: 'Meal Categories'        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,  //can set up different configurations for the screen
    },
    MealDetail: MealDetailScreen
}, {
    //other properties you can add in the second argument of createStackNavigator
    //initialRouteName: 'Categories',
    //mode: 'modal',
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

export default createAppContainer(MealsNavigator);

