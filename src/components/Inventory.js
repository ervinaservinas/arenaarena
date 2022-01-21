import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeingFromInventory} from "../features/Inventory";
import {addToInventory} from "../features/Inventory";
import {addGold} from "../features/Character";
import {chooseWeapon} from "../features/Weapon";

const Inventory = () => {

    const addRemove = useDispatch();

    const inventory = useSelector((state) => state.inventory.value);
    const myCharacter = useSelector((state) => state.character.value);
    const equippedWeapon = useSelector((state) => state.weapon.value);

    function sellItem(x, i) {
        addRemove(removeingFromInventory(i));
        addRemove(addGold(x.price/2));
    }

    function equipItem(x, i) {
        if (Object.keys(equippedWeapon).length > 0) {
            addRemove(addToInventory(equippedWeapon))
        }
        addRemove(chooseWeapon(x));
        addRemove(removeingFromInventory(i));
    }

    let windowOpened = window.location.href

    function sellEquipButton(x, i) {

        if (windowOpened.includes("my-character")) {
            return (
                <div>
                    <button onClick={() => equipItem(x, i)}>Equip your item</button>
                </div>

            )
        } else {
            return (
                <div>
                    <button onClick={() => sellItem(i)}>Sell your item</button>
                </div>
            )
        }
    }

    return (
        <div className="d-flex ">
            {inventory.length === 0 ? <div>
                <h2>Inventory: 0/{myCharacter.inventorySlots} </h2>
                <h2>Gold: {myCharacter.gold}</h2>
            </div> : <div>
                <h2>Inventory: {inventory.length}/{myCharacter.inventorySlots}</h2>
                <h2>Gold: {myCharacter.gold}</h2>
            </div>}
            <div className=" d-flex">
                {inventory.length > 0
                    && inventory.map((x, i) =>
                        <div key={i} className="d-flex">
                        <img  src={x.image} alt=""/>
                        <div>
                        <div>Max damage: {x.maxDamage}</div>
                        <div>Selling price: {x.price/2}</div>
                        <div>Energy per hit: {x.energyPerHit}</div>
                        <div>Effects: {x.effects}</div>
                        </div>
                        {sellEquipButton(x, i)}
                </div>)}
            </div>

        </div>
    );
};

export default Inventory;
