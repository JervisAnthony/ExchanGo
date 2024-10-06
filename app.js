const amountEl = document.getElementById('amount');
const fromCurrencyEl = document.getElementById('fromCurrency');
const toCurrencyEl = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultEl = document.getElementById('result');

convertBtn.addEventListener('click', convertCurrency);

// Load currency options when the page loads
document.addEventListener('DOMContentLoaded', populateCurrencyOptions);

async function populateCurrencyOptions() {
    try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/YOUR_API_KEY/codes');
        const data = await response.json();
        const currencies = data.supported_codes;

        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency[0];
            option1.textContent = `${currency[0]} - ${currency[1]}`;
            fromCurrencyEl.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency[0];
            option2.textContent = `${currency[0]} - ${currency[1]}`;
            toCurrencyEl.appendChild(option2);
        });

        // Set default currencies
        fromCurrencyEl.value = 'USD';
        toCurrencyEl.value = 'EUR';

    } catch (error) {
        alert('Error fetching currency codes.');
        console.error(error);
    }
}

async function convertCurrency() {
    const amount = parseFloat(amountEl.value);
    const fromCurrency = fromCurrencyEl.value;
    const toCurrency = toCurrencyEl.value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/pair/${fromCurrency}/${toCurrency}/${amount}`);
        const data = await response.json();

        if (data.result === 'success') {
            const convertedAmount = data.conversion_result.toFixed(2);
            resultEl.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            alert('Error converting currency.');
        }
    } catch (error) {
        alert('Error fetching exchange rate.');
        console.error(error);
    }
}
