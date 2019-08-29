import React from 'react';

export const Footer = (props) => (
    <footer class="footer_1 bg-light pt-75 pb-65 text-center">
        <div class="container px-xl-0">
            <div class="row justify-content-between align-items-center lh-40 links">
                <div class="col-lg-4 col-sm-6 text-sm-right text-lg-left order-1 order-lg-0">
                    <a href="#" class="mr-15 link color-main">About</a>
                    <a href="#" class="mx-15 link color-main">Policy</a>
                    <a href="#" class="mx-15 link color-main">Terms</a>
                </div>
                <div class="mb-10 mb-lg-0 col-lg-auto order-0">
                    <a href="#" class="logo link color-main">Startup 3</a>
                </div>
                <div class="col-lg-4 col-sm-6 text-sm-left text-lg-right order-2 order-lg-0">
                    <a href="#" class="mr-15 link color-main">Contacts</a>
                    <a href="#" class="mx-15 link color-main"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="mx-15 link color-main"><i class="fab fa-facebook-square"></i></a>
                    <a href="#" class="ml-15 link color-main"><i class="fab fa-google-plus-g"></i></a>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="mt-10 col-xl-4 col-lg-5 col-md-6 col-sm-8">
                    <div class="color-heading text-adaptive">
                        Be sure to take a look at our <a href="#" class="link color-heading">Terms of Use</a> <br />
                        and <a href="#" class="link color-heading">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
