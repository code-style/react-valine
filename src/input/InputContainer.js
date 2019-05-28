import React from 'react';
import emojiData from '../assets/emoji.json'
import EditAreaComponent from "./edit-components/EditAreaComponent";
import ButtonContainer from "./button-components/ButtonContainer";
import TextAreaComponent from "./edit-components/TextAreaComponent";
import {calcValueAndPos, getEmojiPrefix} from "../utils";
import getWordList from "../utils/emojiTire";
import EmojiPreviewComponent from "./EmojiPreviewComponent";
const avatarsList=["mp","identicon", "monsterid",  "retro", "robohash", "wavatar","blank",]

const getCaretCoordinates=require('textarea-caret')

export default class InputContainer extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      nickName:'',
      email:'',
      link:'',
      commentContent:'',
      emojiList:[],
      emojiPrefix:'',
      emojiChooseId:0,
      emojiListPos:[0,0],
      avatarSrc:`${props.GRAVATAR_URL}/?d=${avatarsList[Math.floor(Math.random()*avatarsList.length)]}&size=50`,
    }
    this.emailOnChange=this.emailOnChange.bind(this)
    this.chooseEmoji=this.chooseEmoji.bind(this)
    this.insertEmoji=this.insertEmoji.bind(this)
    this.linkOnChange=this.linkOnChange.bind(this)
    this.nameOnChange=this.nameOnChange.bind(this)
    this.avatarOnChange=this.avatarOnChange.bind(this)
    this.handleOnSubmit=this.handleOnSubmit.bind(this)
    this.contentOnKeyDown=this.contentOnKeyDown.bind(this)
    this.commentContentOnChange=this.commentContentOnChange.bind(this)

    this.textAreaRef=React.createRef()
  }

  chooseEmoji(emoji,prefix){
    let ele=this.textAreaRef.current
    // 此处prefix前面还有`:`，因此需要+1
    let [newV,startPos,scrollTop]=calcValueAndPos(ele,emoji,prefix.length+1)
    this.setState({
      commentContent:newV,
      emojiList:[],
      emojiChooseId:0
    },()=>{
      ele.focus()
      ele.selectionStart = startPos + emoji.length;
      ele.selectionEnd = startPos + emoji.length;
      ele.scrollTop = scrollTop;
    })
  }

  insertEmoji(emoji){
    let ele=this.textAreaRef.current
    let [newV,startPos,scrollTop]=calcValueAndPos(ele,emoji)
    this.setState({
      commentContent:newV
    },()=>{
      ele.focus();
      ele.selectionStart = startPos + emoji.length;
      ele.selectionEnd = startPos + emoji.length;
      ele.scrollTop = scrollTop;
    })
  }

  // 修改上下选择表情 38 40
  // 修改TAB 9
  // 修改Enter 13
  // 修改ESC 27
  contentOnKeyDown(event){
    if(!event)return
    const {emojiList,emojiChooseId,emojiPrefix}=this.state
    let keyCode=event.keyCode,listLen=emojiList.length
    if(keyCode===27){
      if(listLen>0){
        event.preventDefault()
        this.setState({
          emojiList:[],
          emojiChooseId:0
        })
      }
    }else if(keyCode===13){
      if(listLen>0){
        event.preventDefault()
        let chooseEmoji=emojiList[emojiChooseId]
        this.chooseEmoji(emojiData[chooseEmoji],emojiPrefix)
      }
    }else if(keyCode===40 || keyCode===38){
      if(listLen>0){
        event.preventDefault()
        let newChooseId=0
        if(keyCode===40)newChooseId=(emojiChooseId+1) % listLen
        else newChooseId=(emojiChooseId+listLen-1) % listLen
        this.setState({
          emojiChooseId:newChooseId
        })
      }
    }else if(keyCode===9){
      event.preventDefault()
      let ele=event ? event.target : this.textAreaRef.current
      let insertStr='  '
      let [newV,startPos,scrollTop]=calcValueAndPos(ele,insertStr)
      this.setState({
        commentContent:newV
      },()=>{
        ele.focus();
        ele.selectionStart = startPos + insertStr.length;
        ele.selectionEnd = startPos + insertStr.length;
        ele.scrollTop = scrollTop;
      })
    }
  }


  commentContentOnChange(event,str=''){
    const {emojiList,emojiListPos,emojiChooseId}=this.state
    let newEmojiList=[],newEmojiListPos=emojiListPos
    let target=event?event.target:this.textAreaRef.current
    // 获取表情prefix列表
    let prefix=getEmojiPrefix(target)
    if(str==='')newEmojiList=getWordList(prefix)
    let selectionStart=target.selectionStart
    // 当开始出现表情列表时，获取top,left
    if(emojiList.length===0 && newEmojiList.length>0){
      let scrollTop=target.scrollTop
      let {top,left}=getCaretCoordinates(target,selectionStart)
      newEmojiListPos=[top,left,scrollTop]
    }
    // 替换已经存在的表情符号
    let newStr=str + target.value.replace(/:(.+?):/g, (placeholder, key) => {
      if(emojiData[key]){
        selectionStart-=key.length
        selectionStart+=1
      }
      return emojiData[key] || placeholder
    })
    selectionStart+=str.length
    this.setState({
      commentContent:newStr,
      emojiPrefix:prefix,
      emojiList:newEmojiList,
      emojiChooseId: emojiList.length===0 ? 0 : emojiChooseId,
      emojiListPos:newEmojiListPos
    },()=>{
      target.selectionStart=selectionStart
      target.selectionEnd=selectionStart
    })
  }

  avatarOnChange(event){
    event.stopPropagation()
    let ele=event.target,parent=event.currentTarget
    return new Promise((resolve,reject)=>{
      if(parent.className==="vavatars-select-list" && ele.nodeName==="IMG"){
        let src=''
        if(ele.getAttribute)src=ele.getAttribute("src")
        else src=ele.src
        this.setState({
          avatarSrc:src
        })
        resolve()
      }else{
        reject()
      }
    })
  }

  nameOnChange(event){
    event.stopPropagation()
    let newStr=event.target.value
    this.setState({
      nickName:newStr
    })
  }

  emailOnChange(event){
    event.stopPropagation()
    let newStr=event.target.value
    this.setState({
      email:newStr
    })
  }

  linkOnChange(event){
    let newStr=event.target.value
    this.setState({
      link:newStr
    })
  }
  handleOnSubmit(){
    const {nickName,email,link,avatarSrc,commentContent}=this.state
    const {submitComment}=this.props
    submitComment({mail:email,link,nick:nickName,avatarSrc,comment:commentContent})
      .then(()=>{
        this.setState({
          commentContent:''
        })
      })
      .catch(()=>{})
  }

  componentDidUpdate(prevProps){
    if(this.props.toggleTextAreaFocus!==prevProps.toggleTextAreaFocus){
      this.textAreaRef.current.focus()
    }
  }

  componentDidMount(){
    if(localStorage){
      let item=localStorage.getItem("ValineCache")
      if(!item)return
      let obj=JSON.parse(item)
      this.setState({
        link:obj.link,
        nickName:obj.nick,
        email:obj.mail,
        avatarSrc:obj.avatarSrc || this.state.avatarSrc
      })
    }
  }

  render() {
    const {
      link,
      email,
      nickName,
      avatarSrc,
      commentContent,
      emojiList,
      emojiChooseId,
      emojiPrefix,
      emojiListPos
    } = this.state;

    const {
      placeholder,
      requireName,
      requireEmail,
      GRAVATAR_URL,
      submitBtnDisable,
      toggleTextAreaFocus,
      previewShow,
      togglePreviewShow
    }=this.props

    return (
      <React.Fragment>
        <EditAreaComponent link={link}
                           email={email}
                           nickName={nickName}
                           avatarSrc={avatarSrc}
                           requireName={requireName}
                           requireEmail={requireEmail}
                           GRAVATAR_URL={GRAVATAR_URL}
                           emailOnChange={this.emailOnChange}
                           linkOnChange={this.linkOnChange}
                           nameOnChange={this.nameOnChange}
                           avatarOnChange={this.avatarOnChange}
        />
        <div className="vedit">
          <TextAreaComponent ref={this.textAreaRef}
                             toggleTextAreaFocus={toggleTextAreaFocus}
                             commentContent={commentContent}
                             placeholder={placeholder}
                             contentOnKeyDown={this.contentOnKeyDown}
                             contentOnChange={this.commentContentOnChange}
          />
          <EmojiPreviewComponent emojiList={emojiList}
                                 emojiListPos={emojiListPos}
                                 emojiPrefix={emojiPrefix}
                                 emojiChooseId={emojiChooseId}
                                 chooseEmoji={this.chooseEmoji}
          />
          <ButtonContainer previewShow={previewShow}
                           insertEmoji={this.insertEmoji}
                           commentContent={commentContent}
                           togglePreviewShow={togglePreviewShow}
                           submitBtnDisable={submitBtnDisable}
                           handleOnSubmit={this.handleOnSubmit}
          />
        </div>
      </React.Fragment>
    );
  }
}