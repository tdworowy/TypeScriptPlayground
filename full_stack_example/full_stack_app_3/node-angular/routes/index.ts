import * as express from 'express';
import * as util from 'util';

var router = express.Router();

router.get('/', (req, res, next) => {

  res.render('index',
    { title: 'Express i Angular 2'
    }
  );
});

router.get('/menuitems', (req, res, next) => {
  res.json({ menuItems : [
    { ButtonName : 'About us'},
    { ButtonName : 'Contacts'},
    { ButtonName : 'Login'}
  ] });
});

router.post('/login', (req, res, next) => {
  console.log(`${util.inspect(req.body, false, null)}`);
  res.sendStatus(200);
});
router.get('/boards', (req, res, next) => {
  res.json(
[
  {
    "manufacturer": "JP Australia",
    "manufacturer_logo": "jp_australia_logo.png",
    "logo_class" : "",
    "boards": [
      {
        "name": "Radical Quad",
        "board_types": [ { "board_type": "Wave" } ],
        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",
        "description": "Ekstremalna deska typu Wave",
        "image": "jp_windsurf_radicalquad_ov.png",
        "long_description": "Bez wątpliwości Twinsery i Quady mają ogromną przewagę w warunkach, jakie panują przy brzegu. Wszyscy znani surferzy przerzucili się na takie konfiguracje ze względu na ich niewiarygodną zwrotność. Odpowiedzialny za pomysł tych desek Kauli spopularyzował je dzięki swojemu unikalnemu stylowi. Włożył dużo wysiłku w taki rozwój serii JP, by te Quady mogły być używane na całym świece w bardzo zróżnicowanych warunkach, a nie jedynie do ślizgu wzdłuż fali. W efekcie deski te spisują się świetnie tam, gdzie wcześniej deski z czterema stabilizatorami nie czuły się swojsko, czyli we wczesnym ślizgu, przy dużej prędkości oraz w manewrach nawietrznych.",
        "sizes": [
          { "volume": 68, "length": 227, "width": 53, "sail_min": "< 5.0", "sail_max": "< 5.2" },
          { "volume": 74, "length": 227, "width": 55, "sail_min": "4.0", "sail_max": "5.2" },
          { "volume": 82, "length": 227, "width": 57, "sail_min": "4.5", "sail_max": "5.6" }
        ]
      },
      {
        "name": "Thruster Quad",
        "board_types": [ { "board_type": "Wave" } ],
        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",
        "description": "Wszachstronna deska na fale",
        "image": "jp_windsurf_thrusterquad_ov.png",
        "long_description": "Twórca desek Werner Gnigler i prosurferzy Robby Swift i Ricardo Campello wspólnie pracowali nad nową linią, by powstały niezwykle wszechstronne deski, które zadowoliłyby zarówno zawodnika w Mistrzostwach Świata PWA, jak i aktywnego amatora szukającego potężnej i szybkiej zabawki do pływania po falach. Ich deski nadają się do pływania w bardzo szerokim zakresie warunków, a zastosowanie popularnego układu trzech stateczników sprawia, że oferują szeroki zakres dostrojenia właściwości deski. Nie chodzi tu jedynie o wybór pomiędzy wykorzystaniem deski w konfiguracji z jednym czy z trzema statecznikami, ale również w konfiguracji z większymi bocznymi statecznikami i mniejszym centralnym. Opcje te pozwalają na przesunięcie środka pływalności deski, zmieniając ją z rakiety do pływania w dół fali do plaży w zabawkę do tricków w pływaniu wzdłuż fali.",
        "sizes": [
          { "volume": 73, "length": 228, "width": 55.5, "sail_min": "4.0", "sail_max": "5.2" },
          { "volume": 83, "length": 230, "width": 57.5, "sail_min": "4.5", "sail_max": "5.6" },
          { "volume": 93, "length": 232, "width": 60, "sail_min": "5.0", "sail_max": "6.0" }
        ]
      },
      {
        "name": "Freestyle Wave",
        "board_types": [ { "board_type": "Wave" }, { "board_type" :  "Freestyle"} ],
        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",
        "description": "Mała i wszechstronna deska typu Wave",
        "image": "jp_windsurf_freestylewave_ov.png",
        "long_description": "JP był pierwszym producentem, który wprowadził deski do surfowania Freestyle Wave, a za nim poszli inni. Potem wprowadziliśmy układ z pędnikami dla mniejszych desek serii PRO Edition i znów inni poszli w nasze ślady. Niektórzy producenci nawet nazywają swoje deski Freestyle Wave. Jeśli jednak szukasz oryginału, nie musisz szukać gdzie indziej.",
        "sizes": [
          { "volume": 77, "length": 228, "width": 56, "sail_min": "4.0", "sail_max": "5.8" },
          { "volume": 85, "length": 234, "width": 58.5, "sail_min": "4.4", "sail_max": "6.0" },
          { "volume": 93, "length": 234, "width": 60.5, "sail_min": "4.7", "sail_max": "6.2" }
        ]
      },
      {
        "name": "Freestyle",
        "board_types": [ { "board_type" :  "Freestyle"} ],
        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",
        "description": "Deska do freestylu",
        "image": "jp_windsurf_freestyle_ov.png",
        "long_description": "Steven van Broeckhoven wraz z twórcą desek Wernerem Gniglerem zaprojektowali trzy rozmiary: 90, 100 i 106. Dwa z nich od początku doskonale poradziły sobie ze współczesnymi zarówno potężnymi podwójnymi, jak i złożonymi trickami. Tricki te wymagają szybkich i bezpośrednich desek z ciętą reakcja na drugi i nawet trzeci ruch, i zarówno 90-ka jak 100-ka doskonale sobie tu radzą. Steven i Youp Schmit uwielbiają wrażenia z jazdy na nich na równi z osiągami. Zatem tych desek nie zmienialiśmy. Jednak Steven postanowił zaadaptować lekką deskę freestylową tak, by nie tylko spełniała najwyższe standardy tego typu nowoczesnych desek pod słabym wiatrem, ale by dawała takie same radykalne przeżycia, jak jej mniejsze rodzeństwo.",
        "sizes": [
          { "volume": 90, "length": 230, "width": 60, "sail_min": "4.2", "sail_max": "5.8" },
          { "volume": 100, "length": 228, "width": 64, "sail_min": "4.8", "sail_max": "6.2" },
          { "volume": 106, "length": 227, "width": 65.5, "sail_min": "5.0", "sail_max": "6.5" }
        ]
      },
      {
        "name": "All Ride",
        "board_types": [ { "board_type" :  "Freestyle"} ],
        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",
        "description": "Średnia, wszechstonna deska typu FreeRider",
        "image": "jp_windsurf_allride_ov.png",
        "long_description": "Uniwersalne deski plasują się między Freestyle Wave i Super Sport.  Oferują świetny początkowy ślizg, komfortową jazdę i fantastyczną prędkość końcową. Są to łatwe i wyrozumiałe deski do halsowania dostarczające ekscytujących, elektryzujących wrażeń przy dużej prędkości; deski windsurfingowe z gatunku plug-and-play — „wskakuj na deskę i baw się”.",
        "sizes": [
          { "volume": 96, "length": 237, "width": 60.5, "sail_min": "4.5", "sail_max": "6.5" },
          { "volume": 106, "length": 240, "width": 63, "sail_min": "5.0", "sail_max": "6.7" },
          { "volume": 116, "length": 245, "width": 65.5, "sail_min": "5.5", "sail_max": "7.5" }
        ]
      },
      {
        "name": "Magic Ride",
        "board_types": [ { "board_type" :  "Freestyle"} ],
        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",
        "description": "Wszechstronna deska typu FreeRider",
        "image": "jp_windsurf_magicride_ov.png",
        "long_description": "To zupełnie nowy, ekscytujący koncept bardzo szerokiej, krótkiej i cienkiej deski freeride w ofercie JP. Wyróżnia ją niezwykła łatwość wchodzenia we wczesny ślizg i wyjątkowa łatwość wykonywania zwrotów. Od podobnych desek produkowanych przez konkurencję różni ją to prawdziwie elektryzujące wrażenie zazwyczaj charakterystyczne dla znacznie mniejszych desek. Zarówno ich maksymalna prędkość, jak i szybkość wchodzenia w ślizg są nie do pokonania w swojej klasie.",
        "sizes": [
          { "volume": 104, "length": 239, "width": 68, "sail_min": "5.0", "sail_max": "7.0" },
          { "volume": 118, "length": 239, "width": 76, "sail_min": "6.0", "sail_max": "8.0" },
          { "volume": 132, "length": 240, "width": 84, "sail_min": "> 6.0", "sail_max": "> 6.6" }
        ]
      },
      {
        "name": "X-Cite Ride Plus",
        "board_types": [ { "board_type" :  "Freestyle"} ],
        "manufacturer": "JP Australia",
        "manufacturer_logo": "jp_australia_logo.png",
        "description": "Duża, wszechstronna deska typu FreeRider",
        "image": "jp_windsurf_xciteride_ov.png",
        "long_description": "Pięć generacji desek X-Cite Ride znacząco odcisnęło się na rynku desek. Nazwa X-Cite Ride stała się synonimem komfortowego i sportowego freestyle’u. Wybitne wyniki testów potwierdziły to, a nowa gama desek wciąż bazuje na podstawowej koncepcji. Wprowadzając nowe, niezwykle łatwe deski Magic Ride, zdecydowaliśmy się nieco zmienić pozycję X-Cite Rides i uczynić je bardziej sportowymi. Tak więc PLUS znajdujący się w nazwie odzwierciedla polepszone osiągi i fakt, że 6. generacja jest bardziej sportowa od poprzednich, przy zachowaniu legendarnej łatwości obsługi.",
        "sizes": [
          { "volume": 125, "length": 250, "width": 69, "sail_min": "5.7", "sail_max": "8.0" },
          { "volume": 135, "length": 250, "width": 73, "sail_min": "6.0", "sail_max": "8.5" },
          { "volume": 145, "length": 252, "width": 77, "sail_min": "6.5", "sail_max": "9.5" }
        ]
      }
    ]
  },
  {
    "manufacturer": "RRD",
    "manufacturer_logo" :  "rrd_logo.jpg",
    "logo_class" : "rrd_logo_class",
    "boards": [
      {
        "name": "Hardcore Wave Ltd V5",
        "board_types": [ { "board_type" :  "Wave"} ],
        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",
        "description": "Profesjonalna deska typu Wave",
        "image": "hardcorewave-ltd-88-2-212x349.png",
        "long_description": "W trakcie czterech lat dosiadania fal na całym świecie na profilach Hardcore V4 mieliśmy okazję przetestować wiele różnych nowych profili i prototypów desek wykorzystywanych w odmiennych stylach surfowania. Dzisiaj ukończyliśmy projektowanie czterech nowych magicznych profili. Deski HardcoreWave V5 to najbardziej wszechstronne deski, jakie kiedykolwiek zostały zbudowane od momentu wprowadzenia ich do naszej oferty. Cztery deski, różniące się kolejno 10 litrami wyporności pomiędzy 98 a 68, zostały wyposażone w poczwórny system stateczników, aby maksymalnie wykorzystać sterowność w skrętach zarówno na szczycie, jak i na dole fali.",
        "sizes": [
          { "volume": 68, "length": 227, "width": 53.5, "sail_min": "3.2", "sail_max": "4.7" },
          { "volume": 78, "length": 227, "width": 55.5, "sail_min": "3.7", "sail_max": "5.3" },
          { "volume": 88, "length": 228, "width": 58.5, "sail_min": "4.2", "sail_max": "5.6" }
        ]
      },
      {
        "name": "Wave Cult Ltd V5",
        "board_types": [ { "board_type" :  "Wave"} ],
        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",
        "description": "Wyczynowa deka typu Wave",
        "image": "wavecult-5-ltd-92-212x349.png",
        "long_description": "Nowe kształty naszych kultowych desek 5. generacji zawierają najnowsze osiągnięcia naszych wyczynowych desek windsurfingowych — szersze profile, które są łatwiejsze do opanowania, bardziej stabilne i łatwiej wchodzące w ślizg. Ta najważniejsza cecha — czyli szerszy kadłub — powinna, zdawałoby się, utrudniać manewrowanie, ale gdy pracujesz z cieńszym profilem krawędzi, zwiększonym wygięciem i odpowiednim kształtem dna,  osiągasz zupełnie nowe równanie poziomu wydajności z dodatkowymi bonusami wynikającymi z powiększonej szerokości. Z nową, magiczną formułą, która zwiększa liczbę dni żeglownych i podnosi poziom Twoich umiejętności.",
        "sizes": [
          { "volume": 75, "length": 229, "width": 57, "sail_min": "3.7", "sail_max": "5.2" },
          { "volume": 83, "length": 230, "width": 59, "sail_min": "4.0", "sail_max": "5.7" },
          { "volume": 92, "length": 231, "width": 61, "sail_min": "4.5", "sail_max": "6.2" }
        ]
      },
      {
        "name": "Firewave Ltd",
        "board_types": [ { "board_type" :  "Wave"} ],
        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",
        "description": "Szybka deska typu Wave",
        "image": "firewave-102-212x349.png",
        "long_description": "Kiedy już Ci się zdaje, że wypróbowałeś wszystkie możliwe kształty desek, pewnego dnia budzisz się, by spróbować jednej z naszych nowych desek z kolekcji RRD: HE FIREWAVE. Jest naprawdę szybka, błyskawicznie wchodzi w ślizg, przyspiesza jak deska freeride’owa, a jednocześnie skręca gładko i precyzyjnie na dowolnych falach.",
        "sizes": [
          { "volume": 92, "length": 234, "width": 62, "sail_min": "4.0", "sail_max": "5.7" },
          { "volume": 102, "length": 235, "width": 64, "sail_min": "4.5", "sail_max": "6.2" },
          { "volume": 112, "length": 235, "width": 66, "sail_min": "4.7", "sail_max": "6.7" }
        ]
      },
      {
        "name": "TwinTip Ltd V4",
        "description": "Profesjonalna deska freestylowa",
        "board_types": [ { "board_type" :  "Freestyle"} ],
        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",
        "image": "twintip-v4-91-212x349.png",
        "long_description": "RRD Twin Tip V4 jest pełnokrwistą, od dawna produkowaną deską z bardzo popularnej serii desek Freestyle Board. W tym roku TT jest znacząco szersza w tylnej i środkowej sekcji deski, a węższa w przedniej, by umożliwić bardziej równoległy przepływ wody. Nowy obrys daje desce większe otddziaływanie w tym rejonie, potęgując wrażenia w wybiciu, a jednocześnie zwiększając powierzchnię dla łatwiejszego lądowania. Ponadto bardziej równoległe linie obrysu jeszcze zwiększają szybkość deski i jej zdolności żeglugi pod wiatr, co wcześniej zauważyliśmy w naszych deskach Wave Cult Quad.",
        "sizes": [
          { "volume": 91, "length": 230, "width": 59.5, "sail_min": "3.3", "sail_max": "5.2" },
          { "volume": 101, "length": 227, "width": 63, "sail_min": "4.2", "sail_max": "5.7" }
        ]
      },
      {
        "name": "Freestyle Wave Ltd V3",
        "board_types": [ { "board_type" :  "Freestyle"}, { "board_type" :  "Wave"} ],
        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",
        "description": "Freestylowa profesjonalna deska typu Wave",
        "image": "rrd-freestyle-wave-ltd-v3-100-2-212x349.png",
        "long_description": "Podczas gdy widoczny jest trend w kształtach desek w kierunku kadłubów o wielu statecznikach, my woleliśmy zachować linię klasycznych, niezawodnych i szybko wchodzących w ślizg desek z pojedynczym statecznikiem, przeznaczonych dla tych, którzy życzą sobie krótkich desek uniwersalnego typu. Nowe deski 3. generacji Freestyle Wave to cztery proste, dopracowane i wyrafinowane kształty, które można wykorzystać w najróżniejszych warunkach.",
        "sizes": [
          { "volume": 88, "length": 234, "width": 59, "sail_min": "4.0", "sail_max": "6.2" },
          { "volume": 94, "length": 236, "width": 61, "sail_min": "4.2", "sail_max": "6.4" },
          { "volume": 100, "length": 237, "width": 63, "sail_min": "4.5", "sail_max": "6.7" }
        ]
      },
      {
        "name": "Firemove Ltd V2",
        "board_types": [ { "board_type" :  "Slalom"} ],
        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",
        "description": "Szeroka deska typu Freemove",
        "image": "firemove-ltd-v2-112-212x349.png",
        "long_description": "Zdający się mieć najwięcej sprzecznych cech projekt w kolekcji naszych desek windsurfingowych podbił serca wielu pełnych pasji surferów w czasie dwóch lat od momentu, gdy wprowadziliśmy go na rynek. Koncepcja deski Firemove bazuje na kadłubie z poszerzoną środkową sekcją, silnie zredukowanymi objętością i kształtem krawędzi, połączonymi z bardzo wydłużoną płaską sekcją. Dla wielu to na pierwszy rzut oka bezsensowne połączenie, a w rzeczywistości prawdziwa innowacja dla wszystkich, gdy tylko wypróbują tego magicznego odmieńca wśród desek. W tym roku poszliśmy krok dalej i dopracowaliśmy najważniejsze detale tej serii.",
        "sizes": [
          { "volume": 102, "length": 238, "width": 68, "sail_min": "5.2", "sail_max": "7.2" },
          { "volume": 112, "length": 238, "width": 74, "sail_min": "6.0", "sail_max": "8.0" },
          { "volume": 122, "length": 238, "width": 79, "sail_min": "6.8", "sail_max": "9.0" }
        ]
      },
      {
        "name": "X-Fire Ltd V7",
        "board_types": [ { "board_type" :  "Slalom"} ],
        "manufacturer": "RRD",
        "manufacturer_logo" :  "rrd_logo.jpg",
        "description": "Do slalomu i ścigania",
        "image": "x-fire-v7-114-212x349.png",
        "long_description": "Za gamą desek X-Fire kryje się nadzwyczajny wysiłek i oddanie podczas całego procesu projektowego. Pięć całkiem nowych projektów, każdy będący odmienną koncepcją, doprowadziło do stworzenia linii najlepszych desek przeznaczonych do slalomu, jakie kiedykolwiek wyszły z zespołu RRD. Producent desek Aurelio Verdi wraz z testerem Arnonem Daganem wypróbowali wiele najróżniejszych pomysłów w rygorystycznym programie badawczym mającym na celu udoskonalenia najmniejszych nawet detali desek, które raz za razem wygrywały tytuły mistrza świata PWA pod stopami Antoine Albeau. Mieliśmy zachować uznane na rynku referencyjne wyniki dla przyspieszenia i maksymalnej prędkości, jednocześnie zwiększając łatwość użycia i zakres stosowania desek. Powiodło się nam.",
        "sizes": [
          { "volume": 105, "length": 235, "width": 65, "sail_min": "6.0", "sail_max": "7.8" },
          { "volume": 114, "length": 235, "width": 70, "sail_min": "6.2", "sail_max": "8.4" },
          { "volume": 122, "length": 228, "width": 81, "sail_min": "7.5", "sail_max": "9.5" }
        ]
      }
    ]
  },
  {
    "manufacturer": "Starboard",
    "manufacturer_logo" :  "starboard_logo.jpg",
    "logo_class" : "",
    "boards": [
      {
        "name": "Quad Wave",
        "board_types": [ { "board_type" :  "Wave"} ],
        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",
        "description": "Wave",
        "image": "quad_c.png",
        "long_description":  "Quady są deskami Starboarda — generują maksymalną szybkość i napęd, wnosząc niezwykłą moc i pływalność do Twojego żeglowania. Z nowymi kształtami na rok 2013 Quady radzą sobie na każdej fali i w każdym wietrze.",
        "sizes":  [
          { "volume": 70, "length": 223, "width": 56, "sail_min": "2.3", "sail_max": "4.7" },
          { "volume": 74, "length": 227, "width": 57.5, "sail_min": "3.0", "sail_max": "5.0" },
          { "volume" : 77, "length" : 228, "width" : 58, "sail_min" : "3.5", "sail_max" :  "5.5" }
        ]
      }
      ,
      {
        "name": "nuEVO Wave",
        "board_types": [ { "board_type" :  "Wave"} ],
        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",
        "description": "Prosta deska typu Wave",
        "image": "nuevo_w.png",
        "long_description":  "NuEvo to wysoce wydajna deska mająca cechy deski surfingowej. Wyróżnia się podczas surfowania zarówno w trakcie pływania wzdłuż, jak i w kierunku brzegu, na falach o wysokości pomiędzy falami do kolan i do piersi. Jej specjalnością są ciasne zwroty przez krawędź z fantastycznym przejściem z jednej krawędzi na drugą i bardzo ciasne zwroty na szczycie fali. Ponadto deski NuEvo dobrze radzą sobie na większych falach z dala od brzegu.",
        "sizes":  [
          { "volume": 73, "length": 221, "width": 55, "sail_min": "3.0", "sail_max": "5.0" },
          { "volume": 80, "length": 224, "width": 57, "sail_min": "4.2", "sail_max": "5.3" },
          { "volume" : 93, "length" : 227, "width" : 59.5, "sail_min" : "4.7", "sail_max" :  "6.0" }
        ]
      }
      ,
      {
        "name": "KODE Freestyle Wave",
        "board_types": [ { "board_type" :  "Wave"}, { "board_type" :  "Freestyle"} ],
        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",
        "description": "Deska do freestylu i na fale",
        "image": "kode_freewave_w.png",
        "long_description":  "Deski Kode Wave są szybkimi, sygnowanymi przez Philipa Kostera deskami nowej generacji przeznaczonymi do trików w powietrzu. Deski te dedykowane są surferom, którzy chcą łączyć skoki z potężnymi manewrami na falach. Ich prędkość na prostej i przyspieszenie czynią je najlepszymi do wysokich skoków i podwójnych pętli.",
        "sizes":  [
          { "volume": 72, "length": 223, "width": 55.5, "sail_min": "3.0", "sail_max": "5.0" },
          { "volume": 77, "length": 227, "width": 58, "sail_min": "3.3", "sail_max": "5.3" },
          { "volume" : 82, "length" : 233, "width" : 58.5, "sail_min" : "3.5", "sail_max" :  "5.5" }
        ]
      }
      ,
      {
        "name": "Flare Freestyle",
        "board_types": [  { "board_type" :  "Freestyle"} ],
        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",
        "description": "Deska freestylowa",
        "image": "flare_c.png",
        "long_description":  "Flare to deski, które łatwo łapią powietrze i natychmiast reagują na ruchy surfera. Szybko przyspieszają i wydają się kompaktowe, a także lekkie zarówno w ślizgach, jak i trickach w powietrzu. Są bardzo lekkie, a mimo to pozostają ekstremalnie wytrzymałe. Ponadto ich projekt ułatwia surferom podejmowanie coraz trudniejszych wyzwań, a jednocześnie są tyle „wyrozumiałe”, by pomóc im wykończyć każdy manewr.",
        "sizes":  [
          { "volume": 81, "length": 227, "width": 57.5, "sail_min": "2.5", "sail_max": "5.5" },
          { "volume": 91, "length": 230, "width": 57.5, "sail_min": "4.5", "sail_max": "6.0" },
          { "volume" : 101, "length" : 227, "width" : 59.5, "sail_min" : "5.0", "sail_max" :  "6.8" }
        ]
      }
       ,
      {
        "name": "Isonic Slalom",
        "board_types": [  { "board_type" :  "Slalom"} ],
        "manufacturer": "Starboard",
        "manufacturer_logo" :  "starboard_logo.jpg",
        "description": "Deska o zacięciu slalomowym",
        "image": "isonic_w.png",
        "long_description":  "Są najszybszymi maszynami wyścigowymi zaprojektowanymi do uzyskiwania największych maksymalnych prędkości, najwyższych średnich, największych przyspieszeń wraz ze wspaniałymi możliwościami wyprzedzania w szerokim zakresie warunków. Seria jest zaprojektowana na bazie trzech formatów desek zatwierdzonych przez PWA: idealnego zestawu, który sprawdzi się w każdych warunkach, gdy wybrana zostanie najbardziej odpowiednia deska z każdej z trzech kategorii wielkości iSonic widocznych po prawej.",
        "sizes":  [
          { "volume": 80, "length": 238, "width": 58, "sail_min": "5.2", "sail_max": "7.0" },
          { "volume": 87, "length": 238, "width": 59, "sail_min": "5.2", "sail_max": "7.0" },
          { "volume" : 90, "length" : 231, "width" : 63, "sail_min" : "5.6", "sail_max" :  "7.8" }
        ]

      }
    ]
  }
]

  );
});
export { router } ;
