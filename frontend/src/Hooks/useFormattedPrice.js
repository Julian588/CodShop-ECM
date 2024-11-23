function useFormattedPrice(number) {
  return number.toLocaleString("es-CO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export default useFormattedPrice;
