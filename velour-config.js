// Zdieľané nastavenia Velour webu — načítava sa na každej stránke pred inline skriptami.
window.VELOUR = {
  // Prah dopravy zadarmo v € (košík, lišta aj FAQ texty s ním musia byť v súlade).
  freeShippingFrom: 39,

  // Zber e-mailov (popup + quiz). Kým je prázdny, e-maily sa ukladajú len do
  // localStorage návštevníka a NEUVIDÍŠ ich — vlož sem POST endpoint čo najskôr.
  // Najrýchlejšie zadarmo: formspree.io → New form → skopíruj URL v tvare
  // "https://formspree.io/f/XXXXXXXX". Funguje aj MailerLite/Klaviyo form action.
  newsletterEndpoint: ''
};

// Mierky fliaš v setoch (sekcia Sety + miniatúry v košíku) — vymerané
// z pevného obrysu fľaše v alfa kanáli PNG (prah alfa > 60, aby sa
// nepočítali mäkké tiene a odlesky). Vďaka tomu sú fľaše rovnako vysoké
// a vycentrované.
//   h/w  = výška obrázka / šírka fľaše v násobkoch jednotnej viditeľnej výšky
//   xPct/yPct = posun obrázka, aby stred fľaše sedel v strede boxu
// Pre fľašu v novom sete dopočítaš:
//   python3 -c "from PIL import Image; im=Image.open('bottles/SUBOR.png').convert('RGBA'); \
//     a=im.getchannel('A').point(lambda v: 255 if v>60 else 0); \
//     x0,y0,x1,y1=a.getbbox(); W,H=im.size; bh=y1-y0; \
//     print('h',round(H/bh,2),'w',round((x1-x0)/bh,2), \
//       'xPct',round((W/2-(x0+x1)/2)/W*100,1),'yPct',round((H/2-(y0+y1)/2)/H*100,1))"
window.VELOUR.bottleBox = {
  "bottles/louis-vuitton-imagination.png": { h: 1.40, w: 0.41, xPct: 0.1,  yPct: 0.3 },
  "bottles/initio-musk-therapy.png":       { h: 1.09, w: 0.52, xPct: 0,    yPct: 0.2 },
  "bottles/dannam-pomelo-oolong.png":      { h: 1.80, w: 0.73, xPct: -0.2, yPct: 0.3 },
  "bottles/orto-parisi-bergamask.png":     { h: 1.0,  w: 0.45, xPct: 0,    yPct: 0 },
  "bottles/sospiro-vibrato.png":           { h: 1.01, w: 0.45, xPct: 0,    yPct: 0 },
  "bottles/xerjoff-cruzdelsur.png":        { h: 1.26, w: 0.43, xPct: 0,    yPct: -3.3 }
};

// Miniatúra fľaše setu v košíku — slot široký presne podľa fľaše, jednotná
// viditeľná výška 28px, takže trojica je vycentrovaná a fľaše rovnako vysoké.
window.VELOUR.setThumb = function (src) {
  const b = window.VELOUR.bottleBox[src] || { h: 1, w: 0.55, xPct: 0, yPct: 0 };
  const B = 28;
  return '<div class="cart-set-slot" style="width:' + (b.w * B).toFixed(1) + 'px">'
    + '<img class="cart-set-img" src="' + src + '" style="height:' + (b.h * B).toFixed(1)
    + 'px;transform:translate(' + b.xPct + '%,' + b.yPct + '%)"></div>';
};
