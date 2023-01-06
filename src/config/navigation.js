import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/Home';
import DashboardScreen from '../screens/Dashboard';
import ChatsScreen from '../screens/Tabs/Chats';
import StatusScreen from '../screens/Tabs/Status';
import CallsScreen from '../screens/Tabs/Calls';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            {/* <TabNavigator /> */}
            <Stack.Navigator>
                <Stack.Screen name="Home" component={TabNavigator} />
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chats" component={ChatsScreen} />
            <Tab.Screen name="Status" component={StatusScreen} />
            <Tab.Screen name="Calls" component={CallsScreen} />
        </Tab.Navigator>
    )
}













// React-Navigation.
/*
____________________________________________________________________________.
1- Install libraries.
    (a)- Stack.Navigator.
        1- npm install @react-navigation/native.
        2- npx expo install react-native-screens react-native-safe-area-context.
        3- npm install @react-navigation/native-stack.
    (b)- Tab.Navigator.
        1- npm install @react-navigation/material-top-tabs react-native-tab-view.
        2- npx expo install react-native-pager-view.

2- Import from Install libraries.
    (a)- Stack.Navigator.
        1- import { NavigationContainer } from '@react-navigation/native';
        2- import { createNativeStackNavigator } from '@react-navigation/native-stack';
    (b)- Tab.Navigator.
        1- import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

3- Make Const variables
    (a)- Stack.Navigator.
        1- const Stack = createNativeStackNavigator();
    (b)- Tab.Navigator.
        1- const Tab = createMaterialTopTabNavigator();

4- Wrapping your app in NavigationContainer like this.
    (a)- Stack.Navigator.
        1- <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
    (b)- Tab.Navigator.
        1-  <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
____________________________________________________________________________.
*/
// React-Navigation.
