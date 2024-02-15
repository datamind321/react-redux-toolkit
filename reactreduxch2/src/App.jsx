import { useSelector } from "react-redux";
import Coin from "./features/Coin/Coin";
import Counter from "./features/Counter/Counter";
import Theme from "./features/Theme/Theme";

function App() {
 
  const changeThemeColor = useSelector((state)=>state.theme.color)
  return (
    <div>
    <h2 style={{color:changeThemeColor}}>State Management Using React-Redux + Redux  ToolKit</h2>

  <h3 style={{color:changeThemeColor}}>Create An Counter State App</h3>
   < Counter />
   <h3 style={{color:changeThemeColor}}>Include The Counter feature of Coin</h3>
   < Coin />
   <h3 style={{color:changeThemeColor}}>Create AN Change Theme Color features State</h3>
   < Theme />
    </div>
  )
}

export default App
