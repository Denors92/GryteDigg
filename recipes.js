// Nordiske gryteretter
const recipes = [
    // KJØTT
    {
        id: 1,
        name: "Lapskaus",
        type: "kjøtt",
        emoji: "🥩",
        description: "Klassisk norsk gryte med storfekjøtt, rotgrønnsaker og poteter",
        time: "2 timer",
        servings: "4-6 porsjoner",
        ingredients: [
            "600g storfekjøtt i terninger",
            "6 store poteter",
            "3 gulrøtter",
            "1 kålrot",
            "2 løk",
            "1 liter kjøttbuljong",
            "2 ss smør",
            "Salt og pepper",
            "Persille til pynt"
        ],
        instructions: [
            "Brun kjøttet i smør i en stor gryte",
            "Ta ut kjøttet og fres løken til den er gyllen",
            "Legg kjøttet tilbake og ha i buljong",
            "La koke under lokk i 1 time",
            "Skrell og kutt rotgrønnsaker og poteter i store biter",
            "Legg grønnsakene i gryten og kok videre i 40-50 min",
            "Smak til med salt og pepper",
            "Server med grovt brød"
        ]
    },
    {
        id: 2,
        name: "Kalops",
        type: "kjøtt",
        emoji: "🥩",
        description: "Svensk klassiker med mørt oksekjøtt og rik saus",
        time: "2.5 timer",
        servings: "6 porsjoner",
        ingredients: [
            "1 kg oksekjøtt",
            "3 løk",
            "4 laurbærblad",
            "10 allehåndekorn",
            "3 ss mel",
            "750 ml oksekraft",
            "2 ss smør",
            "Salt og pepper"
        ],
        instructions: [
            "Skjær kjøttet i store terninger",
            "Brun kjøttet godt i smør",
            "Skjær løken i skiver og fres med kjøttet",
            "Dryss over mel og rør godt",
            "Hell i kraft, legg i krydder",
            "La småkoke under lokk i 2 timer",
            "Smak til med salt og pepper",
            "Server med kokte poteter og tyttebær"
        ]
    },
    {
        id: 3,
        name: "Reinsdyrgryte",
        type: "kjøtt",
        emoji: "🦌",
        description: "Samisk spesialitet med reinsdyr og kremet saus",
        time: "1.5 timer",
        servings: "4 porsjoner",
        ingredients: [
            "600g reinsdyrkjøtt",
            "2 løk",
            "250g sopp (kantareller om tilgjengelig)",
            "3 dl kremfløte",
            "2 dl viltfond",
            "2 ss smør",
            "1 ss tyttebærsyltetøy",
            "Salt, pepper, timian"
        ],
        instructions: [
            "Skjær kjøttet i tynne strimler",
            "Brun kjøttet raskt i smør, ta ut",
            "Fres løk og sopp",
            "Ha i fond og fløte, kok opp",
            "Legg kjøttet tilbake, smak til med tyttebær",
            "La småkoke i 30 min",
            "Smak til med krydder",
            "Server med potetstappe og tyttebær"
        ]
    },

    // KYLLING
    {
        id: 4,
        name: "Hønsegryte med rotgrønnsaker",
        type: "kylling",
        emoji: "🐔",
        description: "Enkel og sunn kyllinggryte med nordiske grønnsaker",
        time: "1 time",
        servings: "4 porsjoner",
        ingredients: [
            "600g kyllingfilet",
            "3 gulrøtter",
            "1 kålrot",
            "2 pastinakk",
            "2 løk",
            "5 dl kyllingbuljong",
            "2 dl kremfløte",
            "2 ss smør",
            "Timian, salt, pepper"
        ],
        instructions: [
            "Skjær kyllingen i biter og brun i smør",
            "Ta ut kyllingen, fres løk",
            "Skrell og kutt rotgrønnsaker i biter",
            "Hell i buljong og legg i grønnsaker",
            "La koke i 20 min",
            "Legg kyllingen tilbake, ha i fløte",
            "Kok i 10 min til",
            "Smak til med timian, salt og pepper"
        ]
    },
    {
        id: 5,
        name: "Kyllinggryte med eple og purre",
        type: "kylling",
        emoji: "🍎",
        description: "Nordisk smak med syrlige epler og mild purre",
        time: "45 min",
        servings: "4 porsjoner",
        ingredients: [
            "500g kyllinglår",
            "2 epler (syrlige)",
            "2 purrer",
            "3 dl kyllingbuljong",
            "2 dl matfløte",
            "2 ss smør",
            "1 ss sennep",
            "Salt, pepper, timian"
        ],
        instructions: [
            "Brun kyllinglårene i smør",
            "Ta ut og fres purre i skiver",
            "Skjær epler i båter, legg i",
            "Hell i buljong og fløte",
            "Legg kyllingen tilbake",
            "La småkoke i 30 min",
            "Rør inn sennep",
            "Server med ris eller poteter"
        ]
    },

    // FISK
    {
        id: 6,
        name: "Fiskesuppe (Bergensk)",
        type: "fisk",
        emoji: "🐟",
        description: "Klassisk vestlandsk fiskesuppe med torsk og reker",
        time: "40 min",
        servings: "4 porsjoner",
        ingredients: [
            "400g torskefilet",
            "200g reker",
            "3 gulrøtter",
            "1 purre",
            "4 poteter",
            "8 dl fiskebuljong",
            "2 dl fløte",
            "2 ss smør",
            "Dill, salt, pepper"
        ],
        instructions: [
            "Skrell og kutt grønnsaker i terninger",
            "Kok grønnsaker møre i buljong",
            "Skjær fisken i biter",
            "Legg fisken i gryten",
            "La trekke i 5 min (ikke kok)",
            "Rør inn fløte og reker",
            "Varm forsiktig",
            "Topp med fersk dill og server med brød"
        ]
    },
    {
        id: 7,
        name: "Laksegryte med dill",
        type: "fisk",
        emoji: "🐟",
        description: "Kremet laksegryte med nordiske smaker",
        time: "30 min",
        servings: "4 porsjoner",
        ingredients: [
            "500g laksfilet",
            "2 sjalottløk",
            "3 dl fiskebuljong",
            "2 dl kremfløte",
            "200g spinat",
            "1 bunt dill",
            "Sitronsaft",
            "Salt, pepper"
        ],
        instructions: [
            "Fres sjalottløk i smør",
            "Hell i buljong og fløte",
            "Kok opp og la småkoke 5 min",
            "Skjær laksen i biter",
            "Legg laksen og spinat i gryten",
            "La trekke i 5 min",
            "Rør inn hakket dill og sitronsaft",
            "Server med pasta eller ris"
        ]
    },
    {
        id: 8,
        name: "Skrei med bacon og løk",
        type: "fisk",
        emoji: "🥓",
        description: "Vinterens hvite gull med røkt bacon",
        time: "35 min",
        servings: "4 porsjoner",
        ingredients: [
            "600g skreifilet",
            "150g bacon",
            "2 løk",
            "4 poteter",
            "3 dl fiskebuljong",
            "2 dl rømme",
            "2 ss smør",
            "Persille, salt, pepper"
        ],
        instructions: [
            "Stek bacon sprø, ta ut",
            "Fres løk i baconfettet",
            "Kutt poteter i skiver, legg i",
            "Hell i buljong, kok møre",
            "Skjær skrei i biter",
            "Legg fisken oppi, la trekke 5 min",
            "Rør inn rømme og bacon",
            "Topp med persille"
        ]
    },

    // VEGETAR
    {
        id: 9,
        name: "Rotgrønnsaksgryte",
        type: "vegetar",
        emoji: "🥕",
        description: "Fargerik og mettende gryte med nordiske rotgrønnsaker",
        time: "50 min",
        servings: "4 porsjoner",
        ingredients: [
            "3 gulrøtter",
            "1 kålrot",
            "2 pastinakker",
            "1 sellerrot",
            "2 løk",
            "400g hermetiske tomater",
            "5 dl grønnsaksbuljong",
            "2 ss tomatpuré",
            "Timian, rosmarin, salt, pepper",
            "2 ss olivenolje"
        ],
        instructions: [
            "Skrell og kutt alle rotgrønnsaker i biter",
            "Fres løk i olje",
            "Legg i rotgrønnsaker, la frese 5 min",
            "Ha i tomater, puré og buljong",
            "Krydre med timian og rosmarin",
            "La småkoke i 30-40 min til grønnsakene er møre",
            "Smak til med salt og pepper",
            "Server med brød og ost"
        ]
    },
    {
        id: 10,
        name: "Kålgryte med belgfrukter",
        type: "vegetar",
        emoji: "🥬",
        description: "Sunn og mettende gryte med kål og linser",
        time: "45 min",
        servings: "4 porsjoner",
        ingredients: [
            "½ hodekål",
            "2 gulrøtter",
            "2 løk",
            "200g røde linser",
            "400g hermetiske tomater",
            "7 dl grønnsaksbuljong",
            "2 fedd hvitløk",
            "Spisskummen, paprika",
            "Salt, pepper, olivenolje"
        ],
        instructions: [
            "Fres løk og hvitløk",
            "Kutt kål og gulrøtter i strimler",
            "Legg grønnsaker i gryten, fres 5 min",
            "Ha i linser, tomater og buljong",
            "Krydre med spisskummen og paprika",
            "La småkoke i 25-30 min",
            "Smak til med salt og pepper",
            "Server med grøvt brød"
        ]
    },
    {
        id: 11,
        name: "Soppsgryte med perlebygg",
        type: "vegetar",
        emoji: "🍄",
        description: "Rik og smakfull sopp-gryte med nordisk korn",
        time: "1 time",
        servings: "4 porsjoner",
        ingredients: [
            "500g blandede sopp",
            "2 dl perlebygg",
            "2 løk",
            "2 fedd hvitløk",
            "6 dl grønnsaksbuljong",
            "2 dl matfløte",
            "2 ss smør",
            "Timian, persille",
            "Salt, pepper"
        ],
        instructions: [
            "Kok perlebygg i saltet vann i 30 min",
            "Rens og skjær sopp",
            "Fres løk og hvitløk i smør",
            "Stek soppen til den er gyllen",
            "Hell i buljong og fløte",
            "Legg i kokt perlebygg",
            "La småkoke i 15 min",
            "Topp med frisk timian og persille"
        ]
    },
    {
        id: 12,
        name: "Ertesuppe (Vegetar)",
        type: "vegetar",
        emoji: "🟢",
        description: "Nordisk klassiker i vegetarversjon",
        time: "1.5 timer",
        servings: "6 porsjoner",
        ingredients: [
            "400g gule erter (tørket)",
            "3 gulrøtter",
            "1 kålrot",
            "2 løk",
            "1.5 liter grønnsaksbuljong",
            "Timian, laurbærblad",
            "Salt, pepper",
            "Sennep til servering"
        ],
        instructions: [
            "Bløtlegg ertene over natten",
            "Skyll ertene og kok i buljong i 1 time",
            "Skrell og kutt grønnsaker i terninger",
            "Legg grønnsaker i gryten",
            "Kok videre i 30 min",
            "Krydre med timian og laurbær",
            "Smak til med salt og pepper",
            "Server med sennep og knekkebrød"
        ]
    }
];
