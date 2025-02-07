import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Experience() {
  return (
    <div className='exp'>
      5 years of Data analytics exp
    </div>
  )
}

function About() {
  return (
      <div className='abt'>
          <p className='abt-p'>
              Hello! I'm Guruprasath, currently pursuing a Bachelor of Technology in Artificial Intelligence & Data Science. I am passionate about unraveling the mysteries hidden in data and leveraging data science techniques to solve real-world problems. With a solid foundation in AI and data science, I am enthusiastic about exploring innovative solutions and contributing to the ever-evolving field of technology. My academic journey has equipped me with the necessary skills and knowledge to analyze complex datasets, build predictive models, and extract valuable insights. I am constantly seeking opportunities to learn, grow, and collaborate with like-minded individuals who share my passion for data-driven decision-making.
          </p>
      </div>
  )
}

function Skills() {
  return (
    <div className='skills'>
      <ul className='skills-list'>
        <li>Java</li>
        <li>C++</li>
        <li>Python</li>
        <li>Data Science</li>
        <li>Machine Learning</li>
      </ul>
    </div>
  )
}

function Left() {
  return (
    <div className='left'>
      <BrowserRouter>
        <nav className='left-nav'>
            <Link to="/">About</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/experience'>Experience</Link>
        </nav>
        <Routes>
          <Route path="/" element={<About/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>      
  )
}

export default Left
