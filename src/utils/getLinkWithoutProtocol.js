export function getLinkWithoutProtocol(link){
  let protocolMatch=link.match(/http(?:s)?:\/\//)
  let linkWithoutPro=link
  if(protocolMatch){
    linkWithoutPro=linkWithoutPro.slice(protocolMatch[0].length)
  }
  return linkWithoutPro
}