import React, { Component } from 'react'
import { Card, Col, Row,Image,Avatar, Badge,Progress,Button } from 'antd'
import { UserOutlined,ControlOutlined,EllipsisOutlined,MessageOutlined,GitlabOutlined,CodepenCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                 <div>
    <Row gutter={24}>
      <Col span={18} className="popularPost">
        <Card>
            <h1 className="postheader">Popular Post</h1>
        <Row gutter={18}>
            <Col span={9} className="Post1">
            <Image
      width={250}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}
    />
    <h1>Hello Every One</h1>
    <p >A paragraph is a series of related sentences developing a central idea, called the topic.
         Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group
         of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your
         broader argument.</p>
         <Row gutter={22}>
         <Col span={4} >
            <Image className="imagepost1"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/>
     
         
    </Col>
         <Col span={16}>
               <b> Hlll  col-18 col-push-6</b>
                <p >A paragraph is a series o</p>
        </Col>
            
    </Row>
            </Col>
            <Col span={9} className="Post2">
            <Image 
      width={250}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}
    />
     <h1>Hello Every One</h1>
    <p >A paragraph is a series of related sentences developing a central idea, called the topic.
         Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group
         of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your
         broader argument.</p>
         <Row gutter={22}>
         <Col span={4} >
            <Image className="imagepost1"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/>
     
         
    </Col>
         <Col span={18}>
               <b> Hlll  col-18 col-push-6</b>
                <p >A paragraph is a series o</p>
        </Col>
            
    </Row>
            </Col>
        </Row>

        </Card>
      </Col>
      <Col span={6}>
      <Row gutter={22}>
         <Col span={5} >
            {/* <Image className="imagepost"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/> */}
      <Avatar size='large' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="imagepost" />
     
         
    </Col>
         <Col span={18}>
               <h3 className="profileName">Floyd Miles</h3>
                <p className="profileDesc">Free Trainer</p>
        </Col>
        <Badge count={1} className="NotificationIcon">
        <Avatar shape="square" icon={<UserOutlined />} style={{ backgroundColor: 'white', color: 'black'}} />
       </Badge> 
       <Badge className="Options">
        <Avatar shape="square" icon={<ControlOutlined />} style={{ backgroundColor: 'white', color: 'black'}} />
       </Badge>
       <h4 className="titleHeader">Health</h4>
       <Row gutter={10} className="Col1">
      <Col span={8}>
        <Card bordered={false}>
            <h2 className="header1">6:25</h2>
            <Avatar size="small" icon={<GitlabOutlined/>}  shape="square" className="imagepost1" style={{ backgroundColor: 'Blue' }}/>
       <p className="IconDesc">Hours</p>
       <Progress percent={50} showInfo={false} strokeColor="Blue"/>
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
        <h2>625</h2>
        <Avatar size="small" icon={<GitlabOutlined/>}  shape="square" className="imagepost1" style={{ backgroundColor: 'Red' }}/>
       <p className="IconDesc">Burns</p>
       <Progress percent={90} showInfo={false} strokeColor="Red" />
        </Card>
      </Col>
      <Col span={8}>
        <Card bordered={false}>
        <h2>62.5</h2>
        <Avatar size="small" icon={<GitlabOutlined />}  shape="square" className="imagepost1" style={{ backgroundColor: 'Green' }}/>
       <p className="IconDesc">Kcal</p>
       <Progress percent={80} showInfo={false} strokeColor="Green" />
        </Card>
      </Col>
    </Row>
        <div className="paraGraph">
          <p>A paragraph is a sentence
             central idea, about <br/>
              paragraphs </p>
              <Button type="primary" size="small" className="buttonSignup">Sign up</Button>
        </div>
        <Image width="100px" className="imageParagraph"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
    />
    <h3 className="headerTraining">Total Training</h3>
    <div className="paraGraph1">
    <div class="row">
  <div class="column">
     <b className="coll1">Box</b>
     <p className="coll2">Sport club</p>
     <Button size="small" className="buttonSignup1">10:00</Button>
  </div>
  <div class="column">
  <h4 className="colll1">40</h4>
     <p className="colll2">Mins</p>
     <p className="colll3">Warm-up</p>
  </div>
  <div class="column">
  <h4 className="colll1">20</h4>
     <p className="colll2">Mins</p>
     <p className="colll3">Stretch</p>
  </div>
  <div class="column">
  <Avatar size="large" icon={<EllipsisOutlined  />}  shape="square" className="imagepost1 icon1" style={{ backgroundColor: 'blue' }}/>
  </div>
</div>
    </div>
    <hr></hr>
    <div className="paraGraph2">
    <div class="row">
  <div class="column">
     <b className="coll1">Box</b>
     <p className="coll2">Sport club</p>
     <Button size="small" className="buttonSignup1">12:00</Button>
  </div>
  <div class="column">
  <h4 className="colll1">20</h4>
     <p className="colll2">Mins</p>
     <p className="colll3">Warm-up</p>
  </div>
  <div class="column">
  <h4 className="colll1">20</h4>
     <p className="colll2">Mins</p>
     <p className="colll3">Pull-ups</p>
  </div>
  <div class="column">
  <Avatar size="large" icon={<EllipsisOutlined  />}  shape="square" className="imagepost1 icon1" style={{ backgroundColor: 'orangered' }}/>
  </div>
</div>
    </div>

  <div className="endmark">
  <Avatar size="large" icon={<EllipsisOutlined  />} className="icon2" style={{ backgroundColor: 'white', color: 'black'}}/>
  </div>
  <div>
  <h3 className="TrainerHeading">Your Trainers</h3>
  </div>
  <div>
  <Row gutter={22}>
  <Col span={5}>
            {/* <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/> */}
      <Avatar size='large' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="imagepost" />
         
    </Col>
         <Col span={18}>
               <h4 className="trainerName">Floyd Miles</h4>
                <p className="trainerDesc">MMA Coach</p>
          <Badge className="trainerMenu">
        <Avatar shape="square" icon={<MessageOutlined />} style={{ backgroundColor: 'white', color: 'black'}} className="trainerMenu" />
       </Badge> 
        </Col>
       </Row>
       </div>
       <div>
  <Row gutter={22}>
  <Col span={5}>
            {/* <Image
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}/> */}
     
     <Avatar size='large' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="imagepost" />
    </Col>
         <Col span={18}>
               <h4 className="trainerName">Floyd Miles</h4>
                <p className="trainerDesc">Boxing Coach</p>
          <Badge className="trainerMenu">
        <Avatar shape="square" icon={<MessageOutlined />} style={{ backgroundColor: 'white', color: 'black'}} className="trainerMenu" />
       </Badge> 
        </Col>
       </Row>
       </div>
       <div/>
  <div>
  </div>
    </Row>
      </Col>
      
    </Row>
  </div>
            </div>
        )
    }
}
