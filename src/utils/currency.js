export default function (amount) {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
  });

  return formatter.format(amount).replace(/PKR/, "").trim();
}
