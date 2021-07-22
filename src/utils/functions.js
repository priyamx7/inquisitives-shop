export const discountCalculator = (discountPercent, price) => {
    const discountAmount = discountPercent/100 * price;
    return price - discountAmount;
}