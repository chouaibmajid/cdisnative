import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import DrawerContentScreen from "../screens/drawer/DrawerContentScreen";
import Products from "../screens/Products";
import Product from "../screens/Product";
import connexion from "../screens/connexion";
import { createStackNavigator } from "@react-navigation/stack";

export default function Navigation() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const AppDrawerNavigator = () => {
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "red",
        }}
        drawerContent={(props) => <DrawerContentScreen {...props} />}
        screenOptions={{
          header: ({ navigation, route, options }) => {
            return <Header navigation={navigation} />;
          },
          drawerStyle: {
            backgroundColor: "#113140",
          },
          drawerLabelStyle: {
            color: "white",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "Accueil",
            headerShown: true,

            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={"white"}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Products"
          component={Products}
          options={{
            title: "Products",
            headerShown: true,

            drawerIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={"white"}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact",
            headerShown: true,
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign name="contacts" size={size} color="white" />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen name="Homes" component={AppDrawerNavigator} />
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: "modal"}}>
            <Stack.Screen name="connexion" component={connexion} />
            <Stack.Screen name="Product" component={Product} />

          </Stack.Group>
        </Stack.Navigator>
      </>
    </NavigationContainer>
  );
}
