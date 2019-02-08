export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export const compare = (sortMethod) => {

  switch(sortMethod) {
    case 'l-h':
    return (a, b) => {
      var priceA = parseFloat(a.price);
      var priceB = parseFloat(b.price);
      if (priceA  > priceB) return 1;
      if (priceA  < priceB) return -1;
      return 0;
    }

    case 'h-l':
    return (a, b) => {
      var priceA = parseFloat(a.price);
      var priceB = parseFloat(b.price);
      if (priceA > priceB) return -1;
      if (priceA < priceB) return 1;
      return 0;
    }
  }
}

export const formatPrice = (price) => {
  var [integer, decimal] = price.split('.');
  decimal = (
  decimal ?
    decimal.length === 1 ?
      decimal + '0'
      :
      decimal
  :'00')

  return `${integer}.${decimal}`
}

export const toTwoDecimalPlace = (floatNumber)  => {
  return Math.floor(floatNumber * 100)  / 100
}
