import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { useDispatch, useSelector } from "react-redux";

const UseDispatchScreen = (props) => {
    const [inputCount, setInputCount] = useState(0)
    const dispatch = useDispatch();
    const counter = useSelector(state => state.Counter)
    const Increment = () => {
        dispatch({ type: 'ADD_ONE' });
    }
    const Decrement = () => {
        dispatch({ type: 'MINUS_ONE' });
    }
    const InsertValue = () => {
        let parsed = Number.parseInt(inputCount)
        dispatch({
            type: "UPDATE_COUNT",
            payload: parsed
        });
    }

    return (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <View >
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", margin: 5 }}>
                    <Button onPress={Decrement} title={' - '} />
                    <Text>the counter is now : {counter.count}</Text>
                    <Button onPress={Increment} title={' + '} />
                </View>
                <View>
                    <TextInput value={inputCount + ""} onChangeText={(e) => {
                        setInputCount(e)
                    }} style={{ alignSelf: "flex-end" }} placeholder={"enter a number here to update the redux state"} />
                </View>
                <View>
                    <Button onPress={InsertValue} title="Update" />
                </View>
                <View style={{ marginTop: 50 }}>
                    <Button color={"red"} title={"Go To Person Screen"} onPress={() => props.navigation.navigate("Person")} />
                </View>
            </View>

        </View>
    )
}

export { UseDispatchScreen }
