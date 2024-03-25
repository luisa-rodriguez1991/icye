import Layout from "@/components/layout";
import {getAllPost, getAllEvents, getPage, getPost} from "@/lib/api";
import { GetStaticProps } from "next";
/*
import Contributors from "@/components/contributors";
*/
import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Contributors = dynamic(() => import('@/components/contributors'))
const Sponsors = dynamic(() => import('@/components/sponsors'))
const HowToParticipate = dynamic(() => import('@/components/how-to-participate'))
const Intro = dynamic(() => import('@/components/intro'))
const Trust = dynamic(() => import('@/components/trust'))
const Trajectory = dynamic(() => import('@/components/trajectory'))
const Culture = dynamic(() => import('@/components/culture'))
const Testimonials = dynamic(() => import('@/components/testimonials'))
const Plans = dynamic(() => import('@/components/plans'))


export default function Home({ posts, eventsList, page, footer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <Layout footerInfo={footer} openForm={open} onOpenForm={setOpen}>

        <Head>
            <title>ICYE Colombia</title>
            <link rel="canonical" href="https://www.icyecolombia.com" />
            <link rel="alternate" hrefLang="es" href="https://www.icyecolombia.com/es" />
            <link rel="alternate" hrefLang="en" href="https://www.icyecolombia.com/en" />
        </Head>
      <Intro onOpenForm={setOpen} text={page.acf.intro_text} />

      <Trust
        title={page.acf.trust_title}
        item1={page.acf.trust_icon_1}
        item2={page.acf.trust_icon_2}
        item3={page.acf.trust_icon_3}
        item4={page.acf.trust_icon_4}
        item1text={page.acf.trust_icon_text_1}
        item2text={page.acf.trust_icon_text_2}
        item3text={page.acf.trust_icon_text_3}
        item4text={page.acf.trust_icon_text_4}
      />

      <Trajectory
        title={page.acf.trajectory_title}
        text={page.acf.trajectory_text}
        image={page.acf.trajectory_image}
      />

      <HowToParticipate
        title1={page.acf.participate_title_1}
        title2={page.acf.participate_title_2}
        title3={page.acf.participate_title_3}
        text1={page.acf.participate_text_1}
        text2={page.acf.participate_text_2}
        text3={page.acf.participate_text_3}
      />

      <Culture
        onOpenForm={setOpen}
        title={page.acf.culture_title}
        text={page.acf.culture_text}

        img={page.acf.culture_img}

        item1={page.acf.culture_list_item_1}
        textitem1={page.acf.culture_list_item_text_1}

        item2={page.acf.culture_list_item_2}
        textitem2={page.acf.culture_list_item_text_2}

        item3={page.acf.culture_list_item_3}
        textitem3={page.acf.culture_list_item_text_3}

        item4={page.acf.culture_list_item_4}
        textitem4={page.acf.culture_list_item_text_4}

        item5={page.acf.culture_list_item_5}
        textitem5={page.acf.culture_list_item_text_5}

        item6={page.acf.culture_list_item_6}
        textitem6={page.acf.culture_list_item_text_6}

        item7={page.acf.culture_list_item_7}
        textitem7={page.acf.culture_list_item_text_7}
        
        item8={page.acf.culture_list_item_8}
        textitem8={page.acf.culture_list_item_text_8}

        item9={page.acf.culture_list_item_9}
        textitem9={page.acf.culture_list_item_text_9}
      />
      <Testimonials
        image1={page.acf.testimonials_img_user_1}
        text={page.acf.testimonials_text}
        message1={page.acf.testimonials_user_message_1}
        name1={page.acf.testimonials_user_name_1}
        location1={page.acf.testimonials_user_location_1}
        image2={page.acf.testimonials_img_user_2}
        message2={page.acf.testimonials_user_message_2}
        name2={page.acf.testimonials_user_name_2}
        location2={page.acf.testimonials_user_location_2}
        image3={page.acf.testimonials_img_user_3.sizes.large}
        message3={page.acf.testimonials_user_message_3}
        name3={page.acf.testimonials_user_name_3}
        location3={page.acf.testimonials_user_location_3}
        image4={page.acf.testimonials_img_user_4.sizes.large}
        message4={page.acf.testimonials_user_message_4}
        name4={page.acf.testimonials_user_name_4}
        location4={page.acf.testimonials_user_location_4}
        image5={page.acf.testimonials_img_user_5.sizes.large}
        message5={page.acf.testimonials_user_message_5}
        name5={page.acf.testimonials_user_name_5}
        location5={page.acf.testimonials_user_location_5}
        image6={page.acf.testimonials_img_user_6.sizes.large}
        message6={page.acf.testimonials_user_message_6}
        name6={page.acf.testimonials_user_name_6}
        location6={page.acf.testimonials_user_location_6}
        image7={page.acf.testimonials_img_user_7.sizes.large}
        message7={page.acf.testimonials_user_message_7}
        name7={page.acf.testimonials_user_name_7}
        location7={page.acf.testimonials_user_location_7}
        image8={page.acf.testimonials_img_user_8.sizes.large}
        message8={page.acf.testimonials_user_message_8}
        name8={page.acf.testimonials_user_name_8}
        location8={page.acf.testimonials_user_location_8}
        image9={page.acf.testimonials_img_user_9.sizes.large}
        message9={page.acf.testimonials_user_message_9}
        name9={page.acf.testimonials_user_name_9}
        location9={page.acf.testimonials_user_location_9}
        image10={page.acf.testimonials_img_user_10.sizes.large}
        message10={page.acf.testimonials_user_message_10}
        name10={page.acf.testimonials_user_name_10}
        location10={page.acf.testimonials_user_location_10}
      />
      <Plans
        onOpenForm={setOpen}
        text={page.acf.programs_text}
        title1={page.acf.Programs_title_1}
        price1={page.acf.program_price_1}
        cyantext1={page.acf.program_cyan_text_1}
        item1={page.acf.program_list_1_item_1}
        item2={page.acf.program_list_1_item_2}
        item3={page.acf.program_list_1_item_3}
        item4={page.acf.program_list_1_item_4}
        item5={page.acf.program_list_1_item_5}
        item6={page.acf.program_list_1_item_6}
        item7={page.acf.program_list_1_item_7}
        item8={page.acf.program_list_1_item_8}
        item9={page.acf.program_list_1_item_9}
        item10={page.acf.program_list_1_item_10}
        item11={page.acf.program_list_1_item_11}
        title2={page.acf.Programs_title_2}
        price2={page.acf.program_price_2}
        cyantext2={page.acf.program_cyan_text_2}
        list2item1={page.acf.program_list_2_item_1}
        list2item2={page.acf.program_list_2_item_2}
        list2item3={page.acf.program_list_2_item_3}
        list2item4={page.acf.program_list_2_item_4}
        list2item5={page.acf.program_list_2_item_5}
        list2item6={page.acf.program_list_2_item_6}
        list2item7={page.acf.program_list_2_item_7}
        list2item8={page.acf.program_list_2_item_8}
        list2item9={page.acf.program_list_2_item_9}
        list2item10={page.acf.program_list_2_item_10}
        list2item11={page.acf.program_list_2_item_11}
        title3={page.acf.Programs_title_3}
        price3={page.acf.program_price_3}
        cyantext3={page.acf.program_cyan_text_3}
        list3item1={page.acf.program_list_3_item_1}
        list3item2={page.acf.program_list_3_item_2}
        list3item3={page.acf.program_list_3_item_3}
        list3item4={page.acf.program_list_3_item_4}
        list3item5={page.acf.program_list_3_item_5}
        list3item6={page.acf.program_list_3_item_6}
        list3item7={page.acf.program_list_3_item_7}
        list3item8={page.acf.program_list_3_item_8}
        list3item9={page.acf.program_list_3_item_9}
        list3item10={page.acf.program_list_3_item_10}
        list3item11={page.acf.program_list_3_item_11}
        title4={page.acf.Programs_title_4}
        price4={page.acf.program_price_4}
        cyantext4={page.acf.program_cyan_text_4}
        list4item1={page.acf.program_list_4_item_1}
        list4item2={page.acf.program_list_4_item_2}
        list4item3={page.acf.program_list_4_item_3}
        list4item4={page.acf.program_list_4_item_4}
        list4item5={page.acf.program_list_4_item_5}
        list4item6={page.acf.program_list_4_item_6}
        list4item7={page.acf.program_list_4_item_7}
        list4item8={page.acf.program_list_4_item_8}
        list4item9={page.acf.program_list_4_item_9}
        list4item10={page.acf.program_list_4_item_10}
        list4item11={page.acf.program_list_4_item_11}
        pdf4={page.acf.program_pdf_4}
      />

        <Contributors
            title={page.acf.contributors_title}
            text={page.acf.contributors_text}
            icon1={page?.acf?.contributors_icon_1?page.acf.contributors_icon_1:""}
            icon2={page?.acf?.contributors_icon_2?page.acf.contributors_icon_2:""}
            icon3={page?.acf?.contributors_icon_3?page.acf.contributors_icon_3:""}
            icon4={page?.acf?.contributors_icon_4?.sizes?.large?page.acf.contributors_icon_4:""}
            icontext1={page.acf.contributors_icon_text_1}
            icontext2={page.acf.contributors_icon_text_2}
            icontext3={page.acf.contributors_icon_text_3}
            icontext4={page.acf.contributors_icon_text_4}


            // aqui esta mi ejemplo Image
        />

      <Sponsors
        text={page.acf.sponsors_text}
        icon1={page.acf.sponsors_Icon_1}
        icon2={page.acf.sponsors_Icon_2}
        icon3={page.acf.sponsors_Icon_3}
        icon4={page.acf.sponsors_Icon_4}
        texticon1={page.acf.sponsors_icon_text_1}
        texticon2={page.acf.sponsors_icon_text_2}
        texticon3={page.acf.sponsors_icon_text_3}
        texticon4={page.acf.sponsors_icon_text_4}
      />
        


    {/*  <div className=" px-6 bg-white py-24">
        <Calendar
          text={page.acf.event_text}
          events={eventsList}
          showAll={false}
        />
      </div>

      <div className="bg-white sm:py-32 md:py-0 lg:py-8">
        <ListBlog text={page.acf.blog_text} posts={posts} showAll={false} />
      </div>*/}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPostsData = await getAllPost(locale);
  const eventsList = await getAllEvents(locale);
  const pageInfo = await getPage(11, locale);
  const footerInfo = await getPost(772, locale);


  return {
    props: { posts: allPostsData, eventsList: eventsList, page: pageInfo, footer:footerInfo },
  };
};
