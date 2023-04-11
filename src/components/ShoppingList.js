import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import "../styles/PlantItem.css";
import CareScale from "./Carescale";

function ShoppingList() {
  let categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className='lmj-plant-list'>
        {plantList.map((plant) => (
          <li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
            {plant.isBestSale && plant.category === "classique" && <span>🤟</span>}
            {plant.isSpecialOffer && <span>🎟️</span>}</li>
        ))}
      </ul>
    </div>
  );

}

export default ShoppingList;
