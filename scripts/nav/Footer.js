import { yearEstablished } from "./YearEstablished.js"
import { buisnessName } from "./BusinessName.js"
import { contactList } from "./contact/ContactList.js"



const contentTarget = document.querySelector(".footer_container")

export const footer = () => {
    contentTarget.innerHTML =  `
    ${contactList()}
    ${buisnessName()}
    ${yearEstablished()}
    `
}