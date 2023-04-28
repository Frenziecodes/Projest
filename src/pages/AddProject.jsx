import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { WithContext as ReactTags } from 'react-tag-input';
import * as yup from 'yup'
import SideNav from './sidenav';
import '../tags.css';

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const userData = collection(db,'projects');
  const [tags, setTags] = useState([
 
  ]);
  const navigate = useNavigate();

  const saveData = async () => {
    const tagsArr = []
    tags.forEach(tag => {
      tagsArr.push(tag.text);
    });
    const x = await addDoc(userData, {
      title: title,
      description: description,
      userGithubLink: githubLink,
      projectGithubLink: projectLink,
      tags: tagsArr
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

  const suggestions = [
    { id: "1", text: "Javascript" },
    { id: "2", text: "Python"},
    { id: "3", text: "Java" },
    { id: "4", text: "HTML" },
    { id: "5", text: "PHP" },
    { id: "6", text: "TypeScript"},
    { id: "7", text: "React" },
    { id: "8", text: "Vue" },
    { id: "9", text: "Angular" },
    { id: "10", text: "Bootstrap"},
    { id: "11", text: "Tailwind" },
    { id: "12", text: "CSS" },
];

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };


  return (
    <section className='flex min-h-screen overflow-y-hidden'>        
        <SideNav />       

        <div className='flex flex-col items-center ml-1 md:ml-60 md:pl-2 h-[100%] pb-[50px] md:pb-[115px] pt-10 Context'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-medium leading-tight text-2xl mt-10 md:mt-[50px] mb-4 text-blue-600">Add your project details 👇</h2>
          <div className='border-b-[3px] border-black mb-10 w-[200px]'></div>
          <div className='flex flex-col md:flex-row justify-start items-start w-[100%]'>
            <div className='flex flex-col items-center md:items-end justify-center w-[100%] md:w-[40%] lg:w-[50%]'>
              <input type="text" placeholder='Project Title' {...register("title")} className=' placeholder:text-slate-500 block bg-white w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' onChange={(e) => setTitle(e.target.value)} ></input>
              <p className='text-red-500'>{errors.title?.message}</p>
              <textarea placeholder='Project Description'{...register("Description")}  className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' onChange={(e) => setDescription(e.target.value)}  ></textarea>
              <p className='text-red-500'>{errors.Description?.message}</p>

              <input type="text" placeholder='User Github Link'{...register("UserGithubLink")} className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 ' onChange={(e) => setGithubLink(e.target.value)} ></input>
              <p className='text-red-500'>{errors.UserGithubLink?.message}</p>

              <input type="text" placeholder='Project Github Link'{...register("ProjectGithubLink")} className=' placeholder:text-slate-500 block bg-white w-[90vw]  md:w-[36vw] lg:w-[32vw]  border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' onChange={(e) => setProjectLink(e.target.value)} ></input>
              <p className='text-red-500'>{errors.ProjectGithubLink?.message}</p>
            </div>
            <div className='md:ml-5 w-11/12 h-64 md:w-2/3 lg:w-1/2 my-5 mx-5 md:my-0'>
              <h4 className='mb-2 font-medium'>Select Your Project Tags:</h4>

              <div className='w-[350px]'>
              <ReactTags
                  tags={tags}
                  suggestions={suggestions}
                  delimiters={delimiters}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                  placeholder='Add Skill Tags'
                  inputFieldPosition="top"
                  allowDragDrop={false}
                  classNames={{
                    tags: 'tagsClass',
                    tagInput: 'tagInputClass',
                    tagInputField: 'tagInputFieldClass',
                    tag: 'tagClass',
                    suggestions: 'suggestionsClass',
                    activeSuggestion: 'activeSuggestionClass',
                  }}
                />
              </div>
            </div>
          </div>
          <button className="px-6 py-2 mt-8 font-medium text-white bg-blue-500 rounded-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"  type='submit' >
            Save Project
          </button>
          </form>
        </div>
    </section>
  )
}

export default AddProject
// onClick={saveData}
