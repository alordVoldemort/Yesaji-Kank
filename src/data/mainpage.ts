import { Extrainfo, moreInfo, trust } from "@/types";

export const ExtraInfo:Record<"mr" | "en",Extrainfo[]> = {

    mr:[
        {name: "आमचेकौतकु करायला महाराज ठाम आहेत.",description:"- येसाजी कंक (कुतबुशहाचेबक्षीस नाकारताना)",btn1:"सपंर्क  ",btn2:"अधिक माहिती" }
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
    mr:[{desc:"स्वराज्याचेसरनोबत येसाजी कंक यांच्या शौर्य,र्य साहस, शि स्त, आणि वि वेकबद्ुधी अशा अनेक पलै चंू ा आदर्श ठेवनू जनसेवेचेकार्य हाती घेतलेले महाराष्ट्रातील ऐतिहासिक व सामाजि क वारसा जपणारेट्रस्ट - सरनोबत येसाजी कंकट्रस्ट." , btn:"अधिक वाचा"}],
    en:[{desc:"(Inspired by the bravery, courage, discipline, and wisdom of Swarajya's Chief of Army Yesaji Kank, this trust in Maharashtra serves the people and preserves historical and social heritage-Sarnobat Yesaji Kank Trust.)", btn:"Read More "}]

}
