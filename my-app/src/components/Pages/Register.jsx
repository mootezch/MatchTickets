import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: url(https://thumbs.dreamstime.com/b/multicolored-soccer-ball-football-banner-background-multicolored-soccer-ball-football-banner-background-flat-style-vector-117887682.jpg) center ;
background-size: cover;

display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px  ;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px;
`;

const Button = styled.button`
background: #fff;
    border-radius: 50%;
    padding: 10px;
    color: var(--primary-color);
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    box-shadow: 3px 3px 8px -1px #d3cef2;
    cursor: pointer;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
             <Input placeholder="name"/> 
             <Input placeholder="last name"/>  
             <Input placeholder="username"/>  
             <Input placeholder="email"/>  
             <Input placeholder="password"/>  
             <Input placeholder="confirm password"/> 
                <Agreement>
                    by kfdlkgfdnglkfdgdkslfnesfnbdsjbfkjdsbdsvdns
                </Agreement>

            <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register