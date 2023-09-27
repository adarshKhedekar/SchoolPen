import React, { useEffect, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function OptionsSelection() {
  const [isOpen, setIsOpen] = useState(null);
  const [categories, setCategories] = useState(null);
  const [addOptions, setAddOptions] = useState(null);
  const dd = [false, false, false, false, false];

  const opt = [
    { title: "Language", options: ["English", "Hindi", "Urdu"] },
    { title: "Class", options: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    {
      title: "Subject",
      options: ["Science", "Mathematics", "History"],
    },

    {
      title: "Topic",
      options: ["Biology", "Chemistry", "Physics"],
    },
    { title: "Select User", options: ["Jack", "Chris"] },
  ];

  const add = ["Add User", "Add Class", "Add Subject", "Add Topic"];

  useEffect(() => {
    setCategories(opt);
    setIsOpen(dd);
    setAddOptions(add);
}, []);

  const toggleDropdown = (event) => {
    let cls;
    if (event.target.tagName === "path") {
      cls = event.target.parentElement.classList[0];
    } else {
      cls = event.target.classList[0];
    }

    let idx = parseInt(cls.split("-")[1]);

    if (isOpen[idx]) {
      document.querySelector("." + cls).style.borderBottomLeftRadius = "10px";
      document.querySelector("." + cls).style.borderBottomRightRadius = "10px";
    } else {
      document.querySelector("." + cls).style.borderBottomLeftRadius = "0";
      document.querySelector("." + cls).style.borderBottomRightRadius = "0";
    }

    //dropdown handling of specific selection
    const newIsOpen = [...isOpen];
    newIsOpen[idx] = !newIsOpen[idx];
    setIsOpen(newIsOpen);
  };

  const handleOptionClick = (option, event) => {
    let cls = event.target.parentElement.classList[1];
    console.log(cls);
    let idx = parseInt(cls.split("-")[1]);
    document.querySelector(`.btn-${idx}`).style.borderBottomLeftRadius = "10px";
    document.querySelector(`.btn-${idx}`).style.borderBottomRightRadius = "10px";

    //setting up answer
    const newCategory = [...categories];
    newCategory[idx].title = option;
    setCategories(newCategory);

    //dropdown handling of specific selection
    const newIsOpen = [...isOpen];
    newIsOpen[idx] = !newIsOpen[idx];
    setIsOpen(newIsOpen);
  };

  // mapping through each category
  return categories?.map((category, index) => {
    return (
      <div className="custom-select" key={index}>
        <button onClick={toggleDropdown} className={`btn-${index}`}>
          {category.title}
          {isOpen[index] ? (
            <MdArrowDropUp
              onClick={toggleDropdown}
              className={`btn-${index}`}
            />
          ) : (
            <MdArrowDropDown
              onClick={toggleDropdown}
              className={`btn-${index}`}
            />
          )}
        </button>

        
        {isOpen[index] && (
          <div className={`options option-${index} ${category.title === 'Class' && 'wrap'}`}>
            {/* mapping through each category option */}
            {category.options?.map((option, index) => (
                <>
              <div
                key={option}
                className="option"
                onClick={(event) => handleOptionClick(option, event)}
              >
                {option}
              </div>
              </>
            ))}

            {/* adding options */}
            {index < addOptions.length && <div className="add">{addOptions[index]}</div>}
          </div>
        )}
      </div>
    );
  });
}

export default OptionsSelection;
