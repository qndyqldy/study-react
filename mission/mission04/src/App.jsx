import './App.css'
import CurrencyInput from "./components/CurrencyInput.jsx";
import {useEffect} from "react";
import useInput from "./hooks/useInput.jsx";

function App() {
  const [krw, setKrw] = useInput();
  const [usd, setUsd] = useInput();


  const currency = 1300;
  useEffect(() => {
    setUsd(krw / currency);
  }, [krw]);

  useEffect(() => {
    setKrw(usd * currency);
  }, [usd]);

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <section>
        krw: <CurrencyInput money={krw} setMoney={setKrw} />
      </section>
      <section>
        usd: <CurrencyInput money={usd} setMoney={setUsd} />
      </section>
    </>
  )
}

export default App
