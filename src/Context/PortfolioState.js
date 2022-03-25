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
  // Add a Portfolio
  const addPortfolio = async (coinid, amount) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/portfolio/addportfolio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({coinid, amount})
    });

    const portfolio = await response.json();
    setPortfolios(portfolios.concat(portfolio))
  }
// Delete a Portfolio
const deletePortfolio = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/portfolio/deleteportfolio/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    // eslint-disable-next-line
    const json = response.json(); 
    const newPortfolios = portfolios.filter((portfolio) => { return portfolio._id !== id })
    setPortfolios(newPortfolios)
  }
// Delete a Portfolio
const deletePortfolio = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/portfolio/deleteportfolio/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    // eslint-disable-next-line
    const json = response.json(); 
    const newPortfolios = portfolios.filter((portfolio) => { return portfolio._id !== id })
    setPortfolios(newPortfolios)
  }
