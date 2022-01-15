import styled from "styled-components";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <NavBarBottom>
      <li>
        <NavLink to="info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 0 24 24"
            width="36px"
            fill="#ffffff"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="collection">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 0 24 24"
            width="36px"
            fill="#ffffff"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="favourites">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 0 24 24"
            width="36px"
            fill="#ffffff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" />
            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="play">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 20 20"
            height="50px"
            viewBox="0 0 20 20"
            width="50px"
            fill="#ffffff"
          >
            <g>
              <rect fill="none" height="20" width="20" />
            </g>
            <g>
              <g>
                <path d="M15.82,13.55l-0.62-5.76C15.08,6.77,14.23,6,13.21,6H6.79C5.77,6,4.92,6.77,4.81,7.78l-0.62,5.76 C4.09,14.32,4.69,15,5.46,15c0.34,0,0.67-0.14,0.91-0.38L8,13h4l1.62,1.62c0.24,0.24,0.57,0.38,0.91,0.38 C15.31,15,15.91,14.32,15.82,13.55z M9.25,9.75H8V11H7.5V9.75H6.25v-0.5H7.5V8H8v1.25h1.25V9.75z M11.5,9C11.22,9,11,8.78,11,8.5 C11,8.22,11.22,8,11.5,8S12,8.22,12,8.5C12,8.78,11.78,9,11.5,9z M12.5,11c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5 s0.5,0.22,0.5,0.5C13,10.78,12.78,11,12.5,11z" />
              </g>
            </g>
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="learn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="36px"
            viewBox="0 0 24 24"
            width="36px"
            fill="#ffffff"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="36px"
            viewBox="0 0 24 24"
            width="36px"
            fill="#ffffff"
          >
            <g>
              <rect fill="none" height="24" width="24" x="0" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M22,10V6c0-1.11-0.9-2-2-2H4C2.9,4,2.01,4.89,2.01,6v4C3.11,10,4,10.9,4,12s-0.89,2-2,2v4c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-4c-1.1,0-2-0.9-2-2S20.9,10,22,10z M13,17.5h-2v-2h2V17.5z M13,13h-2v-2h2V13z M13,8.5h-2v-2h2V8.5z" />
                </g>
              </g>
            </g>
          </svg>
        </NavLink>
      </li>
    </NavBarBottom>
  );
}
export default NavBar;

const NavBarBottom = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100vw;
  padding-left: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 4rem;
  :focus {
    outline: none;
  }
  list-style: none;

  li a.active {
    svg {
      fill: var(--secondary);
    }
  }
`;
