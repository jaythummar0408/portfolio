import React from 'react'
import ab_css from './about_sec.css'
import right_profile from '../../assets/left-profile.jpg'
const About = () => {
  return (
    <>
   
     <section class="about-me-section  aboutme p-3 p-lg-5 theme-bg-light" id="aboutme">
            <div class="container">
                <div class="profile-teaser row">
                    <div class="col-md-7 col-lg-7">
                        <h2 class="name font-weight-bold mb-1">Jay Thummar</h2>
                        <div class="tagline mb-3">Mid Senior Software Engineer</div>
                        <div class="bio mb-4 im-software">I'm a software engineer specialised in frontend 
                            development for complex scalable web apps. I write about software development on <a
                                class="text-link text-decoration-none" href="blog-home.html">my blog</a>. Want to
                            know how I may help
                            your project? Check out my project <a class="text-link text-decoration-none"
                                href="projects.html">portfolio</a> and <a class="text-link text-decoration-none"
                                href="resume.html">online resume</a>.
                        </div>
                        <div class="mb-4">
                            <button class="btn text-white me-2 mb-3 bnt-portfolio  fw-bold"
                                href="portfolio.html">
                                <i class="fas fa-arrow-alt-circle-right me-2"></i> <span
                                    class="d-none d-md-inline">View</span> Portfolio</button>
                            <a class="btn btn-secondary mb-3 btn-resume color-white fw-bold " href="resume.html"><i
                                    class="fas fa-file-alt me-2"></i><span class="d-none d-md-inline">View</span>
                                Resume</a>
                        </div>
                    </div>

                    <div class="col-md-5 col-lg-5">
                        <img class="profile-image img-fluid mb-3 mb-lg-0 me-md-0" src={right_profile}
                            alt=".." />
                    </div>
                </div>
            </div>
        </section>
        <hr style={{height:'1px'}} />
        <section class="overview-section p-3 p-lg-5">
            <div class="container">
                <h2 class="section-title font-weight-bold mb-3">What I do</h2>
                <div class="section-intro mb-5">I have more than 10 years' experience building software for clients
                    all
                    over the world. Below is a quick overview of my main technical skill sets and technologies I
                    use.
                    Want to find out more about my experience? Check out my <a class="text-link"
                        href="resume.html">online resume</a> and <a class="text-link" href="portfolio.html">project
                        portfolio</a></div>
                <div class="row">
                    <div class="item col-6 col-lg-3">
                        <div class="item-inner">
                            <div class="item-icon"><i class="fab fa-html5 me-2"></i>
                                <i class="fab fa-css3-alt"></i>
                            </div>
                            <h3 class="item-title">HTML &amp; CSS</h3>
                            <div class="item-desc">List skills/technologies here. You can change the icon above to
                                any
                                of the 1500+  available. Aenean commodo ligula
                                eget
                                dolor. </div>
                        </div>
                    </div>
                    <div class="item col-6 col-lg-3">
                        <div class="item-inner">
                            <div class="item-icon">
                                <i class="fab fa-sass me-2"></i>
                                <i class="fab fa-less"></i>
                            </div>
                            <h3 class="item-title">Sass &amp; LESS</h3>
                            <div class="item-desc">List skills/technologies here. You can change the icon above to
                                any
                                of the 1500+  available. Aenean commodo ligula
                                eget
                                dolor. </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default About