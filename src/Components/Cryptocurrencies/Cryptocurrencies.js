import React, { useEffect, useState } from 'react';
import axios from "axios"
import Coins from '../IndividualCoins/Coins';
import CoinLogo from '../IndividualCoins/CoinLogo';
import "../IndividualCoins/Coinsstyle.css"
import "../Cryptocurrencies/Cryptocurrencies.css";
import Footer from '../Footer/Footer';

//Code For Displaying The First 100 Cryptocurrency Coins

const Cryptocurrencies = ({ currentcurrency }) => {

    const [coins, setCoins] = useState([])


    useEffect(() => {
         
        // URLS COINGECKO  Limits : 50 calls/minute
        // Used for fewer requests

        const fetchData1 = async () => {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
                params: {
                    vs_currency: currentcurrency,
                }
            })

            setCoins(response.data);
        }
        fetchData1();

    }, [currentcurrency])

    return (
        <>
        <div>
            <div className="header-image" >
                <div>
                    <div className="fs-1"> <b> Cryptocurrency Market</b>
                    </div>
                    <div className="fs-4 float-left"> Check lastest statistics about your assets.
                    </div>
                </div>
            </div>
            <div className='filter-button'>
                <button style={{borderRadius: "8px"}} >Filters</button>
                </div>
            <div className="Container setMargin">
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="Table-header" style={{ width: "42px" }}>
                                        <div >
                                            #
                                        </div>
                                    </td>
                                    <td className="Table-header" style={{ width: "220px" }}>
                                        <div className="sc-131di3y-0 cLgOOr okc">
                                            Name
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                        {coins.map((coin) => {
                            return <CoinLogo key={coin.id} coin={coin} />
                        })}
                    </div>
                    <div className="p-2 bd-highlight scrollmenu ">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="Table-header p">

                                        Price

                                    </td>
                                    <td className="Table-header up">

                                        24 hrs   <i className="fas fa-sort-up align-middle mr-3 text-success"></i>


                                    </td><td className="Table-header dwn">

                                        24 hrs
                                        <i className="fas fa-sort-down align-middle mr-3 text-danger"></i>

                                    </td><td className="Table-header prcnt">

                                        24 hrs %

                                    </td><td className="Table-header mc">

                                        Market Cap

                                    </td><td className="Table-header v">

                                        Volume

                                    </td>
                                </tr>
                            </tbody>

                        </table>
                        <div >
                            {coins.map((coin) => {
                                return (
                                    <>
                                        <Coins key={coin.id} coin={coin} currentcurrency={currentcurrency} />

                                    </>
                                )
                            })}
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cryptocurrencies
