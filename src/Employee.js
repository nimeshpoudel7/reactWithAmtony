import React from 'react'

const Employee = (props) => {
const {name,address,title,salary:Employesalary}=props
const {street,country,zone,salary:adressSalary}=address

  return (
    <div>
      <div>this is the name:{name} title= {street} address:{Employesalary}</div>
    </div>
  )
}

export default Employee
