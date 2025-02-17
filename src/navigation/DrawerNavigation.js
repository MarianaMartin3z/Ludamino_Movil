import { createDrawerNavigator } from "@react-navigation/drawer";
import { Header } from "react-native/Libraries/NewAppScreen";
import CursosScreen from "../screens/CursosScreen";
import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Drawer = createDrawerNavigator()

export function DrawerNavigation() {
    return (
        < Drawer.Navigator screenOptions={{
            drawerStyle: {
                width: 240
            },
            headerTintColor: { color: "#555273" },
            headerStyle: {
                height: 80,
                backgroundColor: "#555273"
            },

            headerTitleStyle: {
                color: "#ffffff"
            },
            drawerActiveBackgroundColor: "#555273",
            drawerActiveTintColor: "white"
        }} >
            <Drawer.Screen name="Inicio2" component={Home} />
            <Drawer.Screen name="Login2" component={LoginScreen} />
            <Drawer.Screen name="Registrarse2" component={RegisterScreen} />
            <Drawer.Screen name="Cursos" component={CursosScreen} />

        </Drawer.Navigator >
    )
}