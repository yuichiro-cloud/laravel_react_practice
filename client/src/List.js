import React, {Component} from 'react'
import {getList} from './ListFunction'

class List extends Component{
  constructor() {
    super()
    this.state = {
        id: '',
        title:'',
        arttitle:'',
        artbody:'',
        editDisabled:false,
        items:[]
    }
}
componentDidMount() {
  this.getAll()
}

getAll = () => {
  getList().then(data => {
      this.setState(
          {
              title:'',
              items: [...data]
          },
          () => {
              console.log(this.state.items)
          }
      )
  })
}

  
  render(){
    return(
      <table className="table">
      <tbody>
      {this.state.items.map((item, index) => (
        <tr key={index}>
              <td className="text-left">{item.content}</td>
      <td className="created">{item.created_at}</td>
          </tr>
      ))}
  </tbody>
      </table>
    )
  }
}

export default List