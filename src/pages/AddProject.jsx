import React, { useState, useCallback } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { WithContext as ReactTags } from 'react-tag-input';
import { useDropzone } from 'react-dropzone';
import * as yup from 'yup';
import '../tags.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

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
  const [demoLink, setDemoLink] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [droppedImages, setDroppedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0); // State for progress indicator
  const navigate = useNavigate();

  const saveData = async (data) => {
    const imageFiles = selectedImages.concat(droppedImages);
    const tagsArr = tags.map((tag) => tag.text);
    const projectData = {
      title: title,
      description: description,
      userGithubLink: githubLink,
      projectGithubLink: projectLink,
      demoLink: demoLink,
      tags: tagsArr,
      category: category,
    };

    // Upload the image files to Firebase Storage
    const storagePromises = imageFiles.map((imageFile) => {
      const storageRef = ref(storage, 'images/' + imageFile.name);

      // Create a unique upload task for each file
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      // Track the upload progress
      uploadTask.on('state_changed', (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setUploadProgress(progress);
      });

      // Return a promise that resolves when the upload is complete
      return new Promise((resolve, reject) => {
        uploadTask
          .then((snapshot) => {
            // Get the download URL after the upload is complete
            getDownloadURL(snapshot.ref)
              .then((downloadUrl) => resolve(downloadUrl))
              .catch(reject);
          })
          .catch(reject);
      });
    });

    try {
      // Wait for all image uploads to complete
      const downloadUrls = await Promise.all(storagePromises);

      // Add the image URLs to the project data
      projectData.imageUrls = downloadUrls;

      // Save the project data to Firestore
      const docRef = await addDoc(collection(db, 'projects'), projectData);
      navigate('/success');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  

  const schema = yup.object({
    title: yup.string().required('Project Title is required'),
    description: yup.string().required('Project Description is required'),
    userGithubLink: yup.string().required('User Github Link is required'),
    projectGithubLink: yup.string().required('Project Github Link is required'),
    demoLink: yup.string().required('Demo Link is required'),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    saveData(data);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  const suggestions = [
    { id: '1', text: 'Javascript' },
    { id: '2', text: 'Python' },
    { id: '3', text: 'Java' },
    { id: '4', text: 'HTML' },
    { id: '5', text: 'PHP' },
    { id: '6', text: 'TypeScript' },
    { id: '7', text: 'React' },
    { id: '8', text: 'Vue' },
    { id: '9', text: 'Angular' },
    { id: '10', text: 'Bootstrap' },
    { id: '11', text: 'Tailwind' },
    { id: '12', text: 'CSS' },
  ];

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const invalidFiles = acceptedFiles.filter(file => !file.type.startsWith('image/'));
      if (invalidFiles.length > 0) {
        setErrorMessage('Invalid file types. Please drop only image files.');
      } else {
        setDroppedImages((prevImages) => [...prevImages, ...acceptedFiles]);
      }
    },
  });

  return (
    <section className='mb-56 mt-10'>
      <div className='flex md:pl-10 flex-col items-center ml-1 h-[100%] pb-8 mb-8 pt-10 Context'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-semibold leading-tight text-2xl mt-10 ml-[13vw] md:mt-[50px] mb-16 text-gray-700">Add your project details by filling the form below</h2>
          <div className='flex flex-col md:flex-row justify-start items-start w-[100%]'>

            <div className='md:ml-5 w-11/12 h-64 md:w-2/3 lg:w-1/2 my-5 mx-5 md:my-0'>
              <input type="text" placeholder='User Github Link' {...register("userGithubLink")} className='placeholder:text-slate-500 block bg-gray-200 w-[90vw] md:w-[36vw] lg:w-[32vw] rounded-md my-6 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 h-12' onChange={(e) => setGithubLink(e.target.value)}></input>
              <p className='text-red-500'>{errors.userGithubLink?.message}</p>
              <input type="text" placeholder='Project Github Link' {...register("projectGithubLink")} className='placeholder:text-slate-500 block bg-gray-200 w-[90vw] md:w-[36vw] lg:w-[32vw] rounded-md my-6 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 h-12' onChange={(e) => setProjectLink(e.target.value)}></input>
              <p className='text-red-500'>{errors.projectGithubLink?.message}</p>
              <input type="text" placeholder='Demo Link' {...register("demoLink")} className='placeholder:text-slate-500 block bg-gray-200 w-[90vw] md:w-[36vw] lg:w-[32vw] rounded-md my-6 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 h-12' onChange={(e) => setDemoLink(e.target.value)}></input>
              <p className='text-red-500'>{errors.demoLink?.message}</p>
              <select
                {...register("category")}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='block bg-gray-200 w-[90vw] md:w-[36vw] lg:w-[32vw] rounded-md my-6 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 h-12'
              >
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Other">Other</option>
              </select>
              <p className='text-red-500'>{errors.category?.message}</p>
              <div className='placeholder:text-slate-500 block bg-white w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'>
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
              <div className='my-4'>
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Submit
                </button>
                <button onClick={() => navigate('/viewprojects')} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4'>
                  Cancel
                </button>
              </div>
            </div>

            <div className='flex flex-col items-center md:items-end justify-center w-[100%] md:w-[40%] lg:w-[50%]'>
              <input type="text" placeholder='Project Title' {...register("title")} className='placeholder:text-slate-500 block bg-white w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' onChange={(e) => setTitle(e.target.value)}></input>
              <p className='text-red-500'>{errors.title?.message}</p>
              <textarea placeholder='Project Description' {...register("description")} className='placeholder:text-slate-500 block bg-white min-h-[170px] w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' onChange={(e) => setDescription(e.target.value)}></textarea>
              <p className='text-red-500'>{errors.description?.message}</p>
              <section className='flex flex-col w-full justify-start bg-gray-200 border border-gray-400  p-3 cursor-pointer'>
                <div>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>Drag and drop some files here, or click to select files</p>
                    )}
                  </div>
                  {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                  <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-2">
                    {droppedImages.map((image, index) => (
                      <img key={index} src={URL.createObjectURL(image)} alt="Selected" className="w-32 h-32 my-4" />
                    ))}
                  </div>
                </div>
              </section>           

            </div>
          </div>
          {uploadProgress > 0 && (
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${uploadProgress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
                <div className="text-center">{uploadProgress}%</div>
              </div>
            )}
        </form>
      </div>
    </section>
  );
}

export default AddProject;
