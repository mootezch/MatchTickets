import styled from "styled-components";
import "remixicon/fonts/remixicon.css";
import { useEffect, useState } from "react";
import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { addProduct } from "../../Redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 200px;
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
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 35px;
  margin: 5px;
  border-radius: 5px;
  border: 2px solid teal;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Button = styled.button`
  width: 100;
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
  border: none;
  height: 7px;
`;

const Summary = styled.div`
  flex: 1;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const MatchesEss = (cat) => {
  scrollToTop();
  const products = useSelector((state) => state.products);
  const newproducts = products.filter((item) => item.cat === "ess");
  console.table(products);

  const [quantity1, setQuantity1] = useState(1); // state for product 1 quantity
  const [price1, setPrice1] = useState(30); // state for product 1 price
  const [quantity2, setQuantity2] = useState(1); // state for product 2 quantity
  const [price2, setPrice2] = useState(40); // state for product 2 price
  const dispatch = useDispatch();

  useEffect(() => {
    setPrice1(30);
  }, [quantity1]);

  useEffect(() => {
    setPrice2(25);
  }, [quantity2]);

  const handleQuantity = (type, product) => {
    if (product === 1) {
      if (type === "dec") {
        quantity1 > 1 && setQuantity1(quantity1 - 1);
      } else {
        setQuantity1(quantity1 + 1);
      }
    } else {
      if (type === "dec") {
        quantity2 > 1 && setQuantity2(quantity2 - 1);
      } else {
        setQuantity2(quantity2 + 1);
      }
    }
  };

  const handleClick = (product) => {
    if (product === 1) {
      dispatch(
        addProduct({
          title: "ESS VS CAB",
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjYHJLIf12UJFgyzox0ST-IHzbRxnlTvx4yHicZ0wSWxzwYY4W1ePXJ89bgweU7jhCqLNEuYZipHl4pGRcX72It3YCvDqxO4VOa5dbgKHATGdiXI-TxNCMWbrCdz1MHiRl8EZyIqusxc47XEQr8zLO-_Acw52RcZ1MBSDtWwESifR0nvA1SNS4j1XdOg/s1080/ESS%20vs%20CAB%20en%20direct%20sur%20Diwan%20Sport%20mercredi%208%20f%C3%A9vrier%202023.png",
          _id: "345678909",

          quantity: quantity1,
          price: price1 * quantity1,
        })
      );
    } else {
      dispatch(
        addProduct({
          title: "CSCH VS ESS",
          img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkrYzxcW0RBAMbwyvJkXOaDCvy_SIYd5hwGjDz_qPjzpQJEx1wO9HMfmytKleTb9KH21wMNDfhaJvLVc4zEXPwz7JSw3gI3KrcuP6cb7denyrot9f8l598b1dU3qjh48snmh4cAMvVVI6uS5hnjPSJn3rseoG1ru4O1F2HvFex502jb6nPMDJV1gR51Q/s1080/O%C3%B9%20regarder%20CS%20Chebba%20vs%20ESS%20Ligue%201%20Tunisie.jpg%20Sport%20mercredi%208%20f%C3%A9vrier%202023.png",
          _id: "4537087612",

          quantity: quantity2,
          price: price2 * quantity2,
        })
      );
    }
  };

  return (
    <Container>
      <Header />

      <Wrapper>
        <Title> YOUR BAG </Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopButton type="filled">SEARCH FOR MATCH</TopButton>
        </Top>
        <Bottom>
          <Info>
            {/* {newproducts.map((item, index) => (
              <React.Fragment key={index}>
                {item.cat}
                
              </React.Fragment>
            ))} */}
<Product>
                  <ProductDetail>
                    <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjYHJLIf12UJFgyzox0ST-IHzbRxnlTvx4yHicZ0wSWxzwYY4W1ePXJ89bgweU7jhCqLNEuYZipHl4pGRcX72It3YCvDqxO4VOa5dbgKHATGdiXI-TxNCMWbrCdz1MHiRl8EZyIqusxc47XEQr8zLO-_Acw52RcZ1MBSDtWwESifR0nvA1SNS4j1XdOg/s1080/ESS%20vs%20CAB%20en%20direct%20sur%20Diwan%20Sport%20mercredi%208%20f%C3%A9vrier%202023.png"/>
                    <Details>
                    <ProductName>
                    {" "}
                    <b>Product: </b> ESS VS CAB
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID: </b> 4537087656
                  </ProductId>
                      <ProductColor color="red" />
                      <ProductSize>
                        <b>H2H: </b> Home
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <i
                        className="ri-subtract-line"
                        onClick={() => handleQuantity("dec", 1)}
                      ></i>
                      <ProductAmount>{quantity1}</ProductAmount>
                      <i
                        className="ri-add-line"
                        onClick={() => handleQuantity("inc", 1)}
                      ></i>
                    </ProductAmountContainer>
                    <ProductPrice>{price1}DT</ProductPrice>
                    <Button onClick={() => handleClick(1)}>
                      CHECKOUT NOW
                    </Button>
                  </PriceDetail>
                </Product>
                <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkrYzxcW0RBAMbwyvJkXOaDCvy_SIYd5hwGjDz_qPjzpQJEx1wO9HMfmytKleTb9KH21wMNDfhaJvLVc4zEXPwz7JSw3gI3KrcuP6cb7denyrot9f8l598b1dU3qjh48snmh4cAMvVVI6uS5hnjPSJn3rseoG1ru4O1F2HvFex502jb6nPMDJV1gR51Q/s1080/O%C3%B9%20regarder%20CS%20Chebba%20vs%20ESS%20Ligue%201%20Tunisie.jpg%20Sport%20mercredi%208%20f%C3%A9vrier%202023.png" />

                <Details>
                  <ProductName>
                    {" "}
                    <b>Product: </b> CSCH VS ESS
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID: </b> '4537087612'
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>H2H: </b>Away
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <i
                    class="ri-subtract-line"
                    onClick={() => handleQuantity("dec", 2)}
                  ></i>
                  <ProductAmount>{quantity2}</ProductAmount>
                  <i
                    class="ri-add-line"
                    onClick={() => handleQuantity("inc", 2)}
                  ></i>
                </ProductAmountContainer>
                <ProductPrice>{price2}DT</ProductPrice>
                <Button onClick={() => handleClick(2)}>CHECKOUT NOW</Button>
              </PriceDetail>
            </Product>

            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi14cH64fThe1QfRY56_hQFeko6NJC4xF-jk2OQ5lTH8-bG48UpG2-Q48aT5Duz7DhIRw29tQuibgTH6_8G8xSL988i0ykGp4JufiDrjt-3W4_QSdG51w4iyrD7kfGvVbOi_7D-5ozVgqxIfOV0_amrzXRICOd9j4k9AmErzAS9rI5gyeIQUCWB1QUjbw/s1080/ESS%20vs%20CSS%20en%20direct%20sur%20Diwan%20Sport%20play-off%20.png" />

                <Details>
                  <ProductName>
                    {" "}
                    <b>Product: </b> ESS VS CAB
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID: </b> ESS VS css
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size: </b>2345
                  </ProductSize>
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
                <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBskzl6JOuZScy7U_Hh6a2srSzdhynG664fmEmy2ItR9W4_MDgtDgpxYpogoDV01REGE4KTvnT2Sc1F_8AHXMhxWjzgR5X5P8g2zr9D6kTcAy8gM0kNhFG-eu_qLl3brLHx0QCMRz6a9UgC5u-o2Uk7RyotxThlVQBu6WVTX7UAagPDyUpVDrRt3VfJQ/s1080/ESS%20vs%20AS%20Soliman%20coupe%20de%20Tunisie.png" />

                <Details>
                  <ProductName>
                    {" "}
                    <b>Product: </b> ESS VS CAB
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b>ID: </b> ESS VS css
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size: </b>2345
                  </ProductSize>
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

          <Summary></Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default MatchesEss;
