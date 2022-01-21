import React from 'react';
import {useSelector} from "react-redux";
import Weapon from "./Weapon";

const CharacterInformation = () => {

    const myCharacter = useSelector((state) => state.character.value)

    return (
        <div>
            <div className="d-flex">
                <img className="grow1 img" src={myCharacter.image} alt=""/>

                <div className=" grow1">
                    <div>Damage: {myCharacter.damage}</div>
                    <div>Health: {myCharacter.health}</div>
                    <div>Energy: {myCharacter.energy}</div>
                    <div>Stamina: {myCharacter.stamina}</div>
                    <div>Strength: {myCharacter.stamina}</div>
                    <div>Inventory slots: {myCharacter.inventorySlots}</div>
                    <div>Gold: {myCharacter.gold}</div>
                </div>
            </div>

            <Weapon/>

        </div>
    );
};

export default CharacterInformation;