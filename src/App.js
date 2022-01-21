import './App.css';
import StartGame from "./pages/StartGame";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import ArenaPage from "./pages/ArenaPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartGame/>}/>
                    <Route path="/my-character" element={<MainPage/>}/>
                    <Route path="/shop" element={<ShopPage/>}/>
                    <Route path="/arena" element={<ArenaPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;