import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function HeaderBar(){

    return(
        <HomeIcon>
        <NavLink to="/">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                enableBackground="new 0 0 20 20" 
                height="45px" 
                viewBox="0 0 20 20" 
                width="45px" 
                fill="#ffffff">
                <g><rect fill="none" height="20" width="20"/></g>
                <g><g><path d="M10,3.03L3,8h0.02v1H5v7H3.02v1h13.97v-1H15V9h1.98V8H17L10,3.03z M13,15h-1v-3.67L10,14l-2-2.67V15H7V9h1l2,3l2-3h1V15z"/></g></g>
            </svg>
        </NavLink>
        </HomeIcon>
    )
}

export default HeaderBar
//xjustify-content: position: fixed;
//display: flex;align-items: left;
    

const HomeIcon = styled.div`
    position: fixed;
    text-align: left;
    margin-left: 7rem;
    height: 4rem;
    :focus {
    outline: none;
    }
    a.active {
    svg {
      fill: var(--secondary);
    }
  }
`