import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";
import { CountCounter, PersonScreen, UseSelectorScreen } from "screen";


const Main = createStackNavigator({
    counter: CountCounter,
    Person: PersonScreen,
    UseSelectorScreen
}, {
    initialRouteName: "counter"
})

const AppCounter = createAppContainer(Main)


export { AppCounter };
