import React from 'react';
import {Valine} from '../../src/react-valine'
import ValineContainer from '../../src/core/ValineContainer'
import ReactDOM from 'react-dom';
import TestUtil from 'react-dom/test-utils';
import ValineLink from "../valine-link";

let setStateCount=0
ValineContainer.prototype.setState=()=>{setStateCount++}

const test_uniq_str="test-fetch-and-unmounted"



const nock = require('nock')

nock('https://app-router.leancloud.cn')
  .persist()
  .get('/2/route?appId=I5DAxOhp2kPXkbj9VXPyKoEB-gzGzoHsz')
  .reply(200, {"ttl":3600,"stats_server":"i5daxohp.stats.lncld.net","rtm_router_server":"i5daxohp.rtm.lncld.net","push_server":"i5daxohp.push.lncld.net","play_server":"i5daxohp.play.lncld.net","engine_server":"i5daxohp.engine.lncld.net","api_server":"i5daxohp.api.lncld.net"})



/* fetch init start */
nock('https://i5daxohp.api.lncld.net:443')
  .persist()
  .get('/1.1/classes/Comment?where=%7B%22uniqStr%22%3A%22test-fetch-and-unmounted%22%2C%22pid%22%3A%22%22%7D&keys=nick%2Ccomment%2Clink%2Cpid%2CavatarSrc%2Crid&limit=10&order=-createdAt')
  .reply(200, {"results":[{"nick":"abac","updatedAt":"2019-05-31T03:58:23.186Z","objectId":"5cf0a65ea673f5006848fe53","createdAt":"2019-05-31T03:58:22.395Z","pid":"","link":"","comment":"<p>1<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5cf0a65ea673f5006848fe53"},{"nick":"abac","updatedAt":"2019-05-30T15:46:02.871Z","objectId":"5ceffaba30863b00686fa429","createdAt":"2019-05-30T15:46:02.153Z","pid":"","link":"","comment":"<p>345<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaba30863b00686fa429"},{"nick":"abac","updatedAt":"2019-05-30T15:46:00.611Z","objectId":"5ceffab7a673f5006844d2a0","createdAt":"2019-05-30T15:45:59.883Z","pid":"","link":"","comment":"<p>10<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffab7a673f5006844d2a0"},{"nick":"abac","updatedAt":"2019-05-30T15:45:57.393Z","objectId":"5ceffab443e78c006743dde3","createdAt":"2019-05-30T15:45:56.680Z","pid":"","link":"","comment":"<p>9<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffab443e78c006743dde3"},{"nick":"abac","updatedAt":"2019-05-30T15:45:53.321Z","objectId":"5ceffab0d5de2b0070a8c784","createdAt":"2019-05-30T15:45:52.600Z","pid":"","link":"","comment":"<p>7<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffab0d5de2b0070a8c784"},{"nick":"abac","updatedAt":"2019-05-30T15:45:51.030Z","objectId":"5ceffaaec8959c00690c7561","createdAt":"2019-05-30T15:45:50.304Z","pid":"","link":"","comment":"<p>6<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaaec8959c00690c7561"},{"nick":"abac","updatedAt":"2019-05-30T15:45:48.611Z","objectId":"5ceffaabc8959c00690c754f","createdAt":"2019-05-30T15:45:47.902Z","pid":"","link":"","comment":"<p>5<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaabc8959c00690c754f"},{"nick":"abac","updatedAt":"2019-05-30T15:45:46.321Z","objectId":"5ceffaa9ba39c80068ae13cf","createdAt":"2019-05-30T15:45:45.115Z","pid":"","link":"","comment":"<p>4<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaa9ba39c80068ae13cf"},{"nick":"abac","updatedAt":"2019-05-30T15:45:42.920Z","objectId":"5ceffaa6a673f5006844d237","createdAt":"2019-05-30T15:45:42.161Z","pid":"","link":"","comment":"<p>3<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaa6a673f5006844d237"},{"nick":"abac","updatedAt":"2019-05-30T15:45:39.501Z","objectId":"5ceffaa2a673f5006844d224","createdAt":"2019-05-30T15:45:38.791Z","pid":"","link":"","comment":"<p>2<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaa2a673f5006844d224"}]})

nock('https://i5daxohp.api.lncld.net')
  .persist()
  .get("/1.1/classes/Comment?where=%7B%22uniqStr%22%3A%22test-fetch-and-unmounted%22%2C%22pid%22%3A%7B%22%24ne%22%3A%22%22%7D%2C%22rid%22%3A%7B%22%24in%22%3A%5B%225cf0a65ea673f5006848fe53%22%2C%225ceffaba30863b00686fa429%22%2C%225ceffab7a673f5006844d2a0%22%2C%225ceffab443e78c006743dde3%22%2C%225ceffab0d5de2b0070a8c784%22%2C%225ceffaaec8959c00690c7561%22%2C%225ceffaabc8959c00690c754f%22%2C%225ceffaa9ba39c80068ae13cf%22%2C%225ceffaa6a673f5006844d237%22%2C%225ceffaa2a673f5006844d224%22%5D%7D%7D&keys=nick%2Ccomment%2Clink%2Cpid%2CavatarSrc%2Crid&order=createdAt")
  .reply(200, {"results":[{"nick":"abac","updatedAt":"2019-05-30T15:46:26.793Z","objectId":"5ceffad243e78c006743df46","createdAt":"2019-05-30T15:46:26.793Z","pid":"5ceffab7a673f5006844d2a0","link":"","comment":"<p><a class=\"at\" href=\"#5ceffab7a673f5006844d2a0\">@abac<\/a>&nbsp;asdfasdfsf<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffab7a673f5006844d2a0"},{"nick":"abac","updatedAt":"2019-05-30T15:46:33.215Z","objectId":"5ceffad97b968a007694c820","createdAt":"2019-05-30T15:46:33.215Z","pid":"5ceffad243e78c006743df46","link":"","comment":"<p><a class=\"at\" href=\"#5ceffad243e78c006743df46\">@abac<\/a>&nbsp;gfgdhfghfghfgh<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffab7a673f5006844d2a0"},{"nick":"abac","updatedAt":"2019-05-30T15:46:55.615Z","objectId":"5ceffaefc8959c00690c77a2","createdAt":"2019-05-30T15:46:55.615Z","pid":"5ceffad97b968a007694c820","link":"","comment":"<p><a class=\"at\" href=\"#5ceffad97b968a007694c820\">@abac<\/a>&nbsp;8uk7y678<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffab7a673f5006844d2a0"},{"nick":"abac","updatedAt":"2019-05-31T06:50:14.750Z","objectId":"5cf0cea6ba39c80068b3fd20","createdAt":"2019-05-31T06:50:14.750Z","pid":"5ceffaba30863b00686fa429","link":"","comment":"<p><a class=\"at\" href=\"#5ceffaba30863b00686fa429\">@abac<\/a>&nbsp;dfasdf<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaba30863b00686fa429"},{"nick":"abac","updatedAt":"2019-05-31T06:50:31.910Z","objectId":"5cf0ceb7c8959c00691262e6","createdAt":"2019-05-31T06:50:31.910Z","pid":"5ceffaa2a673f5006844d224","link":"","comment":"<p><a class=\"at\" href=\"#5ceffaa2a673f5006844d224\">@abac<\/a>&nbsp;fffffff<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaa2a673f5006844d224"}]})

/* fetch init end */




/* fetch more start*/
nock('https://i5daxohp.api.lncld.net:443')
  .persist()
  // .log(console.log)
  .get("/1.1/classes/Comment?where=%7B%22uniqStr%22%3A%22test-fetch-and-unmounted%22%2C%22pid%22%3A%22%22%7D&keys=nick%2Ccomment%2Clink%2Cpid%2CavatarSrc%2Crid&limit=10&skip=10&order=-createdAt")
  .reply(200, {"results":[{"nick":"abac","updatedAt":"2019-05-30T15:45:36.799Z","objectId":"5ceffaa030863b00686fa39b","createdAt":"2019-05-30T15:45:36.091Z","pid":"","link":"","comment":"<p>1<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaa030863b00686fa39b"},{"nick":"abac","updatedAt":"2019-05-30T14:53:57.863Z","objectId":"5cefee85ba39c80068ad7da9","createdAt":"2019-05-30T14:53:57.008Z","pid":"","link":"","comment":"<p>axx<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5cefee85ba39c80068ad7da9"},{"nick":"fsf","updatedAt":"2019-05-29T13:33:18.710Z","objectId":"5cee8a1d43e78c006734fc8e","createdAt":"2019-05-29T13:33:17.983Z","pid":"","link":"","comment":"<p>sdfsadf<\/p>\n","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/?d=robohash&size=50","rid":"5cee8a1d43e78c006734fc8e"}]})

nock('https://i5daxohp.api.lncld.net')
// .log(console.log)
  .persist()
  .get("/1.1/classes/Comment?where=%7B%22uniqStr%22%3A%22test-fetch-and-unmounted%22%2C%22pid%22%3A%7B%22%24ne%22%3A%22%22%7D%2C%22rid%22%3A%7B%22%24in%22%3A%5B%225ceffaa030863b00686fa39b%22%2C%225cefee85ba39c80068ad7da9%22%2C%225cee8a1d43e78c006734fc8e%22%5D%7D%7D&order=createdAt")
  .reply(200, {"results":[{"nick":"fsf","updatedAt":"2019-05-29T13:33:22.262Z","objectId":"5cee8a22ba39c800689f3c5e","createdAt":"2019-05-29T13:33:22.262Z","uniqStr":"http:\/\/localhost:8080\/","pid":"5cee8a1d43e78c006734fc8e","link":"","comment":"<p><a class=\"at\" href=\"#5cee8a1d43e78c006734fc8e\">@fsf<\/a>&nbsp;asdfasfsadf<\/p>\n","url":"\/","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/?d=robohash&size=50","rid":"5cee8a1d43e78c006734fc8e"},{"nick":"fsf","updatedAt":"2019-05-29T13:33:31.043Z","objectId":"5cee8a2bd5de2b007099e2f1","createdAt":"2019-05-29T13:33:31.043Z","uniqStr":"http:\/\/localhost:8080\/","pid":"5cee8a22ba39c800689f3c5e","link":"","comment":"<p><a class=\"at\" href=\"#5cee8a22ba39c800689f3c5e\">@fsf<\/a>&nbsp;sdfasfff<\/p>\n","url":"\/","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/?d=robohash&size=50","rid":"5cee8a1d43e78c006734fc8e"},{"nick":"fsf","updatedAt":"2019-05-29T13:33:34.148Z","objectId":"5cee8a2e7b968a0076860644","createdAt":"2019-05-29T13:33:34.148Z","uniqStr":"http:\/\/localhost:8080\/","pid":"5cee8a2bd5de2b007099e2f1","link":"","comment":"<p><a class=\"at\" href=\"#5cee8a2bd5de2b007099e2f1\">@fsf<\/a>&nbsp;vvvvvvvvvvvvv<\/p>\n","url":"\/","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/?d=robohash&size=50","rid":"5cee8a1d43e78c006734fc8e"},{"nick":"abac","updatedAt":"2019-05-30T15:46:07.038Z","objectId":"5ceffabfa673f5006844d2f4","createdAt":"2019-05-30T15:46:07.038Z","uniqStr":"http:\/\/localhost:8080\/","pid":"5ceffaa030863b00686fa39b","link":"","comment":"<p><a class=\"at\" href=\"#5ceffaa030863b00686fa39b\">@abac<\/a>&nbsp;wew<\/p>\n","url":"\/","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaa030863b00686fa39b"},{"nick":"abac","updatedAt":"2019-05-30T15:46:12.607Z","objectId":"5ceffac4c8959c00690c764c","createdAt":"2019-05-30T15:46:12.607Z","uniqStr":"http:\/\/localhost:8080\/","pid":"5ceffaa030863b00686fa39b","link":"","comment":"<p><a class=\"at\" href=\"#5ceffaa030863b00686fa39b\">@abac<\/a>&nbsp;sdfasdf<\/p>\n","url":"\/","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaa030863b00686fa39b"},{"nick":"abac","updatedAt":"2019-05-30T15:46:19.968Z","objectId":"5ceffacbc8959c00690c76a8","createdAt":"2019-05-30T15:46:19.968Z","uniqStr":"http:\/\/localhost:8080\/","pid":"5ceffabfa673f5006844d2f4","link":"","comment":"<p><a class=\"at\" href=\"#5ceffabfa673f5006844d2f4\">@abac<\/a>&nbsp;hhhhhhh<\/p>\n","url":"\/","avatarSrc":"https:\/\/gravatar.loli.net\/avatar\/913f3090981bd3f98736c89bd07258fb\/?size=50","rid":"5ceffaa030863b00686fa39b"}]})

/* fetch more end*/



/* fetch last start*/
nock('https://i5daxohp.api.lncld.net')
  .persist()
  // .log(console.log)
  .get("/1.1/classes/Comment?where=%7B%22uniqStr%22%3A%22test-fetch-and-unmounted%22%2C%22pid%22%3A%22%22%7D&keys=nick%2Ccomment%2Clink%2Cpid%2CavatarSrc%2Crid&limit=10&skip=13&order=-createdAt")
  .reply(200, {"results":[]})

/* fetch last end*/


/* fetch count */
nock('https://i5daxohp.api.lncld.net')
  .persist()
  .get('/1.1/classes/Comment?where=%7B%22uniqStr%22%3A%22test-fetch-and-unmounted%22%7D&limit=0&count=1')
  .reply(200, {"results":[],"count":25})



/* fetch pageview */
nock("https://i5daxohp.api.lncld.net")
  .persist()
  .get("/1.1/classes/Counter?where=%7B%22uniqStr%22%3A%22test-fetch-and-unmounted%22%7D")
  .reply(200, {"results":[{"uniqStr":"test-fetch-and-unmounted","title":"\u6d4b\u8bd5\u9875\u9762localhost","time":9999,"createdAt":"2019-05-29T14:53:57.872Z","updatedAt":"2019-05-30T08:08:47.209Z","objectId":"5cee9d0530863b006861c98c"}]})


describe('test nest with multi comments', ()=>{
  let container=document.createElement("div"),
    app,
    wrap,
    list,
    page,
    errlog,
    textAreaEle,
    vinputs,
    vemojiBtn,
    vpreviewBtn,
    submitBtn,
    avatarBtn,
    toggleShowBtn,
    appHeader,
    appBody

  beforeAll(()=>{
    TestUtil.act(() => {
      ReactDOM.render(<Valine  appId={"I5DAxOhp2kPXkbj9VXPyKoEB-gzGzoHsz"}
                               appKey={"lGPcHd7GL9nYKqBbNEkgXKjX"}
                               requireEmail={true}
                               serverURLs={{
                                 api: "https://i5daxohp.api.lncld.net",
                                 engine: "https://i5daxohp.engine.lncld.net",
                                 push: "https://i5daxohp.push.lncld.net",
                                 stats: "https://i5daxohp.stats.lncld.net"
                               }}
      >
        <ValineLink uniqStr={test_uniq_str}/>
      </Valine>, container);
    })
    app = container.getElementsByClassName('v')
    wrap = container.getElementsByClassName('v-main-wrapper')
    list=container.getElementsByClassName("vlist")
    page=container.getElementsByClassName("v-content-footer")
    errlog=container.getElementsByClassName("vscreen-errorlog")
    vinputs=container.getElementsByClassName("vinputs")[0]
    textAreaEle=container.getElementsByClassName("veditor vinput ")[0]
    vemojiBtn=container.getElementsByClassName("vemoji-btn")[0]
    vpreviewBtn=container.getElementsByClassName("vpreview-btn")[0]
    submitBtn=container.getElementsByClassName("vsubmit ")[0]
    avatarBtn=container.getElementsByClassName("vavatars-select-button")[0]
    appHeader=container.getElementsByClassName("App-header")
    appBody=container.getElementsByClassName("App-body")
    toggleShowBtn=container.getElementsByClassName("toggle-show")[0]

  })

  it('unmounted will not setState',(done)=>{
    TestUtil.Simulate.click(toggleShowBtn)
    expect(appHeader.length).toBe(1)
    expect(appBody.length).toBe(0)
    TestUtil.Simulate.click(toggleShowBtn)
    expect(appHeader.length).toBe(0)
    expect(appBody.length).toBe(1)
    TestUtil.Simulate.click(toggleShowBtn)
    expect(appHeader.length).toBe(1)
    expect(appBody.length).toBe(0)
    TestUtil.Simulate.click(toggleShowBtn)
    expect(appHeader.length).toBe(0)
    expect(appBody.length).toBe(1)
    setTimeout(()=>{
      expect(setStateCount).toBeLessThanOrEqual(4)
      done()
    },2000)
  })


})




