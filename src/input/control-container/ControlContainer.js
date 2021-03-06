import React from 'react';
import PreviewComponentShow from "./ControlComponent/PreviewComponentShow";
import {xssMarkdown,replaceAtToTag} from '../../utils/index'
import ControlComponent from "./ControlComponent";



export default class ControlContainer extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      show:false,
      previewContent:''
    }
    this.parseContent=this.parseContent.bind(this)
    // this.shutdownEmojiPanel=this.shutdownEmojiPanel.bind(this)
    this.toggleEmojiShow=this.toggleEmojiShow.bind(this)
    this.openEmojiDrawer=this.openEmojiDrawer.bind(this)
    this.closeEmojiDrawer=this.closeEmojiDrawer.bind(this)
  }

  toggleEmojiShow(){
    this.setState((prevState)=>({
      show:!prevState.show
    }))
  }

  openEmojiDrawer(ev){
    ev.stopPropagation()
    this.setState({
      show:true
    })
  }
  closeEmojiDrawer(){
    this.setState({
      show:false
    })
  }
  parseContent(){
    const {commentContent}=this.props
    let previewContent=replaceAtToTag(commentContent)
    previewContent=xssMarkdown(previewContent)
    if(previewContent===this.state.previewContent)return
    this.setState({
      previewContent
    })
  }

  // shutdownEmojiPanel(event){
    // if(!event)return
    // event.stopPropagation()
    // if(event && typeof event.target.className==="string"  && !event.target.className.includes("vemoji")){
    //   this.setState(()=>({
    //     show:false
    //   }))
    // }
  //   this.setState({
  //     show:false
  //   })
  // }


  // componentDidMount(){
    // document.addEventListener('click',this.shutdownEmojiPanel)
  // }
  // componentWillUnmount(){
    // document.removeEventListener('click',this.shutdownEmojiPanel)
  // }
  componentDidUpdate(){
    if(this.props.previewShow){
      this.parseContent()
    }
  }
  render() {
    const {show,previewContent} = this.state;
    const {
      previewShow,
      togglePreviewShow,
      langCtrl,
      insertEmoji
    }=this.props
    return (
      <React.Fragment>
        <ControlComponent langCtrl={langCtrl}
                          show={show}
                          insertEmoji={insertEmoji}
                          previewShow={previewShow}
                          togglePreviewShow={togglePreviewShow}
                          toggleEmojiShow={this.toggleEmojiShow}
                          closeEmojiDrawer={this.closeEmojiDrawer}
                          openEmojiDrawer={this.openEmojiDrawer}
        />
        <PreviewComponentShow previewShow={previewShow} previewContent={previewContent} />
      </React.Fragment>
    );
  }
}
