import {Route, Routes} from "react-router-dom";
import Layout from "./pages/layout/layout";
import FirstTask from "./pages/firstTask";
import SecondTask from "./pages/secondTask";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/firstTask" element={<FirstTask/>}/>
                    <Route path="/secondTask" element={<SecondTask/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
