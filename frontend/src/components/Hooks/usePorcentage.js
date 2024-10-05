function usePorcentage(priceOne, priceTwo) {
  const porcentaje = ((priceOne - priceTwo) / priceOne) * 100;
  return porcentaje.toFixed(0) + "%";
}

export default usePorcentage;
