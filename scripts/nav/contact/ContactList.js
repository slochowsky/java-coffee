import contacts from "./Contact.js"
import { useContactInfo } from "./contactDataProvider.js"


export const contactList = () => {
  const contactArray = useContactInfo()

    let htmlRepOfContact = ""

    for (const contactObject of contactArray) {      
      htmlRepOfContact += contacts(contactObject)
      
    }
    return htmlRepOfContact
    
  }
