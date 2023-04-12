
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const store = createContext();
const Data = (props) => {

   const [data, SetData] = useState([{
        id: 0,
        category : "sports",
        title : "Gain observability intoyour application behaviour",

        image : "https://img.freepik.com/free-vector/big-data-center-server-room-rack-engineering-process-teamwork-computer-technology-cloud-storage_39422-1032.jpg?w=740&t=st=1681288814~exp=1681289414~hmac=74b6d4eb25e373be07b9a74a3167c45fd48508519cb777c2e3d565279ae6bc1c",
    },
    {
        id: 1,
        category : "bollywood",
        title : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, accusantium",
        image : "https://img.freepik.com/free-vector/programmers-develop-program-platforms-cross-platform-programming-cross-platform-development-structure-concept-white-background-bright-vibrant-violet-isolated-illustration_335657-330.jpg?w=740&t=st=1681290763~exp=1681291363~hmac=4245568e64dc92943380cab0068ba0860666b453c97ca9cce32b4265b043e291",
      

    },
    {
        id: 2,
        category : "fitness",
        title : "Lorem ipsum dolor sit ame Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
        image : "https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149364434.jpg?w=740&t=st=1681291127~exp=1681291727~hmac=7fa9df69961f42e7e305d88f4e34d847fd63e430654a4214e4a6bdfbfb2725f1",
        content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus numquam quis enim cupiditate quas pariatur nobis qui sapiente totam repellendus sequi facere, nisi a perspiciatis maiores quidem cumque. Ratione, iure numquam quis perferendis consequatur incidunt facilis debitis laudantium ipsum et ducimus asperiores accusantium iusto. Consequatur et a voluptate aut tenetur.",
        date : "Nov/2022"
    },
    {
        id: 3,
        category : "sports",
        title : "IND vs AUS 1st T20I: Cameron Green, Matthew Wade spoil Hardik Pandya’s party",
        image : "https://as2.ftcdn.net/v2/jpg/05/15/14/13/1000_F_515141369_O3nuQwXz8YhqBymOHhSOCrLX3Q1mRagE.jpg",
       
    },
    {
        id: 4,
        category : "sports",
        title : "It’s not finished for me: Manika Batra vows to return stronger at National Games after CWG failure",
        image : "https://images.mid-day.com/images/images/2022/aug/manika-thirteen-aug_d.jpg",
        content : "After the highs of the 2018 Commonwealth Games and Asiad, Manika Batra’s career took a nosedive following the Birmingham CWG debacle but the ace Indian paddler has vowed to make a strong return at the National Games before heading to the World Championships this month. Batra was one of India’s biggest stars in 2018, clinching four medals including the women’s singles and team golds at the CWG. She also went on to bag the mixed doubles bronze at the Asian Games later that year. However at the Birmingham Games last month, she looked out of sorts and returned empty-handed. “Of course, I was sad and upset when I lost my matches in CWG but I always tell myself this is not the end of the world,” Batra, who is here for the National Games, told reporters during a virtual interaction. “2018 was really an amazing year for me. This time, I played best before the CWG. I did really well in the World Tours, beat good players,” the top-ranked Indian said. “I think I played my best in CWG but every player has ups and down in their lives. It’s not finished for me just because I didn’t get a medal at the CWG,” she added. Batra said she has been working hard to rectify her mistakes. “I’ve to keep working hard and bounce back. I’ve worked a lot on my mistakes and my coach has been my sparring partner. We have some big tournaments coming up and next year like the Asian Games.”",
        date : "Sept 20,2022"
    },
    {
        id: 5,
        category : "technology",
        title : "Carlsen showing appreciation for Praggnanandhaa at end of draw showed he enjoyed the game and it was a mark of respect, says GM Srinath Narayanan",
        image : "https://pbs.twimg.com/media/Fbz2jyQVQAA9PAA?format=jpg&name=large",
        content : "A clap and a thumbs-up was what R Praggnanandhaa earned from World Champion Magnus Carlsen after their latest meeting ended in a draw in round eight of the Julius Baer Cup on Tuesday. The match was yet another salvo in a growing cluster of contests between the two spanning multiple tournaments and different sets of situations.  Carlsen is in the middle of multiple wars at the moment. On one hand, the World Champion refuses to defend his crown due to a variety of reasons – mere months after a marathon battle against Ian Nepomniachtchi which he won 7.5-3.5 (the score may seem lopsided, but the battle between the two was anything but).  On the other hand, Carlsen retired for the second consecutive time against USA’s 19-year-old Grand Master Hans Niemann this week. The insinuation has been that the American has either found a way to cheat without getting caught or has earned his Norwegian counterpart’s ire for his chequered past as a chess cheat in online tournaments.",
        date : "Sept 18,2022"
    },
    {
        id: 6,
        category : "technology",
        title : <h2>Cautch Waves with an adventure guide</h2>,
        image : "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/swiss-alps.jpg",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis ipsa dolorum atque, iure cupiditate eveniet fuga, quae ex totam maiores maxime sequi assumenda similique labore aperiam soluta perspiciatis enim quia architecto praesentium! Tenetur, numquam. Adipisci, quasi, tempora unde labore explicabo, cupiditate dicta omnis temporibus qui iure error molestiae hic aperiam aliquam distinctio doloribus. Impedit laboriosam ipsam hic consequatur minima soluta molestiae rerum qui culpa dignissimos ex sit ea placeat inventore voluptatum dolorum provident laudantium, mollitia maxime. Corrupti necessitatibus reprehenderit veritatis repellat, ea quas molestiae excepturi ad delectus veniam amet eligendi possimus quod, cumque corporis accusamus? Quidem quia optio blanditiis!",
        date : "Nov/2022"
    },
    {
        id: 7,
        category : "technology",
        title : <h3>Cautch Waves with an adventure guide</h3>,
        image : "https://i.pinimg.com/originals/ba/6c/6f/ba6c6f1291b1643378878eb41fef94c7.jpg",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis ipsa dolorum atque, iure cupiditate eveniet fuga, quae ex totam maiores maxime sequi assumenda similique labore aperiam soluta perspiciatis enim quia architecto praesentium! Tenetur, numquam. Adipisci, quasi, tempora unde labore explicabo, cupiditate dicta omnis temporibus qui iure error molestiae hic aperiam aliquam distinctio doloribus. Impedit laboriosam ipsam hic consequatur minima soluta molestiae rerum qui culpa dignissimos ex sit ea placeat inventore voluptatum dolorum provident laudantium, mollitia maxime. Corrupti necessitatibus reprehenderit veritatis repellat, ea quas molestiae excepturi ad delectus veniam amet eligendi possimus quod, cumque corporis accusamus? Quidem quia optio blanditiis!",
        date : "Nov/2022"
    },
    {
        id: 8,
        category : 'Home',
        title : <h3>Compatability</h3>,
        image : "https://img.freepik.com/free-photo/3d-render-100-years-celebration-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-8498.jpg?size=626&ext=jpg&uid=R98393770&ga=GA1.2.884875184.1680527527&semt=ais",
       
    },
    {
        id: 9,
        category : "Home",
        title : <h3>5x Faster</h3>,
        image : "https://cdn-icons-png.flaticon.com/512/1015/1015397.png?w=740&t=st=1681228390~exp=1681228990~hmac=77a1a4e32fdd421d2dc07929b85ac56dc5f626a140f33832e1128f64c6635690",
     
    },
    {
        id: 10,
        category : "technology",
        title : <h4>Better Coverage</h4>,
        image : "https://cdn-icons-png.flaticon.com/512/1089/1089190.png?w=740&t=st=1681229235~exp=1681229835~hmac=1c9dd40e516a43e7289d3b372e813afb69cfc9029aeef3e5fe1c51bb86c656ca",
        
    },
    {
        id: 11,
        category : "technology",
        title : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odio praesentium.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjVGTrvgj9xjOb1ILWah1oi_bctAt9bwK_cmCudTzIilIjGalzDRBxL9wmJ7onbXfmU8&usqp=CAU",
        content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam fuga alias deleniti, inventore modi aliquid culpa voluptatem saepe magni beatae earum dolorem atque quis temporibus neque ipsa dolore corporis laborum harum natus! Facilis delectus asperiores, non, vel rerum sunt dolores doloribus itaque quae iure cum! Pariatur fuga nam totam optio quibusdam soluta dignissimos doloremque maxime iste dolores ipsum assumenda ipsam, quis debitis porro sunt praesentium perspiciatis explicabo quas atque ad, eum, magnam cupiditate. At totam asperiores quaerat odio minus animi eaque, voluptates recusandae, unde facilis enim. Eius reprehenderit alias possimus ipsam facilis sint maiores reiciendis sit ea voluptatum sed fugiat veritatis, perspiciatis magnam nihil distinctio aliquid earum quia nemo minima dolor sunt beatae, nesciunt fuga. Eum blanditiis rem cum, quis odio voluptatum id consequatur et delectus dolores maxime aliquam fuga aperiam ratione odit nihil vitae non voluptates, porro repudiandae voluptatem sit unde suscipit? Facere vitae dicta maiores a eligendi",
        date : "Nov/2022"   },
    {
        id: 12,
        category : "technology",
        title : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odio praesentium.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLr22dpIIYmWMaFwhJ4lw-DabiX9h-yYzqQnRsJYxVSRSLaz-OBaz8uxgh-JAO2vOOnY&usqp=CAU",
        content :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam fuga alias deleniti, inventore modi aliquid culpa voluptatem saepe magni beatae earum dolorem atque quis temporibus neque ipsa dolore corporis laborum harum natus! Facilis delectus asperiores, non, vel rerum sunt dolores doloribus itaque quae iure cum! Pariatur fuga nam totam optio quibusdam soluta dignissimos doloremque maxime iste dolores ipsum assumenda ipsam, quis debitis porro sunt praesentium perspiciatis explicabo quas atque ad, eum, magnam cupiditate. At totam asperiores quaerat odio minus animi eaque, voluptates recusandae, unde facilis enim. Eius reprehenderit alias possimus ipsam facilis sint maiores reiciendis sit ea voluptatum sed fugiat veritatis, perspiciatis magnam nihil distinctio aliquid earum quia nemo minima dolor sunt beatae, nesciunt fuga. Eum blanditiis rem cum, quis odio voluptatum id consequatur et delectus dolores maxime aliquam fuga aperiam ratione odit nihil vitae non voluptates, porro repudiandae voluptatem sit unde suscipit? Facere vitae dicta maiores a eligendi",
        date : "Nov/2022"
    },
    {
        id: 13,
        category : "Api",
        title : "Too Many Moving Parts",
        image : "https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149377877.jpg?size=626&ext=jpg&uid=R98393770&ga=GA1.2.884875184.1680527527&semt=sph",
        content : "Understand Complex API intractions is diffcult",
      
    },
    {
        id: 14,
        category : "technology",
        title : "Change==chaos",
        image : "https://img.freepik.com/free-vector/application-programming-interface-concept-illustration_114360-9145.jpg?w=740&t=st=1681212271~exp=1681212871~hmac=a07732aa2b361e0314fc26ec8d529e66c35e138f93d3dae604fbed2d2ffc464b",
        content : "Not Knowing the impact of a change to production brings chaos",
        
    },
    {
        id: 15,
        category : "technology",
        title : "Vegan chocolate modaks to sweeten your Ganesh Chaturthi celebrations",
        image : "https://img.freepik.com/free-vector/job-hunt-concept-illustration_114360-446.jpg",
        content : " ",
    },
    {
        id: 16,
        category : "technology",
        title : "Diminishing commitment to testing",
        image : "https://img.freepik.com/free-vector/job-hunt-concept-illustration_114360-446.jpg",
        content : "Testing Cannot be solely used for ensuring reliability"
    },
    {
        id: 17,
        category : "technology",
        title : "Reliability",
        image : "https://img.freepik.com/free-psd/light-bulb-idea-generation-concept-color-year-2023-3d-illustration_47987-13904.jpg?w=740&t=st=1681222884~exp=1681223484~hmac=ec713e0d7c9d33090e884dc89cf4bf404f9c28f9662e1ba6e817fdfced9cdb5f",
       
    },
    {
        id: 18,
        category : "technology",
        title :"Lorem ipsum dolor sit amet.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmm1X6NM_YvwuOUnEQzl7Y0eu2U3_60ZX5YJni3eNeiylf4tIogKTbMF1EVeaAhYZVWc&usqp=CAU",
       
    },
    {
        id: 19,
        category : "technology",
        title : "Consistency",
        image : "https://img.freepik.com/free-vector/realistic-science-background_23-2148493539.jpg?w=740&t=st=1681223213~exp=1681223813~hmac=65b9e15f93585f8ba1e5b2bee72c11407e6e018f56dd03b39c6c0ed0dd72ea0f",
       
    },
    {
        id: 20,
        category : "technology",
        title : "Velocity",
        image : "https://img.freepik.com/free-photo/computer_1205-717.jpg?1&w=740&t=st=1681221925~exp=1681222525~hmac=7736bf4185f4977db05b1a3e84f2c6b71361a9c80d8595bf3303d2b44d6eb543",
        
    },

   
])

  return (
    <div>
        <store.Provider value={[data,SetData]}>
            { props.children }
        </store.Provider>
    </div>
  )
}

export default Data