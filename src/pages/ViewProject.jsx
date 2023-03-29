import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

function ViewProject() {
  const [users, setUsers] = useState([])
  const [loader, setLoader] = useState(true)
  const userData = collection(db, 'projects')

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userData)
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      setLoader(false)
    }
    getData()
  }, [])

  // console.log(users)

  return (
    loader ? (
      <div className='h-[84vh]' >
        <div className="flex justify-center items-center h-full">
          <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
        </div>
      </div>
    ) : (
      <div className='h-[100%] p-[20px]'>
        <div className='grid grid-cols-3 mt-[40px] px-[20px]'>
          {
            users.map(user => {
              {/* console.log(user) */ }
              return (
                <div key={user.id} className="flex flex-col text-black justify-center items-center p-[10px] h-[100%] bg-blue-100 rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300">
                  <h2 className='text-3xl text-blue-600 font-[700] mb-[10px]'>{user.title}</h2>
                  <p className='text-gray-600'>{user.description}</p>
                  <div className='flex justify-center w-[100%] my-[20px]'>
                    <a href={user.userGithubLink} className=" h-[100%] mr-[20px] px-[10px] py-[10px] bg-blue-500 text-white rounded-sm font-[500] " target="_blank">Github Profile</a>
                    <a href={user.projectGithubLink} className=" h-[100%] ml-[20px] px-[10px] py-[10px] bg-blue-500 text-white rounded-sm font-[500] " target="_blank">Project Link</a>
                  </div>
                  <div>
                  Tags : 
                    {
                      user.tags.map(tag => {
                        <span className=''>{tag}</span>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )

  )
}

export default ViewProject