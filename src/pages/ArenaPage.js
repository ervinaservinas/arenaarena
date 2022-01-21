import React, {useEffect, useState} from 'react';
import CharacterInformation from "../components/CharacterInformation";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {createMonster} from "../features/Monster";
import {useNavigate} from "react-router-dom";

const ArenaPage = () => {

    const navigate = useNavigate();
    const monsters = [
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
            name: "Basilisk",
            maxDamage: 5,
            health: 100,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
            name: "Bat",
            maxDamage: 8,
            health: 80,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
            name: "Bear",
            maxDamage: 20,
            health: 150,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
            name: "Beetle",
            maxDamage: 3,
            health: 300,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
            name: "Boar",
            maxDamage: 7,
            health: 85,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
            name: "Carrion bird",
            maxDamage: 6,
            health: 170,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
            name: "Chimaera",
            maxDamage: 12,
            health: 190,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
            name: "Clefthoof",
            maxDamage: 50,
            health: 500,
            maxItemsDrop: 4
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
            name: "Crab",
            maxDamage: 8,
            health: 120,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
            name: "Crocolisk",
            maxDamage: 38,
            health: 420,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
            name: "Devilsaur",
            maxDamage: 25,
            health: 250,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
            name: "Diemetradon",
            maxDamage: 12,
            health: 90,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
            name: "Dragonhawk",
            maxDamage: 120,
            health: 20,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
            name: "Elekk",
            maxDamage: 34,
            health: 160,
            maxItemsDrop: 4

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
            name: "Fox",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
            name: "Gryphon",
            maxDamage: 18,
            health: 350,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
            name: "Gorilla",
            maxDamage: 30,
            health: 240,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
            name: "Horse",
            maxDamage: 3,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
            name: "Hydra",
            maxDamage: 40,
            health: 500,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
            name: "Hyena",
            maxDamage: 9,
            health: 120,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
            name: "Lion",
            maxDamage: 13,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
            name: "Lynx",
            maxDamage: 12,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
            name: "Mastiff",
            maxDamage: 7,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
            name: "Monkey",
            maxDamage: 4,
            health: 300,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
            name: "Nether ray",
            maxDamage: 6,
            health: 120,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
            name: "Owl",
            maxDamage: 7,
            health: 70,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
            name: "Panther",
            maxDamage: 19,
            health: 40,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
            name: "Parrot",
            maxDamage: 2,
            health: 30,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
            name: "Raven",
            maxDamage: 8,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
            name: "Rhinoceros",
            maxDamage: 120,
            health: 1500,
            maxItemsDrop: 8
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
            name: "Scorpid",
            maxDamage: 25,
            health: 300,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
            name: "Sea snake",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
            name: "Serpent",
            maxDamage: 12,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
            name: "Shark",
            maxDamage: 15,
            health: 210,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
            name: "Spore bat",
            maxDamage: 9,
            health: 150
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
            name: "Stag",
            maxDamage: 4,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
            name: "Tallstrider",
            maxDamage: 20,
            health: 80
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
            name: "Threshadon",
            maxDamage: 70,
            health: 800,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
            name: "Turtle",
            maxDamage: 5,
            health: 5000,
            maxItemsDrop: 10
        }
    ]
    const myCharacter = useSelector((state) => state.character.value);
    const enemyMonsters = useSelector((state) => state.monster.value);
    const equippedWeapons = useSelector((state) => state.weapon.value);
    const dispatch = useDispatch();
    const [getMyHealth, setMyHealth] = useState(myCharacter.health);
    const [getMyEnergy, setMyEnergy] = useState(myCharacter.energy);
    const [getFighting, setFighting] = useState(false);
    const [getMonsterHealthNow, setMonsterHealthNow] = useState(0);
    const [getMonsterHealthAfter, setMonsterHealthAfter] = useState(0);

    function showHealth() {
        return (
            <div>
                {getMyHealth} / {myCharacter.health}
            </div>
        )
    }

    function energy() {
        let energyPercentage = getMyEnergy / myCharacter.energy * 100;
        return (
            <div>
                {getMyEnergy} / {myCharacter.energy}
            </div>
        )
    }

    function showMonsterHealth() {
        let healthPercentage = getMonsterHealthNow / getMonsterHealthAfter * 100;
        return (
            <div>


                {getMonsterHealthNow} / {getMonsterHealthAfter}

            </div>
        )
    }

    function changeIsFighting(boolean) {
        setFighting(boolean);
    }


    function generateMonsters() {
        const randomNum = Math.floor(Math.random() * monsters.length);
        dispatch(createMonster(monsters[randomNum]));
        setMonsterHealthNow(monsters[randomNum].health);
        setMonsterHealthAfter(monsters[randomNum].health);
        changeIsFighting(true);

    }

    function displayMonsters() {
            return (
                <div>
                    <div>
                        <h2>{enemyMonsters.name}</h2>
                        <img className="" src={enemyMonsters.image} alt=""/>
                    </div>
                    <div>
                        <div>Max Damage: {enemyMonsters.maxDamage}</div>
                        <div>Health: {enemyMonsters.health}</div>
                        <div>Max Item Drop: {enemyMonsters.maxItemsDrop}</div>
                    </div>

                </div>
            )

    }


    function attack() {
        const dmgToPlayer = Math.floor(Math.random() * enemyMonsters.maxDamage);
        const minusEnergy = equippedWeapons.energyPerHit;
        const plusEnergy = myCharacter.stamina;
        const playerDmg = myCharacter.damage;

        const plusWeaponHit = equippedWeapons.maxDamage;
        const randomWeaponHit = Math.floor(Math.random() * plusWeaponHit);


        if (getMyEnergy >= minusEnergy && getMyHealth > dmgToPlayer) {
            setMyHealth(getMyHealth - dmgToPlayer);
            setMyEnergy(getMyEnergy - minusEnergy + plusEnergy);
            setMonsterHealthNow(getMonsterHealthNow - playerDmg - randomWeaponHit)
        }
        if (getMyEnergy < minusEnergy && getMyHealth > dmgToPlayer) {
            setMyHealth(getMyHealth - dmgToPlayer);
            setMyEnergy(getMyEnergy + plusEnergy);
            console.log("no energy")
        }
        if (getMyHealth <= dmgToPlayer && playerDmg + randomWeaponHit < getMonsterHealthNow) {
            setMyHealth(0);
            setMonsterHealthNow(getMonsterHealthNow - playerDmg - randomWeaponHit)
            console.log("You lost");
            {
                navigate("/")
            }
            ;
        }
        if (playerDmg + randomWeaponHit >= getMonsterHealthNow && getMyHealth > dmgToPlayer) {
            setMonsterHealthNow(0);
            setMyHealth(getMyHealth - dmgToPlayer);
            setMyEnergy(getMyEnergy - minusEnergy + plusEnergy);
            setMonsterHealthNow(getMonsterHealthNow - playerDmg - randomWeaponHit)
            console.log("you won");
            changeIsFighting(false);
            const randomNumber = Math.round(Math.random() * enemyMonsters.maxItemsDrop);


        }
    }


    return (
        <div className="d-flex space-btw">
            <div className="heroBox">
                <CharacterInformation/>
                <h1>Health:{showHealth()}</h1>
                <h1>Energy:{energy()}</h1>


            </div>
            <div className="d-flex space-btw">
                {!getFighting && <button className="btn" onClick={generateMonsters}>find your oponent</button>}
                {getFighting && <button className="btn" onClick={attack}>attack him</button>}

            </div>
            <h1>EQUIP WEAPON BEFORE FIGHT</h1>
            <div className="heroBox">
                <h1>
                    {getFighting && displayMonsters()}
                </h1>
                <h2>
                    {getFighting && showMonsterHealth()}
                </h2>
            </div>

        </div>
    );
};

export default ArenaPage;