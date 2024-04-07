const CurrencyInput = ({money, setMoney}) => {
  const onChange = (e) => {
    setMoney(e.target.value);
  }

  return (
    <>
      <input type="number"
        value={money}
        onChange={onChange}/>
    </>
  )
}

export default CurrencyInput;

