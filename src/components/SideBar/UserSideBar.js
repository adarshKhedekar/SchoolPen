import React, { useEffect, useState } from "react";
import userImage from "../../assets/user.png";
import "./UserSideBar.css";

function SideBar() {
  const [users, setUsers] = useState(null);
  const [ShowDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    //can call api here to fetch users
    const data = [
      {
        img: userImage,
        name: "Name",
      },
      {
        img: userImage,
        name: "Name",
      },
      {
        img: userImage,
        name: "Name",
      },
    ];
    setUsers(data);
  }, []);

  const handleDropdown = () => {
    //rotating the + to x
    if (ShowDropdown) {
      document.querySelector(".create").style.transform = "rotate(0deg)";
    } else {
      document.querySelector(".create").style.transform = "rotate(45deg)";
    }
    setShowDropdown((prevState) => !prevState);
  };
  return (
    <div className="sidebar">
      <div className="total-users">
        <span className="text">Total Users</span>
        <span className="number">1,000</span>
      </div>

      <div className="create-user-container">
        <div className="create-user">
          <span>Users</span>
          <span onClick={handleDropdown} className="create">
            +
          </span>
        </div>

        {/* if show dropdown is true it will ask to create new user */}
        {ShowDropdown && (
          <>
            <div className="dropdown">
              <span>Create User</span>
              <input type="text" name="" id="" placeholder="User name" />
              <input type="text" name="" id="" placeholder="User id" />
              <input type="text" name="" id="" placeholder="Password" />
            </div>
            <div className="btn">Create User</div>
          </>
        )}
      </div>

      {/* if show drop is not true it will show the no. of users  */}
      {!ShowDropdown && (
        <div className="users">
          {users?.map((user, index) => {
            return (
              <div className="user" key={index}>
                <img src={user.img} alt="user-img" />
                <span>{user.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SideBar;
