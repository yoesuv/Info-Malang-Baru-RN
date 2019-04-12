import React, {Component} from 'react';
import {Platform} from 'react-native';
import { Provider } from 'react-redux';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import ListPlaceScreen from './src/screens/listplace/ListPlace';
import DetailListPlaceScreen from './src/screens/listplace/DetailListPlace';
import GalleryScreen from './src/screens/gallery/Gallery';
import DetailGalleryScreen from './src/screens/gallery/DetailGallery';
import MapScreen from './src/screens/maps/MapLocation';
import AboutScreen from './src/screens/about/About';

import Icon from './src/components/Icon';

import iconList from './src/images/ic_menu_list.png';
import iconListSelected from './src/images/ic_menu_list_selected.png';
import iconGallery from './src/images/ic_menu_gallery.png';
import iconGallerySelected from './src/images/ic_menu_gallery_selected.png';
import iconMaps from './src/images/ic_menu_maps.png';
import iconMapsSelected from './src/images/ic_menu_maps_selected.png';
import iconOther from './src/images/ic_menu_other.png';
import iconOtherSelected from './src/images/ic_menu_other_selected.png';

import { THEME_COLOR } from './src/data/Constants';

import configureStore from './src/store/configureStore';
const store = configureStore();

const MyHeader = {
    titleStyle: {
        fontWeight: '200',
        fontFamily: 'Pacifico'
    }
}

const ListStack = createStackNavigator({
    ListHome: {
        screen : ListPlaceScreen,
        navigationOptions: {
            title: 'List Place',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    },
    DetailsList: {
        screen: DetailListPlaceScreen,
        navigationOptions: {
            title: 'Detail Place',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    }
});

ListStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const GalleryStack = createStackNavigator({
    GalleryHome: {
        screen : GalleryScreen,
        navigationOptions: {
            title: 'Gallery',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    },
    DetailGallery: {
        screen: DetailGalleryScreen,
        navigationOptions: {
            title: 'Detail Gallery',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    }
});

GalleryStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const MapStack = createStackNavigator({
    Other: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Maps',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    }
});

const AboutStack = createStackNavigator({
    Other: {
        screen: AboutScreen,
        navigationOptions: {
            title: 'Other',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR,
                elevation: 0,
                shadowOpacity: 0
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    }
});

let TabNavigator = createBottomTabNavigator(
    {
        List: ListStack,
        Gallery: GalleryStack,
        Map: MapStack,
        About: AboutStack
    },{
        initialRouteName: 'List',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'List') {
                    if (focused) {
                        return <Icon image={iconListSelected}/>;
                    }
                    return <Icon image={iconList}/>;
                } else if (routeName === 'Gallery') {
                    if (focused) {
                        return <Icon image={iconGallerySelected}/>;
                    }
                    return <Icon image={iconGallery}/>;
                } else if (routeName === 'Map') {
                    if (focused) {
                        return <Icon image={iconMapsSelected}/>;
                    }
                    return <Icon image={iconMaps}/>;
                }
                    if (focused) {
                        return <Icon image={iconOtherSelected}/>;
                    }
                    return <Icon image={iconOther}/>;
                },
        }),
        tabBarOptions: {
            activeTintColor: THEME_COLOR
        }
    }
);

let Navigation = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
    }
}
