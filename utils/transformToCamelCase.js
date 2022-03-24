const transfromToCamelCase = (data) => {
    const objKeys = Object.keys(data);
    const copy = { ...data };
  
    for (const key of objKeys) {
      if (!key.includes("_")) {
          continue
      }
      let changedKeyArr = [];
  
      for (let i = 0; i < key.length; i++) {
        if (key[i] === "_") {
          changedKeyArr.push(key[i+1].toUpperCase())
          i++
          continue
        }
        changedKeyArr.push(key[i]);
      }
  
      const changedKey = changedKeyArr.join('')
      copy[changedKey] = copy[key]
      delete copy[key]
      
    }
    return copy
  }

  export default transfromToCamelCase