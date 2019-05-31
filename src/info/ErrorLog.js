import React from 'react'

export default class ErrorLog extends React.PureComponent{

  render(){
    const {errorLog}=this.props
    const scrollTop=window.pageYOffset || document.documentElement.scrollTop
    return <div className={"vscreen-errorlog"} style={{ transform: `translateY(${scrollTop}px)`}}>{errorLog}</div>
  }
}
