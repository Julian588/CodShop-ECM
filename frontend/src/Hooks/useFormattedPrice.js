function useFormattedPrice(number) {
  return number.toLocaleString("es-CO", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
}

export default useFormattedPrice;
