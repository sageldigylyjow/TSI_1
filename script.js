let model;
let analyzedConfidence = 0;

// =========================================================
// 1. DATA_BASE (200+ Görnüş) - HAÝWAN WE ÖSÜMLIK MAGLUMAT BAZASY
// =========================================================

// BELLIK: Bu, diňe bir mysal. Siziň doly 200+ görnüşli sanawyňyz bu ýerde dowam etmeli!
const DATA_BASE = {
    // --- HAÝWANLAR (100+) ---
    'lion': { name_tk: 'Ýolbars', desc_tk: 'Afrikaly uly pişik. Erkekleriň gür ýelesi bar. Güýjiň simwoly.', category: 'Haýwan' },
    'tiger': { name_tk: 'Gaplaň', desc_tk: 'Aziýaly, sary we gara zolakly uly pişik. Suwy gowy görýär.', category: 'Haýwan' },
    'leopard': { name_tk: 'Leopard', desc_tk: 'Gara tegmilli pişik. Awyny agaçlara çykarýar. Türkmenistanyň daglyk sebitlerinde gabat gelýän görnüşi bar.', category: 'Haýwan' },
    'cheetah': { name_tk: 'Geçigaplaň', desc_tk: 'Gury ýerde iň çalt ylgawçy. Inçe we uzyn bedenli.', category: 'Haýwan' },
    'wolf': { name_tk: 'Möjek', desc_tk: 'It maşgalasynyň iň uly agzasy. Topar bolup aw edýär. Türkmen sähralarynda köp.', category: 'Haýwan' },
    'fox': { name_tk: 'Tilki', desc_tk: 'Kiçi, hilegär ýyrtyjy. Uzyn guýrukly.', category: 'Haýwan' },
    'bear': { name_tk: 'Aýy', desc_tk: 'Uly, galyň ýüňli, ähli iýiji haýwan. Gyş ukyda ýatýar.', category: 'Haýwan' },
    'hyena': { name_tk: 'Giýena', desc_tk: 'Topar bolup iýmitlenýän ýyrtyjy. Ýabany ite meňzeýär.', category: 'Haýwan' },
    'rhinoceros': { name_tk: 'Ýekegöz (Rino)', desc_tk: 'Uly, galyň derili haýwan. Burnunda şah bar.', category: 'Haýwan' },
    'hippopotamus': { name_tk: 'Begemot', desc_tk: 'Esasan suwda ýaşaýan uly süýdemdiriji.', category: 'Haýwan' },
    'camel': { name_tk: 'Düýe (Tüýlek)', desc_tk: 'Çöl şertlerine ýokary çydamly uly süýdemdiriji. Bir ýa-da iki örküji bar.', category: 'Haýwan' },
    'horse': { name_tk: 'At (Ahalteke)', desc_tk: 'Türkmenistanyň milli gymmatlygy. Çydamlylygy we gözelligi bilen meşhur tohum.', category: 'Haýwan' },
    'dog': { name_tk: 'It (Alabaý)', desc_tk: 'Türkmen Alabaýy: uly, güýçli, mal goramak üçin ulanylýan. Meşhur tohum.', category: 'Haýwan' },
    'cat': { name_tk: 'Pişik', desc_tk: 'Öýlerde iň köp saklanýan haýwan. Kiçi, çalasyn ýyrtyjy.', category: 'Haýwan' },
    'cow': { name_tk: 'Sygyr', desc_tk: 'Esasy süýt we et beriji ferma haýwany.', category: 'Haýwan' },
    'sheep': { name_tk: 'Goýun (Garaköli)', desc_tk: 'Eti we ýüňi üçin möhüm ferma haýwany. Garaköli görnüşi gymmatly.', category: 'Haýwan' },
    'goat': { name_tk: 'Geçi', desc_tk: 'Çalt köpelýän, daglyk ýerleri gowy görýän ferma haýwany.', category: 'Haýwan' },
    'pig': { name_tk: 'Doňuz', desc_tk: 'Gysga aýakly, galyň tenli, ähli iýiji ferma haýwany.', category: 'Haýwan' },
    'rabbit': { name_tk: 'Towşan', desc_tk: 'Kiçi, gysga guýrukly ot iýiji haýwan.', category: 'Haýwan' },
    'squirrel': { name_tk: 'Raketa', desc_tk: 'Agajyň üstünde ýaşaýan we tohum iýýän kiçi süýdemdiriji.', category: 'Haýwan' },
    'kangaroo': { name_tk: 'Kenguru', desc_tk: 'Uly yzky aýakly we torbaly, Awstraliýaly haýwan.', category: 'Haýwan' },
    'deer': { name_tk: 'Jeren (Maral)', desc_tk: 'Görnükli şahly ýa-da şahsyz süýdemdiriji.', category: 'Haýwan' },
    'elephant': { name_tk: 'Pil', desc_tk: 'Dünýäniň iň uly gury ýer haýwany. Uzyn we güýçli hortumy bar.', category: 'Haýwan' },
    'giraffe': { name_tk: 'Zerabyş', desc_tk: 'Dünýäniň iň uzyn boýunly haýwany. Afrikada ýaşaýar.', category: 'Haýwan' },
    'zebra': { name_tk: 'Zebra', desc_tk: 'Gara we ak zolakly afrikaly at görnüşi.', category: 'Haýwan' },
    'dolphin': { name_tk: 'Delfin', desc_tk: 'Akylly deňiz süýdemdirijisi. Oýunçyl häsiýetli.', category: 'Haýwan' },
    'whale': { name_tk: 'Kit', desc_tk: 'Dünýäniň iň uly jandary. Deňizlerde ýaşaýar.', category: 'Haýwan' },
    'shark': { name_tk: 'Akula', desc_tk: 'Deňizleriň ýyrtyjysy. Güýçli we gorkunç balyk.', category: 'Haýwan' },
    'crocodile': { name_tk: 'Krokodil', desc_tk: 'Uly suwda ýaşaýan ýyrtyjy süýreniji.', category: 'Haýwan' },
    'turtle': { name_tk: 'Pyşbaga', desc_tk: 'Gabykly süýreniji. Uzak ýaşaýar.', category: 'Haýwan' },
    'eagle': { name_tk: 'Bürgüt', desc_tk: 'Uly, güýçli ýyrtyjy guş. Ýokarydan aw awlaýar.', category: 'Guş' },
    'falcon': { name_tk: 'Gyrgy (Laçyn)', desc_tk: 'Iň çalt uçýan guşlaryň biri. Ol awy howada tutýar.', category: 'Guş' },
    'owl': { name_tk: 'Baýguş', desc_tk: 'Gijeki ýyrtyjy guş. Başyny 270 gradus öwrüp bilýär.', category: 'Guş' },
    'parrot': { name_tk: 'Papugaý', desc_tk: 'Reňkli tüýli, gürleýän guş.', category: 'Guş' },
    'pigeon': { name_tk: 'Kepderi', desc_tk: 'Şäherlerde köp duş gelýän guş. Parahatçylygyň simwoly.', category: 'Guş' },
    'sparrow': { name_tk: 'Serçe', desc_tk: 'Kiçi, iň meşhur guşlardan biri.', category: 'Guş' },
    'peacock': { name_tk: 'Tawus', desc_tk: 'Erkek tawusyň ajaýyp, uly guýrugy bar.', category: 'Guş' },
    'flamingo': { name_tk: 'Flamingo', desc_tk: 'Uzyn aýakly, gyzyl-gülgüne reňkli guş.', category: 'Guş' },
    'duck': { name_tk: 'Ördek', desc_tk: 'Suwda ýüzýän, ferma we ýabany görnüşleri bar.', category: 'Guş' },
    'swan': { name_tk: 'Ak Guş', desc_tk: 'Uzyn boýunly, ak ýa-da gara reňkli suw guşy.', category: 'Guş' },
    'snake': { name_tk: 'Ýylan', desc_tk: 'Zäherli ýa-da zähersiz süýreniji. Türkmen çöllüklerinde köp görnüşi bar.', category: 'Süýreniji' },
    'lizard': { name_tk: 'Hažžyk (Kertmen)', desc_tk: 'Kiçi süýreniji. Güneşli ýerlerde ýaşaýar.', category: 'Süýreniji' },
    'frog': { name_tk: 'Gurbağa', desc_tk: 'Amfibiýa. Suw ýakasynda ýaşaýar.', category: 'Amfibi' },
    'golden retriever': { name_tk: 'Altyn It', desc_tk: 'Meşhur öý iti, sary ýüňli. Dostlukly häsiýetli.', category: 'Haýwan' },
    'german shepherd': { name_tk: 'Nemes Çopany', desc_tk: 'Iň akylly we wepaly it tohumlaryndan. Gözegçilik üçin ulanylýar.', category: 'Haýwan' },
    'spider': { name_tk: 'Möý', desc_tk: 'Agramyny agajynyň üstünde guran mör-möjek.', category: 'Mör-möjek' },
    'bee': { name_tk: 'Ary', desc_tk: 'Bal we tozan üçin möhüm mör-möjek.', category: 'Mör-möjek' },
    'beetle': { name_tk: 'Çekirtge', desc_tk: 'Gaty gabykly mör-möjek.', category: 'Mör-möjek' },
    'dalmatian': { name_tk: 'Dalmatin It', desc_tk: 'Ak we gara tegmilli it tohumy. Çalasyn we oýunçyl.', category: 'Haýwan' },
    'siberian husky': { name_tk: 'Sibir Hasky', desc_tk: 'Sowuk howa çydamly, mawy gözli it tohumy. Çekiji ulag iti.', category: 'Haýwan' },
    'chihuahua': { name_tk: 'Çiuaua', desc_tk: 'Dünýäde iň kiçi it tohumlaryndan. Meksikadan gelip çykan.', category: 'Haýwan' },
    'poodle': { name_tk: 'Pudel', desc_tk: 'Üýnmeýän tohum. Akylly we suwda ýüzmäge ukyply.', category: 'Haýwan' },
    'beagle': { name_tk: 'Bigle', desc_tk: 'Kiçi, aw iti. Güýçli ysy bilen tanalýar.', category: 'Haýwan' },
    'rottweiler': { name_tk: 'Rottweiler', desc_tk: 'Güýçli we goraýjy it. Ilki bilen mal bakmak üçin ulanylan.', category: 'Haýwan' },
    'boxer': { name_tk: 'Bokser', desc_tk: 'Energiýaly we oýunçyl, gysga burunly it.', category: 'Haýwan' },
    'dachshund': { name_tk: 'Taks (Dachshund)', desc_tk: 'Uzyn bedenli we gysga aýakly nemes tohumy.', category: 'Haýwan' },
    'doberman': { name_tk: 'Doberman', desc_tk: 'Uzyn, garyşyk it. Akylly we goragçy.', category: 'Haýwan' },
    'pug': { name_tk: 'Pug', desc_tk: 'Kiçi, ýygyrtly ýüzli it. Hytaýdan gelip çykan.', category: 'Haýwan' },
    'shih tzu': { name_tk: 'Şi-Tsu', desc_tk: 'Uzyn ýüňli, kiçi it. Hytaý imperatorlarynyň iti.', category: 'Haýwan' },
    'maltese': { name_tk: 'Malta', desc_tk: 'Ak, uzyn ýüňli kiçi it. Ýuwaş we mähirli.', category: 'Haýwan' },
    'labrador retriever': { name_tk: 'Labrador', desc_tk: 'Dünýäde iň meşhur öý itlerinden. Dostlukly we akylly.', category: 'Haýwan' },
    'german shepherd': { name_tk: 'Nemes Çopany', desc_tk: 'Polisiýa we harby işlerde ulanylýan akylly it.', category: 'Haýwan' },
    'golden retriever': { name_tk: 'Altyn It', desc_tk: 'Sary ýüňli, meşhur maşgala iti. Ýuwaş häsiýetli.', category: 'Haýwan' }, // ... Galan haýwan görnüşleri (jemi 100-den gowrak) şu logikany dowam etdirmeli.
    'macaw': { name_tk: 'Makaý Papugaý', desc_tk: 'Uzyn guýrukly, tropiki papugaý. Reňkli tüýleri bar.', category: 'Guş' },
    'hummingbird': { name_tk: 'Kolibri', desc_tk: 'Dünýäde iň kiçi guş. Howada doňup bilýär.', category: 'Guş' },
    'robin': { name_tk: 'Robin', desc_tk: 'Gyzylymtyl döşli kiçi guş. Demirgazyk Ýewropada meşhur.', category: 'Guş' },
    'pelican': { name_tk: 'Pelikan', desc_tk: 'Uzyn çüňkli we uly haltagly suw guşy. Balyk iýýär.', category: 'Guş' },
    'ostrich': { name_tk: 'Dýe Gusy', desc_tk: 'Dünýäde iň uly guş. Uçup bilmeýär, ýöne çalt ylgaýar.', category: 'Guş' },
    'penguin': { name_tk: 'Pingwin', desc_tk: 'Antarktikada ýaşaýan, uçup bilmeýän guş. Suwda gowy ýüzýär.', category: 'Guş' },
    'sealion': { name_tk: 'Deňiz Ýolbarsy', desc_tk: 'Uly, deňiz süýdemdirijisi. Gurluşy möhüre meňzeýär.', category: 'Haýwan' },
    'octopus': { name_tk: 'Sekizaýak', desc_tk: 'Sekiz sany aýakly deňiz jandary. Gaty akylly.', category: 'Haýwan' },
    'jellyfish': { name_tk: 'Meduza', desc_tk: 'Gel görnüşli, suw jandary. Şöhlelendiriji (ýakýan) uçlary bolup biler.', category: 'Haýwan' },
    'lobster': { name_tk: 'Omar (Lobster)', desc_tk: 'Uly gabykly deňiz jandary. Gymmat baha iýmit.', category: 'Haýwan' },
    'crab': { name_tk: 'Leňňeç', desc_tk: 'Gabykly deňiz jandary. Ýörände gapdal hereket edýär.', category: 'Haýwan' },
    'goldfish': { name_tk: 'Altyn Balyk', desc_tk: 'Öýde saklanýan, kiçi balyk. Gyzyl-sary reňkli.', category: 'Haýwan' },
    'trout': { name_tk: 'Forel (Balyk)', desc_tk: 'Arassa, sowuk suwda ýaşaýan balyk.', category: 'Haýwan' },
    'salmon': { name_tk: 'Losos', desc_tk: 'Uly göçüşler edýän balyk. Gyzyl reňkli eti bar.', category: 'Haýwan' },
    'alligator': { name_tk: 'Alligator', desc_tk: 'Krokodile meňzeş süýreniji. Amerikan görnüşi.', category: 'Süýreniji' },
    // --- ÖSÜMLIKLER WE AGAÇLAR (100+) ---
    'oak tree': { name_tk: 'Dub Agajy', desc_tk: 'Gaty agajy, giň ýaprakly. Uzak ömürli.', category: 'Agaç' },
    'pine tree': { name_tk: 'Sosna (Ynjam)', desc_tk: 'Iňňebagly, gyşyna hem ýaşyl galýan agaç.', category: 'Agaç' },
    'palm tree': { name_tk: 'Palma Agajy', desc_tk: 'Tropiki ýerlerde ösýän, uzyn, ýaprakly agaç.', category: 'Agaç' },
    'willow tree': { name_tk: 'Söwüt Agajy', desc_tk: 'Egilýän şahly, köplenç suw ýakasynda ösýän agaç.', category: 'Agaç' },
    'maple tree': { name_tk: 'Klon Agajy', desc_tk: 'Kuz aýlarynda ýapraklary gyzarýan agaç.', category: 'Agaç' },
    'apple tree': { name_tk: 'Alma Agajy', desc_tk: 'Alma berýän miweli agaç. Giňden ýaýran.', category: 'Agaç' },
    'citrus': { name_tk: 'Sitrus Agajy', desc_tk: 'Limonly, apelsinli agaç. Ysy ýakymly.', category: 'Agaç' },
    'bamboo': { name_tk: 'Bambuk', desc_tk: 'Dünýäde iň çalt ösýän ösümliklerden biri. Gurluşykda ulanylýar.', category: 'Agaç' },
    'rose': { name_tk: 'Bägül (Roza)', desc_tk: 'Huşboý ysy bilen tanalýan gül. Söýginiň simwoly.', category: 'Ösümlik' },
    'tulip': { name_tk: 'Lale Güli', desc_tk: 'Merkezi Aziýadan gelip çykan ýaz güli.', category: 'Ösümlik' },
    'sunflower': { name_tk: 'Günbakar', desc_tk: 'Uly sary gül. Tohumy iýilýär.', category: 'Ösümlik' },
    'cactus': { name_tk: 'Kaktus', desc_tk: 'Çöl we gurak ýerlerde ösýän ösümlik.', category: 'Ösümlik' },
    'orchid': { name_tk: 'Orhideýa', desc_tk: 'Tropiki we gymmat baha gül. Dürli we çylşyrymly görnüşli.', category: 'Ösümlik' },
    'daisy': { name_tk: 'Romashka', desc_tk: 'Ak ýaprakly, sary merkezli ýönekeý gül.', category: 'Ösümlik' },
    'fern': { name_tk: 'Gür Ýaprak', desc_tk: 'Gül açmaýan, kölegäni gowy görýän ösümlik.', category: 'Ösümlik' },
    'wheat': { name_tk: 'Bugdaý', desc_tk: 'Esasy azyk ekinlerinden biri. Un we çörek üçin zerur.', category: 'Ösümlik' },
    'cotton': { name_tk: 'Pagta', desc_tk: 'Türkmenistanyň esasy oba hojalyk önümi. Ýüplük önümçiligi üçin ulanylýar.', category: 'Ösümlik' },
    'corn': { name_tk: 'Göle', desc_tk: 'Ýokary energiýaly ekin. Süýji we ýumşak görnüşleri bar.', category: 'Ösümlik' },
    'tomato': { name_tk: 'Pomidor', desc_tk: 'Gyrmyzy reňkli miwe. Giňden ulanylýan gök ekin.', category: 'Ösümlik' },
    'cucumber': { name_tk: 'Hyýar', desc_tk: 'Uzyn, ýaşyl gök ekin. Suwy köp saklaýar.', category: 'Ösümlik' },
    'banana': { name_tk: 'Banan', desc_tk: 'Tropiki miwe. Uzyn we sary gabykly.', category: 'Ösümlik' },
    'grape': { name_tk: 'Üzüm', desc_tk: 'Şiresi, miwesi we şeraby üçin ulanylýan miwe.', category: 'Ösümlik' },
    'potato': { name_tk: 'Kartofel', desc_tk: 'Ýerasty kök (tuberoz) bolup, iýmit üçin ulanylýar.', category: 'Ösümlik' },
    'mushroom': { name_tk: 'Göbäle', desc_tk: 'Köp görnüşi iýilýän ýa-da zäherli bolup bilýän ösümlik.', category: 'Ösümlik' },
     'carrot': { name_tk: 'Käşir', desc_tk: 'Nar orhly kök miwesi. Witamin A-a baý.', category: 'Ösümlik' },
    'onion': { name_tk: 'Sogan', desc_tk: 'Gaty ýiti ysly kök gök ekin. Aşhanada esasy orun eýeleýär.', category: 'Ösümlik' },
    'garlic': { name_tk: 'Sarymsak', desc_tk: 'Güýçli ysy bolan, dermanlyk häsiýetli kök.', category: 'Ösümlik' },
    'lettuce': { name_tk: 'Salat Ýapragy', desc_tk: 'Ýaşyl, inçe ýaprakly ösümlik. Esasan salatlar üçin ulanylýar.', category: 'Ösümlik' },
    'cabbage': { name_tk: 'Kelem', desc_tk: 'Uly, ýaprakly kellesi bolan gök ekin.', category: 'Ösümlik' },
    'tulip': { name_tk: 'Lale Güli', desc_tk: 'Merkezi Aziýadan gelip çykan ýaz güli. Dürli reňklerde bolýar.', category: 'Ösümlik' },
    'iris': { name_tk: 'Iris Güli', desc_tk: 'Gylyç şekilli ýaprakly, owadan gül. Gök we mawy reňkleri meşhur.', category: 'Ösümlik' },
    'daffodil': { name_tk: 'Nargis', desc_tk: 'Sary ýa-da ak, surnaý şekilli gülli ýaz ösümligi.', category: 'Ösümlik' },
    'wheat': { name_tk: 'Bugdaý', desc_tk: 'Esasy azyk ekinlerinden biri. Un we çörek üçin zerur.', category: 'Ösümlik' },
    'rice': { name_tk: 'Tüwi', desc_tk: 'Esasy iýmit çeşmelerinden. Köp suwly ýerlerde ösýär.', category: 'Ösümlik' },
    'olive tree': { name_tk: 'Zeýtun Agajy', desc_tk: 'Ýaşyl miwesi ýag üçin ulanylýan agaç.', category: 'Agaç' }, // ... Galan ösümlik görnüşleri (jemi 100-den gowrak) şu logikany dowam etdirmeli.
};
// =========================================================
// 2. AI WE LOGIKA FUNKSIÝALARY
// =========================================================

async function loadModel() {
    const statusElement = document.getElementById('loadingStatus');
    statusElement.textContent = '🧠 AI modeli ýüklenilýär... (Biraz wagt alyp biler)';
    try {
        // Model ýüklenýär
        model = await mobilenet.load(); 
        statusElement.textContent = '✅ AI Modeli Ýüklendi we Taýýar.';
        document.getElementById('analyzeBtn').disabled = false;
        document.getElementById('loadingStatus').classList.remove('alert-info');
        document.getElementById('loadingStatus').classList.add('alert-success');
    } catch (error) {
        // Ýüklemedäki ýalňyşlyk
        statusElement.textContent = '❌ Ýalňyşlyk: AI modeli ýüklenmedi. (Konsolda F12 barlamaly!)';
        document.getElementById('loadingStatus').classList.remove('alert-info');
        document.getElementById('loadingStatus').classList.add('alert-danger');
        console.error("Model ýüklemede ýalňyşlyk:", error);
    }
}

function previewImage(event) {
    const output = document.getElementById('imagePreview');
    if (event.target.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(){
            output.src = reader.result;
            output.style.display = 'block';
            document.getElementById('resultCard').style.display = 'none';
        }
        reader.readAsDataURL(event.target.files[0]);
    }
}

// 3. IŇ ÇUŇŇUR ANALIZ FUNKSIÝASY
async function analyzeImage() {
    const imgElement = document.getElementById('imagePreview');
    const statusElement = document.getElementById('loadingStatus');
    const resultCard = document.getElementById('resultCard');
    const analyzeBtn = document.getElementById('analyzeBtn');

    if (!model || imgElement.style.display === 'none') {
        alert("AI modeli ýüklenmedik ýa-da surat saýlanmady!");
        return;
    }

    resultCard.style.display = 'block';
    statusElement.textContent = 'Çuňňur Analiz Edilýär...';
    document.getElementById('resultDetails').innerHTML = '';
    analyzeBtn.disabled = true;

    try {
        const predictions = await model.classify(imgElement, 5);
        
        statusElement.textContent = '✅ Analiz Tamamlandy.';
        
        const topPrediction = predictions[0];
        analyzedConfidence = topPrediction.probability;

        // Iň çylşyrymly prosessirleme funksiýasyny çagyrmak
        const finalResult = processClassification(predictions);
        
        // Netijeleri çykarmak
        document.getElementById('resultText').innerHTML = `Görnüş: ${finalResult.name_tk} (${finalResult.category})`;
        
        // --- TÄZE DIZAÝN KODY ---
        const categoryIcon = document.getElementById('categoryIcon');
        const cardElement = document.getElementById('resultCard');
        
        // 1. Kartanyň klasyny täzelemek (reňkler üçin)
        cardElement.className = 'card result-card'; // Ilki arassalamaly
        cardElement.classList.add(`category-${finalResult.category.split('/')[0]}`); 
        
        // 2. Ikonkany täzelemek (görnüşe laýyklykda)
        if (finalResult.category === 'Haýwan') {
            categoryIcon.innerHTML = '🐾'; 
        } else if (finalResult.category.includes('Ösümlik') || finalResult.category === 'Agaç') {
            categoryIcon.innerHTML = '🌳'; 
        } else {
            categoryIcon.innerHTML = '❓'; 
        }
        // --- TÄZE DIZAÝN KODY GUTARDY ---

        const descHTML = `
            <p class="text-primary mt-3">🔎 Düşündiriş:</p>
            <blockquote class="blockquote">${finalResult.desc_tk}</blockquote>
        `;
        document.getElementById('resultDetails').innerHTML = descHTML;
        document.getElementById('confidenceText').textContent = `Iň Ýokary Ynam Derejesi: ${(analyzedConfidence * 100).toFixed(2)}%`;

    } catch (error) {
        document.getElementById('loadingStatus').textContent = '❌ Analizde ýalňyşlyk boldy.';
        document.getElementById('resultText').textContent = 'Analiz kynçylygy: Ýalňyşlyk Konsolda görkezildi.';
        console.error("Analiz kynçylygy:", error);
    }
    analyzeBtn.disabled = false;
}

// 4. ESASY PROSESSIRLEME WE ÇAKLAMA FUNKSIÝASY (Agyrlykly Görnüş Barlagy)
function processClassification(predictions) {
    
    // 1. GÖNÜMEL BAZADAN GÖZLEME (Anyk görnüşiň maglumatlary)
    const directMatch = searchDatabase(predictions);
    if (directMatch.found) {
        return directMatch.data;
    }

    // 2. HAÝWAN TOPARYNYŇ AGYRLYGYNY HASAPLAMA
    const animalWeight = calculateAnimalWeight(predictions);
    const HIGH_ANIMAL_CONFIDENCE_THRESHOLD = 0.50; 
    
    const topPredictionLabel = predictions[0].className.split(',')[0].toLowerCase();
    
    if (animalWeight >= HIGH_ANIMAL_CONFIDENCE_THRESHOLD) {
        // Haýwan toparyny ýokary ynam bilen ýazmak
        return {
            name_tk: `Çaklama: ${topPredictionLabel}`, 
            desc_tk: `AI, bu suratyň Haýwan bolmagyny ýokary ynam bilen tassyklady (Agyrlyk: ${(animalWeight * 100).toFixed(0)}%). Anyk görnüşi maglumat bazasynda ýok, ýöne topary dogry çaklandy.`,
            category: 'Haýwan'
        };
    } 
    
    // 3. ÖSÜMLIK TOPARYNYŇ AGYRLYGYNY HASAPLAMA
    const plantWeight = calculatePlantWeight(predictions);
    const HIGH_PLANT_CONFIDENCE_THRESHOLD = 0.40; 
    
    if (plantWeight >= HIGH_PLANT_CONFIDENCE_THRESHOLD) {
        // Ösümlik toparyny ýokary ynam bilen ýazmak
        return {
            name_tk: 'Tanalmadyk Ösümlik/Agaç',
            desc_tk: `AI, suratyň daşky keşgine seredip, onuň bir Ösümlik ýa-da Agaç bolmagyny çaklaýar (Agyrlyk: ${(plantWeight * 100).toFixed(0)}%). Iň ýokary çaklama: ${topPredictionLabel}.`,
            category: 'Ösümlik' // Aýratyn Agaç/Ösümlik däl-de, umumy 'Ösümlik' diýip görkezýär
        };
    } else {
        // Obýekt ýa-da gaty pes ynam
        return {
            name_tk: 'Tanalmadyk Obýekt',
            desc_tk: `AI, suratyň nämedigini anyk çaklap bilmedi. Iň ýokary çaklama: "${topPredictionLabel}".`,
            category: 'Beýleki'
        };
    }
}

// 5. ANYK GÖRNÜŞI BAZADA GÖZLEME FUNKSIÝASY
function searchDatabase(predictions) {
    for (const prediction of predictions) {
        const englishLabel = prediction.className.split(',')[0].toLowerCase();
        
        for (const key in DATA_BASE) {
            if (englishLabel.includes(key) || key.includes(englishLabel)) {
                return { found: true, data: DATA_BASE[key] };
            }
        }
    }
    return { found: false };
}


// 6. AGYRLYGY HASAPLAMA FUNKSIÝASY (HAÝWAN ÜÇIN)
function calculateAnimalWeight(predictions) {
   const animalKeywords = ['dog', 'cat', 'bird', 'horse', 'bear', 'fish', 'snake', 'mammal', 'lion', 'tiger', 'wolf', 'fur', 'reptile', 'insect', 'animal', 'hound', 'cow', 'sheep', 'goat', 'pig', 'zoo', 'wildlife', 'domestic', 'paws', 'hooves', 'beak', 'claw', 'wing', 'feather', 'chihuahua', 'retriever', 'shepherd', 'terrier', 'leopard', 'cheetah', 'fox', 'hyena', 'rhinoceros', 'hippopotamus', 'camel', 'rabbit', 'squirrel', 'kangaroo', 'deer', 'elephant', 'giraffe', 'zebra', 'dolphin', 'whale', 'shark', 'crocodile', 'turtle', 'eagle', 'falcon', 'owl', 'parrot', 'pigeon', 'sparrow', 'peacock', 'flamingo', 'duck', 'swan', 'lizard', 'frog', 'spider', 'bee', 'beetle', 'husky', 'poodle', 'beagle', 'rottweiler', 'boxer', 'dachshund', 'doberman', 'pug', 'shih tzu', 'maltese', 'labrador', 'macaw', 'hummingbird', 'robin', 'pelican', 'ostrich', 'penguin', 'sealion', 'octopus', 'jellyfish', 'lobster', 'crab', 'goldfish', 'trout', 'salmon', 'alligator'];  
    let animalTotalWeight = 0;

    for (const prediction of predictions) {
        const label = prediction.className.toLowerCase();
        const isAnimal = animalKeywords.some(keyword => label.includes(keyword));
        
        if (isAnimal) {
            animalTotalWeight += prediction.probability;
        } else {
            // Eger haýwan däl-de, beýleki zat bolsa, has pes bal berýär
            animalTotalWeight += prediction.probability * 0.1; 
        }
    }
    
    return animalTotalWeight;
}

// 7. AGYRLYGY HASAPLAMA FUNKSIÝASY (ÖSÜMLIK ÜÇIN)
function calculatePlantWeight(predictions) {
    const plantKeywords = ['tree', 'flower', 'plant', 'leaf', 'bush', 'grass', 'root', 'stem', 'petal', 'fruit', 'vegetable', 'seed', 'wood', 'pine', 'oak', 'shrub', 'forest', 'garden', 'flora', 'harvest', 'cactus'];
    
    let plantTotalWeight = 0;

    for (const prediction of predictions) {
        const label = prediction.className.toLowerCase();
        const isPlant = plantKeywords.some(keyword => label.includes(keyword));
        
        if (isPlant) {
            plantTotalWeight += prediction.probability;
        } else {
            plantTotalWeight += prediction.probability * 0.1; 
        }
    }
    
    return plantTotalWeight;
}