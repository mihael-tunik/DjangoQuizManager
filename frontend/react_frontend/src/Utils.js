export default function sample (n, m) {
  const res = []

  /* make function more robust */
  if (m > n){
     return res    
  }
  
  while (res.length < m) {
    const candidate = Math.floor(Math.random() * n)
    let flag = 1

    for (let j = 0; j < res.length; ++j) {
      if (res[j] === candidate) {
        flag = 0
      }
    }

    if (flag === 1) {
      res.push(candidate)
    }
  }
  return res
}
