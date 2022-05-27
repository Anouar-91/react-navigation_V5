import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Drawer from './routes/DrawerNav'
import HomeStackScreen from './routes/HomeStackNav'
import PortfolioStackScreen from './routes/PortfolioStackNav'
import { Entypo } from '@expo/vector-icons';



//const Stack = createStackNavigator();
export default function App() {

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer style={styles.container}>
      {/*       <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "slateblue"
          },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", textTransform: "uppercase" },
          gestureEnabled: true,
          gestureDirection: "vertical-inverted",
          transitionSpec: {
            open: config,
            close: config,
          },

        }}
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Portfolio} name="Portfolio"
        />
      </Stack.Navigator> */}
      <Drawer.Navigator
        drawerPosition= "right"
        screenOptions={{
          headerStyle: {
            backgroundColor: "red"
          }
        }}
      >
        <Drawer.Screen component={HomeStackScreen} name="Home" />
        <Drawer.Screen component={PortfolioStackScreen} name="Portfolio"
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
