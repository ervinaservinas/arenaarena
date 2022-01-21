import React from 'react';
import {useSelector} from "react-redux";

const Weapon = () => {

    const weapon = useSelector((state) => state.weapon.value);

    return (
        <div className="">
            <h3>Your weapons:</h3>
            {Object.keys(weapon).length === 0 ? <h3>No items</h3> : <div className="d-flex">
                <img src={weapon.image} alt=""/>
                <div>
                    <div>Max dmg: {weapon.maxDamage}</div>
                    <div>Energy per hit: {weapon.energyPerHit}</div>
                    <div>Effects: {weapon.effects}</div>
                </div>

            </div>}
        </div>
    );
};

export default Weapon;