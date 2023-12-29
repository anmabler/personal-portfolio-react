import React from 'react'

export default function AboutPage() {
  return (
    <div 
    className="mb-10 w-full">
      <div className='max-w-xl m-auto'>
        <div className='m-20 text-left bg-teal-bg p-10 rounded-2xl shadow-xl'>
          <h3 className='font-bold text-lg mb-4'>Work experience</h3>
          <div className='mb-5'>  
            <h4 className='font-bold'>Fullstack developer, Experis Academy | July 2022 – July 2023</h4>
            <p>
              Experis Academy is an intensive training program where you learn about technologies like Java 13, Spring, Hibernate, REST, Apache
              Tomcat, SOAP, NodeJS, Javascript 101, ReactJS, Angular, Bootstrap 4, HTML5, CSS, and Scrum during a 3-month period. Afterwards,
              I had the opportunity to further develop my skills in Java through various personal projects and online courses
            </p>
          </div>
        </div>
        <div className='m-20 text-left bg-teal-bg p-10 rounded-2xl shadow-xl'>
          <h3 className='font-bold text-lg mb-4'>Education</h3>
          <div className='mb-5'>
            <h4 className='font-bold'>Web development with e-commerce focus, Grit Academy | 2022</h4>
            <p>In the Entrepreneurship and Consultancy course, I learned how to go from an idea to a product, created a business plan with
            accompanying needs analysis, and improved my presentation skills. In the Design and UX course, the emphasis was on making
            websites user-friendly. I also took courses in HTML, CSS, and JavaScript during the semester.</p>
          </div>
          <div className='mb-5'>
            <h4 className='font-bold'>Object oriented programming with AI competence, Yrkeshögskoleexamen, Handelsakademin | 2020 - 2021</h4>
            <p>In this program, I studied Java, JavaScript, Python, HTML, and CSS and gained experience in AI. The program focused on the practical
            application of these languages and technologies. I also gained experience working in teams, as most assignments were group projects.
            I had the opportunity to work using SCRUM. In addition to my studies, I served as a student representative, facilitating class meetings
            and presenting the class's opinions at leadership meetings.</p>
          </div>
        </div>
        <div className='m-20 text-left bg-teal-bg p-10 rounded-2xl shadow-xl'>
          <h3 className='font-bold text-lg mb-4'>Personal</h3>
          <p>My greatest passion in life is being creative. I have a lot of hobbies and love being crafty. A few years ago I was educated in cabinet making.</p>
          <p>Another big interest that I have had all of my life is computers and gaming.</p>
        </div>

      </div>
    </div>
  )
}
