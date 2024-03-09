// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import { Link } from 'react-router-dom';

function Stocks() {
  const cryptoContainer = useRef();
  const stockContainer = useRef();

  useEffect(
    () => {
      const stockScript = document.createElement("script");
    
      stockScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      stockScript.type = "text/javascript";
      stockScript.async = true;
      stockScript.innerHTML = `
        {
          "symbols": [
            [
              "Apple",
              "AAPL|1D"
            ],
            [
              "Google",
              "GOOGL|1D"
            ],
            [
              "Microsoft",
              "MSFT|1D"
            ]
          ],
          "chartOnly": false,
          "width": 550,
          "height": 400,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      // Check if the container element exists before appending the script
  if (stockContainer.current) {
    stockContainer.current.appendChild(stockScript);
  }

  // Cleanup function
  return () => {
    // Check if the container and the script element exist before attempting to remove the child
    if (stockContainer.current && stockContainer.current.contains(stockScript)) {
      stockContainer.current.removeChild(stockScript);
    }
  };

     
    },
    []
  );

  useEffect(
    () => {
      const cryptoScript = document.createElement("script");
      cryptoScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      cryptoScript.type = "text/javascript";
      cryptoScript.async = true;
      cryptoScript.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1D"
            ],
            [
              "KRAKEN:XRPUSD|1D"
            ],
            [
              "KRAKEN:ETHEUR|1D"
            ]
          ],
          "chartOnly": false,
          "width": 550,
          "height": 400,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
        if (cryptoContainer.current) {
          cryptoContainer.current.appendChild(cryptoScript);
        }
      
        // Cleanup function
        return () => {
          // Check if the container and the script element exist before attempting to remove the child
          if (cryptoContainer.current && cryptoContainer.current.contains(cryptoScript)) {
            cryptoContainer.current.removeChild(cryptoScript);
          }
        };
    },
    []
  );



  



  return (
    <>

    <div className="text-center ">
   
  <h1 className="font-bold text-3xl"> Stocks </h1>
  <h4 className="font semi-bold">Ready to learn more about the stock market? You're in the right place.</h4>
     <h4 className="font-semi-bold">Explore a collection of live stock charts, trends, and data from well-known tech companies, cryptocurrency, and the US Stock Market. 📊</h4>



    </div>
     <div className="text-center">
        <h1 className="font-bold text-xl">Stock Market</h1>
        <div className="tradingview-widget-container mx-auto" ref={stockContainer}>
          <div className="tradingview-widget-container__widget"></div>
        
        </div>
      </div>

      <div className="text-center">
        <h1 className="font-bold text-xl">Cryptocurrency</h1>
        <div className="tradingview-widget-container mx-auto" ref={cryptoContainer}>
          <div className="tradingview-widget-container__widget"></div>
        
        </div>
      </div>
      <br/>
      <br/>
      <br/>

      <div className="container mx-auto text-center">
  <div className="button inline-block">
    <Link to="/facts" className="btn bg-pink-500 text-white-700 border-blue-400 text-white border border-blue-700 hover:bg-gradient-to-r from-purple-300 to-blue-500 p-5 rounded-md">
      Alrighty, I’m ready to learn! 📚
    </Link>
  </div>
</div>



    
  </>

  );
}

export default memo(Stocks);

