import React, { Component } from 'react'
import './App.css';
import NewsItem from './NewsItem'
export class News extends Component {
    articles=[{
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Janet Lee",
        "title": "Eating heart-healthy foods also helps lower your dementia risk - The Washington Post",
        "description": "Research suggests that two specific dietary approaches may help stave off cognitive decline.",
        "url": "https://www.washingtonpost.com/wellness/2023/09/18/diet-brain-health-preventing-alzheimers/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YAQT5XZYSD3G3CUDBSATUDQH54.jpg&w=1440",
        "publishedAt": "2023-09-18T18:10:30Z",
        "content": "Comment on this story\r\nComment\r\nConsumer Reports has no financial relationship with any advertisers on this site.\r\nDoing puzzles, playing memory-boosting games, taking classes and reading are activit… [+8535 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Michael Wayland",
        "title": "Stellantis could close 18 facilities under UAW deal — here are the full details of its latest offer - CNBC",
        "description": "The company made the latest offer Thursday, before the start of targeted strikes by the United Auto Workers Union against Stellantis, Ford and GM.",
        "url": "https://www.cnbc.com/2023/09/18/uaw-strike-stellantis-could-close-18-facilities-under-deal.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107301949-1694908758398-gettyimages-1668659646-DET1253.jpeg?v=1695060955&w=1920&h=1080",
        "publishedAt": "2023-09-18T18:05:40Z",
        "content": "United Auto Workers members attend a solidarity rally as the UAW strikes the Big Three automakers on September 15, 2023 in Detroit, Michigan.\r\nDETROIT The most recent contract proposal by automaker S… [+7409 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Tom Warren, Jay Peters",
        "title": "Microsoft's former Surface chief Panos Panay is reportedly heading to Amazon - The Verge",
        "description": "Panos Panay, the former head of Windows and Surface, is joining Amazon, Bloomberg reports. He’d replace Amazon’s former hardware boss in charge of Alexa and Echo, Dave Limp.",
        "url": "https://www.theverge.com/2023/9/18/23879036/microsoft-panos-panay-amazon-hire-former-surface-windows-chief",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/3R_M280tYi09QKtk573LRhiHFcU=/0x0:4774x3176/1200x628/filters:focal(2387x1588:2388x1589)/cdn.vox-cdn.com/uploads/chorus_asset/file/24931924/1454311872.jpg",
        "publishedAt": "2023-09-18T17:39:45Z",
        "content": "Microsofts former Surface chief Panos Panay is reportedly heading to Amazon\r\nMicrosofts former Surface chief Panos Panay is reportedly heading to Amazon\r\n / The former Windows and Surface exec is exp… [+1487 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Fox Business"
        },
        "author": "Daniella Genovese",
        "title": "Clorox warns of product shortages after cyberattack - Fox Business",
        "description": "Clorox is the latest company to disclose the details of a cyber attack it faced last month that hindered its operations and will impact its quarterly earnings.",
        "url": "https://www.foxbusiness.com/lifestyle/clorox-warns-product-shortages-after-cyberattack",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/09/0/0/Clorox.jpg?ve=1&tl=1",
        "publishedAt": "2023-09-18T17:25:39Z",
        "content": "Clorox warned Monday that the \"widescale\" cyberattack it endured last month is causing product availability issues and will have a material impact on its first-quarter earnings. \r\nThe California-base… [+3407 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "iOS 17: 17 New Features for Apple’s New iPhone Software Update | WSJ - Wall Street Journal",
        "description": "Apple just-released iOS 17 and there are many new features to learn about. It gives your iPhone’s call screen a makeover while allowing for custom contact po...",
        "url": "https://www.youtube.com/watch?v=F-kMfV9Dx1Y",
        "urlToImage": "https://i.ytimg.com/vi/F-kMfV9Dx1Y/maxresdefault.jpg",
        "publishedAt": "2023-09-18T17:16:57Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "NFL Week 2 grades: Cowboys earn 'A' for destroying Jets, Raiders get 'F' for blowout loss to Bills - CBS Sports",
        "description": "Here are the Week 2 grades for every team",
        "url": "https://www.cbssports.com/nfl/news/nfl-week-2-grades-cowboys-earn-a-for-destroying-jets-raiders-get-f-for-blowout-loss-to-bills/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/18/de9b15cc-dd74-4d9f-8f78-d3f1a20b741c/thumbnail/1200x675/b52306add77a73c1216c2248fc4ce78b/cowboyswon.jpg",
        "publishedAt": "2023-09-18T17:14:00Z",
        "content": "Welcome to the Week 2 grades!\r\nThe second week of the season is always a big one in the NFL, especially for 0-1 teams. If there's one thing you don't want to do, it's start the season with an 0-2 rec… [+3030 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Iran prisoner swap: US citizens freed in $6bn deal - BBC",
        "description": "The four men and one woman are returning to the US after $6bn of frozen Iranian funds is released.",
        "url": "https://www.bbc.com/news/world-middle-east-66841137",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1225C/production/_131123347_208423d8b9b622352af2085a6d04c14aa89a6dba0_0_3749_24531000x654.jpg",
        "publishedAt": "2023-09-18T17:07:42Z",
        "content": "Media caption, Watch: Moment five Americans freed from Iran change planes in Qatar\r\nFive Americans jailed for years in Iran and widely regarded as hostages are on their way home to the United States.… [+6396 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "College Football Power Rankings: Notre Dame, USC continue to rise, UCLA gets bumped up, Missouri jumps in - CBS Sports",
        "description": "The top 10 is smoothing out with the Pac-12 continuing to flex",
        "url": "https://www.cbssports.com/college-football/news/college-football-power-rankings-notre-dame-usc-continue-to-rise-ucla-gets-bumped-up-missouri-jumps-in/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/18/84f98203-d437-4a57-a50d-8294e6154c8b/thumbnail/1200x675/c3c6dd33f62c89a93bebbf65baae978c/graphic-prndw4.png",
        "publishedAt": "2023-09-18T16:41:03Z",
        "content": "A quarter of the way through the 2023 college football season, there is some clarity. Washington is a College Football Playoff contender (at least in this week's Power Rankings). Colorado can't be st… [+9393 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Sarah Sirgany, Jomana Karadsheh",
        "title": "‘This is God’s will.’ Survivors dig mass graves for those killed in Libya’s devastating floods - CNN",
        "description": "It’s quiet at the Martoba cemetery outside the Libyan city of Derna, despite the presence of dozens of volunteers. Men in white hazmat suits pour lime over the brown soil to seal the graves. Cement bricks jutting out of the heaps of dirt are the only signs of…",
        "url": "https://www.cnn.com/2023/09/18/africa/libya-mass-graves-derna-intl-cmd/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230918101021-01-libya-mass-graves.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-09-18T16:36:00Z",
        "content": "Its quiet at the Martoba cemetery outside the Libyan city of Derna, despite the presence of dozens of volunteers. Men in white hazmat suits pour lime over the brown soil to seal the graves. Cement br… [+4396 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Euronews"
        },
        "author": null,
        "title": "Ukraine sues Poland, Hungary and Slovakia over unilateral grain bans - Euronews",
        "description": "Ukraine has launched legal action against Poland, Hungary and Slovakia over their unilateral bans on grain exports, which it considers to be a \"violation of their international obligations.\" #EuropeNews",
        "url": "https://www.euronews.com/my-europe/2023/09/18/ukraine-files-wto-case-against-poland-hungary-and-slovakia-over-their-unilateral-grain-ban",
        "urlToImage": "https://static.euronews.com/articles/stories/07/90/26/88/1000x563_cmsv2_000b91a7-3632-5b89-aa0d-c3d0d4018524-7902688.jpg",
        "publishedAt": "2023-09-18T16:24:23Z",
        "content": "Ukraine has launched legal action against Poland, Hungary and Slovakia over their unilateral bans on grain exports, which it considers to be a \"violation of their international obligations.\"\r\n \"It is… [+4632 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": null,
            "name": "Variety"
        },
        "author": "Brian Steinberg",
        "title": "Bill Maher Delays Start of ‘Real Time,’ Citing Strike Negotiations - Variety",
        "description": "Bill Maher has decided to stop the clock on the return of “Real Time.” The comedian, who last week vowed to put his topical HBO program back into production, now says he will delay it f…",
        "url": "https://variety.com/2023/tv/news/bill-maher-real-time-delay-writers-strike-1235726462/",
        "urlToImage": "https://variety.com/wp-content/uploads/2022/09/GettyImages-1388099162.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2023-09-18T16:12:00Z",
        "content": "Bill Maher has decided to stop the clock on the return of “Real Time.”\r\nThe comedian, who last week vowed to put his topical HBO program back into production, now says he will delay it for a while lo… [+3241 chars]"
    },
    {
        "source": {
            "id": "nfl-news",
            "name": "NFL News"
        },
        "author": null,
        "title": "Benched Rams RB Cam Akers subject of trade talks - NFL.com",
        "description": "Los Angeles Rams running back Cam Akers once again is the subject of trade talks, NFL Network Insider Ian Rapoport reported. Will Akers be moved this time?",
        "url": "https://www.nfl.com/news/benched-rams-rb-cam-akers-subject-of-trade-talks",
        "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/gc36nntcuaqzndmevhwn",
        "publishedAt": "2023-09-18T15:47:00Z",
        "content": "Admittedly, Williams had a better outing in the season-opening win and appeared to become McVay's preferred back after scoring two touchdowns in Los Angeles' surprising season-opening triumph. Prefer… [+2622 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NPR"
        },
        "author": "Joe Hernandez",
        "title": "Around 64,000 portable generators recalled over burn injury risk - NPR",
        "description": "At least three incidents involving the recalled generators left people with severe burns. Generac is offering a free repair kit to consumers.",
        "url": "https://www.npr.org/2023/09/18/1200123328/generac-portable-generators-recall-fire-burn-hazard",
        "urlToImage": "https://media.npr.org/assets/img/2023/09/18/generac-gp15000e_wide-88b785ea69a9735f79205f282e06e9a9f945c4b7-s1400-c100.jpg",
        "publishedAt": "2023-09-18T15:12:51Z",
        "content": "Generac Power Systems announced it's recalling around 64,000 portable generators that can malfunction and injure users. At least three severe burn injuries have been reported.\r\n\"The recalled generato… [+1659 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Fci Academy"
        },
        "author": "Sheridan Hendrix",
        "title": "How did Ohio colleges, universities rank using U.S. News' new metrics? - The Columbus Dispatch",
        "description": "U.S. News and World Report published its annual best colleges list Monday. After a number of elite universities dropped out, it changed its metrics.",
        "url": "https://www.dispatch.com/story/news/education/2023/09/18/how-did-ohio-colleges-universities-rank-using-u-s-news-new-metrics/70884020007/",
        "urlToImage": "https://www.dispatch.com/gcdn/-mm-/87aeba32329aca9c39fab034c10e9f2a707b43d5/c=0-0-4000-2250/local/-/media/2020/08/24/ColumbusOH/ghows_gallery_ei-OH-200719919-6e1959ad.jpg?width=3200&height=1800&fit=crop&format=pjpg&auto=webp",
        "publishedAt": "2023-09-18T15:09:06Z",
        "content": "Some universities flaunt them. Some academics despise them. And students and parents browse them to help determine what school might be right for them.\r\nCollege rankings claim to know which schools a… [+4400 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Curiosity Mars Rover Reaches Gediz Vallis Ridge (360 View) - NASA Jet Propulsion Laboratory",
        "description": "Drag your mouse to look around within this 360-degree panorama captured by NASA’s Curiosity Mars rover. See the steep slopes, layered buttes, and dark rocks ...",
        "url": "https://www.youtube.com/watch?v=sIfLkcFaFQY",
        "urlToImage": "https://i.ytimg.com/vi/sIfLkcFaFQY/maxresdefault.jpg",
        "publishedAt": "2023-09-18T15:03:45Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Space.com"
        },
        "author": "Daisy Dobrijevic",
        "title": "Massive eruption on sun hurls coronal mass ejection toward Earth, auroras likely Sept. 19 (video) - Space.com",
        "description": "The CME is expected to hit tomorrow (Sept. 19) and could spark impressive aurora displays.",
        "url": "https://www.space.com/sun-eruption-coronal-mass-ejection-toward-earth-auroras-likely-september-2023",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/HRbGopx4dbsYVMgLEG98FS-1200-80.gif",
        "publishedAt": "2023-09-18T14:29:59Z",
        "content": "A giant solar tendril, known as a solar filament, lashed out from the sun\r\n on Saturday (Sept. 16) catapulting a super-hot plasma eruption known as a coronal mass ejection (CME) toward Earth. \r\nThe U… [+2650 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": null,
        "title": "Virginia Rep. Jennifer Wexton will not seek reelection, citing new diagnosis - POLITICO",
        "description": "“I’m heartbroken to have to give up something I have loved after so many years of serving my community,” Wexton said.",
        "url": "https://www.politico.com/news/2023/09/18/jennifer-wexton-health-diagnosis-00116497",
        "urlToImage": "https://static.politico.com/25/ce/03952a3248c58ca3016ab5d5b432/https-delivery-gettyimages.com/downloads/1052637844",
        "publishedAt": "2023-09-18T14:10:09Z",
        "content": "Earlier this year, Wexton said the disease had primarily affected her speech and how her mouth moved, causing her to speak more quickly. It has also impacted her balance and the way she walks.\r\nIve a… [+1198 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Post"
        },
        "author": "Melissa Koenig",
        "title": "Lauren Boebert beau's bar flooded with bad reviews following 'Beetlejuice' date - New York Post ",
        "description": "Quinn Gallagher, 46, who is believed to be a Democrat, has co-owned the Hooch Craft Cocktail Bar with Pat Flanigan since last year. It has hosted a number of gay-friendly events, including a “winte…",
        "url": "https://nypost.com/2023/09/18/lauren-boeberts-new-beaus-bar-is-flooded-with-bad-reviews/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/NYPICHPDPICT000039754315.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2023-09-18T13:44:00Z",
        "content": "An Aspen bar has been inundated with negative reviews online after it was revealed that the establishment’s co-owner went on a raucous date with hard-right Rep. Lauren Boebert.\r\nQuinn Gallagher, 46, … [+4128 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Reuters",
        "title": "Rare dinosaur skeleton, known as ‘Barry,’ goes on sale in Paris auction - CNN",
        "description": "An unusually well-preserved dinosaur skeleton, a Camptosaurus known as Barry, will go under the hammer in Paris next month.",
        "url": "https://www.cnn.com/style/article/dinosaur-skeleton-barry-auction-scli-intl-scn/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230918125325-dinosaur-skeleton-barry.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-09-18T13:10:00Z",
        "content": "An unusually well-preserved dinosaur skeleton, a Camptosaurus known as Barry, will go under the hammer in Paris next month.\r\nThe dinosaur, which dates from the late Jurassic period some 150 million y… [+1033 chars]"
    },
    {"source":{"id":"politico","name":"Politico"},"author":null,"title":"'Trump scooped us': Dems sound alarm on Biden's handling of the auto worker strike - POLITICO","description":"Donald Trump’s decision to head to Detroit for a speech next week is setting off alarms among some Joe Biden allies.","url":"https://www.politico.com/news/2023/09/19/trump-biden-uaw-strike-00116928","urlToImage":"https://static.politico.com/9f/56/723290e644c4bbf14ae3a4873cb4/auto-workers-strike-55578.jpg","publishedAt":"2023-09-19T23:17:30Z","content":"A union adviser, speaking on condition of anonymity in order to offer a blunt evaluation, said Trump is still himself and will say and do crazy shit. But, the person added, he actually has people who… [+6280 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Jeremy Herb","title":"Zelensky urges Trump to share Ukraine peace plan but says he won’t give territory to Russia - CNN","description":"Volodymyr Zelensky urged Donald Trump to share his peace plans publicly if the former US president has a way to end the war between Ukraine and Russia – but the Ukrainian president cautioned in an interview Tuesday that any peace plan where Ukraine gives up t…","url":"https://www.cnn.com/2023/09/19/politics/zelensky-ukraine-russia-congress-trump-cnntv/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230919171412-01-wolf-blitzer-zelensky-091923-interview.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-09-19T23:02:00Z","content":"Volodymyr Zelensky urged Donald Trump to share his peace plans publicly if the former US president has a way to end the war between Ukraine and Russia but the Ukrainian president cautioned in an inte… [+5650 chars]"},{"source":{"id":"espn","name":"ESPN"},"author":null,"title":"Shohei Ohtani has elbow surgery, expects to hit in '24, pitch in '25 - ESPN - ESPN","description":"Shohei Ohtani had elbow surgery Tuesday, and his doctor said he expects the Angels' two-way star will be available as a hitter on Opening Day next season and will return to the mound as a pitcher in 2025.","url":"https://www.espn.com/mlb/story/_/id/38441820/los-angeles-angels-shohei-ohtani-elbow-procedure","urlToImage":"https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0919%2Fr1226960_1296x729_16%2D9.jpg","publishedAt":"2023-09-19T22:02:00Z","content":"Sep 19, 2023, 06:02 PM ET\r\nST. PETERSBURG, Fla. -- Los Angeles Angels star Shohei Ohtani had elbow surgery Tuesday, and his doctor said he expects the two-way star will be available as a hitter on Op… [+2027 chars]"},{"source":{"id":null,"name":"WABC-TV"},"author":null,"title":"Bronx day care child death: Day care owner, tenant facing federal charges after fentanyl exposure - WABC-TV","description":"A kilogram of fentanyl was stored on top of children's playmats used for napping at the day care, according to the criminal complaint.","url":"https://abc7ny.com/bronx-child-killed-day-care-death/13799425/","urlToImage":"https://cdn.abcotvs.com/dip/images/13801047_091823-wabc-bx-day-care-suspects-img.jpg?w=1600","publishedAt":"2023-09-19T22:00:55Z","content":"KINGSBRIDGE, The Bronx (WABC) -- Two people already in custody over the death of a 1-year-old at a Bronx day care are now facing federal charges.\r\nGrei Mendez, the day care owner, and Carlisto Aceved… [+6136 chars]"},{"source":{"id":null,"name":"GSMArena.com"},"author":"Vlad","title":"Google's Bard AI can now connect to Gmail, Google Docs, Maps, Drive, and YouTube - GSMArena.com news - GSMArena.com","description":"This is now possible through the newly launched Bard Extensions. Google initially unveiled its Bard AI tool as a knee-jerk reaction to the overnight...","url":"https://www.gsmarena.com/googles_bard_ai_can_now_connect_to_gmail_google_docs_maps_drive_and_youtube-news-59959.php","urlToImage":"https://fdn.gsmarena.com/imgroot/news/23/09/bard-new-features/-952x498w6/gsmarena_000.jpg","publishedAt":"2023-09-19T21:59:01Z","content":"Google initially unveiled its Bard AI tool as a knee-jerk reaction to the overnight popularity gained by ChatGPT earlier this year, but in the meantime the search giant has continued to improve Bard … [+2118 chars]"},{"source":{"id":"reuters","name":"Reuters"},"author":"David Morgan, Moira Warburton","title":"Republican infighting stalls spending bills in US House as shutdown looms - Reuters","description":"Republicans who control the U.S. House of Representatives failed to advance two spending bills on Tuesday, as party infighting threatened the ability of Congress to fund the government and avert a partial <a href=\"/world/us/us-government-shutdown-what-does-it…","url":"https://www.reuters.com/world/us/us-house-republicans-delay-initial-vote-short-term-funding-bill-2023-09-19/","urlToImage":"https://www.reuters.com/resizer/x_-496jZ_YroeTem7ZmIUoNagMY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZP4UPDKTA5KVZFQ3I2ZJWIJHMI.jpg","publishedAt":"2023-09-19T21:43:00Z","content":"WASHINGTON, Sept 19 (Reuters) - Republicans who control the U.S. House of Representatives failed to advance two spending bills on Tuesday, as party infighting threatened the ability of Congress to fu… [+3816 chars]"},{"source":{"id":"nbc-news","name":"NBC News"},"author":"Diana Dasrath, Jamie Knodel","title":"Bijou Phillips files for divorce from Danny Masterson after rape sentence - NBC News","description":"LOS ANGELES — Less than two weeks after her husband was sentenced to 30 years to life in prison for rape, Danny Masterson's wife has filed for divorce.","url":"https://www.nbcnews.com/news/us-news/danny-masterson-wife-bijou-phillips-divorce-rape-conviction-rcna105920","urlToImage":"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-09/230919-Danny-Masterson-Bijou-Phillips-se-522p-0592f3.jpg","publishedAt":"2023-09-19T21:33:51Z","content":"LOS ANGELES  Less than two weeks after her husband was sentenced to 30 years to life in prison for rape, Danny Masterson's wife has filed for divorce. \r\nBijou Phillips, a model and actor who was in t… [+1563 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"Jeff Cox","title":"Here's everything the Fed is expected to do Wednesday - CNBC","description":"The Federal Reserve concludes its two-day policy meeting Wednesday. Here's what to expect.","url":"https://www.cnbc.com/2023/09/19/heres-everything-the-fed-is-expected-to-do-wednesday.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107277289-1690396791660-gettyimages-1556768569-AFP_33Q339G.jpeg?v=1695158760&w=1920&h=1080","publishedAt":"2023-09-19T21:26:00Z","content":"Federal Reserve Board Chairman Jerome Powell speaks during a news conference following a Federal Open Market Committee meeting, at the Federal Reserve in Washington, DC, on July 26, 2023. \r\nAs often … [+5898 chars]"},{"source":{"id":null,"name":"CBS Sports"},"author":"","title":"Nick Chubb out for season: Browns RB options as Kareem Hunt visits, Jerome Ford to be 'featured back' - CBS Sports","description":"A look at Cleveland's top options to replace Chubb, who suffered a knee injury Monday night","url":"https://www.cbssports.com/nfl/news/nick-chubb-out-for-season-browns-rb-options-as-kareem-hunt-visits-jerome-ford-to-be-featured-back/","urlToImage":"https://sportshub.cbsistatic.com/i/r/2023/09/19/cf1b1b29-f003-45ab-bce4-cfb220a105c4/thumbnail/1200x675/124525514897b3e5391bc3cb178f0304/chubb-g.jpg","publishedAt":"2023-09-19T21:09:00Z","content":"Not only did the Cleveland Browns suffer their first defeat of the season Monday night, but they also lost the heart and soul of their offense. During the second quarter of a 26-22 loss to the Pittsb… [+4139 chars]"},{"source":{"id":null,"name":"NPR"},"author":"","title":"Group sues West Point, seeking to ban affirmative action in admissions - NPR","description":"The military has long maintained that the nation's security depends on having a diverse officer corps that is ready to lead an increasingly diverse fighting force.","url":"https://www.npr.org/2023/09/19/1200400504/west-point-affirmative-action","urlToImage":"https://media.npr.org/assets/img/2023/09/19/gettyimages-1219637293_wide-2e7155bd146a59062c331552427afafcd1f04006-s1400-c100.jpg","publishedAt":"2023-09-19T21:05:00Z","content":"West Point graduating cadets are seen during commencement ceremonies at Plain Parade Field at the United States Military Academy on June 13, 2020, in West Point, N.Y.\r\nJohn Minchillo/Pool/Getty Image… [+2445 chars]"},{"source":{"id":null,"name":"[Removed]"},"author":null,"title":"[Removed]","description":"[Removed]","url":"https://removed.com","urlToImage":null,"publishedAt":"1970-01-01T00:00:00Z","content":"[Removed]"},{"source":{"id":null,"name":"CNBC"},"author":"Kevin Breuninger, Dan Mangan","title":"Hunter Biden not asking for 'special treatment' in gun case court appearance, lawyer says - CNBC","description":"Hunter Biden, son of President Joe Biden, will plead not guilty during his initial court appearance on three federal felony gun charges, his attorney said.","url":"https://www.cnbc.com/2023/09/19/hunter-biden-will-plead-not-guilty-to-gun-charges-lawyer-says.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107277225-16903934082023-07-26t131903z_2117590321_rc21b2aed5eb_rtrmadp_0_usa-biden-hunter.jpeg?v=1695159918&w=1920&h=1080","publishedAt":"2023-09-19T20:56:03Z","content":"Hunter Biden will plead not guilty during his initial court appearance for three federal felony gun charges, his attorney said Tuesday as he denied that the son of President Joe Biden is asking for \"… [+3159 chars]"},{"source":{"id":"ign","name":"IGN"},"author":"Alex Stedman","title":"Xbox's Phil Spencer Acknowledges Massive Court Document Leak: 'So Much Has Changed' - IGN","description":"Xbox head Phil Spencer has acknowledged today's massive court document leak, saying it's \"hard to see our team's work shared in this way because so much has changed.\"","url":"https://www.ign.com/articles/xboxs-phil-spencer-acknowledges-massive-court-document-leak-so-much-has-changed","urlToImage":"https://assets-prd.ignimgs.com/2023/09/19/spencer-1695156371553.jpg?width=1280","publishedAt":"2023-09-19T20:48:34Z","content":"Xbox head Phil Spencer has weighed in on the massive leak of documents from June's Microsoft vs. FTC trial, which accidentally exposed tons of plans for both Xbox's hardware future and slate of games… [+2822 chars]"},{"source":{"id":"nbc-news","name":"NBC News"},"author":"Jon Schuppe, Deon J. Hampton, Daniel Arkin, Brock Stoneham, Carrie Ching, Jake Lubbehusen, Lewis Kamb","title":"Maui firefighters share harrowing battle against the Lahaina inferno - NBC News","description":"Maui’s firefighters faced an unprecedented challenge in the Lahaina wildfire: deadly wind-whipped flames they couldn’t defeat. “We lost to the beast,” one said.","url":"https://www.nbcnews.com/news/us-news/firefighters-battle-lahaina-maui-fire-rcna105142","urlToImage":"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-09/230914-lahaina-firefighters-cover-still-mn-1140-fcaec3.jpg","publishedAt":"2023-09-19T20:46:34Z","content":"Through the afternoon and into evening, Kohler and her crewmates chased the fire across the mountainside, in neighborhoods above downtown Lahaina. They hollered at people watering their homes with ga… [+3394 chars]"},{"source":{"id":"nbc-news","name":"NBC News"},"author":"David K. Li, Diana Dasrath","title":"Vanna White extends 'Wheel of Fortune' contract, will stay on after Pat Sajak departs - NBC News","description":"Long-time \"Wheel of Fortune\" co-host Vanna White extended her contract and will continue turning letters on the venerable game show until at least the middle of 2026, producers said Tuesday.","url":"https://www.nbcnews.com/news/us-news/vanna-white-extends-wheel-fortune-contract-will-stay-pat-sajak-departs-rcna105889","urlToImage":"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-09/230919-vanna-white-mn-1545-7167e8.jpg","publishedAt":"2023-09-19T20:12:16Z","content":"Long-time \"Wheel of Fortune\" co-host Vanna White extended her contract and will continue turning letters on the venerable game show until at least the middle of 2026, producers said Tuesday.\r\nThis 41… [+1067 chars]"},{"source":{"id":null,"name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Rishi Sunak considers weakening key green policies - BBC","description":"Plans could include delaying a ban on sales of new petrol cars and the phasing out of gas boilers.","url":"https://www.bbc.com/news/uk-politics-66857551","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/FD91/production/_131131946_sunak_getty.jpg","publishedAt":"2023-09-19T20:10:43Z","content":"Rishi Sunak is considering weakening some of the government's key green commitments in a major policy shift.\r\nIt could include delaying a ban on the sales of new petrol and diesel cars and phasing ou… [+5165 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Katie Hunt","title":"Rare cache of pink diamonds formed when a supercontinent broke apart, study says - CNN","description":"Pink diamonds are extremely rare and coveted. But a discovery made in Western Australia near a now-closed mine may help reveal new deposits of the jewels, researchers say.","url":"https://www.cnn.com/2023/09/19/world/pink-diamonds-ancient-super-continent-scn/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230919113837-02-argyle-diamond-mine-australia.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-09-19T19:08:00Z","content":"Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nPink diamonds are extremely rare and coveted a now-clo… [+3325 chars]"},{"source":{"id":"the-wall-street-journal","name":"The Wall Street Journal"},"author":"Jess Bravin","title":"Russia, Ukraine Clash Over Genocide Charges at World Court - The Wall Street Journal","description":"International Court of Justice hears arguments on whether Russia’s invasion can be challenged under 1948 treaty","url":"https://www.wsj.com/world/russia/russia-ukraine-clash-over-genocide-charges-at-world-court-c386b34c","urlToImage":"https://images.wsj.net/im-854247/social","publishedAt":"2023-09-19T18:59:00Z","content":null},{"source":{"id":"the-wall-street-journal","name":"The Wall Street Journal"},"author":"Alexander Osipovich, Candice Choi, Dean Seal, David Marino-Nachison, Hannah Miao, Corrie Driebusch, Margot Patrick, Sam Goldfarb, Angus Berwick, Eric Wallerstein, Chelsey Dulaney, Gunjan Banerji, Rebecca Feng, Heard Editors","title":"FTX Sues Sam Bankman-Fried's Parents to Recover 'Misappropriated Funds' - The Wall Street Journal","description":"Live coverage of what's moving stocks and other markets, including the Dow Jones Industrial Average, S&P 500 and Nasdaq Composite","url":"https://www.wsj.com/livecoverage/stock-market-today-dow-jones-09-19-2023","urlToImage":"https://images.wsj.net/im-785590/social","publishedAt":"2023-09-19T18:23:00Z","content":"Stocks slid Tuesday while bond yields climbed to their highest levels since 2007 as the Federal Reserve's two-day September meeting got going.\r\nShares of Amazon.com, one of the biggest stocks in the … [+1702 chars]"},{"source":{"id":"the-verge","name":"The Verge"},"author":"Chris Welch","title":"Your iPhone can now restore your Apple TV if the streaming box has problems - The Verge","description":"Apple is making its Apple TV set-top box easier to service. A new feature lets iPhone owners restore the device in the event that it needs a reset due to software bugs.","url":"https://www.theverge.com/2023/9/19/23880671/apple-tv-4k-hd-iphone-restore-recovery","urlToImage":"https://cdn.vox-cdn.com/thumbor/eUkBiLsG7jUTkwzTxKgG7lvSb3c=/0x0:1215x781/1200x628/filters:focal(608x391:609x392)/cdn.vox-cdn.com/uploads/chorus_asset/file/24934855/tvrestore.jpg","publishedAt":"2023-09-19T17:33:27Z","content":"Your iPhone can now restore your Apple TV if the streaming box has problems\r\nYour iPhone can now restore your Apple TV if the streaming box has problems\r\n / No more having to rely on Apple support wh… [+1780 chars]"}
]
     

    constructor() {
        super();
        this.state={
        articles: this.articles,
       
        }
    }
   
    render() {
        
        return (
            <div>

                 

                <div className="container" style={{paddingTop: '50px'}}>
                    <h1 className='text-center tex mb-3'> Times Of India</h1>
  
                    <div className="row ">
                    {this.state.articles.map((ele)=>{
                        return <NewsItem key={ele.url} imgUrl={ele.urlToImage} title={ele.author?ele.author:"Hello World"} desc={ele.description.slice(0,80)} url={ele.url} date={ele.publishedAt} sourc={ele.source.name}/>
                        })}     
                           

                       
                  </div>
                </div>
            </div>
        )
    }
}

export default News