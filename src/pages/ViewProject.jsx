import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import AdvertBanner from "../components/AdvertBanner";

function ViewProject() {
  const [users, setUsers] = useState([]);
  const [userResult, setUserResult] = useState([]);
  const [loader, setLoader] = useState(true);
  const userData = collection(db, "projects");
  const [searchVal, setSearchVal] = useState("");

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
    if (searchVal === "") {
      return setUserResult(users);
    }

    const filteredData = users.filter((item) => {
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
  }, [searchVal, users]);

  const h = userResult.length <= 3 ? "h-[84vh]" : "h-[100%]";

  const displayUsers = userResult.map((user) => {
    // Truncate the description to a maximum of 70 characters
    const truncatedDescription =
      user.description.length > 70
        ? user.description.slice(0, 70) + "..."
        : user.description;

    return (
      <div
        key={user.id}
        className="bg-white rounded-lg shadow-lg border border-gray-300 p-6 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">
            {user.title}
          </h2>
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
            className="bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-pink-500 text-gray-700 py-2 px-4 rounded-md mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </a>
          <a
            href={user.projectGithubLink}
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 text-gray-700 py-2 px-4 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Link
          </a>
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
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search projects here either by name or language used"
          className="placeholder:text-slate-500 block bg-white w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[40px] py-4 px-[20px]">
        {displayUsers}
      </div>
    </div>
  );
}

export default ViewProject;
