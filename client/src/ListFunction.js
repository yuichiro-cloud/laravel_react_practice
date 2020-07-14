import axios from 'axios'

// export const getLis = () => {
//   return axios
//   .get('/api/tasks', {
//       headers: { 'Content-Type': 'application/json' }
//   })
//   .then(res => {
//       // console.log(res);
//       return res.data
//   })
// }


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