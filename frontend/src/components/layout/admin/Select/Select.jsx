import "./Select.css";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

function Select({ options, tags, setTags }) {
  const tagsRef = useRef(null);
  const SelectContainerRef = useRef(null);
  const [optionsToShow, setOptionsToShow] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const optionsContainerClass = showOptions
    ? "options-container show"
    : "options-container";

  const removeTag = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    if (tagsRef.current.classList.contains("error")) {
      tagsRef.current.classList.remove("error");
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const filteredOptions = options.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
    setOptionsToShow(filteredOptions);
  };

  const addTag = (option) => {
    if (tags.length >= 3) {
      toast.error("Error", {
        description: "No puedes seleccionar más de 3 opciones",
        richColors: true,
        position: "bottom-center",
      });
      tagsRef.current.classList.add("error");
      setShowOptions(!showOptions);
    } else if (tags.includes(option)) {
      toast.error("Error", {
        description: "No se pueden repetir las opciones",
        richColors: true,
        position: "bottom-center",
      });
      tagsRef.current.classList.add("error");
      setShowOptions(!showOptions);
    } else {
      setTags([...tags, option]);
    }
  };

  const handleShowOptions = () => {
    if (showOptions === false) {
      setShowOptions(!showOptions);
    }

    if (tagsRef.current.classList.contains("error")) {
      tagsRef.current.classList.remove("error");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        SelectContainerRef.current &&
        !e.composedPath().includes(SelectContainerRef.current)
      ) {
        setShowOptions(false);
        if (tagsRef.current.classList.contains("error")) {
          tagsRef.current.classList.remove("error");
        }
      }
    };

    document.addEventListener("click", (e) => {
      handleClickOutside(e);
    });

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showOptions]);

  return (
    <div className="select-container" ref={SelectContainerRef}>
      <div className="tags-container" ref={tagsRef} onClick={handleShowOptions}>
        <ul className="tags-wrapper">
          {tags.map((tag, index) => {
            return (
              <li key={index} className="tag">
                <span>{tag.name}</span>
                <button
                  onClick={() => removeTag(index)}
                  className=" remove_x"
                  type="button"
                >
                  <i className="fa-solid fa-x"></i>
                </button>
              </li>
            );
          })}
        </ul>
        <i className="fa fa-angle-down arrow-down"></i>
      </div>
      <div className={optionsContainerClass}>
        <input
          type="search"
          className="search-option"
          onChange={handleSearch}
          placeholder="Buscar..."
        />

        <ul className="options-wrapper">
          {optionsToShow.map((option, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  addTag(option);
                }}
                value={option.value}
                className="option"
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Select;
