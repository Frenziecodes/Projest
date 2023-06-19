import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import AdvertBanner from "../components/AdvertBanner";
import Modal from "../components/Modal";

function ViewProject() {
  const [users, setUsers] = useState([]);
  const [userResult, setUserResult] = useState([]);
  const [loader, setLoader] = useState(true);
  const userData = collection(db, "projects");
  const [searchVal, setSearchVal] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userData);
      const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUsers(result);
      setUserResult(result);
      setLoader(false);
    };
    getData();
  }, []);

  useEffect(() => {
    if (searchVal === "" && selectedCategory === "" && selectedLanguage === "") {
      return setUserResult(users);
    }

    const filteredData = users.filter((item) => {
      const isMatchedCategory =
        selectedCategory === "" || item.category === selectedCategory;

      const isMatchedLanguage =
        selectedLanguage === "" || item.tags.includes(selectedLanguage);

      if (!isMatchedCategory || !isMatchedLanguage) {
        return false;
      }

      if (item.title.toLowerCase().includes(searchVal.toLowerCase())) {
        return true;
      }

      if (item.description.toLowerCase().includes(searchVal.toLowerCase())) {
        return true;
      }

      const list = item.tags.filter((it) => {
        if (it.toLowerCase().includes(searchVal.toLowerCase())) {
          return true;
        }
        return false;
      });

      return list.length > 0;
    });

    setUserResult(filteredData);
  }, [searchVal, selectedCategory, selectedLanguage, users]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const h = userResult.length <= 3 ? "h-[84vh]" : "h-[100%]";

  const displayUsers = userResult.map((user) => {
    // Truncate the description to a maximum of 70 characters
    const truncatedDescription =
      user.description.length > 70 ? user.description.slice(0, 70) + "..." : user.description;

    return (
      <div
        key={user.id}
        className="bg-white rounded-lg shadow-lg border border-gray-300 p-6 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">{user.title}</h2>
          <img
            className="rounded-full w-12 h-12 mb-4"
            src={`https://github.com/${user.userGithubLink.split("/")[3]}.png`}
            alt="Profile"
          />
        </div>
        <p className="text-gray-800 mb-4" style={{ height: "3.75rem" }}>
          {truncatedDescription}
        </p>
        <div className="flex justify-between">
          <a
            href={user.userGithubLink}
            className="text-sm lg:text-lg bg-white hover:bg-blue-800 hover:text-white border border-1 border-blue-800 text-blue-800 py-2 px-2 mt-1 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
          <button
            className="text-sm lg:text-lg bg-blue-800 hover:bg-white text-white hover:text-blue-800 hover:border hover:border-1 hover:border-blue-800 py-2 px-2 mt-1 rounded-md"
            onClick={() => openModal(user)}
          >
            View More
          </button>
        </div>
      </div>
    );
  });

  return loader ? (
    <div className="h-[84vh]">
      <div className="flex justify-center items-center h-full">
        <img
          className="h-16 w-16"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt=""
        />
      </div>
    </div>
  ) : (
    <div className="{`${h} p-[20px]`} mt-20 Context">
      <AdvertBanner />
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        <input
          type="text"
          placeholder="Search projects here either by name or language used"
          className="placeholder:text-slate-500 block bg-white w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        {/* <select
          className="block bg-white w-[20vw] md:w-[14vw] lg:w-[12vw] border border-slate-300 rounded-md my-4 py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="Development">Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Game Development">Game Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="E-commerce">E-commerce</option>
        </select> */}
        <select
          className="block bg-white w-[20vw] md:w-[14vw] lg:w-[12vw] border border-slate-300 rounded-md my-4 py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="">All</option>
          <option value="Javascript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="React">React</option>
          <option value="PHP">PHP</option>
          <option value="HTML">HTML</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Vue">Vue</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[40px] py-4 px-[20px]">
        {displayUsers}
      </div>

      {showModal && selectedProject && (
        <Modal closeModal={closeModal}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">{selectedProject.title}</h2>
            <img
              className="rounded-full w-14 h-14 mb-4"
              src={`https://github.com/${selectedProject.userGithubLink.split("/")[3]}.png`}
              alt="Profile"
            />
          </div>          
          <p className="text-gray-800 mb-4">{selectedProject.description}</p>
          {selectedProject.category && (
            <p className="text-gray-800 mb-4">Category: {selectedProject.category}</p>
          )}
          {selectedProject.tags.length > 0 && (
            <p className="text-gray-800 mb-4">Tags: {selectedProject.tags.join(', ')}</p>
          )}          
          <div className="grid grid-cols-3 gap-2 place-items-center">
            <a
              href={selectedProject.userGithubLink}
              className="text-sm lg:text-lg bg-white hover:bg-blue-800 hover:text-white border border-1 border-blue-800 text-blue-800 py-2 px-2 mt-1 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile
            </a>
            {selectedProject.demoLink && (
              <a
                href={selectedProject.demoLink}
                className="text-sm lg:text-lg bg-blue-600 hover:bg-white text-white hover:text-blue-800 hover:border hover:border-1 hover:border-blue-800 py-2 px-2 mt-1 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo Link
              </a>
            )}
            <a
              href={selectedProject.projectGithubLink}
              className="text-sm lg:text-lg bg-blue-800 hover:bg-white text-white hover:text-blue-800 hover:border hover:border-1 hover:border-blue-800 py-2 px-2 mt-1 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Link
            </a>
          </div>
        </Modal>
      )}

    </div>
  );
}

export default ViewProject;
