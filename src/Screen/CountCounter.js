import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { connect } from "react-redux";

let CountCounter = (props) => {
   
    const [inputCount, setInputCount] = useState(0)

    const addOne = () => {
        props.dispatch({ type: 'ADD_ONE' });
    }
    const minusOne = () => {
        props.dispatch({ type: 'MINUS_ONE' });
    }
    const updateCount = () => {
        let parsed = Number.parseInt(inputCount)
        props.dispatch({
            type: "UPDATE_COUNT",
            payload: parsed
        })
    }


    const Increment = () => {
        addOne()
    }

    const Decrement = () => {
        minusOne()
    }
    const InsertValue = () => {
        updateCount()
    }
    return (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <View >
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", margin: 5 }}>
                    <Button onPress={Decrement} title={' - '} />
                    <Text>the counter is now : {props.count}</Text>
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
const mapStateToProps = (state) => {
    return {
        count: state.Counter.count
    };
}
CountCounter.navigationOptions = {
    header: null
}
CountCounter = connect(mapStateToProps)(CountCounter);

export {
    CountCounter,
}



