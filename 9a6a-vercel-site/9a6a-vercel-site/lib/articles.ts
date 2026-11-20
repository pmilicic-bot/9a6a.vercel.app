export type Article = {
  slug: string; title: string; date: string; category: string; location: string;
  excerpt: string; body: string[]; source: string; sourceLabel: string; tag: string;
};

export const articles: Article[] = [
  {
    slug: 'cn3a-safi-morocco-cq-ww-dx-2017', title: 'Safi, Morocco – CQ WW DX Contest 2017', date: '17. 01. 2018.', category: 'DX & CONTEST', location: 'Safi / Casablanca, Morocco',
    excerpt: 'Izvještaj o sudjelovanju u međunarodnoj natjecateljskoj ekipi CN3A u kategoriji Multi/Multi.',
    body: ['Objava na izvornoj stranici bilježi sudjelovanje Petra Miličića, 9A6A, u ekipi CN3A tijekom CQ WW DX Contesta 2017. Natjecateljska ekipa radila je u kategoriji Multi/Multi.', 'Izvorna objava navodi CN3A team i lokaciju u Maroku. Fotografije i detaljniji izvještaj bit će dodani u ovu arhivu kada budu dostupni.'],
    source: 'https://9a6a.wordpress.com/2018/01/17/safi-morocco-cq-ww-dx-contest-2017-cn3a-team/', sourceLabel: 'Izvorni članak – CN3A 2017', tag: 'CN3A'
  },
  {
    slug: 'paul-scherrer-institute', title: 'The Paul Scherrer Institute', date: '17. 01. 2018.', category: 'ZNANOST & TEHNOLOGIJA', location: 'Villigen, Switzerland',
    excerpt: 'Posjet institutu PSI, švicarskom istraživačkom centru za prirodne i inženjerske znanosti.',
    body: ['Paul Scherrer Institute (PSI) je, prema opisu izvorne objave, najveći švicarski istraživački institut za prirodne i inženjerske znanosti.', 'U arhivi je zabilježena i fotografija označena kao „PSI laser”. Galerija će biti dopunjena originalnim fotografijama.'],
    source: 'https://9a6a.wordpress.com/2018/01/17/the-paul-scherrer-institute/', sourceLabel: 'Izvorni članak – PSI', tag: 'PSI'
  },
  {
    slug: 'cern-geneva', title: 'CERN, Geneva', date: '17. 01. 2018.', category: 'ZNANOST & TEHNOLOGIJA', location: 'Geneva, Switzerland',
    excerpt: 'Bilješka s posjeta CERN-u, europskom laboratoriju za fiziku čestica u blizini Ženeve.',
    body: ['Izvorna objava predstavlja CERN – Europsku organizaciju za nuklearna istraživanja – i njegov laboratorij za fiziku čestica na francusko-švicarskoj granici.', 'U staroj objavi spominju se fotografije kontrolne sobe i CERN-a. Ovdje je pripremljeno mjesto za njihovo ponovno postavljanje.'],
    source: 'https://9a6a.wordpress.com/2018/01/17/cern-geneva/', sourceLabel: 'Izvorni članak – CERN', tag: 'CERN'
  },
  {
    slug: 'australia-sydney-canberra', title: 'Australia – Sydney & Canberra', date: '17. 01. 2018.', category: 'PUTOVANJA', location: 'Sydney & Canberra, Australia',
    excerpt: 'Fotografske bilješke iz Sydneya i Canberre, uključujući Operu u Sydneyu i Parliament House.',
    body: ['Objava okuplja fotografije i kratke bilješke s putovanja u Australiju. Među navedenim mjestima su Sydney Opera House, Sydney i Parliament House u Canberri.', 'Na novoj stranici fotografije će biti prikazane u galeriji čim budu dodane u mapu public/images.'],
    source: 'https://9a6a.wordpress.com/2018/01/17/sydney-australia/', sourceLabel: 'Izvorni članak – Sydney i Canberra', tag: 'AUSTRALIA'
  },
  {
    slug: 'auckland-new-zealand', title: 'Auckland, New Zealand', date: '17. 01. 2018.', category: 'PUTOVANJA', location: 'Auckland & Piha Beach, New Zealand',
    excerpt: 'Putopisna bilješka s fotografijama Aucklanda, Centennial Parka i plaže Piha.',
    body: ['Stara objava sadrži fotografske zapise iz Aucklanda, uključujući Auckland Centennial Park i Piha Beach na Novom Zelandu.'],
    source: 'https://9a6a.wordpress.com/2018/01/17/auckland-new-zealand/', sourceLabel: 'Izvorni članak – Auckland', tag: 'NEW ZEALAND'
  },
  {
    slug: 'thailand-bangkok', title: 'Thailand – Bangkok', date: '17. 01. 2018.', category: 'PUTOVANJA', location: 'Bangkok & Ayutthaya, Thailand',
    excerpt: 'Fotografski zapisi iz Bangkoka i povijesnog grada Phra Nakhon Si Ayutthaya.',
    body: ['U arhivi su zabilježeni Bangkok i Phra Nakhon Si Ayutthaya. Ova stranica predviđena je za fotografije i putopisne bilješke s putovanja.'],
    source: 'https://9a6a.wordpress.com/2018/01/17/thailand-bangkok/', sourceLabel: 'Izvorni članak – Bangkok', tag: 'THAILAND'
  },
  {
    slug: 'great-ocean-road-australia', title: 'Australia – Great Ocean Road', date: '15. 01. 2017.', category: 'PUTOVANJA', location: 'Victoria, Australia',
    excerpt: 'Zapis o poznatoj obalnoj cesti Great Ocean Road u australskoj saveznoj državi Victoriji.',
    body: ['Great Ocean Road proteže se uz jugoistočnu obalu australske savezne države Victorije. Izvorna objava opisuje cestu dugu približno 243 kilometra, poznatu po obalnim krajolicima i formacijama Twelve Apostles.', 'Cesta je izgrađena između 1919. i 1932. godine, a posvećena je vojnicima poginulima u Prvom svjetskom ratu.'],
    source: 'https://9a6a.wordpress.com/2018/01/17/australia-great-ocean-road/', sourceLabel: 'Izvorni članak – Great Ocean Road', tag: 'AUSTRALIA'
  },
  {
    slug: 'mexico-tijuana', title: 'Mexico – Tijuana', date: '15. 01. 2017.', category: 'PUTOVANJA', location: 'Tijuana, Mexico',
    excerpt: 'Fotografska bilješka iz Tijuane uz granicu SAD-a i Meksika.',
    body: ['Objava iz siječnja 2017. bilježi posjet Tijuani. U staroj arhivi fotografija je označena kao US–Mexico border wall.'],
    source: 'https://9a6a.wordpress.com/2017/01/15/mexico-tijuana/', sourceLabel: 'Izvorni članak – Tijuana', tag: 'MEXICO'
  },
  {
    slug: 'hawaii-waikiki-pearl-harbor', title: 'Hawaii – Waikiki & Pearl Harbor', date: '15. 01. 2017.', category: 'PUTOVANJA', location: 'Honolulu, Hawaii',
    excerpt: 'Fotografske bilješke s Waikiki plaže i memorijalnog područja Pearl Harbor.',
    body: ['U objavi su navedeni Waikiki Beach, Honolulu i USS Arizona Memorial u Pearl Harboru.'],
    source: 'https://9a6a.wordpress.com/2017/01/15/hawaii-waikiki-pearl-harbor/', sourceLabel: 'Izvorni članak – Hawaii', tag: 'HAWAII'
  },
  {
    slug: 'cq-ww-contest-2014-cn3a', title: 'CQ WW Contest 2014 from Morocco – CN3A', date: '04. 11. 2014.', category: 'DX & CONTEST', location: 'Morocco',
    excerpt: 'Rad iz Maroka u CQ WW DX Contestu 2014. pod pozivnom oznakom CN3A.',
    body: ['Izvorna WordPress naslovnica najavljuje članak o radu iz Maroka u CQ WW DX Contestu 2014. pod pozivnom oznakom CN3A.', 'Potpuni tekst i fotografije potrebno je dodatno preuzeti iz izvorne objave ili iz osobne arhive.'],
    source: 'https://9a6a.wordpress.com/2014/11/04/cq-ww-contest-2014-from-morocco-cn3a/', sourceLabel: 'Izvorni članak – CN3A 2014', tag: 'CN3A'
  },
  {
    slug: 'radio-amateur-journey-across-america', title: 'Radioamatersko putovanje po Americi', date: '17. 03. 2014.', category: 'RADIO & CONTEST', location: 'Tennessee · Maryland · Connecticut, USA',
    excerpt: 'Tennessee Contest Group, rad u ARRL SSB natjecanju iz W3LPL i posjet sjedištu ARRL-a.',
    body: ['Sredinom veljače 2014. Petar 9A6A boravio je u Oak Ridgeu u Tennesseeju. Tijekom boravka susreo se s članovima Tennessee Contest Groupa, sudjelovao u ARRL SSB natjecanju iz postaje W3LPL i posjetio sjedište ARRL-a u Newingtonu, Connecticut.', 'Članovi Tennessee Contest Groupa okupljaju se na redovitim susretima, razmjenjuju iskustva i sudjeluju u velikim svjetskim natjecanjima. Tijekom posjeta održan je susret s operatorima Patrickom W4PV, Johnom N8UM i Nedom K1GU.', 'Na poziv Franka Donovana W3LPL, Petar je sudjelovao u ARRL SSB natjecanju. Radio je na 15-metarskom opsegu u Multi/Multi ekipi. Izvorni izvještaj detaljno opisuje operatorska mjesta, prijamno-odašiljačke sustave i antensku infrastrukturu postaje.', 'Na 15 m ekipa je ostvarila približno 2.200 veza i 137 množitelja. Izvještaj posebno ističe iskustvo rada s druge strane Atlantika.', 'U Newingtonu je uslijedio posjet sjedištu ARRL-a i susret s tadašnjim glavnim tajnikom Daveom Sumnerom K1ZZ. Razgovaralo se o radioamaterizmu u Hrvatskoj, međunarodnoj suradnji i aktivnostima IARU Regije 1.'],
    source: 'https://9a6a.wordpress.com/2014/03/17/radio-amateur-journey-across-america-tennessee-contest-group-w3lpl-and-arrl-hq/', sourceLabel: 'Izvorni članak na WordPressu', tag: 'USA REPORT'
  },
  {
    slug: 'receiving-system-multiple-antennas', title: 'The receiving system with multiple antennas for 160m, 80m and 40m', date: '06. 06. 2013.', category: 'RADIO TEHNIKA', location: 'Antenna systems · HF',
    excerpt: 'Tehnički članak o prijamnom sustavu s više antena za najniže KV opsege.',
    body: ['Članak opisuje prijamni sustav s više antena za 160, 80 i 40 metara, razvijen zbog QRM-a, statičkih pražnjenja i problema prijama DX stanica na nižim KV opsezima.', 'Sustav koristi više Beverage antena, daljinski odabir smjera, pretpojačala i pojasne filtre za 1,8, 3,5 i 7 MHz. Upravljačka logika omogućuje neovisno biranje smjera prijama za pojedine opsege.', 'U izvornom članku opisane su izvedbe upravljačkih i kontrolnih kutija, izbor pretpojačala prema koncepciji W7IUV te rezultati mjerenja. Originalni PDF od pet stranica dostupan je putem poveznice.'],
    source: 'https://9a6a.wordpress.com/wp-content/uploads/2013/06/prijamni_sustav_s_vise_antena_za_160_80_i_40_m.pdf', sourceLabel: 'Preuzmi izvorni PDF (5 stranica)', tag: 'ANTENNAS'
  },
  {
    slug: 'hf-linear-amplifiers', title: 'HF Linear amplifiers – from idea to realization', date: '14. 01. 2013.', category: 'RADIO TEHNIKA', location: 'HF amplifiers · Radio HRS 3/2012',
    excerpt: 'Članak o konstrukciji i izradi KV linearnih pojačala, objavljen u časopisu Radio HRS.',
    body: ['Članak „Linearna pojačala za KV – od ideje do realizacije” objavljen je u rubrici elektronika, teorija i gradnje časopisa Radio HRS 3/2012.', 'U tekstu se govori o radioamaterskoj konstrukciji periferne opreme, antena, pretpojačala, izlaznih pojačala, antenskih preklopnih sustava i mjernih uređaja.'],
    source: 'https://9a6a.wordpress.com/wp-content/uploads/2013/01/linear-pa.pdf', sourceLabel: 'Preuzmi izvorni PDF', tag: 'LINEAR PA'
  },
  {
    slug: 'activity-from-albania-za-9a6a', title: 'Activity from Albania – ZA/9A6A', date: '20. 08. 2012.', category: 'DX AKTIVNOST', location: 'Near Tirana, Albania',
    excerpt: 'Radioamaterska aktivnost iz okolice Tirane s uređajem ATLAS 210x i dipolom za 40, 15 i 10 metara.',
    body: ['Izvorna objava navodi aktivnost 7. kolovoza 2012. u blizini Tirane pod pozivnom oznakom ZA/9A6A.', 'Korištena oprema: primopredajnik ATLAS 210x i dipolna antena za 40, 15 i 10 metara.'],
    source: 'https://9a6a.wordpress.com/page/2/', sourceLabel: 'Izvorna arhiva – stranica 2', tag: 'PORTABLE'
  },
];

export const categories = ['SVE', 'RADIO & CONTEST', 'DX & CONTEST', 'RADIO TEHNIKA', 'ZNANOST & TEHNOLOGIJA', 'PUTOVANJA', 'DX AKTIVNOST'];
