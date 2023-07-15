import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Headers from "./Headers";
import Footers from "./Footers";

const Mains = styled.div`
  width: 1440px;
  height: 100vh;
  margin: 0 auto;
  .cardsWrap {
    margin-top: 5vh;
  }
  .cardsWrap > .cardsBanner {
    background: #ff0090;
    width: 100%;
    height: 5vh;
    color: #ffffff;
    font-size: 25px;
    text-align: center;
    margin-bottom: 3vh;
  }
  .cardsWrap > .cardsList {
    width: 1100px;
    height: 562px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
  }
  .cardsWrap > .cardsList > .cards {
    width: 100%;
    height: 460px;
    display: flex;
    gap: 0 40px;
  }
  .cardsWrap .cards > .card {
    width: 340px;
    height: 420px;
  }
  .cardsWrap .card > img {
    width: 100%;
    height: 340px;
    background: #d9d9d9;
  }
  .cardsWrap .card > .cardDetail {
    width: 100%;
    height: 80px;
    margin-left: 5px;
    padding: 2%;
  }
  .card > .cardDetail > .productName {
    font-size: 16px;
    height: 24px;
  }
  .card > .cardDetail > .price {
    font-size: 20px;
    height: 28px;
  }
`;
const Main = () => {
  const Products = [
    { id: 1, title: "Product1", price: "$49.99", img: "/img/OHS-5.png" },
    { id: 2, title: "Product2", price: "$49.99", img: "/img/OHS-5.png" },
    { id: 3, title: "Product3", price: "$49.99", img: "/img/OHS-5.png" },
  ];
  return (
    <Mains>
      <Headers />
      <div className='cardsWrap'>
        <div className='cardsBanner'>
          <h3>꿀템게시판</h3>
        </div>
        {Array(4)
          .fill()
          .map((_, i) => (
            <div className='cardsList' key={i}>
              <div className='cards'>
                {Products.map((product) => {
                  return (
                    <div className='card' key={product.id}>
                      <img src={product.img} alt='no image' />
                      <div className='cardDetail'>
                        <h5 className='productName'>{product.title}</h5>
                        <h5 className='price'>{product.price}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
      <Footers />
    </Mains>
  );
};

export default Main;
