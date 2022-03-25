import PortfolioContext from "./portfolioContext";
import {  useState } from "react";

const PortfolioState = (props) => {
  const host = "https://my--crypto.herokuapp.com"
    // "https://git.heroku.com/my--crypto.git"
    // "http://localhost:5000"
  const portfoliosInitial = []
  const [portfolios, setPortfolios] = useState(portfoliosInitial)

}