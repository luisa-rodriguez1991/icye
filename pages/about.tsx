
import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import AboutUs from "@/components/about-us-content";
import { useIntl } from "react-intl";
import { getPage } from "@/lib/api";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function About({page}:any) {
  
  const intl = useIntl()
  
  return (
    <Layout>
      <Head>
        <link rel="canonical" href="https://www.icyecolombia.com/about" />
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
       <Breadcrumb miVariable={intl.formatMessage({id:"breadcrumb_about"})}/>
       {/* <ContactContent text={page.acf.contact_text}/> */}

    <AboutUs 
    text={page.acf.about_us_text}
    img1={page.acf.about_us_img_1.sizes.large}
    img2={page.acf.about_us_img_2.sizes.large}
    img3={page.acf.about_us_img_3.sizes.large}
    img4={page.acf.about_us_img_4.sizes.large}
    img5={page.acf.about_us_img_5.sizes.large}


    missiontext1={page.acf.about_us_mission_text_1}
    missiontext2={page.acf.about_us_mission_text_2}
    missiontext3={page.acf.about_us_mission_text_3}

    dataanalytic1={page.acf.about_us_mission_date_analytics_1}
    dataanalytic2={page.acf.about_us_mission_date_analytics_2}
    dataanalytic3={page.acf.about_us_mission_date_analytics_3}
    dataanalyticlabel1={page.acf.about_us_mission_date_analytics_label_1}
    dataanalyticlabel2={page.acf.about_us_mission_date_analytics_label_2}
    dataanalyticlabel3={page.acf.about_us_mission_date_analytics_label_3}

    visiontext={page.acf.about_us_vision_text}
    visionsubtitle1={page.acf.about_us_vision_sub_title_1}
    visiontext1={page.acf.about_us_vision_text_1}
    visionsubtitle2={page.acf.about_us_vision_sub_title_2}
    visiontext2={page.acf.about_us_vision_text_2}
    visionsubtitle3={page.acf.about_us_vision_sub_title_3}
    visiontext3={page.acf.about_us_vision_text_3}
    visionsubtitle4={page.acf.about_us_vision_sub_title_4}
    visiontext4={page.acf.about_us_vision_text_4}
    visionsubtitle5={page.acf.about_us_vision_sub_title_5}
    visiontext5={page.acf.about_us_vision_text_5}
    visionsubtitle6={page.acf.about_us_vision_sub_title_6}
    visiontext6={page.acf.about_us_vision_text_6}

    ourteamtext={page.acf.about_us_our_team_text}
    ourteamimg={page.acf.about_us_our_team_img.sizes.large}
    
    />
    
    </Layout>
   
  )
}

export const getStaticProps: GetStaticProps = async () => { 
  const pageInfo = await getPage(419) 

  return {
      props: {page: pageInfo}
  }
}