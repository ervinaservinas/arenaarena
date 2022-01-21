import React from 'react';
import ToolbarShop from "../components/ToolbarShop";
import CharacterInformation from "../components/CharacterInformation";
import Inventory from "../components/Inventory";
import Shop from "../components/Shop";

const MainPage = () => {

    return (
        <div>
            <ToolbarShop/>
            <div>
                <div className="j-center d-flex">
                    <CharacterInformation/>
                <Shop/>
                </div>
                <div className="grow1">
                    <Inventory/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;