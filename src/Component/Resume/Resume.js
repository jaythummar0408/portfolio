import React, { useEffect, useState } from "react";
import jay_cv from '../../assets/jay_updated_cv.png'
import dark_cv from'../../assets/dark_cv.png';
import { useSelector } from "react-redux";
const Resume = () => {
  const [storedTheme,setStoreTheme] = useState(localStorage.getItem('theme'))

  const state = useSelector((state) => state);
 useEffect(() => {
   setStoreTheme(state.theme)
 }, [state.theme])
 
  return (
    <>
      <section class="cta-section theme-bg-light py-5" id="resume">
        <div class="container text-center single-col-max-width">
          <h2 class="heading mb-3">Online Resume</h2>
          <a
            class="btn btn-primary btn-resume-dwnld"
            href={storedTheme == 'dark' ? dark_cv : jay_cv}
            target="_blank"
            download
          >
            <i class="fas fa-file-pdf me-2"></i>Download PDF Resume
          </a>
        </div>
      </section>
      <section>
        <div class="container resume-container px-3 mb-5 px-lg-5">
          <article class="resume-wrapper mx-auto p-5  shadow-lg">
            <img
              class=" img-fluid mb-3 mb-lg-0 me-md-0"
              src={storedTheme == 'dark' ? dark_cv : jay_cv}
              alt=".."
            />
          </article>
        </div>
      </section>
    </>
  );
};

export default Resume;
