import jsCookies from 'js-cookie'
function getFromCache(key){
  let savedUserData=null
  if(localStorage){
    savedUserData=JSON.parse(localStorage.getItem(key))
  }else{
    savedUserData=jsCookies.get(key)
  }
  return savedUserData
}

function setCache(key,value,expires=7){
  let valueStr = JSON.stringify(value)
  if (localStorage) {
    localStorage.setItem(key, valueStr)
  } else {
    jsCookies.set(
      key,
      value,
      {expires: expires});
  }
}

export {getFromCache,setCache}
