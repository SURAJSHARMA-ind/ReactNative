import {View,Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


function index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Feature" component={FeatureScreen} />
    </Tab.Navigator>
  )
}

function HomeScreen() {

 return <View>
    <Text>HomeScreen</Text>
  </View>
}
function SettingsScreen() {

 return <View>
    <Text>SettingsScreen</Text>
  </View>
}
function FeatureScreen() {

 return <View>
    <Text>FeatureScreen</Text>
  </View>
}

export default index
