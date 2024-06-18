import './App.css'
import FirstSection from "./components/FirstSection/FirstSection.tsx";
import SecondScreen from "./components/SecondScreen/SecondScreen.tsx";

const App = () => {

    return (
        <div>
            <FirstSection />
            <SecondScreen />
            <div style={{height: '500px'}}></div>
        </div>
    )
}

export default App
