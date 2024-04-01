export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("es-EU", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "narrowSymbol", // Muestra el símbolo de la moneda a la derecha
  }).format(quantity);
}
