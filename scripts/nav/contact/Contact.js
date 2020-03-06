const contacts = (contactObject) => {
    return `
           <ol class="contacts" >
           <ul>
                <section>Info: ${contactObject.info}</section>
                <section>Info Type: ${contactObject.infoType}</section>
            </ul>
            </ol>
      
    `
}

export default contacts