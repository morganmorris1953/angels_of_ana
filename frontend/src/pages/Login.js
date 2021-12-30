import React, {
  useState,
  useEffect
} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      console.log('$$$$$$$$$$$$$$$$$$$$$')
      // window.location.replace('http://localhost:3000/pages/login');
    } else {
      console.log('*************************')
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      "email": email,
      "password": password
    };
    fetch('http://localhost:8000/api/v1/angels_app/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'X-CSRFToken': CSRF_Token
        },
        body: JSON.stringify(user)
      })
      .then((res) =>
        // console.log(res.json())
        // console.log(res.key)
        res.json()
      )
      .then(data => {
        console.log(data)
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/');
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return ( <
    div > {
      loading === true && < h1 > Login < /h1>} { errors === true && < h2 > Cannot log in with provided credentials < /h2 >
    } {
      loading === true && ( <
        form onSubmit = {
          onSubmit
        } >
        <
        label htmlFor = 'email' > Email address: < /label> <br / >
        <
        input name = 'email'
        type = 'email'
        value = {
          email
        }
        required onChange = {
          e => setEmail(e.target.value)
        }
        />{' '} <
        br / >
        <
        label htmlFor = 'password' > Password: < /label> <br / >
        <
        input name = 'password'
        type = 'password'
        value = {
          password
        }
        required onChange = {
          e => setPassword(e.target.value)
        }
        />{' '} <
        br / >
        <
        input type = 'submit'
        value = 'Login' / >
        <
        /form>
      )
    } <
    /div>
  );
};

export default Login;
