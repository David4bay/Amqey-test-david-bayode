import { View, Text, Pressable } from "react-native"
import { Link, router} from "expo-router"

export default function Homepage() {

    return (
        <View>
            <Text>Home Page</Text>
            <Link href="/tab_1">Go to tab 1</Link>
            <Pressable onPress={() => router.push("/tab_2")}>
                <Text>Go to tab 2</Text>
            </Pressable>
        </View>
    )
}