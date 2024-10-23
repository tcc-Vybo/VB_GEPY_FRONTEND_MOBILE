import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import Agenda from './pages/agenda';
import Boletim from './pages/boletim';
import News from './pages/news';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#6700B3',
        tabBarInactiveTintColor: '#8300E4',
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
          paddingRight: 9,
          paddingBottom: 10,
          paddingLeft: 11,
          marginTop: -20,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'News') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Agenda') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Boletim') {
            iconName = focused ? 'reader' : 'reader-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? '#6700B3' : '#8300E4'}
            />
          );
        },
        tabBarLabelStyle: ({ 
          fontWeight: 'bold', 
          fontSize: 15
        }),
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
      })}
      initialRouteName="boletim"
    >
      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Boletim"
        component={Boletim}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
