const {useState} = require("react");

const equipment = {
    one: "First Aid Kit",
    two: "Multi-Tool",
    three: "Steel Toe Boots"
};

const elvenSwordRecipe = {
    ...equipment,
    four: "knife",
    five: "Hawk Axe",
    six: "Flashlight",
    seven: "Baseball Bat"
}

console.log(equipment)
console.log(elvenSwordRecipe)

const Equipment = () => {
    const [isEquipment, setIsEquipment] = useState({})

    const initial = () => {
        setIsEquipment(equipment)
    }

    const additional = () => {
        setIsEquipment(elvenSwordRecipe)
    }

    const hide = () => {
        setIsEquipment({})
    }

    return (
        <div>
            <h2>Current tool:</h2>
            <button onClick={initial}>Initial package</button>
            <button onClick={additional}>Full package</button>
            <button onClick={hide}>Hide package</button>

            <ul>
                {Object.keys(isEquipment).map((tool) => (
                    <li key={tool}>
                        {tool} : {isEquipment[tool]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Equipment;
