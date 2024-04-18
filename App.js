import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./Screens/Splash";
import OnboardingOne from "./Screens/Onboarding/OnboardingOne";
import OnboardingTwo from "./Screens/Onboarding/OnboardingTwo";
import OnboardingThree from "./Screens/Onboarding/OnboardingThree";
import OnboardingFour from "./Screens/Onboarding/OnboardingFour";
import OnboardingFive from "./Screens/Onboarding/OnboardingFive";
import Home from "./Screens/Home";
import BottomNav from "./custom/BottomNav";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OnboardingOne"
          component={OnboardingOne}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OnboardingTwo"
          component={OnboardingTwo}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OnboardingThree"
          component={OnboardingThree}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OnboardingFour"
          component={OnboardingFour}
        />
        {/*  <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Send"
          component={OnboardingFour}
        /> */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="OnboardingFive"
          component={OnboardingFive}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
