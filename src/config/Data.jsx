
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const store = createContext();
const Data = (props) => {

   const [data, SetData] = useState([{
        id: 0,
        category : "sports",
        title : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, earum",

        image : "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
        
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, in reiciendis, veniam expedita a veritatis velit asperiores hic beatae, tenetur consequuntur? Cum dignissimos adipisci aspernatur obcaecati asperiores deleniti nostrum numquam maiores illum nesciunt delectus repellendus nihil dolores soluta itaque reprehenderit voluptatem quod explicabo magni blanditiis, unde autem ullam. Vero facere pariatur tenetur, tempore molestias debitis atque aut blanditiis deserunt beatae veritatis corporis maxime magni in earum totam nisi expedita at asperiores. Dignissimos eveniet vitae vero illo soluta atque labore quod magnam voluptatibus. A excepturi consequuntur voluptates neque illo veniam sapiente aliquid eius quidem reiciendis. Obcaecati cumque incidunt eos nam velit",
        date: "Nov/2022",
    },
    {
        id: 1,
        category : "bollywood",
        title : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, accusantium",
        image : "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio totam dignissimos consectetur! Eum, est. Iste explicabo, reprehenderit vitae nihil minus excepturi aliquid vel itaque laboriosam magnam quod. Provident accusantium dolores quibusdam repudiandae!",
        date : "Nov/2022"

    },
    {
        id: 2,
        category : "fitness",
        title : "Lorem ipsum dolor sit ame Lorem ipsum dolor sit ametLorem ipsum dolor sit amet",
        image : "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
        content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus numquam quis enim cupiditate quas pariatur nobis qui sapiente totam repellendus sequi facere, nisi a perspiciatis maiores quidem cumque. Ratione, iure numquam quis perferendis consequatur incidunt facilis debitis laudantium ipsum et ducimus asperiores accusantium iusto. Consequatur et a voluptate aut tenetur.",
        date : "Nov/2022"
    },
    {
        id: 3,
        category : "sports",
        title : "IND vs AUS 1st T20I: Cameron Green, Matthew Wade spoil Hardik Pandya’s party",
        image : "https://images.indianexpress.com/2022/09/AUS-IND-3.jpg?resize=450,250",
        content : "Rohit Sharma and Aaron Finch promised entertainment and aggression before the match. And the jampacked crowd at IS Bindra PCA Stadium was provided both as Australia overhauled a score of 208 with four balls to spare to beat India by four wickets in the first of three T20I.  Matthew Wade, who played a vital role in his team’s T20 World Cup semi-final win over Pakistan in Dubai last year, showed why he is so valuable for his team in the game’s shortest format.  With 64 needed in 35 balls, Australia were second favourites in the match, but the 62-run stand for the sixth wicket between Wade and debutant Tim David turned the tide in favour of the visitors. Wade remained unbeaten on 45 off 21 balls",
        date : "Sept 21,2022"
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
        title : <h3>Cautch Waves with an adventure guide</h3>,
        image : "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/swiss-alps.jpg",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis ipsa dolorum atque, iure cupiditate eveniet fuga, quae ex totam maiores maxime sequi assumenda similique labore aperiam soluta perspiciatis enim quia architecto praesentium! Tenetur, numquam. Adipisci, quasi, tempora unde labore explicabo, cupiditate dicta omnis temporibus qui iure error molestiae hic aperiam aliquam distinctio doloribus. Impedit laboriosam ipsam hic consequatur minima soluta molestiae rerum qui culpa dignissimos ex sit ea placeat inventore voluptatum dolorum provident laudantium, mollitia maxime. Corrupti necessitatibus reprehenderit veritatis repellat, ea quas molestiae excepturi ad delectus veniam amet eligendi possimus quod, cumque corporis accusamus? Quidem quia optio blanditiis!",
        date : "Nov/2022"
    },
    {
        id: 9,
        category : "Home",
        title : <h3>Cautch Waves with an adventure guide</h3>,
        image : "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/09/swiss-alps.jpg",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officiis ipsa dolorum atque, iure cupiditate eveniet fuga, quae ex totam maiores maxime sequi assumenda similique labore aperiam soluta perspiciatis enim quia architecto praesentium! Tenetur, numquam. Adipisci, quasi, tempora unde labore explicabo, cupiditate dicta omnis temporibus qui iure error molestiae hic aperiam aliquam distinctio doloribus. Impedit laboriosam ipsam hic consequatur minima soluta molestiae rerum qui culpa dignissimos ex sit ea placeat inventore voluptatum dolorum provident laudantium, mollitia maxime. Corrupti necessitatibus reprehenderit veritatis repellat, ea quas molestiae excepturi ad delectus veniam amet eligendi possimus quod, cumque corporis accusamus? Quidem quia optio blanditiis!",
        date : "Nov/2022"
    },
    {
        id: 10,
        category : "technology",
        title : "Assembly elections 2022 | BJP spent ₹340 crore on campaigns",
        image : "https://img.medscapestatic.com/thumbnail_library/022620_CoronaVirusReferenceCenter_bnr_800x450.jpg",
        content : "Queen Elizabeth II was laid to rest on September 19 at the King George VI Memorial Chapel. The funeral for the late monarch saw leaders from all over the world travelling to the UK to pay their last respects to Britain's longest-serving monarch who passed away aged 96 on September 8. All members of the royal family also bid their final farewell. Following the private burial service that was attended only by the members of the family of the late monarch, a poignant tribute was paid to Queen Elizabeth on the social media account of the royal family as Buckingham Palace shared an unseen vintage photo of the late monarch from 1971. In the picture, the Queen can be seen holding a walking stick while wearing a green coat and patterned head scarf.  The photograph captures the Queen at Balmoral, her residence in Scotland, in 1971, according to Sky News. The photo was taken by Patrick Lichfield, who is the 5th Earl of Lichfield. Along with the photo, the Palace shared a poignant message that said, May flights of Angels sing thee to thy rest. In loving memory of Her Majesty The Queen. 1926 - 2022  in reference to Shakespeare's Hamlet ",
        date : "19 Sept, 2022"
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
        category : "technology",
        title : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odio praesentium.",
        image : "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180801155144/Stone-Chariot-at-Vittala-Temple-Hampi-Karnataka.jpg",
        content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam fuga alias deleniti, inventore modi aliquid culpa voluptatem saepe magni beatae earum dolorem atque quis temporibus neque ipsa dolore corporis laborum harum natus! Facilis delectus asperiores, non, vel rerum sunt dolores doloribus itaque quae iure cum! Pariatur fuga nam totam optio quibusdam soluta dignissimos doloremque maxime iste dolores ipsum assumenda ipsam, quis debitis porro sunt praesentium perspiciatis explicabo quas atque ad, eum, magnam cupiditate. At totam asperiores quaerat odio minus animi eaque, voluptates recusandae, unde facilis enim. Eius reprehenderit alias possimus ipsam facilis sint maiores reiciendis sit ea voluptatum sed fugiat veritatis, perspiciatis magnam nihil distinctio aliquid earum quia nemo minima dolor sunt beatae, nesciunt fuga. Eum blanditiis rem cum, quis odio voluptatum id consequatur et delectus dolores maxime aliquam fuga aperiam ratione odit nihil vitae non voluptates, porro repudiandae voluptatem sit unde suscipit? Facere vitae dicta maiores a eligendi",
        date : "Nov/2022"
    },
    {
        id: 14,
        category : "technology",
        title : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odio praesentium.",
        // image : "https://media.istockphoto.com/id/949586288/photo/zodiac-signs-in-the-sky.jpg?s=612x612&w=0&k=20&c=x8g8oVd8-B27017mAQ_ALjdIXtepiAdU43UftIuZ6Ag=",
        content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam fuga alias deleniti, inventore modi aliquid culpa voluptatem saepe magni beatae earum dolorem atque quis temporibus neque ipsa dolore corporis laborum harum natus! Facilis delectus asperiores, non, vel rerum sunt dolores doloribus itaque quae iure cum! Pariatur fuga nam totam optio quibusdam soluta dignissimos doloremque maxime iste dolores ipsum assumenda ipsam, quis debitis porro sunt praesentium perspiciatis explicabo quas atque ad, eum, magnam cupiditate. At totam asperiores quaerat odio minus animi eaque, voluptates recusandae, unde facilis enim. Eius reprehenderit alias possimus ipsam facilis sint maiores reiciendis sit ea voluptatum sed fugiat veritatis, perspiciatis magnam nihil distinctio aliquid earum quia nemo minima dolor sunt beatae, nesciunt fuga. Eum blanditiis rem cum, quis odio voluptatum id consequatur et delectus dolores maxime aliquam fuga aperiam ratione odit nihil vitae non voluptates, porro repudiandae voluptatem sit unde suscipit? Facere vitae dicta maiores a eligendi",
        date : "Nov/2022"
    },
    {
        id: 14,
        category : "technology",
        title : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odio praesentium.",
        // image : "https://media.istockphoto.com/id/949586288/photo/zodiac-signs-in-the-sky.jpg?s=612x612&w=0&k=20&c=x8g8oVd8-B27017mAQ_ALjdIXtepiAdU43UftIuZ6Ag=",
        content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae aliquam fuga alias deleniti, inventore modi aliquid culpa voluptatem saepe magni beatae earum dolorem atque quis temporibus neque ipsa dolore corporis laborum harum natus! Facilis delectus asperiores, non, vel rerum sunt dolores doloribus itaque quae iure cum! Pariatur fuga nam totam optio quibusdam soluta dignissimos doloremque maxime iste dolores ipsum assumenda ipsam, quis debitis porro sunt praesentium perspiciatis explicabo quas atque ad, eum, magnam cupiditate. At totam asperiores quaerat odio minus animi eaque, voluptates recusandae, unde facilis enim. Eius reprehenderit alias possimus ipsam facilis sint maiores reiciendis sit ea voluptatum sed fugiat veritatis, perspiciatis magnam nihil distinctio aliquid earum quia nemo minima dolor sunt beatae, nesciunt fuga. Eum blanditiis rem cum, quis odio voluptatum id consequatur et delectus dolores maxime aliquam fuga aperiam ratione odit nihil vitae non voluptates, porro repudiandae voluptatem sit unde suscipit? Facere vitae dicta maiores a eligendi",
        date : "Nov/2022"
    },
    {
        id: 15,
        category : "technology",
        title : "Vegan chocolate modaks to sweeten your Ganesh Chaturthi celebrations",
        image : "https://images.indianexpress.com/2022/08/modak-2.jpg",
        content : "Queen Elizabeth II was laid to rest on September 19 at the King George VI Memorial Chapel. The funeral for the late monarch saw leaders from all over the world travelling to the UK to pay their last respects to Britain's longest-serving monarch who passed away aged 96 on September 8. All members of the royal family also bid their final farewell. Following the private burial service that was attended only by the members of the family of the late monarch, a poignant tribute was paid to Queen Elizabeth on the social media account of the royal family as Buckingham Palace shared an unseen vintage photo of the late monarch from 1971. In the picture, the Queen can be seen holding a walking stick while wearing a green coat and patterned head scarf.  The photograph captures the Queen at Balmoral, her residence in Scotland, in 1971, according to Sky News. The photo was taken by Patrick Lichfield, who is the 5th Earl of Lichfield. Along with the photo, the Palace shared a poignant message that said, May flights of Angels sing thee to thy rest. In loving memory of Her Majesty The Queen. 1926 - 2022  in reference to Shakespeare's Hamlet ",
        date : "Nov/2022"
    },
    {
        id: 16,
        category : "technology",
        title : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, provident",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmm1X6NM_YvwuOUnEQzl7Y0eu2U3_60ZX5YJni3eNeiylf4tIogKTbMF1EVeaAhYZVWc&usqp=CAU",
        content : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum provident ipsam quas corrupti porro, molestias dolorum nostrum rerum libero vero quis officia pariatur odit molestiae dolor ea unde modi accusamus eius. Eaque velit quaerat unde amet expedita necessitatibus impedit beatae possimus modi nam excepturi quidem harum voluptatibus qui cupiditate et nemo quam, distinctio, neque delectus minima consectetur fuga libero? Rerum cupiditate debitis numquam veniam facere hic itaque. Nam quo voluptatem labore doloribus eligendi! Ipsam voluptas veritatis ratione magni, omnis quidem praesentium expedita quis voluptates. Doloremque explicabo, eaque quidem deleniti quibusdam nulla quam! Labore ex molestias, explicabo assumenda quasi ea tempore.",
        date : "Nov/2022"
    },
    {
        id: 17,
        category : "technology",
        title : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNnnKQW-DFwSNgN4VTw7hBJS06SSxrjz0Ro6dzFt7-_YPYjFR7WBn3GSCe3-t1p1vjy0&usqp=CAU",
        content : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, quaerat. Magnam autem eligendi unde laudantium minus distinctio rem explicabo sint amet iure tempore illo dicta voluptatum porro mollitia earum quod eius esse obcaecati, ratione nobis illum labore. Ratione et nostrum perferendis explicabo accusamus voluptate vel aut, voluptatem sed aliquam nesciunt error laudantium voluptatum saepe minus quaerat iste quibusdam ducimus veritatis. Eum quisquam mollitia accusamus optio tempora nam esse quod blanditiis nihil cupiditate molestias impedit, deserunt quas! Consectetur blanditiis expedita quas deserunt? Non omnis ratione exercitationem eos molestiae, libero dolorem, hic laboriosam veritatis quo nostrum aspernatur error recusandae eligendi perspiciatis consequatur?",
        date : "Nov/2022"
    },
    {
        id: 18,
        category : "technology",
        title :"Lorem ipsum dolor sit amet.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmm1X6NM_YvwuOUnEQzl7Y0eu2U3_60ZX5YJni3eNeiylf4tIogKTbMF1EVeaAhYZVWc&usqp=CAU",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias numquam mollitia dicta quaerat. Fuga, aut temporibus atque omnis dignissimos recusandae quis error consequatur. Error similique velit tempore molestiae, voluptatum eum corporis ipsa modi illum enim labore illo quia consequatur, provident dolorem? Unde voluptatibus rem maxime quo sint blanditiis eius soluta ipsam eum illum facere temporibus dicta, a architecto aperiam atque reiciendis vero nesciunt. Nam accusantium eum, dolores libero consequuntur placeat aliquid impedit eaque? Facilis repudiandae repellat mollitia eum sint asperiores sunt omnis doloremque. Consequuntur quae maiores doloremque incidunt, animi deserunt optio, magnam modi assumenda natus qui repudiandae esse a!",
        date : "Nov/2022"
    },
    {
        id: 19,
        category : "technology",
        title : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iste.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZuvzHZe68MBU78D7IhwDcbzFGmdxI2XjRw&usqp=CAU",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis tempora debitis quae non voluptate animi cumque! Repudiandae ipsa ipsam hic quae, reprehenderit ad obcaecati perferendis dolor quibusdam earum minima maxime blanditiis sint repellendus tempora quis? Praesentium sunt, reiciendis voluptatibus eos hic esse libero nemo veritatis voluptatem iusto assumenda labore vero nulla rerum nisi rem adipisci harum ullam ipsam, eius asperiores ducimus? Facilis provident, molestias quia dignissimos sapiente velit nam inventore excepturi saepe modi. Eos sit voluptatibus perferendis, dolore aspernatur cupiditate magni obcaecati cum debitis beatae, quas itaque nemo eaque reprehenderit dolorum a maiores, deleniti voluptate atque dolor earum delectus!",
        date : "Nov/2022"
    },
    {
        id: 20,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://images.ctfassets.net/61zr8ugl0z48/shzfswhjWPNgdHDBZvGYy/4ae110783d65c74113e937de49f738bc/iStock-1069272512.jpg?w=3000&q=50",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },

    {
        id: 21,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-Information-Technology-1.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"

    },
    {
     
        id: 22,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://greatpeopleinside.com/wp-content/uploads/2017/05/HR-GR8-technology.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },
    {
     
        id: 23,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://thumbs.dreamstime.com/z/startup-business-entrepreneurship-problem-solving-young-ai-programmers-software-developers-team-brainstorming-programming-112416068.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 24,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://images.indianexpress.com/2022/08/modak-2.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 25,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-Information-Technology-1.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 26,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://images.ctfassets.net/61zr8ugl0z48/shzfswhjWPNgdHDBZvGYy/4ae110783d65c74113e937de49f738bc/iStock-1069272512.jpg?w=3000&q=50",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },
    {
     
        id: 27,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://thumbs.dreamstime.com/z/startup-business-entrepreneurship-problem-solving-young-ai-programmers-software-developers-team-brainstorming-programming-112416068.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },
    {
     
        id: 30,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfa4YmWprBBwmVQCRgLV4WnnCXGe0kLCMsA&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },
    {
     
        id: 31,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_SG1lJB8ma8Maxb8h-ic-7YLC8dJRFalPQ&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 32,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xdZxN8S6jTtPXrWNkzGvDZtxk4V-ZYeLbQ&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 33,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfa4YmWprBBwmVQCRgLV4WnnCXGe0kLCMsA&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 34,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5NME_dxK1bR4uTLFvo7TOjwhQgxE601omA&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 35,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL_SG1lJB8ma8Maxb8h-ic-7YLC8dJRFalPQ&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 36,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xdZxN8S6jTtPXrWNkzGvDZtxk4V-ZYeLbQ&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 37,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5NME_dxK1bR4uTLFvo7TOjwhQgxE601omA&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },
    {
     
        id: 40,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://static.toiimg.com/thumb/msid-77884092,width-1200,height-900,resizemode-4/.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },
    {
    
     
        id: 42,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwotk_-VaAj9pmo38lbYI_TVmNXAKnM73q1A-KXZ5VI3WhB2sFaUKl095zKXGI9xk2S8&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 43,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7W3Ff4Bi3M5stOL6tSAKZMcLIeVi9vuPsTcbLuVYvQSXibIN8dQAiwJWMk_XfSw-caJc&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 44,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 45,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7W3Ff4Bi3M5stOL6tSAKZMcLIeVi9vuPsTcbLuVYvQSXibIN8dQAiwJWMk_XfSw-caJc&usqp=CAU",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },{
     
        id: 46,
        category : "technology",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
    },
    {
     
        id: 50,
        category : "Food",
        title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, impedit.",
        image : "https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg",
        content :"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minus odio rem quos sunt dicta amet, repellat asperiores inventore corrupti ex, eaque vero distinctio molestias possimus culpa suscipit? Culpa repellat vel, necessitatibus, sapiente doloribus aspernatur ad placeat et itaque, aliquam molestias odio aut suscipit accusamus error quia soluta obcaecati veritatis odit enim facilis dolores. Laborum distinctio reiciendis alias voluptatum quaerat sit soluta neque vitae, velit aspernatur! Consequatur incidunt velit temporibus illo, similique aspernatur ad tenetur unde laudantium dolorum deserunt qui maiores. Deleniti assumenda reiciendis ad. Tenetur rem dolorum ut odio? Repudiandae, mollitia sequi? Accusantium ipsa cum perferendis placeat? Repudiandae, facere.",
        date : "Nov/2022"
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