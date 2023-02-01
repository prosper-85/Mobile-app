import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const AuthStack = () => {
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#f9beda" },
      headerTintColor: "white",
      contentStyle: { backgroundColor: "#c30b64" },
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>;
};

const AuthenticatedStack = () => {
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#f9beda" },
      headerTintColor: "white",
      contentStyle: { backgroundColor: "#c30b64" },
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>;
};

function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f9beda" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#c30b64" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
