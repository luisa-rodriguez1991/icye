import Layout from "@/components/layout";
import Breadcrumb from "@/components/breadcrump";
import AboutUs from "@/components/about-us-content";
import { useIntl } from "react-intl";
import {getPage, getPost} from "@/lib/api";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function About({ page, footer }: any) {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const intl = useIntl();

  return (
    <Layout footerInfo={footer} onOpenForm={setOpen} openForm={open}>
      <Head>
      <title>{intl.formatMessage({ id: "title_about_us" })}</title>
        <link rel="canonical" href="https://www.icyecolombia.com/about" />
          <link rel="alternate" hrefLang="es" href="https://www.icyecolombia.com/es/about" />
          <link rel="alternate" hrefLang="en" href="https://www.icyecolombia.com/en/about" />
        
      </Head>
      <Breadcrumb miVariable={intl.formatMessage({ id: "breadcrumb_about" })} />
      {/* <ContactContent text={page.acf.contact_text}/> */}

      <AboutUs
        text={page.acf.about_us_text}
        img1={page.acf.about_us_img_1}
        img2={page.acf.about_us_img_2}
        img3={page.acf.about_us_img_3}
        img4={page.acf.about_us_img_4}
        img5={page.acf.about_us_img_5}
       
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
        ourteamimg={page.acf.about_us_our_team_img}
        ourteamsubtitle={page.acf.about_us_our_team_sub_title}

        ourteamsubtitledescription1={page.acf.about_us_our_team_sub_title_descrption_1}
        ourteamsubtitledescription2={page.acf.about_us_our_team_sub_title_descrption_2}
        ourteamsubtitledescription3={page.acf.about_us_our_team_sub_title_descrption_3}
        ourteamsubtitledescription4={page.acf.about_us_our_team_sub_title_descrption_4}
        ourteamsubtitledescription5={page.acf.about_us_our_team_sub_title_descrption_5}

        ourteamtextdescrption1={page.acf.about_our_team_text_descrption_1}
        ourteamtextdescrption2={page.acf.about_our_team_text_descrption_2}
        ourteamtextdescrption3={page.acf.about_our_team_text_descrption_3}
        ourteamtextdescrption4={page.acf.about_our_team_text_descrption_4}
        ourteamtextdescrption5={page.acf.about_our_team_text_descrption_5}

         teammemberimg1={page?.acf?.about_us_team_member_img_1?page.acf.about_us_team_member_img_1:""}
         teammemberimg2={page?.acf?.about_us_team_member_img_2?page.acf.about_us_team_member_img_2:""}
         teammemberimg3={page?.acf?.about_us_team_member_img_3?page.acf.about_us_team_member_img_3:""}
         teammemberimg4={page?.acf?.about_us_team_member_img_4?page.acf.about_us_team_member_img_4:""}
         teammemberimg5={page?.acf?.about_us_team_member_img_5?page.acf.about_us_team_member_img_5:""}
         teammemberimg6={page?.acf?.about_us_team_member_img_6?page.acf.about_us_team_member_img_6:""}
         teammemberimg7={page?.acf?.about_us_team_member_img_7?page.acf.about_us_team_member_img_7:""}
         teammemberimg8={page?.acf?.about_us_team_member_img_8?page.acf.about_us_team_member_img_8:""}

        //  icon4={page?.acf?.contributors_icon_4?.sizes?.large?page.acf.contributors_icon_4:""}

        teammembern1={page.acf.about_us_team_member_name_1}
        teammembern2={page.acf.about_us_team_member_name_2}
        teammembern3={page.acf.about_us_team_member_name_3}
        teammembern4={page.acf.about_us_team_member_name_4}
        teammembern5={page.acf.about_us_team_member_name_5}
        teammembern6={page.acf.about_us_team_member_name_6}
        teammembern7={page.acf.about_us_team_member_name_7}
        teammembern8={page.acf.about_us_team_member_name_8}

        teammemberp1={page.acf.about_us_team_member_position_1}
        teammemberp2={page.acf.about_us_team_member_position_2}
        teammemberp3={page.acf.about_us_team_member_position_3}
        teammemberp4={page.acf.about_us_team_member_position_4}
        teammemberp5={page.acf.about_us_team_member_position_5}
        teammemberp6={page.acf.about_us_team_member_position_6}
        teammemberp7={page.acf.about_us_team_member_position_7}
        teammemberp8={page.acf.about_us_team_member_position_8}

        teammemberd1={page.acf.about_us_team_member_description_1}
        teammemberd2={page.acf.about_us_team_member_description_2}
        teammemberd3={page.acf.about_us_team_member_description_3}
        teammemberd4={page.acf.about_us_team_member_description_4}
        teammemberd5={page.acf.about_us_team_member_description_5}
        teammemberd6={page.acf.about_us_team_member_description_6}
        teammemberd7={page.acf.about_us_team_member_description_7}
        teammemberd8={page.acf.about_us_team_member_description_8}

      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const pageInfo = await getPage(419, locale);
    const footerInfo = await getPost(772, locale);


    return {
    props: { page: pageInfo, footer: footerInfo },
  };
};

