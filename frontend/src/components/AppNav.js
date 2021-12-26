import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import {
  useNavigate,
  NavLink
} from 'react-router-dom'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import page from '../data/pages.json'
import account from '../data/account.json'
import "./AppNav.css"
import {
  Menu,
  Image,
  Icon
} from 'semantic-ui-react';
// import { NavLink } from '@duik/it'
// import NavLink from '@duik/nav-link'

function AppNav(props) {
  const [navItems, setNavItems] = useState(page)
  const [isActive, setActive] = useState('false');
  const [isAuth, setIsAuth] = useState(false);
  const [acctItems, setAcctItems] = useState(account);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);


  // router props
  const navigate = useNavigate()
  let toggle = 'underline'
  // handlers
  const handleNavClick = (page) => {
    if (page === 'home') {
      navigate(`/`)
    } else {
      navigate(`/pages/${page}`)
    }
  }

  // const handleToggle = () => {
  //   setActive(!isActive)
  // }

  const callFunctions = (navItemValue) => {
    handleNavClick(navItemValue)
    // handleToggle()
  }

  const callAcctFunctions = (acctItemValue) => {
    accountStatus(isAuth)
    handleAcctClick(acctItemValue)
  }

  const handleAcctClick = (account) => {
    if (account === 'login') {
      navigate('/pages/Login')
    } else if (account === 'logout') {
      navigate('/pages/Logout')
    } else if (account === 'signup') {
      navigate('/Signup')
    } else if (account === 'cart') {
      navigate('/Cart')
    }
  }
  const accountStatus = () => {
    {
      isAuth === true ? ( <
        Fragment >
        <
        Nav.Link > Logout < /Nav.Link> <
        /Fragment>
      ) : ( <
        Fragment > {
          /* <Nav.Link to='/Login'>Login</Nav.Link>
                <a href='/Signup'>&ensp; Sign up</a> */
        } <
        /Fragment>
      )
    }
  }

  //render
  return ( <
    div className = 'top-row'
    style = {
      {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%'
      }
    } >
    <
    div className = 'left-side'
    style = {
      {
        width: '500px'
      }
    } > < /div> <
    Navbar className = "bar"
    style = {
      {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        borderWidth: '5px',
        borderColor: 'white',
        fontColor: 'white',
        width: '700px'
      }
    } >
    <
    Nav > {
      navItems.map((navItem, index) => {
        return ( <
          Nav.Link key = {
            index
          }
          onClick = {
            () => callFunctions(navItem.value)
          } > {
            navItem.label
          } <
          /Nav.Link>

        )
      })
    } <
    /Nav> <
    /Navbar> <
    Navbar className = "bar2"
    style = {
      {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        borderWidth: '5px',
        borderColor: 'white',
        fontColor: 'white'
      }
    } >
    <
    Nav > {
      acctItems.map((acctItem, index2) => {
          return ( <
            div className = 'right-side'
            style = {
              {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
              }
            } >
            <
            Nav.Link key = {
              index2
            }
            onClick = {
              () => callAcctFunctions(acctItem.value)
            } > {
              acctItem.label
            } <
            /Nav.Link> <
            /div>)
          })
      } <
      /Nav> <
      /Navbar> <
      hr / >
      <
      /div>
    )

  }

  export default AppNav;
