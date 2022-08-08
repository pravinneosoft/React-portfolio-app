import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHeart  } from 'react-icons/fa';
import '../skills/style.scss'

const Skills=()=>{
return(
    <>
 <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaHeart  />}>
    <h3 className="vertical-timeline-element-title">NeoSoft Technologies</h3>
    <h4 className="vertical-timeline-element-subtitle">Frontend Developer</h4>
    <p className="vertical-timeline-element-text"style={{"color":"green"}}>
      Work On HTML5 , CSS3 , JavaScript And ReactJs Technologies 
    </p>
  </VerticalTimelineElement>


  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaHeart />} >
    <h3 className="vertical-timeline-element-title">Sanswai Technologies</h3>
    <h4 className="vertical-timeline-element-subtitle">UI Designer</h4>
    <p className="vertical-timeline-element-text">
    HTML5 , CSS3 , Bootstrap 4, PHP Technologies
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaHeart />}
  >
    <h3 className="vertical-timeline-element-title">Technical Course</h3>
    <h4 className="vertical-timeline-element-subtitle">Giri Tech Hub</h4>
    <p className="vertical-timeline-element-text">
      UI Development And Angular 10
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2014 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaHeart />}
  >
    <h3 className="vertical-timeline-element-title">Persuing BE</h3>
    <h4 className="vertical-timeline-element-subtitle">Mechanical Engineering</h4>
    <p className="vertical-timeline-element-text">
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2012 - 2014"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaHeart />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary Education </h3>
    <h4 className="vertical-timeline-element-subtitle">XII Science</h4>
    <p className="vertical-timeline-element-text">
     Special Subject Information Technology
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="May 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaHeart />}
  >
    <h3 className="vertical-timeline-element-title">Higher Secondary Education</h3>
    <h4 className="vertical-timeline-element-subtitle">10 th</h4>
    <p className="vertical-timeline-element-text">
     Dnyanmata Vidyalaya Sangamner
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaHeart />}
  >
    <h3 className="vertical-timeline-element-title">Lorem Ipsum has been the industry's standard dummy text</h3>
    <h4 className="vertical-timeline-element-subtitle">Lorem Ipsum</h4>
    <p className="vertical-timeline-element-text">
    Lorem Ipsum has been the industry's standard dummy text
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaHeart />}
  />
</VerticalTimeline>
    </>
)
}
export default Skills;