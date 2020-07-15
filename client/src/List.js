import React, {Component} from 'react'
import {getList, storeList, deleteList} from './ListFunction'

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
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
}
componentDidMount() {
  this.getAll()
}
onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
  console.log(e.target.value)
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

onSubmit = e => {
  e.preventDefault()
  storeList(this.state.content).then(() => {
    this.getAll()
  })
  this.setState({
    content:''
  })
}

onDelete = (val, e) => {
  // console.log(val)
  // console.log(e)
  e.preventDefault()
  deleteList(val)

  let data = [...this.state.items]
  data.filter(function(item, index){
    if (item.id === val){
      data.splice(index, 1)
    }
    // console.log(data)
    return true
  })
  this.setState({ items: [...data] })
}

  
  render(){
    return(
    <div className="wrapper">
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
            <div className="row">
              <div className="col-md-12">
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="content"
                      value={this.state.content || ''}
                      onChange={this.onChange.bind(this)}
                  />
              </div>
            </div>
            <button
              type="submit"
              onClick={this.onSubmit.bind(this)}
              className="btn btn-success btn-block"
              >
                Submit
              </button>
        </div>
      </form>
      <table className="table">
        <tbody>
          {this.state.items.map((item, index) => (
          <tr key={index}>
            <td className="text-left">{item.content}</td>
            <td className="created">{item.created_at}</td>
            <td className="text-right">
              <button
                href=""
                className="btn btn-danger"
                desabled={this.state.editDisabled}
                onClick={this.onDelete.bind(
                  this,
                  item.id
                )}
                >
                  Delete

              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  }
}

export default List