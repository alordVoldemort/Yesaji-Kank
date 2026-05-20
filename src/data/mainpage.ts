import { card, Extrainfo, feedback, history, moreInfo, prashansapatr, shivkalin, trust, work ,FooterInfo, cardtext} from "@/types";

export const ExtraInfo:Record<"mr" | "en",Extrainfo[]> = {

    mr:[
        {name: "आमचेकौतकु करायला महाराज ठाम आहेत.",description:" येसाजी कंक (कुतबुशहाचेबक्षीस नाकारताना)",btn1:"सपंर्क  ",btn2:"अधिक माहिती" }
    ],
    en:[
        {name :"The Maharaj is firm to praise us.", description:"Yesaji Kank (While rejecting Qutbash's reward)", btn1:"More Info", btn2:"Contact us"}
    ]
}


export const Trust:Record<"mr"|"en", trust[]> = {
    mr:[{name:"ट्रस्ट विषयी"}],
    en:[{name:"About Trust"}]

}

export const MoreInfo:Record<"mr"|"en", moreInfo[]> = {
    mr:[{desc:"स्वराज्याचेसरनोबत येसाजी कंक यांच्या शौर्य, साहस, शिस्त, आणि विवेकबुद्धी अशा अनेक पैलूंचा. आदर्श ठेवनू जनसेवेचेकार्य हाती घेतलेले महाराष्ट्रातील ऐतिहासिक व सामाजिक वारसा जपणारे ट्रस्ट." , name:" ' सरनोबत येसाजी कंक ट्रस्ट ' .",btn:"अधिक वाचा"}],
    en:[{desc:"Inspired by the bravery, courage, discipline, and wisdom of Swarajya's Chief of Army Yesaji Kank, this trust in Maharashtra serves the people and preserves historical and social heritage.",name:"Sarnobat Yesaji Kank Trust", btn:"Read More "}]

}

export const History:Record<"mr"|"en", history[]> = {
    mr:[{name:"ऐतिहासिक वाडा " , desc:"मराठा काळातील दुर्मिळ ऐतिहासिक वस्तू, वास्तू व स्मारकांचे दस्तऐवजीकरण व जतन करून पुढील पिढीसाठी वारसा सुरक्षित ठेवण्याचे कार्य ट्रस्ट करत आहे."}],
    en:[{name:"" , desc:""}]

}

export const Work:Record<"mr"|"en", work[]> = {
    mr:[{name:"आमची कामे " , desc:"समाजातील गरजू घटकांसाठी शिक्षण, आरोग्य, सांस्कृतिक जागृती व ग्रामीण विकासासाठी विविध उपक्रम राबवून सामाजिक बांधिलकी जपली जाते."}],
    en:[{name:"" , desc:""}]

}


export const Shivkalin:Record<"mr"|"en", shivkalin[]> = {
    mr:[{name:"शिवकालीन सग्रंह" , desc:"छत्रपती शिवाजी महाराजांच्या काळातील तलवारी, भाले, ढाल व इतर युद्धसाहित्यांचे विशेष प्रदर्शन विविध सण, उत्सव व ऐतिहासिक प्रसंगी आयोजित केले जाते."}],
    en:[{name:"Shivkalin Collection" , desc:""}]

}
export const Card:Record<"mr"|"en", card[]> = {
    mr:[{name:"शिवकालीन शस्त्रे" , desc:"छत्रपती शिवाजी महाराजांच्या काळातील तलवारी, भाले, ढाल व इतर युद्धसाहित्यांचे विशेष प्रदर्शन विविध सण, उत्सव व ऐतिहासिक प्रसंगी आयोजित केले जाते."},
        {name:"शिवराई व होन", desc:""},
        {name:"शिवकालीन पत्र " , desc:""}
    ],
    en:[{name:"Shivkalin Armoury" , desc:""},
        {name:"Shivraai and Hon" , desc:""},
        {name:"Shivkalin Patr", desc:""}
    ]

}

export const Prashansapatr:Record<"mr"|"en", prashansapatr[]> = {
    mr:[{name:"प्रशंसापत्रे"}],
    en:[{name:"Prashansapatr" , }]

}


export const Feedback:Record<"mr"|"en", feedback[]> = {
    mr:[{name:"गणेश पाटील",desc:"येसाजी कंक यांचे कार्य अतिशय प्रेरणादायी आहे.त्यांची निष्ठा आणि शौर्य आजही मार्गदर्शक ठरते.इतिहासात त्यांचे योगदान अत्यंत महत्त्वाचे आहे.अशा महान व्यक्तिमत्त्वाला मनःपूर्वक अभिवादन."},
        {name:"रोहित देशमुख",desc:"येसाजी कंक यांची निष्ठा आणि धैर्य अद्वितीय आहे। त्यांनी स्वराज्यासाठी दिलेले योगदान मोठे आहे।त्यांच्या कार्यामुळे इतिहास उजळला आहे।अशा वीरांना मनःपूर्वक सलाम।"},
       {name:"सोनाली शिंदे", desc:"वाड्याचा परिसर आणि वातावरण खूप शांत आणि सुंदर आहे.इतिहास आणि संस्कृती जवळून अनुभवता आली.शस्त्रे आणि स्मारक पाहताना खूप अभिमान वाटला.एक अविस्मरणीय अनुभव!"}
    ],
    en:[{name:"Ganesh Patil " ,desc:"" }]

}


export const FooterData: Record<"mr" | "en", FooterInfo[]> = {
  mr: [
    {
      trustName: "सरनोबत येसाजी कंक ट्रस्ट",
      homeTitle: "मुख्यपृष्ठ",
      homeLinks: ["स्वराज्य योगदान", "गॅलरी", "देणगी", "संपर्क", "आमची कामे", "शिवकालीन संग्रह"],
      aboutTitle: "आमच्याबद्दल",
      aboutLinks: ["कंक घराणे", "येसाजी कंकांबद्दल", "सरनोबत येसाजी कंक वाडा,भुतोंडे", "सरनोबत येसाजी कंक ट्रस्ट", "आमचा प्रवास", "विश्वस्त मंडळ"],
      contactTitle: "संपर्क",
      email: "info@yesajikanktrust.org",
      phone: "+91 1234567890",
      address: "सरसेनापती कंक वाडा, भुतोंडे ता.भोर जि. पुणे",
      rights: "© 2026 Zonixtec IT Services Private Limited. सर्व हक्क राखीव.",
      tagline: "इतिहास जतन करणे, भावी पिढ्यांना प्रेरणा देणे",
      homeLinksWithUrl: [
        { text: "स्वराज्य योगदान", href: "/swarajya_contribution" },
        { text: "गॅलरी", href: "/gallery" },
        { text: "देणगी", href: "/donation" },
        { text: "संपर्क", href: "/contact" },
        { text: "आमची कामे", href: "/our-work" },
        { text: "शिवकालीन संग्रह", href: "/shivaji-era" },
      ],
      aboutLinksWithUrl: [
        { text: "कंक घराणे", href: "/about/kank-family" },
        { text: "येसाजी कंकांबद्दल", href: "/about/yesaji-kank" },
        { text: "सरनोबत येसाजी कंक वाडा,भुतोंडे", href: "/about/kank-wada" },
        { text: "सरनोबत येसाजी कंक ट्रस्ट", href: "/about" },
        { text: "आमचा प्रवास", href: "/about/our-journey" },
        { text: "विश्वस्त मंडळ", href: "/about/trust" },
      ],
    }
  ],
  en: [
    {
      trustName: "Sarnobat Yesaji Kank Trust",
      homeTitle: "Home",
      homeLinks: ["Swarajya Contribution", "Gallery", "Donations", "Contact", "Our Work", "Historical Collection"],
      aboutTitle: "About Us",
      aboutLinks: ["Kank Family", "About Yesaji Kank", "Yesaji Kank Wada, Bhutonde", "Sarnobat Yesaji Kank Trust", "Our Journey", "Trustees"],
      contactTitle: "Contact",
      email: "info@yesajikanktrust.org",
      phone: "+91 1234567890",
      address: "Sarsenapati Kank Wada, Bhutonde, Tal. Bhor, Dist. Pune",
      rights: "© 2026 Zonixtec IT Services Private Limited. All rights reserved.",
      tagline: "Preserving history, inspiring future generations",
      homeLinksWithUrl: [
        { text: "Swarajya Contribution", href: "/swarajya_contribution" },
        { text: "Gallery", href: "/gallery" },
        { text: "Donations", href: "/donation" },
        { text: "Contact", href: "/contact" },
        { text: "Our Work", href: "/our-work" },
        { text: "Historical Collection", href: "/shivaji-era" },
      ],
      aboutLinksWithUrl: [
        { text: "Kank Family", href: "/about/kank-family" },
        { text: "About Yesaji Kank", href: "/about/yesaji-kank" },
        { text: "Yesaji Kank Wada, Bhutonde", href: "/about/kank-wada" },
        { text: "Sarnobat Yesaji Kank Trust", href: "/about" },
        { text: "Our Journey", href: "/about/our-journey" },
        { text: "Trustees", href: "/about/trust" },
      ],
    }
  ]
};




export const CardText:Record<"mr"|"en", cardtext[]> = {
    mr:[{name:"कृषी", desc:" समृद्ध शेती, सशक्त शेतकरी आणि उज्ज्वल भविष्य."},
        {name:"क्रीडा",desc:""},
        {name:"सामाजिक",desc:""},
        {name:"सांस्कृतिक" , desc:""}
    ],
    en:[{name:"Agricultural" ,desc:"" },
        {name:"Sports", desc:""},
        {name:"Social",desc:""},
        {name:"Cultural",desc:""}
    ]

}


// सरनोबत येसाजी कंक ट्रस्ट.
// (Inspired by the bravery, courage, discipline, and wisdom of Swarajya's Chief of Army Yesaji