import PortfolioContext from "./portfolioContext";
import {  useState } from "react";

const PortfolioState = (props) => {
  const host = "https://my--crypto.herokuapp.com"
    // "https://git.heroku.com/my--crypto.git"
    // "http://localhost:5000"
  const portfoliosInitial = []
  const [portfolios, setPortfolios] = useState(portfoliosInitial)


  // Get all Portfolios
  const getPortfolios = async () => {
    // API Call 
    const response = await fetch(`${host}/api/portfolio/fetchallportfolios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setPortfolios(json)
  }

