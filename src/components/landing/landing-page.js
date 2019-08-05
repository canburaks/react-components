import React from 'react';

export const LandingPage = (props) => {
    return (
        <div>
            <header class="pt-190 pb-120 bg-dark header_2">
                <nav class="header_menu_2 transparent pt-30 pb-30 mt-20">
                    <div class="container px-xl-0">
                        <div class="row justify-content-between align-items-baseline">
                            <div class="col-md-4">
                                <div class="logo color-white">Startup 3</div>
                            </div>
                            <div class="col-md-6 d-flex justify-content-end align-items-center">
                                <a href="#" class="link color-white f-18 mx-15">Subscribe</a>
                                <a href="#" class="link color-white f-18 mx-15">Features</a>
                                <a href="#" class="btn sm action-2 mx-15">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container">
                    <div class="mb-3 logo color-white d-block d-xl-none text-center logo_mobile">Startup 3</div>
                    <h1 class="big color-white text-center">Let's make design <br />fast and easy</h1>
                    <div class="mw-620 mx-auto mt-35 f-22 color-white op-7 text-center text-adaptive">

                        The most important part of the Startup is the samples.
                        The samples form a set of 25 usable pages you can use
                        as is or you can add new blocks from UI Kit.

                    </div>

                    <form class="row align-items-center justify-content-center no-gutters mt-70" method="POST" action="form-handler.php">
                        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-9 d-flex flex-wrap justify-content-center justify-content-md-between holder">
                            <input type="email" name="email" placeholder="Your email" class="mw-320 input lg border-transparent-white focus-white color-white placeholder-transparent-white f-20" required />
                            <button class="btn action-1 lg">Send</button>
                        </div>
                    </form>

                    <div class="color-white op-3 text-center mt-35">

                        By signing up, you agree to the
                        <a href="#" class="link color-white">Terms of Service</a>
                    </div>

                </div>
            </header>

            {/*  FEATURES */}
            <section class="feature_1 bg-light pt-105 pb-45 text-center">
                <div class="container px-xl-0">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <h2 class="mb-45 small">Our Benefits</h2>
                            <div class="row justify-content-center">
                                <div class="col-md-4 mb-50">
                                    <i class="fas fa-briefcase f-60 action-3"></i>
                                    <div class="mt-20 mb-25 f-22 title">Many Useful <br />Components</div>
                                    <div class="color-heading text-adaptive">
                                        Startup Framework contains
                                        components and complex blocks
							which can easily be integrated <br />
                                        into almost any design.
						</div>
                                </div>
                                <div class="col-md-4 mb-50">
                                    <i class="fas fa-compress-arrows-alt f-60 action-3"></i>
                                    <div class="mt-20 mb-25 f-22 title">Responsive <br />Layout</div>
                                    <div class="color-heading text-adaptive">
                                        We haven’t forgotten about
                                        responsive layout. With Startup
							Framework, you can create a <br />
                                        website with full mobile support.
						</div>
                                </div>
                                <div class="col-md-4 mb-50">
                                    <i class="fas fa-desktop f-60 action-3"></i>
                                    <div class="mt-20 mb-25 f-22 title">Retina <br />Ready</div>
                                    <div class="color-heading text-adaptive">
                                        Startup Framework works on <br />
                                        devices supporting Retina <br />
                                        Display. Feel the clarity in each <br />
                                        pixel.
						</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

