const products = [
  {
    brand: "Byredo", name: "Bal d'Afrique Absolu", dataBrand: "byredo",
    notes: ["Neroli", "African Marigold", "Vetiver", "Musk"],
    desc: "Jasný a teplý zároveň. Inšpirovaný umeleckou scénou Paríža 20. rokov — radostná, zlatá vôňa, ktorá sa cíti ako oslava.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:29}],
    image: "byredo-baldafrique absolu.png", imgStyle: "height:120%", badge: null, notesImage: "baldafrique-notes.jpg"
  },
  {
    brand: "Byredo", name: "Mojave Ghost Absolu", dataBrand: "byredo",
    notes: ["Ambrette", "Magnolia", "Sandalwood", "Amberwood"],
    desc: "Púšť za súmraku vo fľaši. Mojave Ghost Absolu berie vzdušnosť originálu a koncentruje ju — teplejšia, hutnejšia, hypnotickejšia.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:29}],
    image: "byredo-mojave-ghost-absolu.png", imgStyle: "height:160%", badge: null
  },
  {
    brand: "Emporio Armani", name: "Stronger With You Intensely", dataBrand: "emporio-armani",
    notes: ["Chestnut", "Pink Pepper", "Vanilla", "Patchouli"],
    desc: "Tmavšia, bohatšia verzia originálu. Sladká a korenistá vrúčnosť, ktorá ťa obalí — dosť odvážna na nezabudnuteľný vstup, dosť hladká na to, aby zostala.",
    sizes: [{size:"1ml",price:2},{size:"2ml",price:3.5},{size:"5ml",price:9}],
    image: "emporio armani-intensely.png", imgStyle: "height:105%;margin-bottom:35px", badge: "popular"
  },
  {
    brand: "Emporio Armani", name: "Stronger With You Powerfully", dataBrand: "emporio-armani",
    notes: ["Cardamom", "Sage", "Amber", "Cedarwood"],
    desc: "Ostrá a rozhodná. Drevitá aromatická vôňa s pevnou kostrou — čistá a ostrá na otvorení, teplá a ukotvená v doznení.",
    sizes: [{size:"1ml",price:2},{size:"2ml",price:3.5},{size:"5ml",price:9}],
    image: "emporio armani-powerfully.png", imgStyle: "height:85%", badge: null
  },
  {
    brand: "Emporio Armani", name: "Power Of You", dataBrand: "emporio-armani",
    notes: ["Bergamot", "Vetiver", "Musks", "Amberwood"],
    desc: "Svieža, čistá a bezstarostne moderná. Vôňa, ktorá sa hodí na každý deň — ľahká sebadôvera vo fľaši.",
    sizes: [{size:"1ml",price:2},{size:"2ml",price:3.5},{size:"5ml",price:9}],
    image: "emporio armani-power of you.png", imgStyle: "height:115%", badge: null
  },
  {
    brand: "Tom Ford", name: "Neroli Portofino", dataBrand: "tom-ford",
    notes: ["Neroli", "Bergamot", "Lavender", "Amber"],
    desc: "Talianska riviéra vo fľaši. Ostrá citrusová neroli sa otvorí do aromatickej levandule a kvetového pomarančového kvetu, ukončená teplou ambrovou bázou.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:28}],
    image: "tom ford-neroli-portofino.png", imgStyle: "height:100%", badge: null
  },
  {
    brand: "Tom Ford", name: "Soleil Blanc", dataBrand: "tom-ford",
    notes: ["Coco de Mer", "Ylang Ylang", "Cardamom", "Amber"],
    desc: "Preniknutá slnkom a návyková. Zmyselná solárna kvetová vôňa s krémovým kokosovým orieškom a teplou ambrovou.",
    sizes: [{size:"1ml",price:4},{size:"2ml",price:6.5},{size:"5ml",price:17}],
    image: "tom ford-soleil-blanc.png", imgStyle: "height:100%", badge: null
  },
  {
    brand: "Dior", name: "Vanilla Diorama", dataBrand: "dior",
    notes: ["Vanilla", "Iris", "Sandalwood", "Musk"],
    desc: "Najelegantnejší pohľad Dioru na vanilku. Krémová a sofistikovaná bez náznaku sladkosti — iris ju udržiava chladnou, zatiaľ čo santalové drevo jej dáva hĺbku.",
    sizes: [{size:"1ml",price:7},{size:"2ml",price:12.5},{size:"5ml",price:32}],
    image: "dior-vanilla-diorama.png", imgStyle: "height:85%", badge: null
  },
  {
    brand: "Chanel", name: "Bleu de Chanel L'Exclusif", dataBrand: "chanel",
    notes: ["Citrus", "Incense", "Cedar", "Labdanum", "Vetiver"],
    desc: "Povýšená kapitola ikony. L'Exclusif berie všetko, čo robilo Bleu skvelým, a posúva to hlbšie — viac kadidla, viac mystéria, viac prítomnosti.",
    sizes: [{size:"1ml",price:5},{size:"2ml",price:9.5},{size:"5ml",price:23}],
    image: "chanel-bleu-exclusif.png", imgStyle: "height:150%", badge: "popular"
  },
  {
    brand: "Initio", name: "Atomic Rose", dataBrand: "initio",
    notes: ["Rose", "Musk", "Sandalwood", "Benzoin"],
    desc: "Ruža, ktorá udrie silno. Výrazná a žiarivá, stvorená na projekciu — toto je ruža pre ľudí, ktorí si myslia, že ruža nie je pre nich.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:28}],
    image: "initio-atomic-rose.png", imgStyle: "height:85%", badge: null
  },
  {
    brand: "Initio", name: "Side Effect", dataBrand: "initio",
    notes: ["Rum", "Tobacco", "Vanilla"],
    desc: "Návyková v tom najpriamejšom zmysle. Side Effect ťa obalí teplou, na kožu blízkou vanilkou, ktorá nikdy nepôsobí sladko ani ťažko — len hlboko, nebezpečne pohodlne.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:28}],
    image: "initio-side-effect.png", imgStyle: "height:85%", badge: "popular"
  },
  {
    brand: "Initio", name: "Musk Therapy", dataBrand: "initio",
    notes: ["Musk", "Iris", "Sandalwood", "Cashmere Wood"],
    desc: "Čistý mošus dovedený do jeho najčistejšej podoby. Jemný, blízky koži a takmer meditatívny — menej ako vôňa, ktorú nosíš, a viac ako druhá koža.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:28}],
    image: "initio-musk-therapy.png", imgStyle: "height:85%", badge: null
  },
  {
    brand: "Nishane", name: "Ani", dataBrand: "nishane",
    notes: ["Bergamot", "Jasmine", "Sandalwood", "Vanilla"],
    desc: "Teplá, krémová a obaľujúca. Ani ťa obalí jemnou kvetovou vanilkou, ktorá pôsobí luxusne bez toho, aby bola sladká alebo ťažká.",
    sizes: [{size:"1ml",price:4},{size:"2ml",price:8.5},{size:"5ml",price:21}],
    image: "nishane-ani.png", imgStyle: "height:180%", badge: null
  },
  {
    brand: "Louis Vuitton", name: "Imagination", dataBrand: "louis-vuitton",
    notes: ["Calabrian Bergamot", "Cedarwood", "Ambroxan", "White Musk"],
    desc: "Výbuch citrusov, ktorý sa roztopí do čistého, vzdušného dreva. Imagination je Louis Vuitton vo svojej najľahšej forme — jasný, moderný a neuveriteľne svieži.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11.5},{size:"5ml",price:29}],
    image: "louis-vuitton-imagination.png", imgStyle: "height:120%", badge: "new"
  },
  {
    brand: "Orto Parisi", name: "Bergamask", dataBrand: "orto-parisi",
    notes: ["Bergamot", "Lavender", "Musk", "Cedar", "Tonka"],
    desc: "Napätie medzi dvoma extrémami v jednej fľaši. Výbuch studeného, ostrého kalábrijského bergamotu, ktorý sa pomaly vzdáva teplému, na kožu blízkemu mošusu.",
    sizes: [{size:"1ml",price:4},{size:"2ml",price:7.5},{size:"5ml",price:18}],
    image: "orto-parisi-bergamask.png", imgStyle: "height:90%;margin-top:20px", badge: null
  },
  {
    brand: "Nasomatto", name: "Silver Musk", dataBrand: "nasomatto",
    notes: ["Musk"],
    desc: "Vôňa kože, zosilnená. Čisté syntetické mošusy tak ťažké, že ich skôr cítiš než čucháš — čisté, krémové a ticho nezabudnuteľné.",
    sizes: [{size:"1ml",price:3},{size:"2ml",price:4.5},{size:"5ml",price:12}],
    image: "nasomatto-silver-musk.png", imgStyle: "height:90%;margin-top:20px", badge: null
  },
  {
    brand: "Ex Nihilo", name: "Blue Talisman", dataBrand: "ex-nihilo",
    notes: ["Pear", "Bergamot", "Mandarin", "Ginger", "Orange Blossom", "Cedar", "Musk"],
    desc: "Žiarivý talizman, ktorý ohreje kožu. Jasné citrusy a šťavnatá hruška sa otvoria ako slnečné svetlo, kým sa usadia v jemnom, drevitom objatí.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11},{size:"5ml",price:28}],
    image: "ex nihilo-blue talisman.png", imgStyle: "height:90%;margin-top:10px", badge: null
  },
  {
    brand: "Yves Saint Laurent", name: "Babycat Raw Bourbon", dataBrand: "yves-saint-laurent",
    notes: ["Pink Pepper", "Black Pepper", "Elemi", "Saffron", "Vanilla", "Cedarwood", "Suede"],
    desc: "Divoká a zmyselná. Korenistý peprom nabitý úvod sa roztáva do krémovej vanilky a jemnej semišovej kože — odvážna, no zostáva na koži ako druhá.",
    sizes: [{size:"1ml",price:5},{size:"2ml",price:10},{size:"5ml",price:26}],
    image: "ysl-babycat.png", imgStyle: "height:90%;margin-top:10px", badge: null
  },
  {
    brand: "Xerjoff", name: "Cruz del Sur II", dataBrand: "xerjoff",
    notes: ["Mango", "Guava", "Pineapple", "Apple Blossom", "Black Currant", "Violet Leaf", "Milk", "Dried Fruits", "Musk", "Vetiver", "Cedar"],
    desc: "Tropický výbuch, ktorý sa mení na niečo hlbšie. Mango, guava a ananás otvoria vôňu ako slnečný deň, kým čierne ríbezle a fialový list dodajú tajomstvo.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11},{size:"5ml",price:29}],
    image: "xerjoff-cruzdelsur.png", imgStyle: "height:100%;margin-top:0px", badge: null
  },
  {
    brand: "Sospiro", name: "Vibrato", dataBrand: "sospiro",
    notes: ["Grapefruit", "Bergamot", "Jasmine", "Magnolia", "Ginger", "Herbal Notes", "Powdery Notes", "Musk", "Cedar", "Amber", "Patchouli", "Orris Root"],
    desc: "Svieži a púdrovito elegantný. Grep a bergamot s jazmínom a magnóliou otvoria vôňu ako ranný vzduch, kým zázvor a bylinné tóny dodajú charakter.",
    sizes: [{size:"1ml",price:4},{size:"2ml",price:7},{size:"5ml",price:18}],
    image: "sospiro-vibrato.png", imgStyle: "height:90%;margin-top:10px", badge: null
  },
  {
    brand: "Louis Vuitton", name: "Attrape-Rêves", dataBrand: "louis-vuitton",
    notes: ["Litchi", "Bergamot", "Ginger", "Peony", "Turkish Rose", "Cacao", "Patchouli"],
    desc: "Sladký sen s nečakanou hĺbkou. Šťavnaté lychee a bergamot s nádychom zázvoru otvoria vôňu svieže, kým pivónia a turecká ruža s kakaom vytvoria zmyselné srdce.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:11},{size:"5ml",price:30}],
    image: "louis-vuitton-attrape-reves.png", imgStyle: "height:110%;margin-top:-25px", badge: null
  },
  {
    brand: "Dannam", name: "Pomelo Oolong", dataBrand: "dannam",
    notes: ["Oolong Tea", "Pomelo", "Osmanthus", "White Musk", "Porcelain"],
    desc: "Minimalistická krása v čistej forme. Oolong čaj a pomelo sa prelínajú s kvetmi osmanthus do tichej, meditatívnej kompozície — biely pižmo a porcelánová čistota zanechajú stopu jemnú ako šepot.",
    sizes: [{size:"1ml",price:6},{size:"2ml",price:12},{size:"5ml",price:32}],
    image: "dannam-pomelo-oolong.png", imgStyle: "height:90%;margin-top:10px", badge: null
  }
];

function getSlug(p) {
  return p.dataBrand + '--' + p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}
