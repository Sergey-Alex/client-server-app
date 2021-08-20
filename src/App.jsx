import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
function getId() {
    return uuidv4(5)
}
function App() {
        const [data, setData] = useState([])
    const getList = () => {
            axios.get('http://localhost:3003/')
                .then((res) => {
                    if (res) {
                       setData(res.data)
                    }
                })
                .catch(err => console.log(err.message))
    }
    useEffect(getList , [])

  return (

      <table>
         <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>facultet</th>
            </tr>
         </thead>
          <tbody>
          {
                data.map(items => {
                  return  <tr key={getId()}>
                        <td>{items.name}</td>
                        <td>{items.surname}</td>
                        <td>{items.age}</td>
                        <td>{items.facultet}</td>
                    </tr>
                })
          }
          </tbody>
  </table>

  )}

export default App;
