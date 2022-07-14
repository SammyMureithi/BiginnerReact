import React from 'react'

function NameList() {
    const nameArray=['Sammy','Mureithi','Kirathe','Mercy','Wairimu','Githamari','Josphat','Nderitu']
    
   
    
  return (
    <div>
       {
         nameArray.map(name =>(<h2>My name is {name}</h2>))
       }
    </div>
  )
}

export default NameList