import React , {useContext, useState}  from 'react'
import watchlistContext from '../../../Context/watchlistContext';
import "./NameSection.css";

const NameSection = ({ detail }) => {
    
    const context = useContext(watchlistContext);
    const {addWatchlist} = context;

    const [watchlist, setWatchlist] = useState({ coinid: "" })
    const [turnyellow, setturnyellow] = useState("false")

    const handleClick = (e)=>{
        e.preventDefault();
        addWatchlist(detail.id);
        setWatchlist({ coinid: "" })
        setturnyellow("true")
    }

    const renderthiscomponent = () => {
        if (detail) {
            return (
                <div className=" nameSection-1 nameSection">
                <div className=" nameSection-upper-part nameHeader">
                    <img src={detail.image} height="32" width="32" alt={detail.symbol} />
                    <h2 className=" coin-name-n-logo-container h1" color="text">
                        <div className="coinname">{detail.name}</div><small className="nameSymbol">{detail.symbol.toUpperCase()}</small></h2>
            )
        }
            
}