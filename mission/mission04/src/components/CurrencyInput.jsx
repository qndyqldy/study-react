const CurrencyInput = ({currency, value, setValue}) => {
  return (
    <>
      <section>
        {currency} :
        <input type="number"
          value={value}
          onChange={(e) => setValue(currency, e.target.value)}/>
        </section>
    </>
  )
}

export default CurrencyInput;

