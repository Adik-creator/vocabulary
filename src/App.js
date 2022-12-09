import {Routers} from "./components/Routers/Routers";

function App() {

    const a = [1, 2, 3, 4, 5, 6, 7, 9, 0]

    console.log(Math.max(...a), "this is array")
    return (
        <div className="App">
            <Routers/>
        </div>
    )
}
export default App;


