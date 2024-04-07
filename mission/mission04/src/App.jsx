import './App.css'
import CurrencyInput from "./components/CurrencyInput.jsx";
import {useState} from "react";

function App() {
  const [currency, setCurrency] = useState({
    krw: 0,
    usd: 0
  });

  const CURRENT_CURRENCY = 1300;
  const onChange = (currency, value) => {
    if(currency === 'krw') {
      setCurrency({
        krw: value,
        usd: value / CURRENT_CURRENCY
      })
    } else {
      setCurrency({
        krw: value * CURRENT_CURRENCY,
        usd: value
      })
    }
  }

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
        <CurrencyInput
          currency={"krw"}
          value={currency.krw}
          setValue={onChange} />
        <CurrencyInput
          currency={"usd"}
          value={currency.usd}
          setValue={onChange} />
    </>
  )
}

export default App;