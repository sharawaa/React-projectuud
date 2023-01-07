import Card from "./Card";
import Nav from "./Nav";
const data = [
  {
    title: "User Interface (UI) Design",
    image:
      "https://syspree.com/wp-content/uploads/2022/09/What-is-an-interface-for-users.webp",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UI",
  },
  {
    title: "What is UI/UX Sprint Design experience",
    image:
      "https://www.techtic.com/wp-content/uploads/2019/10/design-sprint-process-for-product-design-development.png",
    description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    category: "UX",
  },
  {
    title: "What is UI/UX Sprint Design experience",
    image:
      "https://www.techtic.com/wp-content/uploads/2019/10/design-sprint-process-for-product-design-development.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "PD",
  },
  {
    title: "What Is UX Design and Why Does It Matter?",
    image:
      "https://www.resolutesoftware.com/assets/imgs/posts/what-is-ux-design.jpg",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UX",
  },

  {
    title: "What is Product Design? Salaries, Skills, and More",
    image: "http://shorturl.at/CQR78",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
     category: "PD",
  },

  {
    title: "What does a product designer (UX/UI) do?",
    image:
      "https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/08/176_What_does_a_product_designer_do__image_blog.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
       category: "PD",
  },
  {
    title: "What will happen to Figma and Adobe XD after the takeover?",
    image: "https://cdn.uiuxtrend.com/wp-content/uploads/Figma-logo.jpg",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "NW",
  },
  {
    title: "How Cognitive Science and Artificial Intelligence Are Intertwined",
    image:
      "https://uxmag.com/wp-content/uploads/2022/10/big-How-Cognitive-Science-and-Artificial-Intelligence-Are-Intertwined.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
      category: "UX",
  },
  {
    title: "Apple Maps vs Google Maps",
    image:
      "https://uxmag.com/wp-content/uploads/2022/12/Apple-Maps-vs-Google-Maps-big.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
       category: "UX",
  },
  {
    title: "10 Intangibles of Design",
    image:
      "https://uxmag.com/wp-content/uploads/2022/12/1_2HLhlkReuCI5nzW9hX3BIA.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
       category: "UX",
  },
  {
    title: "The Future of Digital Product Design",
    image: "https://fuselabcreative.com/wp-content/uploads/2022/03/gd.png",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "PD",
  },
  {
    title: "Дэлхийд өрсөлдөх ур чадварыг эзэмшээрэй",
    image: "https://www.nestacademy.mn/assets/team_img_sm.webp",
    description:
      "Шилдэг инженерүүдийн боловсруулсан тусгай хөтөлбөрөөр олон улсад хүлээн зөвшөөрөгдөх технологийн мэргэжилтнүүдийг бэлтгэх академи",
    category: "TUT",
  },
  {
    title: "Технологийн салбарт шинэ өнгө нэмэхээр Pinecone мэндэллээ",
    image: "https://content.ikon.mn/news/2022/9/27/ahrmi8_pine2_x974.jpg",
    description:
      "Nest Academy 2018 онд олон улсад үнэлэгдэх нэг түмэн монгол инженерийг бэлтгэх зорилттойгоор байгуулагдсан ба өдгөө 50 гаруй инженертэй өнөр хамт олон болжээ.  ",
    category: "TUT",
  },
  {
    title: "What is Product Design?",
    image:
      "http://www.sharda.ac.in/blog/wp-content/uploads/2017/08/What-do-you-Learn-while-Studying-1024x538.jpg",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "PD",
  },
  {
    title: "10 Best Product Design Colleges in World",
    image:
      "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/11/23172318/Design-Colleges-in-Canada.jpg",
    description: "Lorem20",
    category: "NW",
  },
  {
    title: "Webby Awards 2022",
    image: "https://www.dexigner.com/images/news/xxw/33933.jpg",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "NW",
  },
  {
    title:
      "The Faces Behind Typefaces: Deep Dive into Legacies of Pioneers of Type Design",
    image: "https://www.dexigner.com/images/news/xxw/33941.jpg",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "NW",
  },
  {
    title: "PAD London 2022",
    image: "https://www.dexigner.com/images/news/xxw/33942.jpg",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "NW",
  },
  {
    title:
      "The End of Screen-based Interfaces and What It Means for Businesses ",
    image:
      "https://studio.uxpincdn.com/studio/wp-content/uploads/2021/05/10-Useful-UI-Design-Articles.png.webp",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UI",
  },
  {
    title:
      "5 Cognitive Psychology Theories that Contribute to the Quality of UX Design",
    image:
      "https://uiuxmagazine.com/wp-content/uploads/2021/06/psychology-in-UX-design.jpg",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UX",
  },
  {
    title: "A Simple Method to Analyze Task Flow",
    image:
      "https://uxmag.com/wp-content/uploads/2021/04/AnalyzeTaskFlow_LeadBanner4-2048x1066.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UX",
  },
  {
    title: "Your UI Isn't A Disney Movie",
    image: "https://wallpapercave.com/wp/wp7151246.jpg",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UI",
  },
  {
    title: "Your UI Isn't A Disney Movie",
    image: "https://euriskomobility.com/wp-content/uploads/2020/02/ux-ui-design-2020.png",
    description: "If you bought an Apple MacBook with an ill-fated butterfly keyboard and ended up having to replace eit",
    category: "UI",
  },
  {
    title:
      "Spotify's New Feature 'Playlist in a Bottle' Lets You Create a Time Capsule of Music",
    image:
      "https://www.cnet.com/a/img/resize/d0d9e0693c503b963200c7ae402790b579f21f84/hub/2022/04/15/151a2ca9-aa6c-4bc4-a7a6-f7d4fbc5a8de/spotify-logo-2022-148.jpg?auto=webp&fit=crop&height=675&width=1200",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "NW",
  },

  {
    title: "Хөвсгөл нуур",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__480.jpg",
    description:
      "If you bought an Apple MacBook with an ill-fated butterfly keyboard and ended up having to replace either individual keycaps or the whole keyboard, you may be eligible to claim part of a $50 million settlement reached after a class-action lawsuit. ",
    category: "UX",
  },

  {
    title:
      "MacBook owners have two months to claim up to $395 over butterfly keyboard woes",
    image:
      "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22046468/vpavic_4291_20201113_0428.0.jpg",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "NW",
  },
  {
    title: "What Is Zero UI?",
    image:
      "https://euriskomobility.com/wp-content/uploads/2020/02/ux-ui-design-2020.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "ART",
  },
  {
    title: "Components of Zero UI",
    image:
      "https://euriskomobility.com/wp-content/uploads/2019/03/web-development-lebanon-careers.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "ART",
  },
  {
    title: "How Will Zero Ul Affect Web Design?",
    image:
      "https://img.freepik.com/free-vector/design-team-concept-illustration_114360-4531.jpg?w=1480&t=st=1672885958~exp=1672886558~hmac=9170a229c7ddcaa0567e4e4f0a4b08b4c91086e1174d5177f6418b6780f8bd17",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "ART",
  },
  {
    title: "Here Are the 10 Best Web Development Trends for 2023",
    image:
      "https://www.turing.com/blog/wp-content/uploads/2022/05/Web-development-trends-2022.jpg",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "NW",
  },
  {
    title: "Product design",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXqIdvxkrkV1z30hDrg_e6Eft_TsLp_dumg&usqp=CAU",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "PD",
  },

  {
    title: "What will happen to Figma and Adobe XD after the takeover?",
    image: "https://cdn.uiuxtrend.com/wp-content/uploads/Penpot.jpg",
    description:
      "Explore what will happen to Figma and Adobe XD after the $20 billion acquisition. Will Adobe kills off either Figma or Adobe XD?",
    category: "NW",
  },
  {
    title:
      "Clubhouse UX review: What is Clubhouse and its impact to the industry",
    image:
      "https://cdn.uiuxtrend.com/wp-content/uploads/Clubhouse-UX-Review-1.jpg",
    description:
      "What's the hype about Clubhouse? What is Clubhouse and how to use it? In this article, we review the Clubhouse app, its UX, and its impact.",
    category: "NW",
  },
  {
    title: "UX is the Top Brand Differentiator in 2020",
    image:
      "https://cdn.uiuxtrend.com/wp-content/uploads/branding-differentiator.jpg",
    description:
      "Marketers think that UX is the top brand differentiator in Bynder & OnBrand's State of Branding Report 2020. Get some insights into branding and marketing here.",
    category: "NW",
  },
  {
    title: "2023: Top UI UX Trends you need to know",
    image:
      "https://aelaschool.com/wp-content/uploads/2022/08/artigoQualadiferencaentreUXeUIDesign_01aaa69067bf7dd2a32f9fba1df84b12_2000.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UI",
  },
  {
    title: "11 Inspirational Design Articles to Elevate Your Thinking",
    image:
      "https://cdn.bfldr.com/F97BMUF5/at/pur1da-7lime8-e1ovka/placeholder-blog.png?format=png&auto=webp&width=1600",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UI",
  },
  {
    title: "Web Layout Best Practices: 12 Timeless UI Patterns Analyzed",
    image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1108741/retina_800x320_image_0_-_2020-10-09T214729.825-ce7b6cb6e5a1468466c694c05ddb4c29-329be609f45601140687fdba21663f87.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "UI",
  },
  {
    title: "Laws of UX / Aesthetic-Usability Effect",
    image: "https://lawsofux.com/aesthetic-usability-effect/social.png",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
  },
  {
    title: "Laws of UX / doherty threshold",
    image: "https://lawsofux.com/doherty-threshold/social.png",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
  },
  {
    title: "Laws of UX / Fittss Law",
    image: "https://lawsofux.com/fittss-law/social.png",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
  },

  {
    title: "VS code shortcut",
    image:
      "https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/KeyboardReferenceSheet.png",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "TUT",
  },
  {
    title: "Stack Overflow: 74% of developers are open to new jobs",
    image:
      "https://www.developer-tech.com/wp-content/uploads/sites/3/2022/12/stack-overflow-job-insights-developer-career-study-research-report.jpeg",
      description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "ART",
  },
  {
    title: "How to receive great design feedback",
    image: "https://miro.medium.com/max/1400/0*UM5HSVn18_VSmCfO",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "TUT",
  },
  {
    title: "How to use ChatGPT in product design: 8 practical examples",
    image: "https://miro.medium.com/max/1400/0*0pFSdP0kXS1tup_E",
    description:
      "ChatGPT is an advanced chatbot created by OpenAI, a company that created GPT-3. Users can ask ChatGPT open-ended questions about any topic and receive responses generated specifically for the question.",
    category: "TUT",
  },
  {
    title: "What UX Designers Should Learn in 2023",
    image: "https://miro.medium.com/max/1400/0*auQRL11EvEKyaaKX.webp",
    description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
    category: "TUT",
  },
];

export default function MainBody() {
  return (

  <div style={{marginTop:"100px"}}>
   <section><Nav /></section>

      <section style={{ display: "flex", flexWrap: "wrap", alignContent:"space-between" }}>
        {data.map((uni) => (
          <Card
            title={uni.title}
            image={uni.image}
            description={uni.description}
          />
        ))}
      </section>
  </div>
  );
}
