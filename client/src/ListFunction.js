import axios from 'axios'


export const getList = () => {
  return axios
  .get('/api', {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => {
    console.log('res')
    // console.log(res.data)
    return res.data
  })
}

export const storeList = content => {
  return axios
  .post(
    '/api/store',
    {
      content:content
    },
    {
      headers: { 'Content-Type': 'appilcation/json'}
    }
  )
  .then(function(response){
    console.log(response)
  })
}

export const deleteList = id => {
  axios
  .delete(`/api/delete/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })
}