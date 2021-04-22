import axios from 'axios'

const FIXER_API_KEY = '2697828a8f3f45eb8a21b2ba3e72b2d8'
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`

const REST_COUNTRIES_API = `https://restcountries.eu/rest/v2/currency/`

// fecht data abouyt crruencies
const getExchangeRate = async (fromCurrency, toCurrency) => {
    const {
        data: { rates },
    } = await axios.get(FIXER_API)

    console.log(rates)
}
getExchangeRate('USD', 'EUR')
// fetch data about countries
//
