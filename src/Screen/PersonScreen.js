import React from 'react'
import { View, Text } from 'react-native'
import { connect } from "react-redux";

let PersonScreen = (props) => {
    console.log(props.Persons)
    return (
        <View>
            <Text> Hello there</Text>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        Persons: state.Persons
    };
}
PersonScreen.navigationOptions = {

}

PersonScreen = connect(mapStateToProps)(PersonScreen)
export { PersonScreen }
