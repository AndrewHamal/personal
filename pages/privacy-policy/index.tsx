import { Typography } from "@mui/material"
import { Drawer } from "antd";
import Head from "next/head";
import React, { useState } from "react"
import CardDetail from "../card-detail";
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import Plan from "../plan/[id]";
import ProfileDetail from "../profile-detail";
import Register from "../register";
import Success from "../success";
import Verify from "../verify";

export default function Privacy() {
    const [showSider, setShowSider] = useState({
        page:'plan',
        state: false,
        id: ''
      });
    
      const render = () => {
        switch(showSider.page)
        {
          case 'register': 
            return <Register showSider={showSider} setShowSider={setShowSider}/> 
          case 'verify': 
            return <Verify showSider={showSider} setShowSider={setShowSider}/>
          case 'plan': 
            return <Plan showSider={showSider} setShowSider={setShowSider}/>
          case 'cardVerify': 
            return <CardDetail selectedPlan={showSider.id} showSider={showSider} setShowSider={setShowSider}/>
          case 'complete': 
            return <ProfileDetail showSider={showSider} setShowSider={setShowSider}/>
          case 'success': 
            return <Success showSider={showSider} setShowSider={setShowSider}/>
        }
      }
    
    return (
        <>
            <Head>
              <title>Provacy Policy - CoparentingPlus</title>
            </Head>
            <Drawer width={(window.innerWidth > 800 && window.innerWidth < 900) ? "60%" : window.innerWidth > 900 ? '50%' : "100%"} title={<img  className="ml-auto" src="/img/logo.svg" width={180} alt="" />} closeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M24 12C24 18.6094 18.6563 24 12 24C5.39063 24 1.25807e-06 18.6094 1.83588e-06 12C2.41779e-06 5.34375 5.39063 -1.62688e-06 12 -1.04907e-06C18.6563 -4.67165e-07 24 5.34375 24 12ZM15.7969 14.2031L13.5938 12L15.7969 9.79687C16.2656 9.32812 16.2656 8.625 15.7969 8.20312C15.375 7.73437 14.6719 7.73437 14.25 8.20312L12.0469 10.4062L9.79688 8.20312C9.375 7.73437 8.67188 7.73437 8.25 8.20312C7.78125 8.625 7.78125 9.32812 8.25 9.79687L10.4531 12L8.25 14.2031C7.78125 14.625 7.78125 15.3281 8.25 15.7969C8.67188 16.2187 9.375 16.2187 9.79688 15.7969L12.0469 13.5469L14.25 15.7969C14.6719 16.2187 15.375 16.2187 15.7969 15.7969C16.2656 15.3281 16.2656 14.625 15.7969 14.2031Z" fill="#030128"/>
            </svg>} placement={'right'} open={showSider.state} onClose={() => setShowSider({...showSider, state: false})}>

            { render() }
            </Drawer>
        
            <NavBar handleClickSignup={() => setShowSider({...showSider, state: !showSider.state})}/>

            <div className="container policy pt-[106px]">
                <Typography variant="h6">INTRODUCTION</Typography>
                <Typography variant="body1">This document sets out the privacy policy of Willcox Real Estate Pty Ltd trading as Co-parenting Plus ABN 56 611 968 873 (referred to in this privacy policy as ‘we’, ‘us’, or ‘our’).</Typography>
                <Typography variant="body1">We take our privacy obligations seriously and we’ve created this privacy policy to explain how we store, maintain, use and disclose personal information.</Typography>
                <Typography variant="body1">By providing personal information to us, you consent to our storage, maintenance, use and disclosing of personal information in accordance with this privacy policy.</Typography>
                <Typography variant="body1">We may change this privacy policy from time to time by posting an updated copy on our website and we encourage you to check our website regularly to ensure that you are aware of our most current privacy policy.</Typography>
                <br />
                <Typography variant="h6">TYPES OF PERSONAL INFORMATION WE COLLECT</Typography>
                <Typography variant="body1">The personal information we collect may include the following:</Typography>
                <Typography variant="body1">(a) name;</Typography>
                <Typography variant="body1">(b) mailing or street address;</Typography>
                <Typography variant="body1">(c) email address;</Typography>
                <Typography variant="body1">(d) social media information;</Typography>
                <Typography variant="body1">(e) telephone number and other contact details;</Typography>
                <Typography variant="body1">(f) age;</Typography>
                <Typography variant="body1">(g) date of birth;</Typography>
                <Typography variant="body1">(h) credit card or other payment information;</Typography>
                <Typography variant="body1">(i) sensitive information as set out below;</Typography>
                <Typography variant="body1">(j) information about your business or personal circumstances;</Typography>
                <Typography variant="body1">(k) information in connection with client surveys, questionnaires and promotions;</Typography>
                <Typography variant="body1">(l) your device identity and type, I.P. address, geo-location information, page view statistics, advertising data and standard web log information; </Typography>
                <Typography variant="body1">(m) information about third parties; and</Typography>
                <Typography variant="body1">(n) any other information provided by you to us via our website or our online presence, or otherwise required by us or provided by you.</Typography>
                <br />
                <Typography variant="h6">HOW WE COLLECT PERSONAL INFORMATION</Typography>
                <Typography variant="body1">We may collect personal information either directly from you, or from third parties, including where you: </Typography>
                <Typography variant="body1">(a) contact us through our website;</Typography>
                <Typography variant="body1">(b) receive goods or services from us;</Typography>
                <Typography variant="body1">(c) submit any of our online sign up forms;</Typography>
                <Typography variant="body1">(d) communicate with us via email, telephone, SMS, social applications (such as LinkedIn, Facebook or Twitter) or otherwise;</Typography>
                <Typography variant="body1">(e) interact with our website, social applications, services, content and advertising; and</Typography>
                <Typography variant="body1">(f) invest in our business or enquire as to a potential purchase in our business.</Typography>
                <Typography variant="body1">We may also collect personal information from you when you use or access our website or our social media pages. This may be done through use of web analytics tools, ‘cookies’ or other similar tracking technologies that allow us to track and analyse your website usage. Cookies are small files that store information on your computer, mobile phone or other device and enable and allow the creator of the cookie to identify when you visit different websites. If you do not wish information to be stored as a cookie, you can disable cookies in your web browser.</Typography>
                <Typography variant="body1">We may use Google Analytics to collect and process data, including when you use third party websites or apps. To find out more see How Google uses data when you use our partners’ sites or apps..</Typography>
                <br />
                <Typography variant="h6">USE OF YOUR PERSONAL INFORMATION</Typography>
                <Typography variant="body1">We collect and use personal information for the following purposes:</Typography>
                <Typography variant="body1">(a) to provide goods, services or information to you;</Typography>
                <Typography variant="body1">(b) for record keeping and administrative purposes;</Typography>
                <Typography variant="body1">(c) to provide information about you to our contractors, employees, consultants, agents or other third parties for the purpose of providing goods or services to you;</Typography>
                <Typography variant="body1">(d) to improve and optimise our service offering and customer experience;</Typography>
                <Typography variant="body1">(e) to comply with our legal obligations, resolve disputes or enforce our agreements with third parties;</Typography>
                <Typography variant="body1">(f) to send you marketing and promotional messages and other information that may be of interest to you and for the purpose of direct marketing (in accordance with the Spam Act). In this regard, we may use email, SMS, social media or mail to send you direct marketing communications. You can opt out of receiving marketing materials from us by using the opt-out facility provided (e.g. an unsubscribe link);</Typography>
                <Typography variant="body1">(g) to send you administrative messages, reminders, notices, updates, security alerts, and other information requested by you; and</Typography>
                <Typography variant="body1">(h) to consider an application of employment from you.</Typography>
                <br />
                <Typography variant="h6">SENSITIVE INFORMATION</Typography>
                <Typography variant="body1">We may collect sensitive information about you during the course of providing you services. The type of sensitive information we may collect includes: information relating to your children, personal and family circumstances, personal messages and posts, diary entries, calendar entries, children’s school information (teachers, school address, email address), children’s medical information (doctor’s names, allergies, medication), details relating to family law proceedings and parenting orders or custody arrangements and sexual orientation. </Typography>
                <Typography variant="body1">We will only collect this sensitive information where you consent and provide us with this information. If you consent, your sensitive information may only be used and disclosed for purposes relating to providing you with our services. </Typography>
                <Typography variant="body1">Your sensitive information may also be used or disclosed to comply with our legal obligations. </Typography>
                <br />
                <Typography variant="h6">SHARING OF INFORMATION</Typography>
                <Typography variant="body1">We may process or share your data or personal information that we hold based on the following legal basis:</Typography>
                <Typography variant="body1">(a) <strong>Provision of Services:</strong> we may need to share your personal information with third parties, including your medical providers that we work with, to provide you with our services. You consent to the sharing of your personal and sensitive information with these third parties as required to provide you with the services.;</Typography>
                <Typography variant="body1">(b) <strong>Third Parties:</strong> we may disclose your personal information to cloud-providers, contractors and other third parties located inside or outside of Australia. If we do so, we will take reasonable steps to ensure that any overseas recipient deals with such personal information in a manner consistent with how we deal with it.</Typography>
                <Typography variant="body1">(c) <strong>Consent:</strong> we may disclose your personal information if you have given us specific consent to use your personal information in a specific purpose.</Typography>
                <Typography variant="body1">(a) <strong>Legal Obligations:</strong> we may disclose your personal information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order, subpoena or a notice to produce pursuant to the Family Law Act 1975 (Cth) (or any other relevant legislation in force from time to time).</Typography>
                <br />
                <Typography variant="h6">SECURITY</Typography>
                <Typography variant="body1">We take reasonable steps to ensure your personal information is secure and protected from misuse or unauthorised access. Our information technology systems are password protected, and we use a range of administrative and technical measures to protect these systems. However, we cannot guarantee the security of your personal information.</Typography>
                <br />
                <Typography variant="h6">LINKS</Typography>
                <Typography variant="body1">Our website may contain links to other websites. Those links are provided for convenience and may not remain current or be maintained. We are not responsible for the privacy practices of those linked websites and we suggest you review the privacy policies of those websites before using them.</Typography>
                <br />
                <Typography variant="h6">REQUESTING ACCESS OR CORRECTING YOUR PERSONAL INFORMATION</Typography>
                <Typography variant="body1">If you wish to request access to the personal information we hold about you, please contact us using the contact details set out below including your name and contact details. We may need to verify your identity before providing you with your personal information. In some cases, we may be unable to provide you with access to all your personal information and where this occurs, we will explain why. We will deal with all requests for access to personal information within a reasonable timeframe.</Typography>
                <Typography variant="body1">If you think that any personal information we hold about you is inaccurate, please contact us using the contact details set out below and we will take reasonable steps to ensure that it is corrected.</Typography>
                <br />
                <Typography variant="h6">COMPLAINTS</Typography>
                <Typography variant="body1">If you wish to complain about how we handle your personal information held by us, please contact us using the details set out below including your name and contact details. We will investigate your complaint promptly and respond to you within a reasonable timeframe.</Typography>
                <br />
                <Typography variant="h6">CONTACT US</Typography>
                <Typography variant="body1">For further information about our privacy policy or practices, or to access or correct your personal information, or make a complaint, please contact us using the details set out below:</Typography>
                <Typography variant="body1"><strong>Name: </strong> Peggy Willcox</Typography>
                <Typography variant="body1"><strong>Email: </strong></Typography>
                <Typography variant="body1">Our privacy policy was last updated on 9 May 2022.</Typography>
            </div>
            <Footer />
        </>
    )
}