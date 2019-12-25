import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";
import { CountCounter, PersonScreen, UseSelectorScreen, UseDispatchScreen } from "screen";


const Main = createStackNavigator({
    counter: CountCounter,
    Person: PersonScreen,
    UseSelectorScreen,
    UseDispatchScreen
}, {
    initialRouteName: "counter"
})

const AppCounter = createAppContainer(Main)


export { AppCounter };
