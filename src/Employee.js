import React from 'react'

const Employee = (props) => {

const {name,id}=props;
  return (
    <div>
      <p>this is the name:{name}</p>
    </div>
  )
}

export default Employee
