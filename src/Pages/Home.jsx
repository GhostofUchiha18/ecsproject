import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // You can keep this if you need pagination styles, but it's not necessary anymore
import { Pagination } from "swiper/modules";

function Home() {
  return (
    <>
      <section>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]} // You can remove this if you don't want pagination behavior at all
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container mx-auto font-minion justify-center items-center px-4">
              <center>
                <img className="h-[800px]" src="./images/dan.jpg" alt="" />
              </center>

              <center>
                <p className="lg:ml-80 lg:mr-80 mt-4 sm:items-center">
                  Nepal, a small landlocked country nestled in the heart of the
                  Himalayas, is known for its unique and vibrant culture. With a
                  history spanning thousands of years, Nepal’s culture is a
                  beautiful blend of ancient traditions, religious diversity, and
                  ethnic variety.
                </p>
              </center>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto font-minion justify-center items-center px-4">
              <img className="h-[800px]" src="./images/dan.jpg" alt="" />
              <p>
                Nepal, a small landlocked country nestled in the heart of the
                Himalayas, is known for its unique and vibrant culture. With a
                history spanning thousands of years, Nepal’s culture is a
                beautiful blend of ancient traditions, religious diversity, and
                ethnic variety. From the towering peaks of Mount Everest to the
                bustling streets of Kathmandu, Nepal’s culture is as diverse as
                its landscape. Ethnic and Cultural Diversity Nepal is home to
                over 125 different ethnic groups, each with its own distinct
                language, traditions, and way of life. This incredible diversity
                is reflected in the country’s festivals, rituals, and day-to-day
                life. Some of the major ethnic groups in Nepal include the
                Sherpas, Newars, Tharus, Magars, and Tamangs, among many others.
                Each community brings its own unique cultural practices and
                beliefs to the rich tapestry of Nepalese culture. Nepal’s
                diversity is also reflected in its languages, with over 120
                languages spoken across the country. Nepali, the official
                language, serves as a unifying force, but many regions continue
                to speak their native dialects. This linguistic variety adds
                another layer of richness to the cultural fabric of Nepal.
                Religion: The Heart of Nepali Culture Religion plays a central
                role in the culture of Nepal. The country is predominantly
                Hindu, followed by a significant Buddhist population. In fact,
                Nepal is the birthplace of Lord Buddha, in Lumbini, making
                Buddhism an integral part of the nation’s heritage. Hinduism and
                Buddhism coexist harmoniously, with many religious practices and
                rituals shared between the two. Temples, stupas, and shrines are
                scattered throughout the country, serving as places of worship,
                reflection, and celebration. The Kathmandu Valley, in
                particular, is home to many UNESCO World Heritage Sites,
                showcasing the artistic and spiritual importance of these
                religions. One of the most significant religious festivals is
                Dashain, celebrated by Hindus to mark the victory of good over
                evil. During this time, families come together for rituals,
                feasts, and the exchange of blessings. Another important
                festival is Tihar, known as the Festival of Lights, where people
                decorate their homes with oil lamps and celebrate various
                deities and animals. Festivals: A Celebration of Life Nepal’s
                festivals are an expression of its vibrant culture. Each
                festival is deeply rooted in religious and cultural traditions,
                and they offer a glimpse into the everyday lives of the people.
                Some of the most prominent festivals in Nepal include: Buddha
                Jayanti: Celebrating the birth, enlightenment, and death
                anniversary of Lord Buddha, this festival is particularly
                significant in the Buddhist community. Indra Jatra: A festival
                celebrated in Kathmandu with chariot processions, traditional
                dances, and the display of the living goddess, Kumari. Holi: The
                festival of colors, celebrated in spring, is enjoyed by people
                of all ethnic and religious backgrounds, symbolizing unity and
                the triumph of good over evil. The communal aspect of these
                festivals strengthens social bonds and keeps cultural practices
                alive across generations. Traditional Arts and Crafts Nepal is
                renowned for its traditional arts and crafts, which have been
                passed down through generations. The intricate wood carvings,
                thangka paintings, and hand-woven textiles are just a few
                examples of the country’s artistic heritage. The Newar people,
                for instance, are famous for their architecture and
                craftsmanship, particularly in the Kathmandu Valley, where their
                wooden windows and temples are architectural marvels.
                Handicrafts, such as pottery, jewelry, and textiles, are made by
                skilled artisans using methods that have been honed over
                centuries. These crafts not only reflect the cultural and
                religious beliefs of the people but also play an important role
                in the economy, with many items being sold to tourists and
                exported abroad. Traditional Music and Dance Music and dance
                hold a special place in Nepali culture. Traditional Nepali music
                is diverse, with instruments like the madal (drum), sarangi
                (string instrument), and bansuri (flute) being central to many
                performances. Music is often intertwined with religious rituals,
                folk celebrations, and social events. Nepali folk dances, such
                as the Tamang Selo and the Maruni, are performed during
                festivals and special occasions. These dances are not only
                artistic expressions but also serve as a means of storytelling,
                passing on history, legends, and cultural values to younger
                generations. Cuisine: A Reflection of Nepal's Cultural Diversity
                Nepali cuisine is as diverse as its culture. The food is a
                delightful blend of flavors, influenced by the various ethnic
                communities and religious practices. Dal Bhat (lentils and
                rice), served with vegetables and pickles, is the staple food of
                Nepal and is enjoyed daily by most people. Other popular dishes
                include momo (dumplings), sel roti (fried rice doughnuts),
                chatamari (Nepali rice pancakes), and gundruk (fermented leafy
                greens). The diverse food culture reflects the mix of influences
                from neighboring India, Tibet, and China, creating a unique
                culinary experience. The Role of Nature in Culture Nature is
                deeply interwoven with the cultural and religious practices of
                the people in Nepal. The majestic Himalayas are considered
                sacred, with many of the peaks being worshipped by the
                indigenous communities. The sacred river Bagmati, which flows
                through Kathmandu, holds significant religious value for Hindus
                and Buddhists alike. Nepali culture emphasizes respect for
                nature, and many festivals and rituals are centered around
                agricultural cycles, such as planting and harvesting. The
                connection to nature is also reflected in the architecture, with
                temples, homes, and public spaces often designed to blend
                harmoniously with the surrounding landscape. Conclusion Nepal’s
                culture is a beautiful and complex tapestry woven from centuries
                of history, religion, and tradition. The country’s ethnic
                diversity, religious harmony, and respect for nature form the
                foundation of a unique cultural identity that continues to
                thrive in the modern world. Whether through its festivals, art,
                music, or cuisine, Nepal’s culture offers a glimpse into the
                heart and soul of this magnificent nation, where ancient
                traditions meet the ever-changing present.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Home;
