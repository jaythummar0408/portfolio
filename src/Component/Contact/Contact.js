import React from 'react'

const Contact = () => {
  return (
    <>
         <section class="cta-section theme-bg-light py-5" id="contact">
            <div class="container text-center single-col-max-width">
                <h2 class="heading">Contact</h2>
                <div class="intro">
                    <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact
                        form below or send me an email to <a class="text-link"
                            href="mailto:#">simon.doe@yourwebsite.com</a></p>
                    <p>Want to get connected? Follow me on the social channels below.</p>
                    <ul class="list-inline mb-0">

                        <li class="list-inline-item mb-3">
                            <a class="linkedin" href="#" >
                            <i class="fab fa-linkedin-in fa-fw fa-lg"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mb-3">
                            <a class="github" href="#">
                                <i class="fab fa-github-alt fa-fw fa-lg"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="instagram" href="#">
                                <i class="fab fa-instagram fa-fw fa-lg"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mb-3">
                            <a class="stack-overflow" href="#">
                                <i class="fab fa-stack-overflow fa-fw fa-lg"></i>
                            </a>
                        </li>

                        <li class="list-inline-item mb-3">
                            <a class="facebook" href="#">
                                <i class="fab fa-facebook-f fa-fw fa-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="contact-section px-3 py-5 p-md-5">
            <div class="container">
                <form id="contact-form" class="contact-form col-lg-8 mx-lg-auto" method="post" action="">
                    <h3 class="text-center mb-3">Get In Touch</h3>
                    <div class="row g-3">
                        <div class="col-12 col-md-6">
                            <label class="sr-only" for="cname">Name</label>
                            <input type="text" class="form-control" id="cname" name="name" placeholder="Name"
                                minlength="2" required="" aria-required="true" />
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="sr-only" for="cemail">Email</label>
                            <input type="email" class="form-control" id="cemail" name="email" placeholder="Email"
                                required="" aria-required="true" />
                        </div>
                        <div class="col-12 col-md-12">
                            <label class="sr-only" for="cemail">Email</label>
                            <input type="tel" class="form-control" id="phone" name="phone" placeholder="phone nuber"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>

                        <div class="col-12">
                            <label class="sr-only" for="cmessage">Your message</label>
                            <textarea class="form-control" id="cmessage" name="message"
                                placeholder="Enter your message" rows="10" required=""
                                aria-required="true"></textarea>
                        </div>
                        <div class="form-group col-12">
                            <button type="submit" class="btn btn-block btn-primary py-2 btn-send">Send Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Contact