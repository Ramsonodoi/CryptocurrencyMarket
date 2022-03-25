import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CoinChart from './CoinChart'
import axios from 'axios'
import "./CoinDetails.css"
import { Link } from 'react-router-dom'
import NameSection from './CoinDetailsComponents/NameSection'
import PriceSection from './CoinDetailsComponents/PriceSection'
import StateSection from './CoinDetailsComponents/StateSection'
import CurrencyConvertor from './CoinDetailsComponents/CurrencyConvertor'
import AddInPortfolio from './CoinDetailsComponents/AddInPortfolio'
import Spinner from '../../assets/Spinner'


//currentcurrency

const CoinDetails = ({currentcurrency}) => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [timeFormat, setTimeFormat] = useState("24h");
  
    const formatData = (data) => {
      return data.map((el) => {
        return {
          x: new Date(el[0]),
          y: parseFloat(el[1]),
        };
      });
    };

    //DetermineTimeFormat

    const determineTimeFormat = () => {
        switch (timeFormat) {
          case "24h":
            return day;
          case "7d":
            return week;
          case "1y":
            return year;
          default:
            return day;
        }
      };
        //FetchData From Api

      useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          const [day, week, year, detail] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
              params: {
                vs_currency: currentcurrency,
                days: "1",
              },
            }),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
              params: {
                vs_currency: currentcurrency,
                days: "7",
              },
            }),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
              params: {
                vs_currency: currentcurrency,
                days: "365",
              },
            }),
            axios.get("https://api.coingecko.com/api/v3/coins/markets/", {
              params: {
                vs_currency: currentcurrency,
                ids: id,
              },
            })
          ]);

          //CoinData

          setCoinData({
            day: formatData(day.data.prices),
            week: formatData(week.data.prices),
            year: formatData(year.data.prices),
            detail: detail.data[0],
          });
          setIsLoading(false);
        };

        fetchData();

    }, [currentcurrency]);

    const { detail } = coinData
    const { day,week,year } = coinData
    
  
    const renderData = () => {
      if (isLoading) {
        return <Spinner/>;
      }
      return (
        <>
  
        <div className="grid full-width-layout">
          <div className="smallcontainer container"> 