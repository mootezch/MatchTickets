import styled from "styled-components";
import {NavLink} from 'react-router-dom';




const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
color: white;
margin-bottom: 20px;

`;

const Button = styled.button`
        border: none;
        outline: none;
        padding: 10px 20px;
        color: #fff;
        background: var(--primary-color);
        border-radius: 15px;
        font-family: var(--font-name);
        font-size: 1rem;
        font-weight: 50;
        cursor: pointer;
        
`;


const StartItem = ({item}) => {


  return (
    <Container id="Les_événements">
      <NavLink to={`/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
      </NavLink>
    </Container>
  )
};

export default StartItem;