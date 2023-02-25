// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function urlTest(url){
  const result = url;
  const expected = "https://pokeapi.co/api/v2/pikachu";
  if(result == expected){
    console.info(`pass: expected ${expected} and recieved ${result}`)
  } else{
    console.error(`fail: expected ${expected} and recieved ${result}`)
  }
}

function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

equal(makeUrl("pikachu"),"https://pokeapi.co/api/v2/pikachu")

// urlTest(makeUrl("pikachu"))