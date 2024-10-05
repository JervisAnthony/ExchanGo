# ExchanGo - Currency Converter

**ExchanGo** is a web-based currency converter that allows users to convert between different currencies in real-time. The app fetches live exchange rates from the ExchangeRate-API to provide accurate and up-to-date conversions. Built with simplicity and usability in mind, ExchanGo offers a clean interface that makes currency conversion fast and effortless.

## Features

- **Real-Time Currency Conversion**: Converts between any two currencies based on the latest exchange rates.
- **User-Friendly Input**: Enter the amount you wish to convert and select both the source and target currencies from dropdown menus.
- **Instant Results**: Displays the converted amount immediately after pressing the "Convert" button.
- **Error Handling**: Alerts the user if they enter an invalid amount or experience issues fetching exchange rates from the API.
- **Cross-Browser Compatible**: Works seamlessly on all modern browsers.

## Technologies Used

- **HTML5**: For the structure and layout of the app.
- **CSS3**: For styling the user interface, ensuring a clean and modern look.
- **JavaScript (ES6)**: Provides the core functionality, including fetching exchange rates from the API and performing calculations.
- **ExchangeRate-API**: External API used to retrieve real-time currency exchange rates.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ExchanGo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ExchanGo
   ```

3. Open the `index.html` file in your preferred web browser.

## Usage

1. Enter the amount you wish to convert in the "Amount" field.
2. Select the source currency (currency you are converting from).
3. Select the target currency (currency you are converting to).
4. Click the "Convert" button.
5. The converted amount will be displayed below.

## Example

If you input `100 USD` and select `EUR` as the target currency, ExchanGo will instantly show you the equivalent amount in Euros based on the latest exchange rate.

## API Integration

ExchanGo utilizes the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch up-to-date exchange rates. To use the API in your own version of the project:

1. Sign up for a free API key from ExchangeRate-API.
2. Replace the `YOUR_API_KEY` in `app.js` with your actual API key.

```javascript
const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${fromCurrency}`);
```

## Future Enhancements

Some planned features for future versions of ExchanGo include:
- **Historical Data**: Allow users to view past exchange rates.
- **Currency Fluctuation Graphs**: Visualize exchange rate changes over time.
- **Offline Mode**: Cache rates for offline usage.
- **Multi-Language Support**: Offer the app in different languages.

## Contributing

We welcome contributions! Feel free to open issues or submit pull requests if you find bugs or want to enhance the app. Please ensure that your code follows best practices and is well documented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

