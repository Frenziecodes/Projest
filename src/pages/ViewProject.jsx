import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import ReactPaginate from "react-paginate";
import SideNav from './sidenav';
import AdvertBanner from "../components/AdvertBanner";

function ViewProject() {
  const [users, setUsers] = useState([]);
  const [userResult, setUserResult] = useState([]);
  const [loader, setLoader] = useState(true);
  const userData = collection(db, "projects");
  const [searchVal, setSearchVal] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [prePageNumber, setPrePageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

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

    return setUserResult(filteredData);
  }, [searchVal]);

  useEffect(() => {
    if (searchVal !== "") {
      setPageNumber(0);
    } else {
      setPageNumber(prePageNumber);
    }
  }, [searchVal]);

  const h = userResult.length <= 3 ? "h-[84vh]" : "h-[100%]";

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

  const displayUsers = userResult
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div
          key={user.id}
          className="flex flex-col text-black items-center p-[20px] h-[100%] bg-blue-100 rounded-sm hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300"
        >
          <h2 className="text-3xl text-blue-600 font-[700] mb-[10px]">
            {user.title}
          </h2>
          <p className="text-gray-600">{user.description}</p>
          <div className="flex justify-center w-[100%] my-[20px]">
            <a
              href={user.userGithubLink}
              className=" h-[100%] mr-[20px] px-[10px] py-[10px] bg-blue-500 text-white rounded-sm font-[500] "
              target="_blank"
            >
              Github Profile
            </a>
            <a
              href={user.projectGithubLink}
              className=" h-[100%] ml-[20px] px-[10px] py-[10px] bg-blue-500 text-white rounded-sm font-[500] "
              target="_blank"
            >
              Project Link
            </a>
          </div>
          <div>
            Project Tags :
            {user.tags.map((tag) => {
              return <span className=""> {tag} ,</span>;
            })}
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(userResult.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    setPrePageNumber(selected);
  };

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
    <div className="{`${h} p-[20px]`} ml-60 Context">
      <SideNav/>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search projects here"
          className=" placeholder:text-slate-500 block bg-white w-[90vw] md:w-[36vw] lg:w-[32vw] border border-slate-300 rounded-md my-4 py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          onChange={(e) => setSearchVal(e.target.value)}
        ></input>
        {/* <BsSearch onClick={handleSearchClick} /> */}
      </div>
      <AdvertBanner/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[40px] px-[20px]">
        {displayUsers}
      </div>
      <div className="flex justify-center mt-12 mb-6">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={changePage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default ViewProject;