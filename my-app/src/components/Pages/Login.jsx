import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { login } from "../../Redux/apiCalls";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { loginFailure, loginSuccess } from "../../Redux/userRedux";


const Container = styled.div`
width: 100vw;
height: 100vh;
background: url(https://thumbs.dreamstime.com/b/soccer-banner-football-stadium-grass-white-background-header-soccer-ball-middle-soccer-banner-football-stadium-112650582.jpg) center ;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: #fffbfb;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = async(e) => {
    e.preventDefault();
    // login(dispatch, { username, password });

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      // Handle successful login
      console.log(response.data);
      localStorage.setItem("user",JSON.stringify(response.data))
      dispatch(loginSuccess(response.data))
      navigate('/');
    } catch (error) {
      // Handle error
      console.error(error);
      dispatch(loginFailure())
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} >
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;