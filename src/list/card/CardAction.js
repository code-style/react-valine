import React from 'react'

export default class CardAction extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {
      curId,
      rid,
      langCtrl,
      owner,
      nickName,
      editMode,
      handleReply,
      showEditMode,
    }=this.props
    return (
      <div className={"vaction"}>
        {
          owner
            ? editMode
              ? null
              : <span className={"v-edit"} onClick={showEditMode.bind(this,curId)}>{langCtrl['edit']}</span>
            : null
        }
        <span className={"v-reply"} onClick={handleReply.bind(this,curId,nickName,rid)}>{langCtrl['reply']}</span>
      </div>
    )
  }
}
