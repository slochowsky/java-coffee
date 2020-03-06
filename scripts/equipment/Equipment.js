const allEquipment = (equipmentObject) => {
    return `
        <div class="single_equipment">
            <ul>
                <section class="serialNumber">Serial Number: ${equipmentObject.serialNumber}</section>
                <section class="modleNumber">Model Number: ${equipmentObject.model}</section>
                <section class="isFunctional">Functional?: ${equipmentObject.isFunctional ? "Yes" : "No"}</section>
                <section class="isunderWarranty">Under Warranty?: ${equipmentObject.isUnderWarranty ? "✔" : "No"}</section>
            </ul>
        </div>
    `
}

export default allEquipment