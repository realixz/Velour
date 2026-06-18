# Velour — príručka správcu webu

*Aktualizované 11. 6. 2026. Všetko, čo na webe budeš bežne meniť, je v dvoch súboroch: `products.js` (katalóg + quiz) a `velour-config.js` (nastavenia). Zvyšok sú texty v HTML.*

## Mapa súborov

| Súbor | Čo v ňom je |
|---|---|
| `products.js` | celý katalóg: vône, noty, ceny, quiz profily |
| `velour-config.js` | prah dopravy zadarmo, endpoint na zber e-mailov |
| `index.html` | úvodná stránka: hero, trust bar, sekcia Ateliér, FAQ, popup |
| `catalog.html` | katalóg s filtrami značiek |
| `fragrance.html` | detail vône (obsah sa berie z products.js podľa ?slug=) |
| `quiz.html` | quiz „Nájdi svoju vôňu" (otázky tu, profily vôní v products.js) |
| `bottles/`, `notes/` | obrázky fliaš a nôt |

---

## 1. Pridanie novej vône

Použi skill **`/add-product`** — prevedie ťa všetkým: overí noty na Fragrantice, navrhne quiz profil, skontroluje, či existujú obrázky, a zapíše záznam v správnom formáte. Potom spusti **`/products-sync-checker`**.

Pravidlá, ktoré platia vždy:
- **Noty nikdy nevymýšľať** — vždy podľa Fragrantica/výrobcu. Pozor na flankery: *Absolu, Intense, Parfum, Elixir majú INÉ noty než originál* (presne toto bol problém pri Bal d'Afrique Absolu).
- **Obrázok nôt musí sedieť s poľom `notes`** — obrázky sa z dát negenerujú, sú to dve oddelené veci.
- `brand` je zobrazované meno (môže mať apostrof: „d'Annam"), `dataBrand` je technický slug (`dannam`) — filter v katalógu používa `dataBrand`, takže slug po vytvorení už nemeň.
- Názvy súborov obrázkov bez medzier a diakritiky.

## 2. Ladenie quizu (kto dostane akú vôňu)

Každá vôňa má v `products.js` pole `quiz` — toto je JEDINÉ miesto, kde sa quiz ladí:

```js
quiz: { sweet: 2, woody: 2, night: 3, loud: 2 },   // Babycat Raw Bourbon
```

**Osi a škála 0–3** (os s nulou vynechaj):
- charakter: `sweet` (sladké/gourmand) · `fresh` (svieže/citrus) · `floral` (kvetinové) · `woody` (drevité/musk/koža)
- príležitosť: `day` · `night` · `summer` · `universal`
- hlasitosť: `loud` (výrazná) · `soft` (decentná)

**Ako sa počíta výsledok:** odpovede zákazníka tvoria rovnaký vektor (napr. „večer na rande" = night:3, „výrazná" = loud:2). Skóre vône = súčet násobkov po osiach. Najvyššie 3 skóre = výsledok.

**Prakticky:** „chcem, aby quiz častejšie ponúkal vôňu X ľuďom, čo chcú Y" → zdvihni vôni X číslo na osi Y. Príklad z praxe: Babycat sa neukazoval pri „večer + výrazná", lebo mal night:2, loud:1 — zdvihnutie na night:3, loud:2 ho dostalo na 2. miesto (pri drevitej preferencii na 1.).

**Otázky a ich váhy** sú v `quiz.html` v konštante `QUESTIONS` — meniť texty otázok môžeš voľne, váhy v `tags` ovplyvňujú to isté skórovanie.

⚠️ Vôňa **bez `quiz` poľa sa vo výsledkoch nikdy neukáže** — quiz.html na to upozorní v konzole prehliadača (F12 → Console).

## 3. Typy vône a filtre v katalógu

Katalóg má dva rozklikávacie filtre: **Značka** (scrollovateľný zoznam) a **Typ vône**. Dajú sa kombinovať (značka A typ naraz), „Zrušiť filtre ✕" zruší oba.

Typ vône určuje pole `types` pri každom parfume v `products.js` (1–3 typy):

| Kľúč v kóde | Zobrazí sa ako |
|---|---|
| `fresh` | Svieža & citrusová |
| `fruity` | Ovocná |
| `sweet` | Sladká |
| `spicy` | Korenistá |
| `floral` | Kvetinová |
| `woody` | Drevitá |
| `musky` | Čistá & musky |

Zobrazované názvy (aj pridanie nového typu) sa menia v `catalog.html` v konštante `TYPE_LABELS`.

## 4. Sety

Sety sú v `products.js` úplne dole v poli `const sets = [...]`:

```js
{
  name: "Everyday Set", tagline: "Celý rok, každý deň",
  items: ["Imagination", "Musk Therapy", "Pomelo Oolong"],  // presné `name` produktov!
  size: "2ml", price: 32.9, fullPrice: 35,                  // fullPrice sa zobrazí prečiarknutý
  types: ["fresh", "musky"],                                // pre filter Typ vône
  desc: "Tri univerzálne vône..."
}
```

- Sety majú **vlastnú sekciu „Sety" nad katalógom** (catalog.html, `#setsGrid`) — katalógový grid obsahuje len jednotlivé vône a filtre sa setov nedotýkajú.
- Nový set = skopíruj blok a uprav. `items` musia presne sedieť s `name` produktov, inak sa fľaša na karte nezobrazí.
- **Mierky fliaš na karte setu:** PNG fliaš majú rôzne priehľadné okraje, preto má catalog.html mapu `BOTTLE_BOX` (vymerané z alfa kanála), vďaka ktorej vyzerajú flakóny rovnako veľké a stoja na spoločnej podlahe. Pri vôni, ktorá v mape nie je, sa použije rozumný default — presné čísla dopočítaš python príkazom uvedeným v komentári priamo nad mapou.
- Set sa pridáva do košíka ako **jedna položka** („Everyday Set, 3×2 ml") a v košíku sa zobrazí ako bundle — miniatúrna trojica fliaš setu vedľa seba (žiadny extra obrázok netreba, skladá sa z existujúcich fotiek fliaš).

## 5. Nastavenia (velour-config.js)

```js
freeShippingFrom: 39,      // prah dopravy zadarmo v € — premietne sa do košíka aj lišty
newsletterEndpoint: ''     // KAM sa posielajú e-maily z popupu a quizu
```

⚠️ **Kým je `newsletterEndpoint` prázdny, e-maily sa NEZBIERAJÚ** (ostanú len v prehliadači návštevníka). Najrýchlejšie riešenie: formspree.io → registrácia zadarmo → New form → skopíruj URL v tvare `https://formspree.io/f/XXXXXXXX` medzi úvodzovky. Funguje aj MailerLite/Klaviyo form action.

Pri zmene prahu dopravy zladiť aj texty: cart-note v košíku (3× — index, catalog, fragrance, quiz), FAQ odpoveď o doprave a trust bar na indexe — vyhľadaj „39" v týchto súboroch.

## 6. Texty, ktoré budeš meniť najčastejšie

- **Rotujúca lišta hore** (3 správy): blok `<!-- ANNOUNCEMENT BAR -->` na začiatku každej stránky (index, catalog, fragrance, quiz) — meniť treba na všetkých, sú to kópie.
- **FAQ**: `index.html`, sekcia `<!-- FAQ -->` — každá otázka je jeden `faq-item` blok, kopíruj existujúci.
- **Sekcia Ateliér** (čo je odstrek): `index.html`, blok `<!-- ATELIER -->`.
- **Popup** (−10 %): blok `<!-- NEWSLETTER POPUP -->` v index/catalog/fragrance.

## 7. Košík a pokladňa

Košík je spoločný pre celý web (localStorage, kľúč `velour_cart`). Tlačidlo „Pokračovať k pokladni" je zatiaľ atrapa — zobrazí toast. Plán: napojiť na Shopify checkout cez cart permalink, keď bude store s produktmi a platbami (frontend ostane tento).

## 8. Ako si zmeny lokálne pozrieť a otestovať

```bash
cd ~/Desktop/velour && python3 -m http.server 8000
```
→ otvor http://localhost:8000. **Pozor na cache** — ak nevidíš zmenu, obnov cez Cmd+Shift+R alebo pridaj do URL `?v=2`. Po väčších zmenách layoutu poprosiť Clauda o `mobile-reviewer` audit (kontroluje mobil bez screenshotov).

## 9. Strategické dokumenty

Biznis plán, marketing a financie sú v `~/Desktop/velour-strategy/`:
`01-analyza-mrrizz.md` · `02-strategia.md` · `03-marketing.md` (100 TikTok nápadov, e-maily) · `04-financie-a-90-dnovy-plan.md` · `05-implementacny-stav.md` (čo je hotové a čo ďalej).
