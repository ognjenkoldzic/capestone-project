import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./tempDropdown.css";
import SingleCollectionPainting from "../../SingleCollectionPainting";

function Dropdown({
  options,
  prompt,
  value,
  onChange,
  id,
  label,
  onHandleClick,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ["click", "touchend"].forEach((event) => {
      document.addEventListener(event, toggle);
    });

    return () =>
      ["click", "touchend"].forEach((event) => {
        document.removeEventListener(event, toggle);
      });
  }, []); //buggy

  function toggle(event) {
    // console.dir([event.target, ref.current]);
    setOpen(event && event.target === ref.current);
  }
  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }
  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return "";
  }
  function selectOption(option) {
    setOpen(false); //keine Ahnung wieso hier ture oder (prev) => prev...vielleicht wegen Z.11?
    onChange(option);
    setQuery("");
  }
  //onClick={() => setOpen((prev) => !prev)}
  //console.log(value);
  return (
    <>
      <div className="dropdown">
        <div className="control" onClick={() => setOpen((prev) => !prev)}>
          <div className="selected-value">
            <input
              type="text"
              ref={ref}
              placeholder={value ? value[label] : prompt}
              value={displayValue()}
              onChange={(event) => {
                setQuery(event.target.value);
                onChange(null);
              }}
              onClick={toggle}
              onTouchEnd={toggle}
            />
          </div>
          <div
            className={`arrow ${open ? "open" : null}`}
            onClick={() => setOpen((prev) => !prev)}
          ></div>
          <div
            className={`options ${open ? "open" : null}`}
            onClick={() => setOpen((prev) => !prev)}
          >
            {filter(options).map((option) => (
              <div
                key={option[id]}
                className={`option ${value === option ? "selected" : null}`}
                onClick={() => selectOption(option)}
                onTouchEnd={() => selectOption(option)}
              >
                {option[label]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dropDownResults">
        {value && (
          <SingleCollectionPainting
            singleObject={value}
            onHandleClick={onHandleClick}
          />
        )}
      </div>
    </>
  );
}

export default Dropdown;
