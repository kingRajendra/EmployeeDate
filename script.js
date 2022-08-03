
let searchButon = document.getElementById("searchButton")
let searchInput = document.getElementById("searchInput")
let responseContainer = document.getElementById("responseContainer")

let validName = false

  let employeDetails = (AttendanceRegister) => {
    

    let employeeDetailsContainer = document.createElement("table");
    responseContainer.appendChild(employeeDetailsContainer);

    let tableItemsContainer = document.createElement("tr");
    employeeDetailsContainer.appendChild(tableItemsContainer);

    let personName = document.createElement("th");
    personName.textContent = "Person Name"
    tableItemsContainer.appendChild(personName);


    let Date = document.createElement("th");
    Date.textContent = "Date"
    tableItemsContainer.appendChild(Date);

    let checkInTime = document.createElement("th");
    checkInTime.textContent = "Check In Time"
    tableItemsContainer.appendChild(checkInTime);

    let checkOutTime = document.createElement("th");
    checkOutTime.textContent = "Check Out Time"
    tableItemsContainer.appendChild(checkOutTime);

    let department = document.createElement("th");
    department.textContent = "Department"
    tableItemsContainer.appendChild(department);

    let WHPerDay = document.createElement("th");
    WHPerDay.textContent = "Working Hours Per Day"
    tableItemsContainer.appendChild(WHPerDay);

    for (let item of Object.values(AttendanceRegister)) {
      console.log(item)
      let {employeName,dept,date,checkouttime,checkinTime} = item
      
        let DetailsContainer = document.createElement("tr");
        employeeDetailsContainer.appendChild(DetailsContainer);

        let Name = document.createElement("th");
        Name.textContent = employeName
        DetailsContainer.appendChild(Name);

        let Date = document.createElement("th");
        Date.textContent = date
        DetailsContainer.appendChild(Date);

        let CheckInTime = document.createElement("th");
        CheckInTime.textContent = checkinTime
        DetailsContainer.appendChild(CheckInTime);

        let CheckOT = document.createElement("th");
        CheckOT.textContent = checkouttime
        DetailsContainer.appendChild(CheckOT);

        let department = document.createElement("th");
        department.textContent = dept
        DetailsContainer.appendChild(department);

        let WHperDay = document.createElement("th");
        WHperDay.textContent = "1 hour"
        DetailsContainer.appendChild(WHperDay);
   
    }
}
  
let fetchDetails = ()=>{
  responseContainer.textContent = ""
    nameOfEmployee = searchInput.value
    fetch("./AttendanceRegister.json")
    .then((res)=>{
     return res.json()
   })
   .then((data)=>{
    let employeFile = []
      for (let i of data){
       if (i.employeName == nameOfEmployee){
        employeFile.push(i)
       }
      }
      employeDetails(employeFile)
   })
}

  
  function search(){
    if (searchInput.value === "Test1" || searchInput.value === "Test2" || searchInput.value === "Test3" || searchInput.value === "Test4" || searchInput.value === "Test5" || searchInput.value === "Test6"  ){
      fetchDetails()
    }else{
      window.alert("Enter Valid Person Name")
    }
  }




  
