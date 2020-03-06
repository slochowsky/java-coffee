const employees = (employeeObject) => {
    return `
        <div class="single_employee">
            <ul>
                <section class="firstName">First Name: ${employeeObject.firstName}</section>
                <section class="lastName">Last Name: ${employeeObject.lastName}</section>
                <section class="jobTitle">Job Title: ${employeeObject.jobTitle}</section>
                <section class="hoursScheduled">Hours Scheduled: ${employeeObject.hoursScheduled}</section>
            </ul>
        </div>
    `
}

export default employees