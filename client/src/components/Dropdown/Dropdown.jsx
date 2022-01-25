import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
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
  }, []);

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
  function compareLabel(a, b) {
    let x = a[label].toLowerCase();
    let y = b[label].toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  }

  //onClick={() => setOpen((prev) => !prev)}

  return (
    <DropAndResultsWrapper>
      <DropdownStyle className="dropdown">
        {/* <div className="control"> */}
        <SelectedValueInput className="selected-value">
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
        </SelectedValueInput>
        <Arrow onClick={() => setOpen((prev) => !prev)} open={open}></Arrow>
        <Options open={open}>
          {filter(options)
            .sort(compareLabel)
            .map((option) => (
              <Option
                key={option[id]}
                option={option}
                value={value}
                onClick={() => selectOption(option)}
                onTouchEnd={() => selectOption(option)}
              >
                {option[label]}
              </Option>
            ))}
        </Options>
        {/* </div> */}
      </DropdownStyle>
      <div className="dropDownResults">
        {value && (
          <SingleCollectionPainting
            singleObject={value}
            onHandleClick={onHandleClick}
          />
        )}
      </div>
    </DropAndResultsWrapper>
  );
}

export default Dropdown;

const DropAndResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DropdownStyle = styled.div`
  position: relative;
  color: #333;
  cursor: default;
`;
const Arrow = styled.div`
  border-color: ${(props) =>
    props.open
      ? "transparent transparent #999"
      : "#999 transparent transparent"};
  border-style: solid;
  border-width: ${(props) => (props.open ? "0 5px 5px" : "5px 5px 0")};
  content: " ";
  display: block;
  height: 0;
  margin-top: 0.3rem;
  position: absolute;
  right: 10px;
  top: 14px;
  width: 0;
`;
const Options = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
`;
const Option = styled.div`
  color: ${(props) =>
    props.value === props.option ? "#EC012A" : "rgba(51, 51, 51, 0.8)"};
  cursor: pointer;
  display: block;
  padding: 8px 10px;
`;
// .dropdown .option.selected,
// .dropdown .option:hover {
//   background-color: #f2f9fc;
//   color: #333;
// }
const SelectedValueInput = styled.div`
  input {
    line-height: 1.5;
    font-size: 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-sizing: border-box;
    cursor: default;
    outline: none;
    padding: 8px 52px 8px 10px;
    transition: all 200ms ease;
    width: 100%;
  }
`;
