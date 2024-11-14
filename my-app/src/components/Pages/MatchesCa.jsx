
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





const MatchesCa = (cat) => {
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
          
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWXJH4VZlmrW4HvRgreqSVAEjGhKJJyx-twbcmDivF7Tc7xZJc1BYBeQw0ACrb-wD9TDVe6Ppq9hS1mbSemTThiHqeGCLXIXbSk2sZuWbn57GxcF5XucQ9JwYfLOKuLpDmVv3m-mH_jF-5eUqUZGKS_vUO9hPMpM-DtITYUShegL9zzNQlLFtork1Fyg/s1080/O%C3%B9%20regarder%20Club%20Africain%20vs%20Avenir%20Rejiche.jpg" />
          
          <Details>
          <ProductName> <b>Product: </b> Club Africain vs Avenir Rejiche</ProductName>
          <ProductId> <b>ID: </b> CA VS ASR</ProductId>
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
            <ProductPrice>30DT</ProductPrice>
            <Button>CHECKOUT NOW</Button>
          </PriceDetail>
          </Product>
          <Hr />
          <Product>
          <ProductDetail>
          
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6twazC_EeGKotRaa4CSTbIQgYk8JNX-yxKtu_ZDahSGy2n-ymyKVPHGAZms4Azp8kl6rP_3Jy9_LzmxMH4YD5xMBptSP0bUcO3GzJ8s0C_eDEnpoFS-S2_NukZpVE5vF3r9oX3vwzYt4-e647qR0Rt4kPO0U2hyAETmgFr46ip9f74LZO7mUN4hD4Ag/s1080/olympique%20b%C3%A9ja%20vs%20club%20africain%20live%20sur%20Diwan%20Sport%20mercredi%208%20fevrier%202023.png" />
          
          <Details>
          <ProductName> <b>Product: </b>  Olympique de Béja vs Club Africain</ProductName>
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
          
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRJbNtkerNNZXmoEfaz2hjLa9IQ3n2IaXt8cr3b05d8ZCF71BWFTNq8JxBX8jXlLLiGHDdrN_I901MWDaOmPubKCPgY8bNtouQ74FkuUT7UU12Pn0dizsMnvFZa1ci-EphG-RMPcb27D-owMrn8DM-ujiSQWbMDTLhSYz3R1E_dxhRtA05I-hSJE0alA/s1080/club%20africain%20vs%20cs%20msaken%20coupe%20de%20tunisie%20sur%20diwan%20sport.png" />
          
          <Details>
          <ProductName> <b>Product: </b> Club Africain vs CS Msaken</ProductName>
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
          
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioa3WMI5QKB9gdAEMWvBJclSMLyufSanwCCGBDqSdq0CJMBZnTEZ1hfSECbUW2HCTcafcgHFrxOZ8l8kryA2Oal_ljO3cSeBqvJ7ttqL2AbmBiag2CJmnX0VyVfWSxKLd-JfMTHtjvmc94_xYfgxMlSzR2TBVNOldoGc_hGj6OotI8Y1_Z8qTNmlrQSg/s1080/Club%20Africain%20vs%20US%20Tataouine%20match%20en%20direct%20.png" />
          
          <Details>
          <ProductName> <b>Product: </b> Club Africain vs US Tataouine</ProductName>
          <ProductId> <b>ID: </b> CA vs UST</ProductId>
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

export default MatchesCa;