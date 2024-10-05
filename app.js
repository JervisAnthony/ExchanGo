document.getElementById('convertBtn').addEventListener('click', convertCurrency);

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        alert('Error fetching the exchange rate');
        console.error(error);
    }
}
