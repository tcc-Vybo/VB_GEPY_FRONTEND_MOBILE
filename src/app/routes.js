import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agenda from './pages/agenda';
import Boletim from './pages/boletim';
import News from './pages/news';
import Tarefas from './pages/tarefas';
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

          if (route.name === 'news') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'agenda') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'boletim') {
            iconName = focused ? 'reader' : 'reader-outline';
          } else if (route.name === 'tarefas') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={23}
              color={'#6700B3'}
              style={{
                borderRadius: Platform.OS === 'ios' ? 22 : 25,
                borderWidth: focused ? 2 : 1,
                paddingTop: 10,
                paddingRight: 11,
                paddingBottom: 10,
                paddingLeft: 11,
                borderColor: '#6700b3',
              }}
            />
          );
        },
        tabBarLabelStyle: {
          color: '#6700B3',
        },
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
      })}
      initialRouteName="news"
    >
      <Tab.Screen
        name="news"
        component={News}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold' },
        }}
      />
      <Tab.Screen
        name="agenda"
        component={Agenda}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold' },
        }}
      />
      <Tab.Screen
        name="boletim"
        component={Boletim}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold' },
        }}
      />
      <Tab.Screen
        name="tarefas"
        component={Tarefas}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold' },
        }}
      />
    </Tab.Navigator>
  );
}
