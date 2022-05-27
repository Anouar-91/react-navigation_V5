import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Portfolio from '../screens/Portfolio'
import { Entypo } from '@expo/vector-icons';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
    <HomeStack.Navigator>
        <HomeStack.Screen name='home' component={Home} options={{
            title:"Accueil",
            headerLeft: () => (
                <Entypo name="menu" size={24} color="black" 
                onPress={() => navigation.openDrawer()}
                />
            )
            }}/>
    </HomeStack.Navigator>
    )
}


export default HomeStackScreen
