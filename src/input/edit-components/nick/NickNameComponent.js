import React from 'react'


export default class NickNameComponent extends React.PureComponent{

  render(){
    const { nickName,requireName,langHead,nameOnChange} = this.props;
    return <input type="text" name="author" className="vinput" placeholder={langHead["nick"]+(requireName?langHead["require"]:"")}  onChange={nameOnChange} value={nickName}/>
   }
}
