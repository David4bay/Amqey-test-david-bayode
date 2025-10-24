import { Tabs } from "expo-router"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
            name="products/index"
            options={{
                headerTitle: "Products",
                title: "Products",
                tabBarIcon: ({size, color}) => (
                    <FontAwesome6 name="bag-shopping" 
                    size={size}
                    color={color}
                    />
                )
            }}
            />
            <Tabs.Screen
            name="index"
            options={{
                headerTitle: "My products",
                title: "My Products",
                tabBarIcon: ({size, color}) => (
                    <FontAwesome6 
                    name="add" 
                    size={size} 
                    color={color} 
                    />
                )
            }}
            />
        </Tabs>
    )
}