import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { connect } from "react-redux";
let PersonScreen = (props) => {
    const [person, setPerson] = useState({
        firstName: null,
        lastName: null,
        birthday: null,
        Job: null
    })
    const CreatePreson = () => {
        props.dispatch({
            type: "CREATE_PERSON",
            payload: person
        })
    }

    return (
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: "100%" }}>

                <Button onPress={() => props.navigation.navigate("UseSelectorScreen")} color={"red"} title={"Go To UseSelector Screen"} />
                <Text style={{ marginTop: 15 }}> firstName</Text>
                <TextInput placeholder={"firstName"} onChangeText={(e) => {
                    setPerson({ ...person, ...{ firstName: e } })
                }} style={style.TextInput} />
                <Text> lastName</Text>
                <TextInput placeholder={"lastName"} onChangeText={(e) => {
                    setPerson({ ...person, ...{ lastName: e } })
                }} style={style.TextInput} />
                <Text> birthday</Text>
                <TextInput placeholder={"Birthday (e.g. 1999/12/31)"} onChangeText={(e) => {
                    setPerson({ ...person, ...{ birthday: e } })
                }} style={style.TextInput} />
                <Text> Job</Text>
                <TextInput placeholder={"Job"} onChangeText={(e) => {
                    setPerson({ ...person, ...{ Job: e } })
                }} style={[style.TextInput, { marginBottom: 10 }]} />
                <Button onPress={CreatePreson} title={"Create Person"} />
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    TextInput: {
        borderBottomWidth: 1,
        height: 35,
        marginVertical: 5
    }
})
const mapStateToProps = (state) => {
    return {
        Persons: state.Persons.Persons
    };
}
PersonScreen.navigationOptions = {

}

PersonScreen = connect(mapStateToProps)(PersonScreen)
export { PersonScreen }
