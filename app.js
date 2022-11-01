const buyingPrice = document.querySelector("#buyingPrice");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#currentPrice");
const checkBtn = document.querySelector("#checkBtn");
const outputBox = document.querySelector("#outputBox");

const stockQuantity = quantity.value;
const buyingValue = (buyingPrice.value)*stockQuantity;
const currentValue = (currentPrice.value)*stockQuantity;

const calculateProfitAndLoss = () => {
    if (currentValue > buyingValue) {
        const profit = currentValue - buyingValue;
        const profitPercentage = (profit/buyingValue)*100;
        outputBox.innerText = `Your profit is ${profit} and your profit pecentage is ${profitPercentage}%.`;
    } else if (currentValue === buyingValue) {
        outputBox.innerText = `no pain no gain no gain no pain`;
    } else {
        const loss = buyingValue - currentValue;
        const lossPercentage = (loss/buyingValue)*100;
        outputBox.innerText = `Your loss is ${loss} and your loss pecentage is ${lossPercentage}%.`;
    }
}

checkBtn.addEventListener("click", calculateProfitAndLoss);