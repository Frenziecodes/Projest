import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const userData = collection(db,'projects')
  const navigate = useNavigate();
  let tagArray = []
  const saveData = async () => {
    const x = await addDoc(userData, {
      title: title,
      description: description,
      userGithubLink: githubLink,
      projectGithubLink: projectLink,
      tags: tagArray
    });
    navigate('/viewprojects')
  }
  const schema =yup.object({
      title:yup.string().required("Project Title is required"),
      Description:yup.string().required("Project Description is required"),
      UserGithubLink:yup.string().required("User GithubLink is required"),
      ProjectGithubLink:yup.string().required("Project GithubLink is required"),


  }).required();
  
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) =>{
      saveData()
  };
  const handleChange = (e) => {
    if(e.target.checked) {
      tagArray.push(e.target.value)
    } else {
      var index = tagArray.indexOf(e.target.value);
      if (index !== -1) {
        tagArray.splice(index, 1);
      }
    }
  }

  return (
    <div className='flex flex-col items-center h-[100%] pb-[50px] md:pb-[115px]'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-medium leading-tight text-2xl mt-10 md:mt-[50px] mb-4 text-blue-600">Add your project details 👇</h2>
      <div className='border-b-[3px] border-black mb-10 w-[200px]'></div>
      <div className='flex flex-col md:flex-row justify-start items-start w-[100%]'>
        <div className='flex flex-col items-center md:items-end justify-center w-[100%] md:w-[40%] lg:w-[50%]'>
          <input type="text" placeholder='Project Title' {...register("title")} className=' placeholder:text-slate-500 block bg-white w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' onChange={(e) => setTitle(e.target.value)} ></input>
          <p className='text-red-500'>{errors.title?.message}</p>
          <textarea placeholder='Project Description'{...register("Description")}  className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' onChange={(e) => setDescription(e.target.value)}  ></textarea>
          <p className='text-red-500'>{errors.Description?.message}</p>

          <input type="text" placeholder='User Github Link' className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' onChange={(e) => setGithubLink(e.target.value)}  {...register("UserGithubLink")}></input>
          <p className='text-red-500'>{errors.UserGithubLink?.message}</p>

          <input type="text" placeholder='Project Github Link' className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' onChange={(e) => setProjectLink(e.target.value)} {...register("ProjectGithubLink")} ></input>
          <p className='text-red-500'>{errors.ProjectGithubLink?.message}</p>
        </div>
        <div className='md:ml-[20px] w-[90%] md:w-[60%] lg:w-[34%] my-[20px] mx-[20px] md:my-0 '>
          <h4>Select Your Project Tags : </h4>
          <div className='grid grid-cols-3 md:grid-cols-4 gap-8 mt-2'>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Javascript" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)}/>
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Javascript</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Python" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Python</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Java" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Java</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="PHP" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">PHP</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Html" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">HTML</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="React.js" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">React.js</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Vue.js" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Vue.js</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Angular.js" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Angular.js</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Tailwind.css" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">TailwindCss</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Bootstrap" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Bootstrap</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Css" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">CSS</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="C#" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">C #</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Frontend" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Frontend</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Backend" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Backend</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Fullstack" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">FullStack</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Kotlin" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Kotlin</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Typescript" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">TypeScript</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Rust" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => handleChange(e)} />
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Rust</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Swift" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={e => handleChange(e)}/>
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Swift</label>
            </div>
            <div className="flex items-center justify-start bg-blue-600 px-1 w-28 rounded-[2px] text-white py-2">
              <input id="default-checkbox" type="checkbox" value="Git" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={e => handleChange(e)}/>
              <label htmlFor="default-checkbox" className="ml-1 text-base font-medium">Git</label>
            </div>
          </div>
        </div>
      </div>
      <button className="px-6 py-2 mt-8 font-medium text-white bg-blue-500 rounded-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"  type='submit' >
        Save Project
      </button>
      </form>
    </div>
  )
}

export default AddProject
// onClick={saveData}
