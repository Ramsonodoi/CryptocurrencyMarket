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