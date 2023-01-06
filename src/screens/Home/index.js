import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
    return (
        <View>
            <Text>Home screen</Text>
            <Button title="Go to Dashboard" onPress={() => { navigation.navigate('Dashboard') }} />
        </View>
    )
}