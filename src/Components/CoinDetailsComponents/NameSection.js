import React , {useContext, useState}  from 'react'
import watchlistContext from '../../../Context/watchlistContext';

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
}