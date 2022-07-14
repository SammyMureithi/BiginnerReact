import React from 'react'

function ObjectRendering() {
    const persons=[
        {
            id: 1,
            name:"Mure",
            age: 21,
            skills: "React Dev"
        }
,
        {
            id: 2,
            name:"Sam",
            age: 21,
            skills: "Javascipt Dev",
            location:[{
                code: 256,
                city: "NewLands",
                town: "Eldoret"
            }]
        }
,
        {
            id: 3,
            name:"Kamaa",
            age: 21,
            skills: "Kotlin Dev",
            location:[{
                code: 200,
                city: "Cape Jasey",
                town: "Nairobi"
            }]
        },
        {
            id: 4,
            name:"Shoke",
            age: 21,
            skills: "Android Dev",
            location:[{
                code: 254,
                city: "New Jasey",
                town: "Kitale"
            }]
        }
    ]
    const personList=persons.map(person => <h2>My name is {person.name},with id no.{person.id},
     of age {person.age} and am good at {person.skills} and live in</h2>)
  return (
    <div>{personList}</div>
  )
}

export default ObjectRendering