import React from 'react'

const Employee = (props) => {
// const {name,address:{street,country,zone,salary:adressSalary},title,salary:Employesalary}=props
  const {name,id,title}=props

  return (
    <div>
      <div>this is the name:{name}</div>
      hello
    </div>
  )
}

export default Employee
