import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from "react-redux";

let PersonScreen = (props) => {

    const DublicateObj = () => {
        props.dispatch({
            type: "DUBLICATE_USER"
        })
    }

    return (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View>
                <Text style={{ textAlign: "center" }}> this is what in Redux for persons</Text>
                <Text style={{ textAlign: "center", margin: 15 }}>
                    {JSON.stringify(props.Persons)}
                </Text>
                <Button onPress={DublicateObj} title={"Dublicate the user"} />
            </View>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        Persons: state.Persons.Persons
    };
}
PersonScreen.navigationOptions = {

}

PersonScreen = connect(mapStateToProps)(PersonScreen)
export { PersonScreen }
