import React from 'react'
import CreatedTimeComponent from ".././CreatedTimeComponent";



export default class CardMeta extends React.PureComponent{

  render(){
    const {
      curId,
      rid,
      handleReply,
      nickName,
      createdAt
    }=this.props
    return (
      <div className={"vmeta"}>
        <CreatedTimeComponent createdAt={createdAt} />
        <span className={"vat"} onClick={handleReply.bind(this,curId,nickName,rid)}>回复</span>
      </div>
    )
  }
}