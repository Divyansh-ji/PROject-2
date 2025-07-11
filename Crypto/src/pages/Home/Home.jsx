import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
const Home = () => {
  const { allcoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  useEffect(() => {
    setDisplayCoin(allcoin);
  }, [allcoin]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypto Marketplace
        </h1>
        <p>
          Welcome to Divyansh's Crypto Market — Where your digital fortune
          begins!
        </p>
        <form>
          <input type="text" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-tabel">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "centre" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => {
          return (
            <div className="tabel-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + "-" + item.symbol}</p>
              </div>
              <p className="pricer">
                {currency.symbol} {item.current_price}
              </p>
              <p className="timer">
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p className="market-cap">{item.market_cap}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
