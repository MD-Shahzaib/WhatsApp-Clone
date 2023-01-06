import { View, Text, Button } from "react-native";

export default function Dashboard({ navigation }) {
    return (
        <View>
            <Text>Home Dashboard</Text>
            <Button title="Go to Home" onPress={() => { navigation.navigate('Home') }} />
        </View>
    )
}