const games = [{
    id: 0,
    name: "Celeste",
    image: "https://cdn2.steamgriddb.com/grid/8c433a09bd26b943147c4d9bacb15efc.jpg",
    platform: "PC",
    otherPlatforms: [
        "XboxOne", "PC", "Switch", "XboxOneX", "XboxOneS",
        "Stadia", "PS5", "XboxSeriesX", "XboxSeriesS"
    ],
    releaseYear: 2018,
    activePlayers: 581,
    keyword: "Celeste",
}, {
    id: 1,
    name: "Super Mario 64",
    image: "https://cdn2.steamgriddb.com/grid/f293653ffa5c0e53453463a82401dbec.png",
    platform: "N64",
    otherPlatforms: ["WiiVC", "WiiUVC", "Switch"],
    releaseYear: 1996,
    activePlayers: 417,
    keyword: "Super Mario",
}, {
    id: 2,
    name: "Call of Duty: Black Ops 6 Zombies",
    image: "https://cdn2.steamgriddb.com/grid/ccd427e9a45f148777fe91e6850bf8eb.png",
    platform: "PS4",
    otherPlatforms: [
        "XboxOne", "PC", "XboxOneX", "PS4Pro", "XboxOneS",
        "PS5", "XboxSeriesX", "XboxSeriesS", "Gamepass"
    ],
    releaseYear: 2024,
    releaseMonth: 10,
    releaseDay: 25,
    activePlayers: 369,
    keyword: "Call of Duty",
}, {
    id: 3,
    name: "Shadow Generations",
    image: "https://cdn2.steamgriddb.com/grid/be40176301531259a8a32f1c7597522f.png",
    platform: "PS4",
    otherPlatforms: [
        "XboxOne", "PC", "Switch", "PS5",
        "XboxSeriesX", "XboxSeriesS"
    ],
    releaseYear: 2024,
    releaseMonth: 10,
    releaseDay: 25,
    activePlayers: 334,
    keyword: "Sonic",
}, {
    id: 4,
    name: "Minecraft: Java Edition",
    image: "https://cdn2.steamgriddb.com/grid/3d91a5ece54b086486d1573a93d2f94b.jpg",
    platform: "PC",
    otherPlatforms: [],
    releaseYear: 2011,
    activePlayers: 253,
    keyword: "Minecraft",
}, {
    id: 5,
    name: "Cuphead",
    image: "https://cdn2.steamgriddb.com/grid/25dcf1554f13c36b512dfe907acc77d3.png",
    series: "Cuphead",
    logo: "https://cdn2.steamgriddb.com/logo/2eace51d8f796d04991c831a07059758.png",
    platform: "PS4",
    otherPlatforms: [
        "XboxOne", "PC", "Mac", "Switch",
        "PS5", "XboxSeriesX", "XboxSeriesS", "SteamDeck"
    ],
    releaseYear: 2017,
    activePlayers: 200,
    keyword: "Cuphead",
}, {
    id: 6,
    name: "UFO 50",
    image: "https://cdn2.steamgriddb.com/grid/fda352680a5c971f3c816956676b8246.png",
    platform: "PC",
    otherPlatforms: [],
    releaseYear: 2024,
    releaseMonth: "09",
    releaseDay: 18,
    activePlayers: 138,
    keyword: "UFO 50",
}, {
    id: 7,
    name: "Sonic Generations",
    image: "https://cdn2.steamgriddb.com/grid/11a70bd53186a8f0662ca1a42faa4076.png",
    series: "Sonic",
    logo: "https://cdn2.steamgriddb.com/logo/2eace51d8f796d04991c831a07059758.png",
    platform: "PS4",
    otherPlatforms: [
        "XboxOne", "PC", "Switch", "PS5",
        "XboxSeriesX", "XboxSeriesS"
    ],
    releaseYear: 2024,
    releaseMonth: 10,
    releaseDay: 25,
    activePlayers: 138,
    keyword: "Sonic",
}, {
    id: 8,
    name: "Getting over it with Bennet Foddy",
    image: "https://cdn2.steamgriddb.com/grid/797a1e5473c21f6ded58930097451edf.png",
    platform: "PC",
    otherPlatforms: ["Android", "IOS"],
    releaseYear: 2017,
    activePlayers: 130,
    keyword: "Getting over it",
}, {
    id: 9,
    name: "The legend of Zelda: Echoes of Wisdom",
    image: "https://cdn2.steamgriddb.com/grid/e488d6f4064e1584c115f2cd7bed74f0.png",
    series: "Zelda",
    platform: "Switch",
    otherPlatforms: [],
    releaseYear: 2024,
    releaseMonth: "09",
    releaseDay: 26,
    activePlayers: 106,
    keyword: "Zelda",
}, {
    id: 10,
    name: "Granny",
    image: "https://cdn2.steamgriddb.com/grid/5788c89947da0ee5c644bb4368475cba.jpg",
    series: "Granny",
    platform: "Android",
    otherPlatforms: ["IOS"],
    releaseYear: 2017,
    activePlayers: 104,
    keyword: "Granny",
}, {
    id: 11,
    name: "Super Mario Party Jamboree",
    image: "https://cdn2.steamgriddb.com/grid/d8990f79de598c52139e95e819c86c8c.png",
    series: "Super Mario",
    platform: "Switch",
    otherPlatforms: [],
    releaseYear: 2024,
    releaseMonth: 10,
    releaseDay: 17,
    activePlayers: 68,
    keyword: "Super Mario",
}, {
    id: 12,
    name: "Silent Hill 2 (2024)",
    image: "https://cdn2.steamgriddb.com/grid/23a8793d295f5804590d596981e50b26.png",
    platform: "PC",
    otherPlatforms: ["PS5"],
    releaseYear: 2024,
    releaseMonth: 10,
    releaseDay: "06",
    activePlayers: 66,
    keyword: "Silent Hill",
}, {
    id: 13,
    name: "WEBFISHING",
    image: "https://cdn2.steamgriddb.com/grid/f528102b84fe4d49912d29ed98c254ce.png",
    series: "Silent Hil",
    platform: "PC",
    otherPlatforms: [],
    releaseYear: 2024,
    releaseMonth: 10,
    releaseDay: 11,
    activePlayers: 47,
    keyword: "WEBFISHING",
}, {
    id: 14,
    name: "Roblox: Pressure",
    image: "https://cdn2.steamgriddb.com/grid/1d18a1008a6c41ad5343528b64af3971.png",
    series: "Roblox",
    platform: "PS4",
    otherPlatforms: [
        "XboxOne", "PC", "Android",
        "IOS", "Mac"
    ],
    releaseYear: 2024,
    releaseMonth: "07",
    releaseDay: "07",
    activePlayers: 301,
    keyword: "Roblox",
}];

export default games;