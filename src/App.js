import './App.css';
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import Container from './components/Container';


// #1 npm install axios
// #2 import axios from './axios'
// #3 import useEffect hook
// #4 Make an get request to the github api using axios
// #5 How do we get reference of the input value?
// #6 import useRef and get the ref of the search input
// #7 On click of the search update the user state with the ref 
// #8 After finish search functionality how do you map the response into the code?
// #9 Get the theme switcher to work
// #10 Turn reusable sections of the app to components (Container,UserContent,UserInput.Finish rest of hw)

function App() {

const [dateSplit] = useState("2011-01-25T18:44:36Z")
const [theme, setTheme] = useState('')
const [userData, setUserData] = useState({})
const [user, setUser] = useState("octocat")
const [icon, setIcon] = useState('./assets/icon-moon.svg')
const [name, setName] = useState('DARK')



// What should the uer value start with?
// When should it change?

useEffect (() => {
  const getUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        setUserData(res.data)
      })
    }
    catch(error) {
      console.log(error)
    }
  }
  getUser()
},[user])



const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]




const changeTheme = () => {
  theme ? setTheme('') : setTheme('dark')
  theme ? setIcon('./assets/icon-moon.svg'): setIcon('./assets/icon-sun.svg') 
  theme ? setName("DARK"): setName('LIGHT')
  }

const userRef = useRef()

  return (
      <div className= {`App ${theme}`}>
        <Container
        name = {name}
        icon = {icon}
        userData = {userData}
        theme = {theme} 
        changeTheme = {changeTheme} 
        userRef = {userRef}
        setUser = {setUser}
        dateSplit = {dateSplit}
        months = {months}
      />
     </div>

  );
}

export default App;
