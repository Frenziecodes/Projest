import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function ViewProject() {
  const [users,setUsers] = useState([])
  const userData = collection(db,'projects')
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userData)
      setUsers(data.docs.map(doc => ({...doc.data(),id:doc.id})))
    }
    getData()
  }, [])

  // console.log(users)
  
  return (
    <div>
      {
        users.map(user => {
          console.log(user)
          return(
            <div>{user.title}</div>
          )
      })
      }
    </div>
  )
}

export default ViewProject