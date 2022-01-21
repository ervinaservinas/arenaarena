import React from 'react';
import {useNavigate} from "react-router-dom";

const ToolbarShop = () => {

    const navigate = useNavigate();

    return (
        <div className="toolbar">
            <div onClick={()=>{navigate("/shop")}}>Shop</div>
            <div onClick={()=>{navigate("/my-character")}}> item equip</div>
            <div onClick={()=>{navigate("/arena")}}>Arena</div>

        </div>
    );
};

export default ToolbarShop;
