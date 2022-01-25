import styled from "styled-components";
import { NavLink } from "react-router-dom";

function HeaderBar() {
  return (
    <HeadBarContainer>
      <NavBarTop>
        <li>
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 20 20"
              height="45px"
              viewBox="0 0 20 20"
              width="45px"
              fill="#ffffff"
            >
              <g>
                <rect fill="none" height="20" width="20" />
              </g>
              <g>
                <g>
                  <path d="M10,3.03L3,8h0.02v1H5v7H3.02v1h13.97v-1H15V9h1.98V8H17L10,3.03z M13,15h-1v-3.67L10,14l-2-2.67V15H7V9h1l2,3l2-3h1V15z" />
                </g>
              </g>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 0 24 24"
              width="40px"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </NavLink>
        </li>
      </NavBarTop>
    </HeadBarContainer>
  );
}

export default HeaderBar;

const HeadBarContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: #8f8e8e;
  width: 100vw;
`;
const NavBarTop = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding-left: 0;
  right: 0;
  left: 0;
  height: 1rem;
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
