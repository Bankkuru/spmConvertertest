function converter(currency) {
    if(typeof currency == 'number')
          return `$${(currency*0.03).toFixed(2)}`

    else 
         return 'error'
}
module.exports = converter;