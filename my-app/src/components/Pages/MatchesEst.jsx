
import styled from 'styled-components';
import "remixicon/fonts/remixicon.css";

import Header from '../UI/Header';
import Footer from '../UI/Footer';

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
display: flex;
justify-content:space-between;
`;
const Info = styled.div`
flex: 3;
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Image = styled.img`
width: 200px
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.div``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:20px;
`;
const ProductAmount = styled.div`
font-size: 35px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;
const Button = styled.button`
width:100;
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: black;
color: white;
margin: 15px;
`;


const Hr = styled.hr`
background-color: #eee;
border:none;
height: 7px;
`;

const Summary = styled.div`
flex: 1;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
}


const MatchesEst = (cat) => {
  scrollToTop();

 
  return (
    <Container>

        <Header />
       
        <Wrapper>
          <Title> YOUR BAG </Title>
          <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
          
          <Info>
          <Product>
          <ProductDetail>
          
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-k5UHLxCJSkCUx0MpkDoZjTJherK3CioiqDQ3fTmjviu3pW46kz2cGQnJa0RxAW6dF_Bi5UMcOrG_yWmoOFWjniVE7xZ2cHrExzMmxKyEKKxeBHY_6WzmkVsfDZ0LkcM940SOr907Z0k0mE_57QCSGi0RuHL4Om2FAvtkBgHLlLgIrCH9F1Y6AGd2mw/s1080/Olympique%20B%C3%A9ja%20vs%20Esp%C3%A9rance%20Sportive%20playoff.png" />
          
          <Details>
          <ProductName> <b>Product: </b> Olympique Béja vs Espérance Sportive</ProductName>
          <ProductId> <b>ID: </b> ESS VS css</ProductId>
          <ProductColor color="green"/> 
          <ProductSize><b>Size: </b>2345</ProductSize>
          </Details>
          
          </ProductDetail>
          <PriceDetail>
            <ProductAmountContainer>
            <i class="ri-add-line"></i>
            <ProductAmount>2</ProductAmount>
            <i class="ri-subtract-line"></i>
            </ProductAmountContainer>
            <ProductPrice>30DT</ProductPrice>
            <Button>CHECKOUT NOW</Button>
          </PriceDetail>
          </Product>
          <Hr />
          <Product>
          <ProductDetail>
          
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMByKVY22_cXR3bSW-juq3Q0-006-TDDD5A7Jp64GK3d8kfKryUV_P56CCu-gjKY89hj8erpYRfYzRa3RmRnQ-JwMTGE9J8quGJoyFIC9HAT1RiCHXN8DKBZec9Lmw02DxQ-d5GoxR0ontCuDmlziHX-v38UPR-swbnlJVEMm2V_d_TvyTYP0YAIiQ7g/s1080/US%20Ben%20Guerdane%20vs%20Esp%C3%A9rance%20Sportive%20playoff%20live.png" />
          
          <Details>
          <ProductName> <b>Product: </b> US Ben Guerdane vs Espérance Sportive</ProductName>
          <ProductId> <b>ID: </b> ESS VS css</ProductId>
          <ProductColor color="green"/> 
          <ProductSize><b>Size: </b>2345</ProductSize>
          </Details>
          
          </ProductDetail>
          <PriceDetail>
            <ProductAmountContainer>
            <i class="ri-add-line"></i>
            <ProductAmount>2</ProductAmount>
            <i class="ri-subtract-line"></i>
            </ProductAmountContainer>
            <ProductPrice>25DT</ProductPrice>
            <Button>CHECKOUT NOW</Button>
          </PriceDetail>
          </Product>

          <Hr />
          <Product>
          <ProductDetail>
          
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiP1N-0QmRZedU6Gu9FAKzPLEdiSa__JDjsOFA-YN5yk06ZUPQWpvYJRYFX4jG4ym4rrkPTAukkxmsqBBXsahGTyPGT5L8kNy91ssUmXuf_jrexnGsvCW_w9jdp0R8Y8uPx0QPk_2eAQjNokInmc_I9hC-xc3yKgnopD9ry6X7DLwblyE_5nqGvPlfEg/s1080/Esperance%20vs%20ES%20Hammam%20Sousse%20en%20direct%20sur%20%20Diwan%20sport%20mercredi%208%20fevrier%202023.png" />
          
          <Details>
          <ProductName> <b>Product: </b> Esperance vs ES Hammam Sousse</ProductName>
          <ProductId> <b>ID: </b> ESS VS css</ProductId>
          <ProductColor color="red"/> 
          <ProductSize><b>Size: </b>2345</ProductSize>
          </Details>
          
          </ProductDetail>
          <PriceDetail>
            <ProductAmountContainer>
            <i class="ri-add-line"></i>
            <ProductAmount>2</ProductAmount>
            <i class="ri-subtract-line"></i>
            </ProductAmountContainer>
            <ProductPrice>DT$</ProductPrice>
            <Button>CHECKOUT NOW</Button>
          </PriceDetail>
          
          </Product>

          <Hr />
          <Product>
          <ProductDetail>
          
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD5VhXxyDXYrncpmVGLlAULS22yHjUg5Xwvh_3h010Z8rVpkOb1a_xm5Tm1SM1lcwxYt3rcQYK5iDqJdapVug2cY89jfC-OOuaToSRkJNcoGOXLnZzCYsWE_VAMcsJv7WgKuAzYbf0-p97SVxLhNSkOW1QGOlQy6EnIpRcDyR0Yz8PI-RRojcvUqOE8g/s1080/O%C3%B9%20regarder%20US%20Tataouine%20vs%20Esperance%20Ligue%201%20Tunisie.jpg" />
          
          <Details>
          <ProductName> <b>Product: </b> US Tataouine vs Esperance</ProductName>
          <ProductId> <b>ID: </b> US Tataouine vs Esperance</ProductId>
          <ProductColor color="green"/> 
          <ProductSize><b>Size: </b>2345</ProductSize>
          </Details>
          
          </ProductDetail>
          <PriceDetail>
            <ProductAmountContainer>
            <i class="ri-add-line"></i>
            <ProductAmount>2</ProductAmount>
            <i class="ri-subtract-line"></i>
            </ProductAmountContainer>
            <ProductPrice>DT$</ProductPrice>
            <Button>CHECKOUT NOW</Button>
          </PriceDetail>
          </Product>

          </Info>
          <Summary>summary</Summary>
          </Bottom>
        </Wrapper>

        <Footer/>
        

      </Container>
  );
};

export default MatchesEst;