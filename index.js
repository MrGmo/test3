// // Example API URL

// const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';

// // Fetching data from the API
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); // Parse the response as JSON
//   })
//   .then(data => {
//     console.log(data); // Print the JSON response
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

















// Write a funtion that returns a string with all vowels capitalized


// function test(param) {
//     const alpha = 'aeiou'
//     const alpha = {'a': 'A', 'e': 'E'}
//     let answer = []
//     for(let x = 0; x < param.length; x++){
//         if (alpha.indexOf(param[x]) > -1) { alpha[param[x]]
//             answer.push(param[x].toUpperCase())
//         } else {
//             answer.push(param[x])      
//         }
//     }
//     return answer.join('') // AEUI
// }



// console.log(test('abcdefgui')) // should return 'AbcdEfgUI'
























  function removeNumbers(input) {
    // return input.replace(/\d+/g, '');



// .filter....
// map is just loop with a new array created

    let nums = '0123456789'

    let answer = ''

    for (let i = 0; i < input.length; i++) {
        if (nums.indexOf(input[i]) === -1){
            answer += input[i]
        }
    }
    return answer
  }
  
  // Example usage
  const stringWithNumbers = "Hello123, this is 456 a test789!";
  const result = removeNumbers(stringWithNumbers);
  console.log(result); // Output: "Hello, this is  a test!"
  