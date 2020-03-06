import { useEmployee } from "./employeeDataProvider.js"
import employees from "./Employee.js"



const contentTarget = document.querySelector(".employee")

const employeeList = () => {

    const employeeArray = useEmployee()

    for (const employeeObject of employeeArray) {

      const htmlRepOfEmployee = employees(employeeObject)

      contentTarget.innerHTML += htmlRepOfEmployee
    }

  }
  
  export default employeeList