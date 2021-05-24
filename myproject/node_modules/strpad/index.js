exports.left = ( str, n, filler ) => {
  return String( str ).padStart( n, filler )
}

exports.right = ( str, n, filler ) => {
  return String( str ).padEnd( n, filler )
}

exports.center = require( "@fav/text.pad" )

