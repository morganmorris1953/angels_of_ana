import React, {
  useState,
  useEffect
} from 'react';
import ProductAPI from '../api/ProductAPI.js'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => { */
    /* if (localStorage.getItem('token') !== null) { */
      /* console.log('Token available') */
      /* window.location.replace('http://localhost:3000/'); */
    /* } else { */
      /* console.log('No token in localStorage') */
      /* setLoading(false); */
    /* } */
  /* }, []); */

  /* const saveEmail = async (email) => { */
    /* console.log('im trying to get the user ID', email) */
          /* const getEmail = await ProductAPI.fetchUserByEmail(email) */
          /* console.log(getEmail) */
/*  */
  /* } */

  const onSubmit =e => {
    e.preventDefault();

    const user = {
      "email": email,
      "password": password
    };
    fetch('http://localhost:8000/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          /* 'X-CSRFToken': CSRF_Token */
        },
        body: JSON.stringify(user)
      })
      .then((res) =>
        res.json()
      )
      .then(data => {
        console.log('data: ', data)
        console.log('user: ', user)
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          localStorage.setItem('email', JSON.stringify(email))
          window.location.replace('http://localhost:3000/');
          /* saveEmail(user.email) */
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return ( <
    div >
    {
      loading === true && < h1 > Login < /h1>} { errors === true && < h2 > Cannot log in with provided credentials < /h2 >
    } {
      loading === true && ( <
        form onSubmit = {
          onSubmit
        } >
        < label htmlFor = 'email' > Email address: < /label> <br / >
        < input name = 'email'
        type = 'email'
        value = {
          email
        }
        required onChange = {
          e => setEmail(e.target.value)
        }
        />{' '} <
        br / >
        < label htmlFor = 'password' > Password: < /label> <br / >
        < input name = 'password'
        type = 'password'
        value = { password }
        required onChange = {
          e => setPassword(e.target.value)
        }
        />{' '} < br / >
        < input type = 'submit' value = 'Login' / >
        < /form> )
    } < /div> );
};

export default Login;
