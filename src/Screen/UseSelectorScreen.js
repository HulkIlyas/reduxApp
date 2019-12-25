import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector } from 'react-redux'

const UseSelectorScreen = (props) => {
    const { Persons } = useSelector(state => state.Persons)

    const { count } = useSelector(state => state.Counter)
    return (
        <View style={{ flex: 1, paddingBottom: 15 }}>
            <Text style={{ borderBottomWidth: 1, textAlign: "center", fontWeight: "bold", fontSize: 20 }}>fetching the Person state using useSelector </Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ textAlign: "center" }}>{JSON.stringify(Persons)}</Text>
            </View>
            <Text style={{ borderBottomWidth: 1, textAlign: "center", fontWeight: "bold", fontSize: 20 }}>fetching the Count state using useSelector </Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ textAlign: "center" }}>{JSON.stringify(count)}</Text>
            </View>
            <Button onPress={() => props.navigation.navigate("UseDispatchScreen")} title={"Go to useDispatch Screen"} color={"red"} />
        </View>
    )

}

export { UseSelectorScreen }
