let jokes =  [
    {
        "category": "Pun",
        "type": "single",
        "joke": "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 191,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 24,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Doctor: \"I have some news about your baby.\"\nParents: \"Don't tell us the gender, we want to keep it a surprise.\"\nDoctor: \"Oh I get it, you're those type of people. Okay, well IT is not breathing.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 138,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 304,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 208,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 30,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 221,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "Yo mama is so old, she knew Burger King while he was still a prince.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 306,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 44,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "If you're here for the yodeling lesson, please form an orderly orderly orderly queue.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 139,
        "safe": true,
        "lang": "en"
    }
]
let jokey =document.getElementById("joke");
let index= Math.floor(Math.random()*jokes.length-1);
jokey.innerHTML = jokes[index].joke;