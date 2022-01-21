import React from 'react';
import ToolbarShop from "../components/ToolbarShop";
import CharacterInformation from "../components/CharacterInformation";
import Inventory from "../components/Inventory";



const MainPage = () => {
    return (
        <div className="mainPage backgroundimg">
            <ToolbarShop/>
            <div className="d-flex ">
                <div className="grow1  imgCharacter">
                    <CharacterInformation/>
                </div>
                <div className="grow1">
                    <Inventory/>
                </div>
            </div>
        </div>
    );
};











export default MainPage;