import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Profile from "./Profile";
import Messages from "./Messages";
import Momemts from "./Moments";
import Setting from "./Setting";
import BottomTabNavigation from "./BottomTabNavigation";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "rgba(28, 15, 255, 0.5)",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,

          fontSize: 15,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name={"home-outline"} color={color} size={22} />
          ),
        }}
        name="Home"
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name={"person-outline"} color={color} size={22} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Fontisto
              name={"persons"}
              color={color}
              size={22}
            />
          ),
        }}
        name="About Us"
        component={Messages}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name={"call-outline"} color={color} size={22} />
          ),
        }}
        name="Contacts"
        component={Momemts}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name={"settings-outline"} color={color} size={22} />
          ),
        }}
        name="Setting"
        component={Setting}
        
      />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
