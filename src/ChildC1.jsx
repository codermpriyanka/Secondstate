import React from 'react'
import {data} from './App'
function ChildC1() {
  return (
    <div>
      <data.Consumer>
        {
            (name)=>{
                return (
                    <h1>My name is {name}</h1>
                )
            }
        }
      </data.Consumer>
    </div>
  )
}

export default ChildC1
