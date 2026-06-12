// ============================================================
// KATALÓG VELOUR
//
// `notes` — oficiálna pyramída vône (overené podľa Fragrantica/výrobcu).
//           Zobrazuje sa na kartách v katalógu a vo výsledkoch quizu.
//           POZOR: obrázky notes/*.jpg sa negenerujú z tohto poľa — pri
//           zmene notes treba obrázok preriešiť zvlášť.
//
// `types` — typ vône pre filter v katalógu. Povolené kľúče (zobrazované
//           názvy sú v TYPE_LABELS v catalog.html):
//             fresh (svieža & citrusová), fruity (ovocná), sweet (sladká),
//             spicy (korenistá), floral (kvetinová), woody (drevitá),
//             musky (čistá & mošusová)
//           Vôňa môže mať 1–3 typy.
//
// `quiz`  — vôňový profil pre quiz.html ("Nájdi svoju vôňu").
//           Osi a škála 0–3 (os s nulou jednoducho vynechaj):
//             charakter:   sweet (sladké/gourmand), fresh (svieže/citrus),
//                          floral (kvetinové), woody (drevité/mošus/koža)
//             príležitosť: day (deň/práca), night (večer/rande),
//                          summer (leto), universal (celoročná)
//             hlasitosť:   loud (výrazná projekcia), soft (decentná)
//           Skóre vône = súčet (jej hodnota osi × hodnota osi z odpovedí).
//           Vôňa BEZ `quiz` poľa sa v quize NIKDY neukáže
//           (quiz.html na to upozorní v konzole prehliadača).
//
// `sets`  — sety na konci súboru: items odkazujú na `name` produktov,
//           price je predajná cena setu, fullPrice súčet jednotlivých
//           cien (zobrazí sa prečiarknutý). Set sa v katalógu skryje,
//           keď je aktívny filter značky (sety sú viacznačkové).
// ============================================================

const products = [
  {
    brand: "Byredo", name: "Bal d'Afrique Absolu", dataBrand: "byredo",
    notes: ["Blackcurrant", "Bergamot", "Praline", "Violet", "Vetiver", "Black Amber"],
    types: ["fresh", "sweet", "floral"],
    quiz: { fresh: 2, sweet: 2, floral: 1, day: 2, summer: 1, universal: 1, loud: 1 },
    desc: "Jasný a teplý zároveň. Inšpirovaný umeleckou scénou Paríža 20. rokov — radostná, zlatá vôňa, ktorá sa cíti ako oslava.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:29}],
    image: "bottles/byredo-baldafrique absolu.png", imgStyle: "height:120%", badge: null, notesImage: "notes/baldafrique-notes.jpg"
  },
  {
    brand: "Byredo", name: "Mojave Ghost Absolu", dataBrand: "byredo",
    notes: ["Sapodilla", "Ambrette", "Magnolia", "Sandalwood", "Amber"],
    types: ["floral", "woody"],
    quiz: { floral: 2, woody: 2, fresh: 1, universal: 2, day: 1, soft: 2 },
    desc: "Púšť za súmraku vo fľaši. Mojave Ghost Absolu berie vzdušnosť originálu a koncentruje ju — teplejšia, hutnejšia, hypnotickejšia.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:29}],
    image: "bottles/byredo-mojave-ghost-absolu.png", imgStyle: "height:160%", detailImgStyle: "height:160%;aspect-ratio:1/1", badge: null, notesImage: "notes/mojaveghost-notes.jpg"
  },
  {
    brand: "d'Annam", name: "Pomelo Oolong", dataBrand: "dannam",
    notes: ["Oolong Tea", "Pomelo", "Osmanthus", "White Musk", "Porcelain"],
    types: ["fresh", "floral", "musky"],
    quiz: { fresh: 2, floral: 2, day: 2, universal: 1, soft: 2 },
    desc: "Minimalistická krása v čistej forme. Oolong čaj a pomelo sa prelínajú s kvetmi osmanthus do tichej, meditatívnej kompozície — biely pižmo a porcelánová čistota zanechajú stopu jemnú ako šepot.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:12},{size:"5ml",price:32}],
    image: "bottles/dannam-pomelo-oolong.png", imgStyle: "height:125%;margin-top:10px", badge: null, notesImage: "notes/pomelooolong-notes.jpg"
  },
  {
    brand: "Dior", name: "Vanilla Diorama", dataBrand: "dior",
    notes: ["Orange", "Rum", "Cacao", "Bourbon Vanilla", "Sandalwood"],
    types: ["sweet", "woody"],
    quiz: { sweet: 3, woody: 1, night: 2, universal: 1, loud: 1 },
    desc: "Najelegantnejší pohľad Dioru na vanilku. Krémová a sofistikovaná bez náznaku gýča — rum a kakao jej dávajú hĺbku, santalové drevo pokoj.",
    sizes: [{size:"1ml",price:7},{size:"2ml",price:12.5},{size:"5ml",price:32}],
    image: "bottles/dior-vanilla-diorama.png", imgStyle: "height:85%", badge: null, notesImage: "notes/vanilladiorama-notes.jpg"
  },
  {
    brand: "Emporio Armani", name: "Stronger With You Intensely", dataBrand: "emporio-armani",
    notes: ["Pink Pepper", "Toffee", "Cinnamon", "Vanilla", "Amber"],
    types: ["sweet", "spicy"],
    quiz: { sweet: 3, night: 2, loud: 2, universal: 1 },
    desc: "Tmavšia, bohatšia verzia originálu. Sladká a korenistá vrúčnosť, ktorá ťa obalí — dosť odvážna na nezabudnuteľný vstup, dosť hladká na to, aby zostala.",
    sizes: [{size:"1ml",price:2},{size:"2ml",price:3.5},{size:"5ml",price:9}],
    image: "bottles/emporio armani-intensely.png", imgStyle: "height:105%;margin-bottom:35px", badge: "popular", notesImage: "notes/intensely-notes.jpg"
  },
  {
    brand: "Emporio Armani", name: "Stronger With You Powerfully", dataBrand: "emporio-armani",
    notes: ["Cardamom", "Lavender", "Sage", "Cedarwood", "Amber"],
    types: ["fresh", "spicy", "woody"],
    quiz: { woody: 2, fresh: 2, day: 2, universal: 1, loud: 1 },
    desc: "Ostrá a rozhodná. Drevitá aromatická vôňa s pevnou kostrou — čistá a ostrá na otvorení, teplá a ukotvená v doznení.",
    sizes: [{size:"1ml",price:2},{size:"2ml",price:3.5},{size:"5ml",price:9}],
    image: "bottles/emporio armani-powerfully.png", imgStyle: "height:85%", badge: null, notesImage: "notes/powerfully-notes.jpg"
  },
  {
    brand: "Emporio Armani", name: "Power Of You", dataBrand: "emporio-armani",
    notes: ["Passionfruit", "Bitter Orange", "Frangipani", "Solar Notes", "Vanilla"],
    types: ["fruity", "floral", "sweet"],
    quiz: { sweet: 2, floral: 2, fresh: 1, summer: 2, day: 1, soft: 1 },
    desc: "Slnko vo fľaši. Marakuja a horký pomaranč sa otvoria šťavnato, kým frangipani a madagaskarská vanilka dodajú teplý, solárny záver — bezstarostná energia na každý deň.",
    sizes: [{size:"1ml",price:2},{size:"2ml",price:3.5},{size:"5ml",price:9}],
    image: "bottles/emporio armani-power of you.png", imgStyle: "height:115%", badge: null, notesImage: "notes/powerofyou-notes.jpg"
  },
  {
    brand: "Ex Nihilo", name: "Blue Talisman", dataBrand: "ex-nihilo",
    notes: ["Pear", "Bergamot", "Mandarin", "Ginger", "Orange Blossom", "Musk"],
    types: ["fresh", "fruity"],
    quiz: { fresh: 3, sweet: 1, summer: 2, day: 2, loud: 1 },
    desc: "Žiarivý talizman, ktorý ohreje kožu. Jasné citrusy a šťavnatá hruška sa otvoria ako slnečné svetlo, kým sa usadia v jemnom, drevitom objatí.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11},{size:"5ml",price:28}],
    image: "bottles/ex nihilo-blue talisman.png", imgStyle: "height:90%;margin-top:10px", badge: null, notesImage: "notes/bluetalisman-notes.jpg"
  },
  {
    brand: "Initio", name: "Side Effect", dataBrand: "initio",
    notes: ["Rum", "Cinnamon", "Tobacco", "Saffron", "Sandalwood"],
    types: ["sweet", "spicy"],
    quiz: { sweet: 3, woody: 1, night: 3, loud: 2 },
    desc: "Návyková v tom najpriamejšom zmysle. Side Effect ťa obalí teplým rumom a tabakom, ktorý nikdy nepôsobí ťažko — len hlboko, nebezpečne pohodlne.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:28}],
    image: "bottles/initio-side-effect.png", imgStyle: "height:85%", badge: "popular", notesImage: "notes/sideeffect-notes.jpg"
  },
  {
    brand: "Initio", name: "Musk Therapy", dataBrand: "initio",
    notes: ["White Musk", "Bergamot", "Blackcurrant", "Magnolia", "Sandalwood"],
    types: ["musky", "fresh"],
    quiz: { fresh: 2, floral: 1, woody: 1, soft: 3, universal: 2, day: 1 },
    desc: "Čistý mošus dovedený do jeho najčistejšej podoby. Jemný, blízky koži a takmer meditatívny — menej ako vôňa, ktorú nosíš, a viac ako druhá koža.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:28}],
    image: "bottles/initio-musk-therapy.png", imgStyle: "height:85%", badge: null, notesImage: "notes/musktherapy-notes.jpg"
  },
  {
    brand: "Initio", name: "Lift Me Up", dataBrand: "initio",
    notes: ["Magnolia", "Bergamot", "Tonka", "Ylang Ylang", "Vanilla", "Musk"],
    types: ["floral", "sweet"],
    quiz: { floral: 3, sweet: 2, universal: 2, day: 1, soft: 1 },
    desc: "Kvetinová radosť s mliečnou hebkosťou. Magnólia a ylang-ylang sa vznášajú nad praženou tonkou a vanilkou — vôňa ako slnečné ráno, ktoré ťa zdvihne zo zeme.",
    sizes: [{size:"1ml",price:7},{size:"2ml",price:13},{size:"5ml",price:32}],
    image: "bottles/initio-lift-me-up.png", imgStyle: "height:85%", badge: null, notesImage: "notes/initio-lift-me-up-notes.jpg"
  },
  {
    brand: "Louis Vuitton", name: "Imagination", dataBrand: "louis-vuitton",
    notes: ["Calabrian Bergamot", "Citron", "Ginger", "Black Tea", "Ambroxan"],
    types: ["fresh"],
    quiz: { fresh: 3, summer: 2, day: 2, universal: 1, loud: 1 },
    desc: "Výbuch citrusov, ktorý sa roztopí do čierneho čaju a vzdušného ambroxanu. Imagination je Louis Vuitton vo svojej najľahšej forme — jasný, moderný a neuveriteľne svieži.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:29}],
    image: "bottles/louis-vuitton-imagination.png", imgStyle: "height:120%", badge: "new", notesImage: "notes/imagination-notes.jpg"
  },
  {
    brand: "Louis Vuitton", name: "Attrape-Rêves", dataBrand: "louis-vuitton",
    notes: ["Litchi", "Bergamot", "Ginger", "Peony", "Turkish Rose", "Cacao", "Patchouli"],
    types: ["floral", "fruity", "sweet"],
    quiz: { floral: 3, sweet: 2, night: 2, soft: 1 },
    desc: "Sladký sen s nečakanou hĺbkou. Šťavnaté lychee a bergamot s nádychom zázvoru otvoria vôňu svieže, kým pivónia a turecká ruža s kakaom vytvoria zmyselné srdce.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11},{size:"5ml",price:30}],
    image: "bottles/louis-vuitton-attrape-reves.png", imgStyle: "height:110%;margin-top:-25px", badge: null, notesImage: "notes/attrapereves-notes.jpg"
  },
  {
    brand: "Nasomatto", name: "Silver Musk", dataBrand: "nasomatto",
    notes: ["Musk"],
    types: ["musky"],
    quiz: { soft: 3, fresh: 1, woody: 1, universal: 2, day: 1 },
    desc: "Vôňa kože, zosilnená. Čisté syntetické mošusy tak ťažké, že ich skôr cítiš než čucháš — čisté, krémové a ticho nezabudnuteľné.",
    sizes: [{size:"1ml",price:3},{size:"2ml",price:4.5},{size:"5ml",price:12}],
    image: "bottles/nasomatto-silver-musk.png", imgStyle: "height:90%;margin-top:20px", badge: null, notesImage: "notes/silvermusk-notes.jpg"
  },
  {
    brand: "Nishane", name: "Ani", dataBrand: "nishane",
    notes: ["Ginger", "Bergamot", "Turkish Rose", "Vanilla", "Ambergris"],
    types: ["sweet", "spicy", "floral"],
    quiz: { sweet: 2, floral: 2, woody: 1, universal: 2, soft: 1, night: 1 },
    desc: "Teplá, krémová a obaľujúca. Ani ťa obalí zázvorom a jemnou vanilkou s ambrou, ktorá pôsobí luxusne bez toho, aby bola sladká alebo ťažká.",
    sizes: [{size:"1ml",price:4},{size:"2ml",price:8.5},{size:"5ml",price:21}],
    image: "bottles/nishane-ani.png", imgStyle: "height:180%", badge: null, notesImage: "notes/ani-notes.jpg"
  },
  {
    brand: "Orto Parisi", name: "Bergamask", dataBrand: "orto-parisi",
    notes: ["Bergamot", "Lavender", "Musk", "Cedar", "Tonka"],
    types: ["fresh", "musky"],
    quiz: { fresh: 3, woody: 1, day: 2, universal: 1, loud: 1 },
    desc: "Napätie medzi dvoma extrémami v jednej fľaši. Výbuch studeného, ostrého kalábrijského bergamotu, ktorý sa pomaly vzdáva teplému, na kožu blízkemu mošusu.",
    sizes: [{size:"1ml",price:4},{size:"2ml",price:7.5},{size:"5ml",price:18}],
    image: "bottles/orto-parisi-bergamask.png", imgStyle: "height:90%;margin-top:20px", badge: null, notesImage: "notes/bergamask-notes.jpg"
  },
  {
    brand: "Sospiro", name: "Vibrato", dataBrand: "sospiro",
    notes: ["Grapefruit", "Bergamot", "Jasmine", "Magnolia", "Ginger", "Herbal Notes", "Powdery Notes", "Musk", "Cedar", "Amber", "Patchouli", "Orris Root"],
    types: ["fresh", "floral"],
    quiz: { fresh: 2, floral: 2, day: 2, soft: 2 },
    desc: "Svieži a púdrovito elegantný. Grep a bergamot s jazmínom a magnóliou otvoria vôňu ako ranný vzduch, kým zázvor a bylinné tóny dodajú charakter.",
    sizes: [{size:"1ml",price:4},{size:"2ml",price:7},{size:"5ml",price:18}],
    image: "bottles/sospiro-vibrato.png", imgStyle: "height:90%;margin-top:10px", badge: null, notesImage: "notes/vibrato-notes.jpg"
  },
  {
    brand: "Xerjoff", name: "Cruz del Sur II", dataBrand: "xerjoff",
    notes: ["Mango", "Guava", "Pineapple", "Apple Blossom", "Black Currant", "Violet Leaf", "Milk", "Dried Fruits", "Musk", "Vetiver", "Cedar"],
    types: ["fruity", "fresh", "sweet"],
    quiz: { sweet: 2, fresh: 2, summer: 3, day: 1, loud: 1 },
    desc: "Tropický výbuch, ktorý sa mení na niečo hlbšie. Mango, guava a ananás otvoria vôňu ako slnečný deň, kým čierne ríbezle a fialový list dodajú tajomstvo.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11},{size:"5ml",price:29}],
    image: "bottles/xerjoff-cruzdelsur.png", imgStyle: "height:100%;margin-top:0px", badge: null, notesImage: "notes/cruzdelsur-notes.jpg"
  },
  {
    brand: "Yves Saint Laurent", name: "Babycat Raw Bourbon", dataBrand: "yves-saint-laurent",
    notes: ["Pink Pepper", "Black Pepper", "Elemi", "Saffron", "Vanilla", "Cedarwood", "Suede"],
    types: ["spicy", "sweet", "woody"],
    quiz: { sweet: 2, woody: 2, night: 3, loud: 2 },
    desc: "Divoká a zmyselná. Korenistý peprom nabitý úvod sa roztáva do krémovej vanilky a jemnej semišovej kože — odvážna, no zostáva na koži ako druhá.",
    sizes: [{size:"1ml",price:5},{size:"2ml",price:10},{size:"5ml",price:26}],
    image: "bottles/ysl-babycat.png", imgStyle: "height:90%;margin-top:10px", badge: null, notesImage: "notes/babycat-notes.jpg"
  },
  {
    brand: "Simone Andreoli", name: "Leisure In Paradise", dataBrand: "simone-andreoli",
    notes: ["Coconut", "Vanilla", "Pineapple", "Papaya", "Woody Notes"],
    types: ["fruity", "sweet"],
    quiz: { sweet: 2, fresh: 1, summer: 3, night: 1, loud: 2 },
    desc: "Tropický ostrov v jednej fľaši. Kokos a vanilka obialia pokožku ako slnečné teplo, kým ananás a papája dodajú svieži exotický náboj. Drevité tóny ukotvia vôňu a dodajú jej hĺbku.",
    sizes: [{size:"1ml",price:4},{size:"2ml",price:7},{size:"5ml",price:16}],
    image: "bottles/simone-andreoli-leisure-in-paradise.png", imgStyle: "height:90%;margin-top:0px", badge: null, notesImage: "notes/simone-andreoli-leisure-in-paradise.jpg"
  }

];

// Sety — items odkazujú na presné `name` produktov vyššie (3×2 ml)
const sets = [
  {
    name: "Everyday Set", tagline: "Celý rok, každý deň",
    items: ["Imagination", "Musk Therapy", "Pomelo Oolong"],
    size: "2ml", price: 32.9, fullPrice: 35,
    types: ["fresh", "musky"],
    desc: "Tri univerzálne vône, ktoré fungujú od rána do večera a od januára po december — čisté, decentné, vždy vhodné."
  },
  {
    name: "Citrus Set", tagline: "Ovocie & energia",
    items: ["Bergamask", "Vibrato", "Cruz del Sur II"],
    size: "2ml", price: 23.9, fullPrice: 25.5,
    types: ["fresh", "fruity"],
    desc: "Citrusovo-ovocná trojica s ťahom: najostrejší bergamot na trhu, púdrová sviežosť a tropické slnko v jednom balení."
  }
];

function getSlug(p) {
  return p.dataBrand + '--' + p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}
