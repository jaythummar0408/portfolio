import React, { useState } from "react";
import { useEffect } from "react";
import profile from "../../assets/profile.jpg";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/action/actions";
const Header = () => {
  const [tab,setTab] = useState('about_me')
  const [isToggle,setIsToggle] = useState(false)
  const dispatch = useDispatch();
    useEffect(() => {
      window.addEventListener('hashchange', handleTabChange);
  
      return () => {
        window.removeEventListener('hashchange', handleTabChange);
      };
    }, [])
    
  function removeHashFromUrl() {
    const urlWithoutHash = window.location.href.split('#')[0];
    window.history.pushState(null, null, urlWithoutHash);
  }

  // 1
  const setDark = () => {
    // 2
    localStorage.setItem("theme", "dark");
    dispatch(changeTheme())
    // 3
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    dispatch(changeTheme())
  };

  // 4
  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  // 5
  const toggleTheme = (e) => {
    e.target.checked ? setDark() : setLight()
  };
  
  function handleTabChange() {
    removeHashFromUrl();
  }

  const changeTab = (tab) =>{
    setTab(tab)
    setIsToggle(!isToggle)
  }
  return (
    <div>
      <header class="header text-center">
        <div class="force-overflow">
          <h1 class="blog-name pt-lg-4 mb-0">
            <a class="text-decoration-none" href="index.html">
              Mr Jay
            </a>
          </h1>
          <nav class="navbar navbar-expand-lg navbar-dark">
            <button
              onClick={()=>setIsToggle(!isToggle)}
              class={`navbar-toggler  ${!isToggle ? 'collapsed':''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded={!isToggle}
              aria-label="Toggle navigation"
              
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navigation" class={`navbar-collapse flex-column collapse animate `}>
              <div class="profile-section pt-3 pt-lg-0">
                <img
                  class="profile-image mb-3 rounded-circle mx-auto"
                  src={profile}
                  alt="image"
                />

                <div class="bio mb-3">
                  Hi, my name is Jay Thummar and I'm a mid senior software engineer. Welcome to my personal website!
                </div>
                <ul class="social-list list-inline py-2 mx-auto">
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-twitter fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-linkedin-in fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-github-alt fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-stack-overflow fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#">
                      <i class="fab fa-codepen fa-fw"></i>{" "}
                    </a>
                  </li>
                </ul>
                <hr />
              </div>

              <ul class="navbar-nav flex-column text-start ul-navwidth">
                <li class="nav-item" onClick={()=>changeTab('about_me')}>
                  <a class={`nav-link ${tab == "about_me" && 'active'}`} href="#aboutme">
                    <i class="fas fa-user fa-fw me-2"></i>About Me
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item" onClick={()=>changeTab('portfolio')}>
                  <a class={`nav-link ${tab == "portfolio" && 'active'}`} href="#portfolio">
                    <i class="fas fa-laptop-code fa-fw me-2"></i>Portfolio
                  </a>
                </li>

                <li class="nav-item" onClick={()=>changeTab('resume')}>
                  <a class={`nav-link ${tab == "resume" && 'active'}`} href="#resume">
                    <i class="fas fa-file-alt fa-fw me-2"></i>Resume
                  </a>
                </li>

                <li class="nav-item" onClick={()=>changeTab('contact')}>
                  <a class={`nav-link ${tab == "contact" && 'active'}`} href="#contact">
                    <i class="fas fa-envelope-open-text fa-fw me-2"></i>Contact
                  </a>
                </li>
              </ul>

              <div class="my-2">
                <a class="btn btn-primary" href="contact.html" target="_blank">
                  <i class="fas fa-paper-plane me-2"></i>Hire Me
                </a>
              </div>

              <div class="dark-mode-toggle text-center w-100">
                <hr class="mb-4" />
                <h4 class="toggle-name mb-3 ">
                  <i class="fas fa-adjust me-1"></i>Dark Mode
                </h4>
                <div class="toggle">
                  <input
                    type="checkbox"
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                  />
                  <label></label>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
