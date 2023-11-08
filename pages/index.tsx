import Layout from "@/components/layout";
import Intro from "@/components/intro";
import Trust from "@/components/trust";
import Trajectory from "@/components/trajectory";
import Culture from "@/components/culture";
import Testimonials from "@/components/testimonials";
import Plans from "@/components/plans";
import HowToParticipate from "@/components/how-to-participate";
import Faqs from "@/components/faqs";
import Sponsors from "@/components/sponsors";
import Calendar from "@/components/calendar-events";
import ListBlog from "@/components/list-blog";
import { getAllPost, getAllEvents, getPage } from "@/lib/api";
import { GetStaticProps } from "next";
import Contributors from "@/components/contributors";

export default function Home({posts, eventsList, page}) {

  return (
    
    <Layout>
      <Intro 
      title={page.acf.intro_title} 
      text={page.acf.intro_text}
      />

      <Trust 
        title={page.acf.trust_title} 
        item1={page.acf.trust_icon_1.sizes.thumbnail} 
        item2={page.acf.trust_icon_2.sizes.thumbnail} 
        item3={page.acf.trust_icon_3.sizes.thumbnail} 
        item4={page.acf.trust_icon_4.sizes.thumbnail} 
        item1text={page.acf.trust_icon_text_1} 
        item2text={page.acf.trust_icon_text_2}
        item3text={page.acf.trust_icon_text_3}
        item4text={page.acf.trust_icon_text_4}      

      />

      <Trajectory
       title={page.acf.trajectory_title}
       text={page.acf.trajectory_text} 
       image={page.acf.trajectory_image.sizes.large}  
       />

      <HowToParticipate 
      title1={page.acf.participate_title_1}
      title2={page.acf.participate_title_2}
      title3={page.acf.participate_title_3}

      text1={page.acf.participate_text_1}
      text2={page.acf.participate_text_2}
      text3={page.acf.participate_text_2}
       /> 

      <Culture 
      title={page.acf.culture_title}
      text={page.acf.culture_text}
      item1={page.acf.culture_list_item_1}
      item2={page.acf.culture_list_item_2}
      item3={page.acf.culture_list_item_3}
      item4={page.acf.culture_list_item_4}
      
      />
      <Testimonials 

      text={page.acf.testimonials_text}
      message1={page.acf.testimonials_user_message_1}
      name1={page.acf.testimonials_user_name_1}
      location1={page.acf.testimonials_user_location_1}

      />
      <Plans
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

      />
      <Faqs  
      text={page.acf.faqs_text}

      question1={page.acf.faqs_question_1}
      answer1={page.acf.faqs_answer_1}

      question2={page.acf.faqs_question_2}
      answer2={page.acf.faqs_answer_2}

      question3={page.acf.faqs_question_3}
      answer3={page.acf.faqs_answer_3}

      question4={page.acf.faqs_question_4}
      answer4={page.acf.faqs_answer_4}

      question5={page.acf.faqs_question_5}
      answer5={page.acf.faqs_answer_5}

      question6={page.acf.faqs_question_6}
      answer6={page.acf.faqs_answer_6}
      
      />
      <Sponsors 
      text={page.acf.sponsors_text}
      icon1={page.acf.sponsors_Icon_1.sizes.thumbnail}
      icon2={page.acf.sponsors_Icon_2.sizes.thumbnail}
      icon3={page.acf.sponsors_Icon_3.sizes.thumbnail}
      icon4={page.acf.sponsors_Icon_4.sizes.thumbnail}
      texticon1={page.acf.sponsors_icon_text_1}
      texticon2={page.acf.sponsors_icon_text_2}
      texticon3={page.acf.sponsors_icon_text_3}
      texticon4={page.acf.sponsors_icon_text_4}
      />
      <div className=" p-5 bg-accent-2 py-20">
      <Calendar  text={page.acf.event_text} 
      events={eventsList} 
      showAll={false}/>
      </div>
      
      <div className="bg-white sm:py-32">
        <ListBlog  text={page.acf.blog_text}  posts={posts} showAll={false}/>
      </div>


      <Contributors

      title={page.acf.contributors_title}
      text={page.acf.contributors_text}
      icon1={page.acf.contributors_icon_1.sizes.thumbnail}
      icontext1={page.acf.contributors_icon_text_1}
      icon2={page.acf.contributors_icon_2.sizes.thumbnail}
      icontext2={page.acf.contributors_icon_text_2}
      icon3={page.acf.contributors_icon_3.sizes.thumbnail}
      icontext3={page.acf.contributors_icon_text_3}
      icon4={page.acf.contributors_icon_4.sizes.thumbnail}
      icontext4={page.acf.contributors_icon_text_4}
      icon5={page.acf.contributors_icon_5.sizes.thumbnail}
      icontext5={page.acf.contributors_icon_text_5}
      icon6={page.acf.contributors_icon_6.sizes.thumbnail}
      icontext6={page.acf.contributors_icon_text_6}
      />



    </Layout>
    

    
   
  )
}


export const getStaticProps: GetStaticProps = async ({locale}) => {
  const allPostsData = await getAllPost(locale)
  const eventsList = await getAllEvents(locale) 
  const pageInfo = await getPage(11,locale) 

  return {
      props: {posts: allPostsData, eventsList: eventsList, page: pageInfo}
  }
}

