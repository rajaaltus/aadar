<template>
  <section id="question" class="ls section_padding_top_100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 bottommargin_0 to_animate" data-animation="fadeInUp">
          <div class="ds bg_teaser with_padding big-padding">
            <img src="images/help-form.jpg" alt="" />
            <div class="row columns_padding_30">
              <div class="col-xs-12 col-sm-9 col-md-7 col-lg-6 col-sm-offset-3 col-md-offset-5 col-lg-offset-6">
                <h2 class="section_header color3">Do You Need Help?</h2>
                <p class="bottommargin_0">Contact us for more information.</p>
                <form class="contact-form row columns_padding_10" method="post" action="./">
                  <div class="col-sm-6">
                    <div class="form-group bottommargin_0">
                      <label for="name">Full Name <span class="required">*</span></label> <input type="text" aria-required="true" size="30" value="" name="name" id="name" class="form-control" placeholder="Full Name*" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group bottommargin_0">
                      <label for="email">Email address<span class="required">*</span></label> <input type="email" aria-required="true" size="30" value="" name="email" id="email" class="form-control" placeholder="Email Address*" />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group bottommargin_0">
                      <label for="message">Message</label> <textarea aria-required="true" rows="4" cols="45" name="message" id="message" class="form-control" placeholder="Your Message..."></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12 bottommargin_0">
                    <div class="contact-form-submit topmargin_10"><button type="submit" id="contact_form_submit" name="contact_submit" class="theme_button color3 min_width_button margin_0">Send now</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
