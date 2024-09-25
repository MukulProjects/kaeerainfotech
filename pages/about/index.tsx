import React from 'react'
import Introdiv from '../../components/Introdiv'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import MissionStatement from '../../components/Missionstatement'
import TeamMembers from '../../components/Teammembers'
import Timeline from '../../components/Timeline'
import Aboutus from '../../components/Aboutus'
import ContactCTA from '../../components/Contactctc'
import Footer from '../../components/Footer'
import Head from 'next/head'

function index() {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="At Kaeera Ventures, we provide comprehensive digital marketing solutions tailored to your business needs. Explore our services to enhance your online presence!" />
                <meta name="keywords" content="Digital Marketing, SEO, Social Media, Online Presence, Kaeera Ventures" />
                <meta name="author" content="Kaeera Ventures" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Kaeera Ventures | Your Digital Marketing Partner" />
                <meta property="og:description" content="Explore our digital marketing solutions to enhance your business's online presence!" />
                <meta property="og:image" content="https://example.com/your-image.jpg" />
                <meta property="og:url" content="https://yourwebsite.com" />
            </Head>
            {/* <Navbar /> */}
            <Hero />
            <Introdiv />
            {/* <TeamMembers /> */}
            <MissionStatement />
            <Aboutus/>
            {/* <Timeline />     */}
            <ContactCTA />
            {/* <Footer/> */}
        </div>
    )
}

export default index
