import { useEquipment } from "./equipmentDataProvider.js"
import allEquipment from "./Equipment.js"


const contentTarget = document.querySelector(".equipment")

const equipmentList = () => {

    const equipmentArray = useEquipment()

    for (const equipmentObject of equipmentArray) {

      const htmlRepOfEquipment = allEquipment(equipmentObject)

      contentTarget.innerHTML += htmlRepOfEquipment
    }

  }
  
  export default equipmentList