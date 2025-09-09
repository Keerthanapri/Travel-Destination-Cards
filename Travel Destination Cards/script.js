// Single-file logic moved to script.js (data embedded to avoid fetch/CORS)
const allDestinations = [
  {"name":"Taj Mahal","location":"Agra, India","region":"Asia","image":"https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg","description":"A UNESCO World Heritage site and symbol of love, built by Mughal emperor Shah Jahan.A white marble mausoleum in Agra, India, built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. Recognized as one of the New Seven Wonders of the World, it blends Persian, Islamic, and Indian architecture, and is a UNESCO World Heritage Site attracting millions of visitors annually."},
  {"name":"Great Wall of China","location":"China","region":"Asia","image":"https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/the-great-wall-of-china_optimized.jpg","description":"One of the world's most iconic structures, stretching over thousands of miles across northern China.A vast series of fortifications stretching over 21,000 km across northern China. Constructed over several dynasties, primarily to protect against invasions, it includes watchtowers, walls, and battlements. Today, it symbolizes Chinese strength and history and is one of the world’s most visited landmarks."},
  {"name":"Eiffel Tower","location":"Paris, France","region":"Europe","image":"https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg","description":"An iconic iron lattice tower built in 1889, symbol of Paris and France.Originally criticized, it is now celebrated for its architectural brilliance, offering observation decks with panoramic city views and a nightly light show."},
  {"name":"Colosseum","location":"Rome, Italy","region":"Europe","image":"https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg","description":"Ancient amphitheater in Rome, once home to gladiator contests and Roman spectacles.Located in Rome, Italy, this amphitheater dates back to 70–80 AD and once hosted gladiator contests, theatrical performances, and public spectacles. With capacity for over 50,000 spectators, it remains the largest ancient amphitheater ever built and a lasting symbol of Roman engineering."},
  {"name":"Statue of Liberty","location":"New York, USA","region":"North America","image":"https://media.cnn.com/api/v1/images/stellar/prod/141104114830-nyc-statue-of-liberty.jpg?q=w_1110,c_fill","description":"A gift from France to the USA, symbolizing freedom and democracy.Gifted by France in 1886, this colossal neoclassical sculpture in New York Harbor represents freedom and democracy. Designed by Frédéric Auguste Bartholdi, the statue’s torch and crown have become iconic symbols of America’s values and the immigrant dream."},
  {"name":"Machu Picchu","location":"Cusco Region, Peru","region":"South America","image":"https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg","description":"A 15th-century Inca citadel set high in the Andes Mountains.A 15th-century Inca citadel located high in Peru’s Andes Mountains. Abandoned during the Spanish conquest, it was rediscovered in 1911 by Hiram Bingham. Known for its sophisticated dry-stone construction, terraced fields, and sacred temples, it offers breathtaking views and deep cultural significance."},
  {"name":"Christ the Redeemer","location":"Rio de Janeiro, Brazil","region":"South America","image":"https://travel.usnews.com/images/Christ_the_Redeemer_Rio_Getty_Christian_Adams.jpg","description":"A giant Art Deco statue of Jesus Christ, overlooking Rio de Janeiro.A 30-meter tall Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, completed in 1931. Standing atop Mount Corcovado, it overlooks the city and symbolizes peace, Christianity, and unity. It is one of the New Seven Wonders of the World."},
  {"name":"Sydney Opera House","location":"Sydney, Australia","region":"Oceania","image":"https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_Sails.jpg","description":"Famous performing arts center with unique sail-like architecture.A UNESCO World Heritage Site in Australia, famous for its sail-like design by architect Jørn Utzon. Opened in 1973, it hosts opera, ballet, concerts, and theater performances. Its unique architecture and waterfront location make it one of the world’s most photographed buildings."},
  {"name":"Pyramids of Giza","location":"Giza, Egypt","region":"Africa","image":"https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg","description":"Ancient pyramids and tombs of Egyptian pharaohs, including the Great Pyramid of Khufu.The last surviving Wonder of the Ancient World, these monumental tombs were built around 2600 BC for Egyptian pharaohs. The Great Pyramid of Khufu, the largest, stands at 146 meters. They demonstrate extraordinary engineering skill and remain central to Egypt’s cultural identity."},
  {"name":"Burj Khalifa","location":"Dubai, UAE","region":"Asia","image":"https://www.burjkhalifa.ae/wp-content/uploads/2024/08/BURJ-KHALIFE-Hero-image-1-min-1.jpg","description":"The world's tallest building, standing at 828 meters in Dubai.The world’s tallest building at 828 meters, located in Dubai, UAE. Completed in 2010, it features residential, commercial, and hotel spaces. Its design is inspired by the Hymenocallis flower, and its observation decks offer unmatched views of Dubai’s skyline and desert."},
  {"name":"Angkor Wat","location":"Siem Reap, Cambodia","region":"Asia","image":"https://upload.wikimedia.org/wikipedia/commons/d/d4/20171126_Angkor_Wat_4712_DxO.jpg","description":"The largest religious monument in the world, built in the 12th century.A 12th-century temple complex in Cambodia, originally dedicated to Hindu god Vishnu and later transformed into a Buddhist site. It is the largest religious monument in the world, admired for its bas-reliefs, intricate carvings, and alignment with the rising sun."},
  {"name":"Mount Fuji","location":"Honshu, Japan","region":"Asia","image":"https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/07/29141532/Mount-Fuji-5-1600x900.jpg","description":"Japan's tallest peak and an active volcano, sacred in Japanese culture.Japan’s tallest peak at 3,776 meters, located on Honshu Island. An active stratovolcano, it is revered in Japanese culture and frequently depicted in art and literature. Climbing Mount Fuji is a spiritual journey for many, and it remains a symbol of Japan’s natural beauty."},
  {"name":"Santorini","location":"Greece","region":"Europe","image":"https://cdn2.paraty.es/demo14/images/ef7d8f6c8bff807","description":"A picturesque Greek island known for whitewashed houses and blue-domed churches.A volcanic island in Greece known for its dramatic cliffs, whitewashed houses, blue-domed churches, and sunsets in Oia. Formed by a volcanic eruption around 1600 BC, it combines rich history with stunning landscapes, making it one of the most romantic destinations in the world."},
  {"name":"Niagara Falls","location":"Canada/USA Border","region":"North America","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/3Falls_Niagara.jpg/1200px-3Falls_Niagara.jpg","description":"Massive waterfalls straddling the US-Canada border.A group of three waterfalls (Horseshoe, American, Bridal Veil) straddling the US-Canada border. With a flow rate of over 2,800 cubic meters per second, it is among the world’s most powerful waterfalls and a major hydroelectric source. Popular for boat tours like the “Maid of the Mist.”"},
  {"name":"Banff National Park","location":"Alberta, Canada","region":"North America","image":"https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg","description":"Canada’s first national park, famous for turquoise lakes and mountain scenery.Canada’s first national park, located in Alberta’s Rocky Mountains. Famous for turquoise lakes like Lake Louise, snow-capped peaks, and rich wildlife including bears and elk. It is a hub for hiking, skiing, and breathtaking alpine scenery."},
  {"name":"Petra","location":"Jordan","region":"Asia","image":"https://www.historyhit.com/app/uploads/bis-images/5160776/Petra-788x537.jpg?x96477","description":"An ancient city carved into rose-red cliffs, known as the 'Rose City'.Known as the “Rose City,” Petra in Jordan is an ancient city carved into pink sandstone cliffs by the Nabataeans around 300 BC. Its most famous structure, Al-Khazneh (The Treasury), features Hellenistic architecture. It served as a key trading hub and is now a UNESCO World Heritage Site."},
  {"name":"Grand Canyon","location":"Arizona, USA","region":"North America","image":"https://npf-prod.imgix.net/uploads/shutterstock_97706066_1.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=900&q=80&w=1600","description":"A massive canyon carved by the Colorado River, known for breathtaking views.A vast canyon in Arizona carved by the Colorado River over millions of years. Measuring 446 km long and up to 1,800 meters deep, it reveals billions of years of geological history. It is one of the most visited natural wonders in the US, known for breathtaking views and hiking trails."},
  {"name":"Serengeti National Park","location":"Tanzania","region":"Africa","image":"https://www.mgahinganationalpark.org/wp-content/uploads/2024/09/Serengeti-National-Park-1-1.jpg","description":"A wildlife sanctuary famous for the Great Migration of wildebeest and zebras.Located in Tanzania, the Serengeti is famous for the annual Great Migration of over a million wildebeest and zebras. It hosts diverse wildlife including lions, elephants, and cheetahs. Its endless plains and ecosystems make it one of the world’s premier safari destinations."},
  {"name":"Table Mountain","location":"Cape Town, South Africa","region":"Africa","image":"https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/200/2023/11/04111335/Untitled-design-21.png","description":"A flat-topped mountain offering panoramic views of Cape Town.A flat-topped mountain overlooking Cape Town, South Africa. Accessible by cable car or hiking, it offers panoramic views of the city, ocean, and Robben Island. It is part of a national park that preserves unique flora known as fynbos."},
  {"name":"Stonehenge","location":"Wiltshire, England","region":"Europe","image":"https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg","description":"A prehistoric monument of standing stones, shrouded in mystery.A prehistoric stone circle in Wiltshire, England, dating back to around 3000–2000 BC. The purpose remains mysterious, though it is believed to have been used for ceremonial, religious, or astronomical purposes. It is one of the most iconic ancient monuments in Europe."},
  {"name":"Acropolis of Athens","location":"Athens, Greece","region":"Europe","image":"https://upload.wikimedia.org/wikipedia/commons/e/e6/Classic_view_of_Acropolis.jpg","description":"An ancient citadel containing the Parthenon, a masterpiece of classical Greek architecture.A citadel on a rocky hill above Athens, Greece, containing ancient buildings of great significance, including the Parthenon. Built in the 5th century BC, it symbolizes democracy and classical Greek architecture. Today, it remains a UNESCO World Heritage Site."},
  {"name":"Chichen Itza","location":"Yucatán, Mexico","region":"North America","image":"https://upload.wikimedia.org/wikipedia/commons/5/51/Chichen_Itza_3.jpg","description":"A large pre-Columbian city built by the Maya people, home to the Temple of Kukulcán.A major Mayan city in Mexico’s Yucatán Peninsula, flourishing between the 9th–12th centuries. Its pyramid, El Castillo (Temple of Kukulcán), aligns with the equinox sun, creating a shadow illusion of a serpent. It highlights Mayan achievements in astronomy and architecture."},
  {"name":"Dubai Marina","location":"Dubai, UAE","region":"Asia","image":"https://media.cntravellerme.com/photos/651e778d76fee5623a1c6aa4/16:9/w_2560%2Cc_limit/827901014","description":"A man-made canal city with modern skyscrapers, luxury yachts, and vibrant nightlife.A man-made waterfront in Dubai, UAE, stretching 3 km along the Persian Gulf shoreline. Surrounded by modern skyscrapers, luxury yachts, and vibrant nightlife, it is one of Dubai’s most popular residential and leisure districts."},
  {"name":"Great Barrier Reef","location":"Queensland, Australia","region":"Oceania","image":"https://www.fitzroyisland.com/wp-content/uploads/2020/12/What-You-Need-to-Know-Before-Visiting-Australias-Great-Barrier-Reef.jpg","description":"The world's largest coral reef system, visible from space, rich in marine biodiversity.The largest coral reef system on Earth, stretching over 2,300 km off Queensland, Australia. Home to thousands of marine species, it is visible from space. A UNESCO World Heritage Site, it faces threats from climate change but remains a premier diving and snorkeling destination"},
  {"name":"Iguazu Falls","location":"Argentina/Brazil Border","region":"South America","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5stMnFQhgaMXzdYzRNL2d7elEugYAXCSYTw&s","description":"One of the largest and most impressive waterfall systems in the world.A spectacular system of 275 waterfalls on the border of Argentina and Brazil. The most impressive section, the “Devil’s Throat,” plunges 82 meters. Surrounded by lush rainforest, the falls are a UNESCO site and one of the most awe-inspiring natural wonders."},
  {"name":"Hagia Sophia","location":"Istanbul, Turkey","region":"Europe","image":"https://upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg","description":"A masterpiece of Byzantine architecture, once a church, then a mosque, now a museum.Located in Istanbul, Turkey, Hagia Sophia was built in 537 AD as a Byzantine cathedral, later converted into a mosque, then a museum, and again a mosque. Its massive dome, mosaics, and blend of Christian and Islamic architecture make it an unparalleled cultural landmark."},
  {"name":"Mount Everest Base Camp","location":"Nepal","region":"Asia","image":"https://api.expedreview.com/storage/album/blog/e29bf311-082a-48b8-aa27-91007be9666c/5557/everest-base-camp.jpeg","description":"A popular trekking destination offering views of the world’s highest mountain.Situated in Nepal at 5,364 meters, it is the starting point for climbers aiming to summit Mount Everest, the world’s highest peak. Trekkers reach the camp through a scenic Himalayan trail, experiencing breathtaking views and Sherpa culture."},
  {"name":"Mount Kilimanjaro","location":"Tanzania","region":"Africa","image":"https://upload.wikimedia.org/wikipedia/commons/9/91/Mount_Kilimanjaro.jpg","description":"Africa’s tallest mountain and a popular climbing destination.Africa’s tallest mountain at 5,895 meters, located in Tanzania. A dormant volcano with three cones, it offers climbers diverse landscapes, from rainforest to glaciers. Known as the “Roof of Africa,” it is a popular trekking destination."},
  {"name":"Sagrada Familia","location":"Barcelona, Spain","region":"Europe","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS34qaw3RjSBUnb0Dn54fpikAQuGbEOYhLg&s","description":"An unfinished basilica designed by Antoni Gaudí, blending Gothic and Art Nouveau styles.An unfinished basilica in Barcelona, Spain, designed by Antoni Gaudí. Construction began in 1882 and continues today, blending Gothic and Art Nouveau styles. It is a UNESCO site and one of the most visited monuments in Spain."},
  {"name":"Times Square","location":"New York, USA","region":"North America","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg","description":"A bustling commercial hub known for neon lights, Broadway shows, and New Year’s Eve celebrations.A bustling commercial and entertainment hub in New York City, famous for its neon billboards, Broadway theaters, and the annual New Year’s Eve Ball Drop. Often called “The Crossroads of the World,” it embodies NYC’s energy and culture."},
  {"name":"Yellowstone National Park","location":"Wyoming, USA","region":"North America","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMgjhEZoE3yysUX_QEEC-DNJ9Uoqd95OYaA&s","description":"The first national park in the world, known for geysers, hot springs, and wildlife.Established in 1872 as the world’s first national park, Yellowstone spans Wyoming, Montana, and Idaho. Known for geothermal features like Old Faithful geyser and Grand Prismatic Spring, it also shelters wildlife such as bison and bears."},
  {"name":"Alhambra","location":"Granada, Spain","region":"Europe","image":"https://i.natgeofe.com/n/bb36ca23-b3b2-4145-b46c-4689de640057/STOCK_MM10093_REDUX_h_00000221016864.jpg","description":"A palace and fortress complex showcasing Islamic architecture and gardens.A palace and fortress complex in Granada, Spain, built during the Nasrid Dynasty in the 13th century. Famed for its Islamic architecture, intricate tilework, and gardens, it is a UNESCO World Heritage Site and symbol of Andalusian history."},
  {"name":"Blue Lagoon","location":"Iceland","region":"Europe","image":"https://content.icelandtravel.is/wp-content/uploads/2019/03/1200px-Blue_Lagoon_Iceland_22360145156.jpg","description":"A geothermal spa with milky-blue waters, surrounded by lava fields.A geothermal spa in Iceland with milky-blue waters rich in silica and minerals. Formed by lava fields, the lagoon is renowned for its therapeutic properties and is one of Iceland’s most visited attractions."},
  {"name":"Cinque Terre","location":"Liguria, Italy","region":"Europe","image":"https://www.visitcinqueterre.eu/wp-content/uploads/2020/05/riomaggiore-banner.jpg","description":"A coastal area of five colorful fishing villages on the Italian Riviera.A rugged coastal area in Liguria, Italy, made up of five colorful fishing villages perched on cliffs. Known for terraced vineyards, hiking trails, and sea views, it is a UNESCO site and a favorite destination for photographers."},
  {"name":"Salar de Uyuni","location":"Bolivia","region":"South America","image":"https://5continentsproduction.com/wp-content/uploads/2017/09/salar-de-uyuni-bolivia.jpg","description":"The world’s largest salt flat, creating a mirror effect after rainfall.The world’s largest salt flat, located in Bolivia, covering 10,000 square km. After rainfall, it transforms into a natural mirror reflecting the sky, creating surreal landscapes. It is rich in lithium reserves and a major tourist attraction."},
  {"name":"Galápagos Islands","location":"Ecuador","region":"South America","image":"https://cdn.britannica.com/11/154211-050-FBEDB2C1/Bartolome-Island-Galapagos-Islands-Ecuador.jpg","description":"An archipelago known for unique wildlife and inspiration for Darwin’s theory of evolution.An Ecuadorian archipelago in the Pacific Ocean, known for unique wildlife like giant tortoises, marine iguanas, and blue-footed boobies. Charles Darwin’s study of the islands inspired his theory of evolution. They are a UNESCO World Heritage Site."},
  {"name":"Victoria Falls","location":"Zambia/Zimbabwe","region":"Africa","image":"https://i0.wp.com/brookebeyond.com/wp-content/uploads/2017/10/IMG_2166.jpg?ssl=1","description":"One of the world’s largest waterfalls, locally known as 'The Smoke That Thunders'.Located on the border of Zambia and Zimbabwe, it is one of the largest waterfalls in the world, with a width of 1,708 meters. Known locally as “The Smoke That Thunders,” it produces a massive spray visible from kilometers away."},
  {"name":"Bagan Temples","location":"Myanmar","region":"Asia","image":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/0e/03/28/sunrise-over-bagan.jpg?w=1200&h=700&s=1","description":"An ancient city with over 2,000 Buddhist temples, pagodas, and stupas.An ancient city in Myanmar with over 2,000 surviving Buddhist temples and pagodas built between the 9th and 13th centuries. The site is famous for its sunrise and hot-air balloon views, showcasing Myanmar’s rich cultural heritage."},
  {"name":"Louvre Museum","location":"Paris, France","region":"Europe","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3jsxnL2wcvoIS2O1qo16x3Dt1Skmc2ssFg&s","description":"The world’s largest art museum, home to the Mona Lisa and thousands of masterpieces.The world’s largest art museum, located in Paris, France. Originally a royal palace, it now houses over 35,000 works of art, including the Mona Lisa and Venus de Milo. Its iconic glass pyramid entrance is a modern landmark."},
  {"name":"Mount Rushmore","location":"South Dakota, USA","region":"North America","image":"https://cdn.britannica.com/18/76118-050-DAE6E651/Morning-light-Mount-Rushmore-National-Memorial-South.jpg","description":"A massive sculpture carved into granite, depicting four US presidents.A colossal sculpture carved into granite in South Dakota, USA, depicting Presidents George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln. Completed in 1941, it symbolizes American history and democracy."},
  {"name":"Maldives","location":"Indian Ocean","region":"Asia","image":"https://afar.brightspotcdn.com/dims4/default/5896a05/2147483647/strip/false/crop/3000x2247+0+0/resize/1486x1113!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg","description":"A tropical paradise of atolls and islands, famous for beaches and luxury resorts.A tropical island nation in the Indian Ocean, composed of over 1,000 coral islands. Known for white-sand beaches, luxury resorts, and rich marine life, it is a premier honeymoon and diving destination"},
  {"name":"Prague Castle","location":"Prague, Czech Republic","region":"Europe","image":"https://www.travelandleisure.com/thmb/8kdd3Y0uI2qSjm1-4vIwGDrqKGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prague-castle-czech-republic-PRACAS0302-25faba77a59f404aac2ea3579323dad2.jpg","description":"A historic castle complex dating back to the 9th century, overlooking Prague.A historic castle complex in the Czech Republic, dating back to the 9th century. Once home to kings and emperors, it now houses the Czech president. The site includes Gothic St. Vitus Cathedral and offers panoramic views of Prague."},
  {"name":"Great Sphinx of Giza","location":"Giza, Egypt","region":"Africa","image":"https://static.scientificamerican.com/sciam/cache/file/C2015DC2-3B05-4B02-B37E1DFB642662F4_source.jpg","description":"A colossal limestone statue with the body of a lion and the head of a pharaoh.A massive limestone statue in Egypt with the body of a lion and the head of a pharaoh, believed to represent Pharaoh Khafre. Built around 2500 BC, it stands near the Great Pyramids and remains a symbol of ancient Egyptian mystery."},
  {"name":"Hallstatt","location":"Austria","region":"Europe","image":"https://upload.wikimedia.org/wikipedia/commons/b/b0/Hallstatt_-_Zentrum_.JPG","description":"A picturesque lakeside village in the Austrian Alps.A picturesque village in Austria, located by a lake and surrounded by the Dachstein Alps. Known for its salt mining history, charming houses, and scenic beauty, it is one of Europe’s most photographed destinations."},
  {"name":"Jerusalem Old City","location":"Jerusalem, Israel","region":"Asia","image":"https://cdn.britannica.com/36/249436-050-9F9A7DA0/The-Temple-Mount-Western-Wall-Dome-of-the-Rock-mosque-old-town-of-Jerusalem-Israel.jpg","description":"A city sacred to Judaism, Christianity, and Islam, rich in history and heritage.A historic walled area in Jerusalem, sacred to Judaism, Christianity, and Islam. Divided into four quarters (Jewish, Christian, Muslim, and Armenian), it contains significant sites such as the Western Wall, Church of the Holy Sepulchre, and Dome of the Rock."},
  {"name":"Kremlin and Red Square","location":"Moscow, Russia","region":"Europe","image":"https://upload.wikimedia.org/wikipedia/commons/0/01/Moscow_July_2011-16.jpg","description":"A historic fortified complex and the heart of Russia’s political and cultural life.The political and cultural heart of Moscow, Russia. The Kremlin is a fortified complex with palaces, cathedrals, and government offices, while Red Square hosts St. Basil’s Cathedral, Lenin’s Mausoleum, and historic ceremonies."},
  {"name":"Leaning Tower of Pisa","location":"Pisa, Italy","region":"Europe","image":"https://images.unsplash.com/photo-1543429776-2782fc8e1acd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8","description":"A freestanding bell tower famous for its unintended tilt.A freestanding bell tower in Pisa, Italy, famous for its unintended tilt due to unstable foundation soil. Construction began in 1173 and took nearly 200 years. It remains one of the most recognized landmarks in the world."},
  {"name":"Mecca","location":"Saudi Arabia","region":"Asia","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCPg1rQ5JXdtzMQmf_L5xrveh6o5vZMDgxQ&s","description":"Islam’s holiest city, home to the Kaaba and destination for Hajj pilgrimage.Islam’s holiest city in Saudi Arabia, home to the Kaaba within the Masjid al-Haram mosque. Every year, millions of Muslims travel here for the Hajj pilgrimage, one of the Five Pillars of Islam."},
  {"name":"Uluru (Ayers Rock)","location":"Northern Territory, Australia","region":"Oceania","image":"https://upload.wikimedia.org/wikipedia/commons/c/c2/Uluru%2C_helicopter_view%2C_cropped.jpg","description":"A massive sandstone monolith sacred to indigenous Australians.A massive sandstone monolith in central Australia, sacred to the Anangu people. Rising 348 meters, it changes colors at sunrise and sunset. Uluru is a UNESCO World Heritage Site for both cultural and natural significance."},
  {"name":"Yosemite National Park","location":"California, USA","region":"North America","image":"https://i.natgeofe.com/n/f14f6c30-8d11-4e33-a5e9-05f1b50bdde3/yosemite-national-park-california.jpg","description":"A UNESCO site known for granite cliffs, waterfalls, and giant sequoias.A UNESCO-listed park in California, USA, known for granite cliffs like El Capitan and Half Dome, giant sequoias, and stunning waterfalls. It attracts millions of visitors for hiking, rock climbing, and natural beauty."},
  {"name":"Dubai Palm Jumeirah","location":"Dubai, UAE","region":"Asia","image":"https://shre.ae/wp-content/uploads/2022/12/Palm-Jumeirah-Views-Luxury-Sea-view-apartments-for-Sale-in-Dubai-Sobha-Seahaven.jpg","description":"A man-made island shaped like a palm tree, home to luxury resorts.An artificial island in Dubai shaped like a palm tree. Built using land reclamation, it is home to luxury resorts, shopping centers, and beaches. A modern engineering marvel visible from space."},
  {"name":"Edinburgh Castle","location":"Edinburgh, Scotland","region":"Europe","image":"https://cdn-imgix.headout.com/media/images/e87de52c14e5ed44c472de964beb21bf-25331-EdinburghCastle-GuidedwalkingtourwithFastTrackEntry---002.jpg","description":"A historic fortress overlooking the city of Edinburgh.A historic fortress in Scotland, built on Castle Rock, overlooking Edinburgh. It has served as a royal residence, military stronghold, and now a museum. It hosts the famous Edinburgh Military Tattoo festival."},
  {"name":"Sahara Desert","location":"North Africa","region":"Africa","image":"https://www.thoughtco.com/thmb/l0Ei2qSYEp6vtU6a1o0FtphhV4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SaharaDesert-58c1a5603df78c353c3d525d.jpg","description":"The largest hot desert in the world, stretching across several African countries.The largest hot desert in the world, spanning 9 million square km across North Africa. Characterized by sand dunes, rocky plateaus, and oases, it is home to nomadic cultures and extreme climate conditions."},
  {"name":"Everglades National Park","location":"Florida, USA","region":"North America","image":"https://cdn.britannica.com/92/130792-050-ED0EFC61/Everglades-National-Park-Florida.jpg","description":"A unique wetland ecosystem home to alligators, birds, and mangroves.A unique wetland ecosystem in Florida, USA, covering 1.5 million acres. Known as the “River of Grass,” it supports diverse wildlife including alligators, manatees, and rare bird species. It is a UNESCO World Heritage Site and biosphere reserve."}
];

// Application state
let currentList = [...allDestinations];
let currentIndex = 0;

// Elements
const container = document.getElementById('countries-container');
const emptyEl = document.getElementById('empty');
const searchInput = document.getElementById('search');
const regionFilter = document.getElementById('regionFilter');

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalLocation = document.getElementById('modal-location');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modalClose');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// --- Render cards ---
function displayCountries(list) {
  container.innerHTML = '';
  if (!list || list.length === 0) {
    emptyEl.style.display = 'block';
    return;
  } else {
    emptyEl.style.display = 'none';
  }

  currentList = list;

  list.forEach((place, idx) => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.innerHTML = `
      <img loading="lazy" src="${place.image}" alt="${escapeHtml(place.name)}" />
      <div class="card-body">
        <div>
          <h3>${escapeHtml(place.name)}</h3>
          <p style="font-size:0.95rem;color:#666;"><strong>Location:</strong> ${escapeHtml(place.location)}</p>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(idx));
    container.appendChild(card);
  });
}

// --- Modal functions ---
function openModal(index) {
  currentIndex = index;
  const place = currentList[currentIndex];
  if (!place) return;
  modalImage.src = place.image;
  modalTitle.textContent = place.name;
  modalLocation.textContent = `📍 ${place.location} • ${place.region}`;
  modalDescription.textContent = place.description;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  nextBtn.focus();
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
function showNext() {
  if (!currentList.length) return;
  currentIndex = (currentIndex + 1) % currentList.length;
  openModal(currentIndex);
}
function showPrev() {
  if (!currentList.length) return;
  currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
  openModal(currentIndex);
}

// --- Search & Filter ---
function applyFilters() {
  const search = (searchInput.value || '').trim().toLowerCase();
  const region = regionFilter.value;
  let filtered = allDestinations.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search);
    const matchesRegion = region === 'All' ? true : p.region === region;
    return matchesSearch && matchesRegion;
  });
  displayCountries(filtered);
}

// --- Utilities ---
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

// --- Events ---
searchInput.addEventListener('input', applyFilters);
regionFilter.addEventListener('change', applyFilters);

modalClose.addEventListener('click', closeModal);
prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

// close by clicking outside modal-content
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// keyboard nav: left/right for prev/next, Esc to close
window.addEventListener('keydown', (e) => {
  if (modal.classList.contains('open')) {
    if (e.key === 'ArrowRight') showNext();
    else if (e.key === 'ArrowLeft') showPrev();
    else if (e.key === 'Escape') closeModal();
  }
});

// initial render
displayCountries(allDestinations);
