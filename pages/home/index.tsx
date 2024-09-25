import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import Banner from '../../components/Banner';
import Introdiv from '../../components/Introdiv';
import Countdown from '../../components/Countdownbanner';
import Services from '../../components/Services';
import BlogList from '../../components/Bloglist';
function Index() {
  return (
    <div>
      <Head>
        <title>Digital Marketing Consultant Service | Kaeera Infotechnology</title>
        <meta name="description" content="Kaeera Infotechnology famous for Best Digital Marketing and Consultant Service in US, UK and India since 16 years before. Book Now to Make your Business build and top rank in SERP." />
        <meta name="author" content="Kaeera Ventures" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Kaeera Ventures | Your Digital Marketing Partner" />
        <meta property="og:description" content="Explore our digital marketing solutions to enhance your business's online presence!" />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Head>
      <Banner />
      <Introdiv />
      <Countdown />
      <Services />
      <BlogList />
    </div>
  );
}

export default Index;
