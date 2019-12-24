import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const UseSelectorScreen = () => {
    const { Persons } = useSelector(state => state.Persons)
   
    const { count } = useSelector(state => state.Counter)
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ borderBottomWidth: 1, textAlign: "center", fontWeight: "bold", fontSize: 20 }}>fetching the Person state using useSelector only</Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ textAlign: "center" }}>{JSON.stringify(Persons)}</Text>
            </View>
            <Text style={{ borderBottomWidth: 1, textAlign: "center", fontWeight: "bold", fontSize: 20 }}>fetching the Count state using useSelector only</Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ textAlign: "center" }}>{JSON.stringify(count)}</Text>
            </View>
        </View>
    )

}

export { UseSelectorScreen }
