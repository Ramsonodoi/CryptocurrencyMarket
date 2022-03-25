import React, { useState } from 'react'

const CurrencyConvertor = ({ detail, currentcurrency }) => {
    const [from, setfrom] = useState(1)

    const renderCurrencyConvertor = () => {
        if (detail) {

            return (
                <div className="container-size">
                    <h3 color="text" className=" convertor-container">{detail.symbol.toUpperCase()} to INR Converter</h3>
                    <div className="  convertor-inner-container"> 

                    <div className="  convertor-inner-inner-container">
                            <div className="  from-container">
                                <img src={detail.image} alt="converter-coin-logo" className=" currency-image" />
                                <div className=" name-n-logo-container">
                                    <p fontSize="11px" color="text2" className="symbol-container">
                                        {detail.symbol.toUpperCase()}
                                    </p>
                                    <p fontSize="1" fontWeight="500" className="name-convertor converter-item-name" color="text">
                                        {detail.name}
                                    </p>
                                </div>
}