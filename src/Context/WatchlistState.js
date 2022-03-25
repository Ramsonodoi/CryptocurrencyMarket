import WatchlistContext from "./watchlistContext";
import { useState } from "react";
const WatchlistState = (props) => {
    const host = "https://my--crypto.herokuapp.com"
      // "https://git.heroku.com/my--crypto.git"
    // "http://localhost:5000"
    const watchlistsInitial = []
    const [watchlists, setWatchlists] = useState(watchlistsInitial)
  
    // Get all Watchlists
    const getWatchlists = async () => {
      // API Call 
      const response = await fetch(`${host}/api/watchlist/fetchallwatchlists`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });

      const json = await response.json() 
      setWatchlists(json)
    }
  
    
  // Add a Watchlist
  const addWatchlist = async (coinid) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/watchlist/addwatchlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({coinid})
    });

      const watchlist = await response.json();
      console.log(watchlist)
    setWatchlists(watchlists.concat(watchlist))
  }