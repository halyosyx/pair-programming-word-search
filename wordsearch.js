const wordSearch = (letters, word) => {
  // checking horizontals
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (const line of horizontalJoin) {
    if (line.includes(word)) return true
  }

  const endArray = [];
  for (let i = 0; i < letters[0].length; i++) {
    endArray.push([]);
    for (let j = 0; j < letters.length; j++) {
      endArray[i].push(letters[j][i]);
    }
  }
  
  // checking vertical
  const verticalJoin = endArray.map(ls => ls.join(''))
  for (const line of verticalJoin) {
    if (line.includes(word)) return true
  }

  return false
}

module.exports = wordSearch