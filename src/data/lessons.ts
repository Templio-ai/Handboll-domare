import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Välkommen till Handbollsdomande',
    subtitle: 'Grunderna i handboll och domarskap',
    icon: '🏟️',
    heroDescription:
      'Att vara handbollsdomare är ett av de mest givande uppdragen inom idrotten. Du blir en central del av spelet, utvecklar ledarskapsförmågor och bidrar till att varje match spelas rättvist. I den här lektionen får du lära dig grunderna i handboll och vad det innebär att ta steget in i domarrollen – en roll som bygger karaktär, ger självförtroende och gör dig till en viktig del av handbollsfamiljen.',
    sections: [
      {
        title: 'Varför bli domare?',
        icon: '💡',
        content: [
          'Att bli handbollsdomare innebär att du blir en aktiv och viktig del av sporten. Utan domare kan inga matcher spelas, och du har en unik möjlighet att påverka upplevelsen för alla inblandade – spelare, tränare och publik. Som domare utvecklar du ledarskap, snabbt beslutsfattande och förmågan att hantera press, egenskaper som är värdefulla långt utanför handbollsplanen.',
          'Det finns också ekonomiska fördelar med att döma. Redan som ung domare får du ersättning för varje match du dömer, vilket gör det till ett utmärkt sätt att tjäna extra pengar. Ju mer erfaren du blir, desto högre serier kan du döma – och desto bättre blir ersättningen.',
          'Som domare vinner du respekt från spelare och ledare. Du står för rättvisa och ser till att spelet fungerar som det ska. Många före detta spelare vittnar om att domaruppdraget gav dem en helt ny förståelse för handbollen och en djupare uppskattning för sporten.',
        ],
        highlights: [
          'Du är en central del av varje match',
          'Du utvecklar ledarskap och beslutsförmåga',
          'Du tjänar pengar på din hobby',
          'Du vinner respekt och bidrar till rättvist spel',
        ],
      },
      {
        title: 'Planen',
        icon: '📐',
        content: [
          'En handbollsplan mäter 40 meter på längden och 20 meter på bredden. Planen omges av en sidlinje på de långa sidorna och en mållinje (eller ytterlinje) på de korta sidorna. Mitt på varje mållinje står ett mål som är 2 meter högt och 3 meter brett.',
          'Framför varje mål finns ett målområde som avgränsas av en halvcirkelformad linje 6 meter från målet, den så kallade målområdeslinjen. Denna zon är reserverad för målvakten – utespelare får inte beträda den. Linjen räknas som en del av målområdet, vilket betyder att det räcker att trampa på linjen för att det ska räknas som inträngning.',
          'Utanför målområdet löper frikastlinjen (9-meterslinjen) som en streckad halvcirkel. Frikast utförs härifrån eller bakom denna linje. Sju meter rakt framför målet finns 7-meterslinjen, där straffsparkar (7-meterskast) utförs. Den är en meter lång och markerad mitt framför målet.',
          'Mitt på planen finns mittlinjen som delar planen i två halvor. Avkast (spelets start och efter mål) utförs från planens mittpunkt. Längs en av sidlinjerna finns byteszonen, som sträcker sig 4,5 meter åt vardera sidan om mittlinjen. Alla spelarbyten måste ske inom denna zon.',
        ],
      },
      {
        title: 'Spelets grunder',
        icon: '⏱️',
        content: [
          'En ordinarie handbollsmatch för seniorer spelas i två halvlekar om 30 minuter vardera, med 10 minuters halvtidspaus. För ungdomshandboll varierar speltiden beroende på åldersklass: 2x25 minuter för U15–U16, 2x20 minuter för U14, och 2x15 minuter för U12–U13. Yngre åldersgrupper (U9–U11) spelar vanligtvis 1x20 eller 2x15 minuter.',
          'Varje lag får bestå av upp till 16 spelare, varav 7 befinner sig på planen samtidigt (6 utespelare och 1 målvakt). Byten kan göras löpande via byteszonen utan att meddela sekretariatet. Det finns ingen begränsning på antalet byten under en match.',
          'Bollstorleken varierar beroende på ålder och kön. Storlek 3 (58–60 cm, 425–475 g) används av herrar och pojkar 16 år och äldre. Storlek 2 (54–56 cm, 325–375 g) används av damer, flickor 14 år och äldre samt pojkar 12–16 år. Storlek 1 (50–52 cm, 290–330 g) används av flickor 8–14 år och pojkar 8–12 år. Storlek 0 (46–48 cm) används i minihandboll för de allra yngsta.',
        ],
      },
      {
        title: 'Mini- och barnhandboll',
        icon: '👶',
        content: [
          'Mini- och barnhandboll är anpassade för att barnen ska lära sig handbollens grunder i en rolig och trygg miljö. Reglerna är förenklade och anpassade efter barnens ålder och utvecklingsnivå. Det viktigaste är att alla barn får spela, att de har kul och att de lär sig grundläggande färdigheter.',
          'Minihandboll spelas med 4 utespelare och en målvakt per lag. I U7 (7 år och yngre) och U8 spelas 4 mot 4 (utespelare) på en miniplan (20x12 meter). Alla barn ska delta lika mycket och resultatet är sekundärt. I U9 spelas också 4 mot 4 på miniplan, men kan övergå till 5 mot 5 på kortplan (26x20 meter). I U10 spelas 5 mot 5 på kortplan.',
          'I U11 (11 år och yngre) spelas 6 mot 6 på en fullstor plan (40x20 meter). Reglerna börjar likna de ordinarie reglerna mer, men med förenklingar – till exempel tillämpas inte 4-passningsregeln vid passivt spel i U14 och yngre, och bestraffningar är mildare.',
          'Genomgående för all barnhandboll gäller att fokus ska ligga på lärande och glädje, inte på resultat. Som domare i barnmatcher är din viktigaste uppgift att skapa en positiv och säker miljö där barnen kan utvecklas.',
        ],
      },
      {
        title: 'Domarens roll',
        icon: '🎯',
        content: [
          'Domaren har flera viktiga uppgifter under en handbollsmatch. Den mest grundläggande är att upprätthålla reglerna och se till att matchen spelas på ett korrekt och rättvist sätt. Du är den yttersta auktoriteten på planen och dina beslut är slutgiltiga.',
          'En annan central uppgift är att säkerställa spelarnas säkerhet. Du ska reagera snabbt och bestämt vid farligt spel och se till att ingen spelare utsätts för onödig risk. Genom rätt bestraffningar skyddar du spelarna och upprätthåller respekten för reglerna.',
          'Domaren ska också hålla spelet flytande. Det innebär att du inte ska blåsa onödigt, utan använda fördelstanken (advantage rule) för att låta spelet fortsätta när ett avbrott skulle missgynna det drabbade laget. Du ska vara konsekvent i dina bedömningar genom hela matchen, så att båda lagen vet vad som gäller.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Spelregler i Fokus',
    subtitle: 'De viktigaste reglerna att kunna',
    icon: '📖',
    heroDescription:
      'I den här lektionen dyker vi djupt ned i handbollens spelregler. Vi går igenom allt från bollhantering och målvaktsregler till målområdets betydelse och den viktiga fördelstanken. En god regelkunskap är grunden för varje bra domare – ju bättre du kan reglerna, desto säkrare och mer konsekvent blir du i dina beslut.',
    sections: [
      {
        title: 'Regelöversikt',
        icon: '📋',
        content: [
          'Handbollens regelverk är uppdelat i 18 regler som täcker alla aspekter av spelet. Regel 1 handlar om planen och dess dimensioner. Regel 2 reglerar speltiden, slutsignalen och timeout. Regel 3 behandlar bollen – storlek och egenskaper. Regel 4 definierar lagets sammansättning, byten och utrustning.',
          'Regel 5 och 6 handlar om målvakten respektive målområdet – två av de mest speciella aspekterna av handboll. Regel 7 reglerar hur bollen får spelas: dribbla, passa, skjuta. Regel 8 är den stora regelkategorin som täcker regelbrott och osportsligt uppförande.',
          'Regel 9 avgör när ett mål är giltigt. Reglerna 10–14 behandlar olika kasttyper: avkast, inkast, målkast, frikast och 7-meterskast. Reglerna 15–18 reglerar bestraffningar, domarnas roll, tidtagaren och sekretariatet samt matchvärden. Tillsammans utgör dessa regler ramverket som du som domare ska upprätthålla.',
        ],
      },
      {
        title: 'Bollhantering',
        icon: '🤾',
        content: [
          'Reglerna för bollhantering är bland de vanligaste att döma under en match. Trestegarsregeln innebär att en spelare får ta maximalt tre steg med bollen i händerna. Efter tre steg måste spelaren passa, skjuta eller studsa bollen. Om spelaren tar fler än tre steg utan att studsa döms det som gångfel.',
          'Tresekondersregeln innebär att en spelare inte får hålla bollen stilla i mer än tre sekunder. Spelaren måste agera – passa, skjuta eller studsa – inom den tiden. Dubbeldribbling är inte tillåten: om en spelare studsar bollen, tar upp den och sedan studsar igen utan att ha passat, skjutit eller tappat bollen i en blockering, döms det som dubbeldribbling.',
          'Spelarna får använda händer, armar, huvud, bål, lår och knän för att spela bollen. Det är inte tillåtet att använda fötter eller underben – det är bara målvakten som får använda fötterna (och bara inom målområdet). Om en spelare spelar bollen med foten är det regelbrott, men om bollen träffar foten oavsiktligt och utan fördel kan domaren tillåta spelet att fortsätta.',
        ],
      },
      {
        title: 'Målvaktsregler',
        icon: '🧤',
        content: [
          'Målvakten har en unik roll i handboll och lyder under särskilda regler. Målvakten är den enda spelaren som får vistas i målområdet och får använda hela kroppen, inklusive fötterna, för att försvara målet. Inom målområdet har målvakten stor frihet att agera.',
          'Målvakten får lämna målområdet utan boll och deltar då i spelet som en vanlig utespelare. Det innebär att målvakten då måste följa samma regler som alla andra spelare – inga fötter, trestegarsregel och tresekondersregel gäller. Målvakten får dock inte lämna målområdet med bollen under kontroll, det vill säga efter att ha fångat eller stoppat bollen.',
          'En viktig detalj är att en utespelare aldrig får spela bollen till sin egen målvakt om målvakten befinner sig i målområdet och bollen är i rörelse mot målområdet. Om bollen redan är inne i målområdet får målvakten fritt spela den. Målvakten får inte heller plocka upp en boll som ligger stilla eller rullar på marken utanför målområdet medan målvakten själv står i målområdet.',
        ],
      },
      {
        title: 'Målområdet',
        icon: '🔴',
        content: [
          'Målområdet avgränsas av målområdeslinjen som löper i en halvcirkel 6 meter från målet. Denna zon är exklusivt reserverad för målvakten. Ingen utespelare får beträda målområdet, varken med eller utan boll. Målområdeslinjen räknas som en del av målområdet – att trampa på linjen är samma sak som att kliva in i området.',
          'En viktig och spektakulär del av handbollen är att spelare får hoppa över målområdet för att skjuta. En spelare får alltså ta sats utanför målområdeslinjen, hoppa, och släppa bollen innan hen landar. Om bollen lämnar spelarens hand innan landning i målområdet är det tillåtet och kan resultera i mål. Om spelaren däremot landar i målområdet med bollen kvar i handen döms det som inträngning.',
          'Frikastlinjen (9-meterslinjen) är den streckade halvcirkeln utanför målområdet. Frikast utförs från eller bakom denna linje. Vid frikast ska det försvarande laget stå minst 3 meter från kastaren. 7-meterslinjen, rakt framför målet, används vid straffsituationer – till exempel när en klar målchans förstörs genom regelbrott.',
        ],
      },
      {
        title: 'Fördelstanken',
        icon: '⚖️',
        content: [
          'Fördelstanken (advantage rule) är en av de absolut viktigaste principerna i handbollsdomarens verktygslåda. Grundtanken är enkel: om det lag som blivit utsatt för ett regelbrott fortfarande har fördel i spelsituationen, ska domaren låta spelet fortsätta istället för att blåsa. Att stoppa spelet skulle ju i så fall straffa det lag som redan blivit drabbat.',
          'I praktiken innebär det att du som domare ständigt måste bedöma: "Gynnas det angripande laget av att jag blåser, eller har de redan en bra situation trots regelbrottet?" Om en spelare blir knuffad men ändå lyckas passa till en medspelare i bra läge, bör du låta spelet fortsätta. Blås bara om regelbrottet faktiskt påverkar det angripande lagets möjligheter negativt.',
          'Fördelstanken kräver erfarenhet och mod. Det kan vara frestande att alltid blåsa vid regelbrott, men en bra domare har tålamod och läser spelet. Kom ihåg att du alltid kan ge en uppskjuten bestraffning – du kan till exempel låta spelet fortsätta och sedan ge en varning eller utvisning vid nästa avbrott om regelbrottet motiverar det.',
        ],
      },
      {
        title: 'Mål och resultat',
        icon: '🥅',
        content: [
          'Ett mål räknas när hela bollen passerar mållinjen innanför målramen. Båda domarna ska vara överens om att mål har gjorts. Måldomaren har det primära ansvaret att avgöra om bollen passerat mållinjen helt, men plandomaren kan också bidra med sin bedömning.',
          'Efter ett giltigt mål återupptas spelet med avkast. Det lag som fått mål emot sig utför avkastet. Avkastet ska ske inom 3 sekunder efter domarens signal. Vid avkast får det anfallande lagets spelare inte överskrida mittlinjen före signalen, men motståndarna kan befinna sig på båda planhalvorna.',
          'Om matchen slutar oavgjort och en vinnare krävs (till exempel i cupspel) går matchen till förlängning och eventuellt skytteavgörande. I seriespel är oavgjort ett giltigt resultat. Domaren ansvarar för att målen registreras korrekt i matchprotokollet och att slutresultatet stämmer.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Domartecken – Tala med Händerna',
    subtitle: 'Lär dig alla officiella domartecken',
    icon: '🤚',
    heroDescription:
      'Kommunikation är en av domarens viktigaste färdigheter, och domartecken är ditt främsta verktyg. I en bullrig arena med publik, spelare och ledare som ropar är det dina handtecken som tydligt visar vilka beslut du fattar. I den här lektionen går vi igenom alla 17 officiella domartecken enligt IHF:s regelverk.',
    sections: [
      {
        title: 'Varför domartecken?',
        icon: '📢',
        content: [
          'I en handbollshall kan ljudnivån vara mycket hög, särskilt vid spännande matcher med engagerad publik. Visselpipan fångar uppmärksamheten, men det är domartecknen som kommunicerar vad som har hänt och vilken dom som fattats. Utan tydliga tecken uppstår förvirring och frustration hos spelare, tränare och publik.',
          'Enligt IHF:s (Internationella Handbollförbundet) regelverk finns det 17 officiella domartecken. Varje tecken är noggrant definierat och har en specifik betydelse. Som domare måste du kunna alla tecken och använda dem korrekt och tydligt. Ett otydligt eller felaktigt tecken kan leda till missförstånd och underminera ditt förtroende.',
          'Att behärska domartecknen handlar inte bara om att kunna dem tekniskt – det handlar om att kommunicera med självförtroende. När du visar ett tecken ska du göra det med bestämdhet och tydlighet. Håll armen sträckt, gör stora gester och se till att alla i hallen kan se vad du signalerar.',
        ],
      },
      {
        title: 'Grundläggande tecken',
        icon: '✋',
        content: [
          'Tecken 1 – Inträngning i målområdet: Domaren pekar med sträckt arm mot målområdet för att signalera att en utespelare olovligt har beträtt målområdet. Detta tecken används också om en utespelare spelar bollen inom målområdet på ett otillåtet sätt.',
          'Tecken 2 – Felaktig dribbling (dubbeldribbling): Domaren gör en upprepande upp-och-ned-rörelse med handen för att visa att en spelare har gjort sig skyldig till dubbeldribbling. Denna signal ges ofta i kombination med en visselsignal för att stoppa spelet.',
          'Tecken 3 – För många steg eller håller bollen för länge: Domaren roterar armarna framåt runt varandra i en cirkulär rörelse framför kroppen. Detta tecken används vid gångfel (fler än tre steg) eller om spelaren hållit bollen längre än tre sekunder utan att studsa, passa eller skjuta.',
          'Tecken 4 – Fasthållning eller greppande: Domaren gör en gripande rörelse med slutna händer framför kroppen. Detta signalerar att en spelare har hållit fast en motståndare med armar, händer eller kropp på ett otillåtet sätt.',
          'Tecken 5 – Slå eller stöta emot: Domaren gör en slående rörelse med armen för att visa att en spelare har slagit, stött till eller på annat aggressivt sätt angripit en motståndare. Detta regelbrott kan leda till bestraffning beroende på graden av våld.',
          'Tecken 6 – Anfallsfoul (offensivt regelbrott): Domaren gör en skjutande rörelse med öppen handflata framåt. Detta tecken används när det anfallande laget begår ett regelbrott, till exempel att springa in i en försvarare som har etablerad position.',
          'Tecken 7 – Inkast (riktningsangivande): Domaren pekar med sträckt arm i den riktning som inkastet ska utföras. Armen pekar åt det håll som det kastande laget ska anfalla. Tecknet visas tydligt så att alla spelare vet vilket lag som får inkastet.',
        ],
      },
      {
        title: 'Kast- och speltecken',
        icon: '🔄',
        content: [
          'Tecken 8 – Frikast (riktningsangivande): Domaren pekar med sträckt arm i anfallsriktningen för det lag som får frikastet. Frikast är det vanligaste domslutet under en match och döms vid de flesta regelbrott. Det försvarande laget måste hålla 3 meters avstånd.',
          'Tecken 9 – Målvaktskast: Domaren pekar med sträckt arm mot målområdet för att signalera att målvakten ska utföra ett målvaktskast. Tecknet ges när bollen passerat yttre mållinjen efter att ha berörts av målvakten, eller när en motståndare beträtt målgården.',
          'Tecken 10 – Håll tre meters avstånd: Domaren sträcker ut en arm med handflatan utåt mot den spelare eller det lag som ska hålla avstånd. Tecknet används för att hålla tillbaka försvarsspelare vid frikast så att de håller minst 3 meters avstånd från kastaren.',
          'Tecken 11 – Passivt spel: Domaren höjer en arm med öppen handflata riktad mot det anfallande laget. Denna signal innebär att domaren bedömer att spelet är passivt och att det anfallande laget måste göra ett tydligare försök att nå avslut.',
          'Tecken 12 – Mål: Måldomaren ger två korta visselsignaler och pekar bestämt mot planens mittpunkt för att bekräfta att mål har gjorts. Detta är kanske det mest ikoniska domartecknet och signalerar tydligt för alla i hallen att bollen har passerat mållinjen och att målet är godkänt.',
        ],
      },
      {
        title: 'Bestraffnings- och kontrolltecken',
        icon: '🟨',
        content: [
          'Tecken 13 – Varning, Diskvalifikation och Rapport: Domaren visar gult kort (varning), rött kort (diskvalifikation) eller blått kort (rapport till förbundet) tydligt mot den bestraffade spelaren och sedan mot tidtagarbordet. Varningen registreras i matchprotokollet. Varje spelare kan bara få en varning, och laget kan få maximalt tre varningar totalt.',
          'Tecken 14 – Utvisning 2 minuter: Domaren håller upp en arm med två fingrar sträckta mot den utvisade spelaren. Tecknet ska visas tydligt så att spelaren, sekretariatet och publiken ser vilken spelare som utvisas. Spelaren måste lämna planen och laget spelar undertal i 2 minuter.',
          'Tecken 15 – Timeout (time-out): Domaren bildar ett T med händerna – en hand hålls horisontellt medan den andra placeras vertikalt under. Detta tecken används för att signalera time-out, antingen begärd av ett lag eller beslutad av domaren. Tecknet ska visas tydligt mot tidtagarbordet.',
          'Tecken 16 – Tillåtelse att beträda planen under timeout: Domaren visar detta tecken för att ge tillåtelse åt två av de deltagarberättigade personerna att beträda spelplanen under en timeout, till exempel för att hjälpa en skadad spelare.',
          'Tecken 17 – Förvarningstecken för passivt spel: Domaren håller en arm höjd med öppen handflata. Armen hålls uppe som en förvarning till det anfallande laget att de riskerar att dömas för passivt spel. Efter denna signal har laget maximalt 4 passningar på sig att avsluta anfallet med ett skott mot mål.',
        ],
      },
      {
        title: 'Obligatoriska vs situationella',
        icon: '📌',
        content: [
          'Alla domartecken är viktiga, men vissa är obligatoriska och måste alltid visas. Tecken 11 (passivt spel), tecken 15 (timeout) och tecken 16 (tillåtelse att beträda planen under timeout) är specifikt angivna i reglerna som obligatoriska och ska alltid visas tydligt. Att utelämna dessa tecken räknas som ett domarfel och skapar onödig förvirring.',
          'Andra tecken är situationella och används när de behövs för att förtydliga beslutet. Tecken 9 (målvaktskast) visas när målvakten ska utföra kast. Tecken 10 (håll tre meters avstånd) används när domaren behöver kontrollera spelarnas positionering vid frikast. Tecken 17 (förvarningstecken) visas som förvarning innan passivt spel döms.',
          'Det bästa sättet att lära sig domartecknen är att öva dem regelbundet. Stå framför en spegel och gå igenom alla 17 tecken tills de sitter i muskelminnet. Öva med en kamrat som ger dig olika scenarier – du ska kunna reagera med rätt tecken instinktivt utan att behöva tänka efter. Under matcher ska tecknen komma naturligt och utstråla trygghet.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Bestraffningar & Passivt Spel',
    subtitle: 'Förstå bestraffningsstegen och passivt spel',
    icon: '⚠️',
    heroDescription:
      'Att veta när och hur man bestraffar är avgörande för att upprätthålla rättvisa och säkerhet på planen. I den här lektionen lär du dig bestraffningsstegen – från frikast till diskvalifikation – samt reglerna kring passivt spel. En domare som behärskar bestraffningarna skapar trygghet och respekt hos alla på planen.',
    sections: [
      {
        title: 'Bestraffningsstegen',
        icon: '📊',
        content: [
          'Bestraffningarna i handboll följer en trappa från lättast till strängast: Frikast → Varning (gult kort) → 2 minuters utvisning → Diskvalifikation (rött kort) → Rapport till förbundet. Varje steg är allvarligare än det föregående, och som domare måste du bedöma vilken nivå som är lämplig utifrån situationen.',
          'Ett lag kan få maximalt 3 varningar (gula kort) totalt under en match. Efter tre varningar ska alla ytterligare bestraffningar för det laget vara minst 2 minuters utvisning. En enskild spelare kan få maximalt 1 varning. Om spelaren begår ytterligare regelbrott som motiverar bestraffning ska det bli 2 minuters utvisning.',
          'En spelare som får sin tredje 2-minutersutvisning under en match blir automatiskt diskvalificerad. Det är alltså tre chanser – sedan är spelaren ute för resten av matchen. Vid diskvalifikation spelar laget med en spelare mindre i 2 minuter, men efter de 2 minuterna får en annan spelare ersätta den diskvalificerade.',
          'I särskilt allvarliga fall, till exempel grovt våld eller hotfullt beteende, kan domaren skriva en rapport till förbundet. Rapporten leder till att ärendet behandlas av disciplinnämnden som kan utdöma ytterligare avstängningar eller böter.',
        ],
      },
      {
        title: 'Tillåten vs otillåten kontakt',
        icon: '🤝',
        content: [
          'Handboll är en kontaktsport och viss fysisk kontakt är tillåten. Regel 8 definierar tydligt vad som är tillåtet och vad som inte är det. Tillåten kontakt inkluderar: att använda öppen hand för att blockera eller styra undan en motståndare, frontal kroppskontakt när man kämpar om position, och att använda böjd arm för kroppskontakt under löpning eller i kamp om bollen.',
          'Otillåten kontakt är betydligt bredare och inkluderar: att slå eller rycka bollen ur motståndarens händer, att blockera med armar, ben eller kropp på ett otillåtet sätt, att knuffa en motståndare (med eller utan boll), att springa eller hoppa in i en motståndare, att hålla fast (med armar, händer eller ben) samt att sätta krokben.',
          'Gränsen mellan tillåten och otillåten kontakt kan vara svår att bedöma, särskilt i snabba spelsituationer. Som domare måste du hela tiden fråga dig: "Påverkar kontakten motståndaren negativt? Hade kontakten spelaren i boll som mål, eller var det riktad mot kroppen?" Erfarenhet och matchträning hjälper dig att bli säkrare i dessa bedömningar.',
        ],
      },
      {
        title: 'Utvisning 2 minuter',
        icon: '⏰',
        content: [
          'En 2-minutersutvisning ges vid allvarligare regelbrott. Typiska situationer inkluderar: upprepade regelbrott (progressiv bestraffning), regelbrott mot spelare med klart målläge, farlig kontakt mot huvud, hals eller strupe, hård kroppskontakt mot bål eller kastarm, samt att dra tillbaka en motståndare bakifrån.',
          'När en spelare utvisas i 2 minuter måste hen lämna planen och sitta på utvisningsbänken. Laget spelar med en spelare mindre under hela tvåminutersperioden. Tiden börjar räknas från tidpunkten då domaren blåser och visar utvisningstecknet. Om en målvakt utvisas måste hen bytas ut mot en annan målvakt eller utespelare.',
          'Det är viktigt att notera att en spelares tredje 2-minutersutvisning i samma match automatiskt leder till diskvalifikation. Domaren visar då rött kort direkt. Laget spelar undertal i 2 minuter som vanligt, men den diskvalificerade spelaren får inte delta i resten av matchen.',
        ],
      },
      {
        title: 'Diskvalifikation',
        icon: '🔴',
        content: [
          'Diskvalifikation (rött kort) ges vid grova regelbrott som äventyrar motståndarens hälsa, avsiktligt våldsamt uppförande utanför spelsituationen, eller grovt osportsligt beteende av spelare, tränare eller lagledare. Diskvalifikation kan ges direkt, utan föregående varning eller utvisning, om situationen motiverar det.',
          'En diskvalificerad spelare måste omedelbart lämna planen och får inte delta i resten av matchen. Spelaren ska normalt bege sig till omklädningsrummet. Laget spelar med en spelare mindre i 2 minuter, men efter dessa 2 minuter kan en annan spelare gå in och laget återgår till fullt antal.',
          'Om ett regelbrott är så grovt att det motiverar en rapport till förbundet, markerar domaren detta genom att efter rött kort visa ett så kallat "blått kort" eller anteckna det särskilt i matchprotokollet. Rapporten skickas sedan till distriktsförbundet eller Svenska Handbollförbundet för vidare hantering av disciplinnämnden.',
        ],
      },
      {
        title: 'Filmning',
        icon: '🎭',
        content: [
          'Filmning (simulering) är när en spelare medvetet överdriver eller fejkar kontakt för att lura domaren att döma ett regelbrott som inte har skett. Detta beteende klassas som osportsligt uppförande och ska bestraffas direkt med 2 minuters utvisning.',
          'Vanliga former av filmning inkluderar att kasta sig i marken efter minimal eller ingen kontakt, att överdrivet grippa tag om ansiktet eller kroppen efter en lätt beröring, eller att dramatiskt falla bakåt när en motståndare är i närheten. Dessa beteenden underminerar spelets integritet och respekten för domaren.',
          'Som domare ska du vara uppmärksam på tecken på filmning: överdriven reaktion i förhållande till kontakten, fördröjd reaktion (spelaren faller först efter att ha insett att hen inte fick med sig bollen), eller att spelaren snabbt återhämtar sig efter att ha verkat svårt skadad. Tveka inte att bestraffa filmning – det skickar en tydlig signal om att sådant beteende inte tolereras.',
        ],
      },
      {
        title: 'Passivt spel',
        icon: '⏳',
        content: [
          'Passivt spel innebär att det anfallande laget inte gör något verkligt försök att skjuta eller göra mål. Istället håller de bollen i omlopp utan att angripa försvarsmuren eller söka avslut. Regeln finns för att förhindra att lag spelar på tid eller undviker spel – det strider mot handbollens snabba och offensiva karaktär.',
          'När domaren bedömer att det anfallande laget spelar passivt höjer hen armen med öppen handflata (tecken 17 – förvarningstecken för passivt spel). Från och med denna signal har det anfallande laget maximalt 4 passningar på sig att avsluta anfallet med ett skott mot mål. Om de inte skjuter inom dessa passningar döms frikast för det försvarande laget.',
          'Bedömningen av passivt spel kräver erfarenhet och känsla för spelet. Faktorer att ta hänsyn till inkluderar: gör det anfallande laget framåtrörelser? Söker de luckor i försvaret? Försöker de nå ett avslut? Om svaret är ja, även om det tar tid, är det inte nödvändigtvis passivt spel. Men om laget bara bollar runt utan avsikt att anfalla, ska förvarningssignalen ges. Ett skott mot mål nollställer förvarningen. Observera att 4-passningsregeln vid passivt spel tillämpas från U15 och uppåt – i U14 och yngre tillämpas inte denna regel.',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Positionering & Rörelse',
    subtitle: 'Var ska domarna stå och hur ska de röra sig?',
    icon: '🏃',
    heroDescription:
      'Bra positionering är grunden för bra domarskap. Om du inte ser vad som händer kan du inte fatta rätt beslut. I den här lektionen lär du dig tvådomarsystemet, hur domarna byter roller, och hur du ska röra dig på planen för att alltid ha bästa möjliga överblick. Vi går också igenom de tio viktiga principerna som varje handbollsdomare bör följa.',
    sections: [
      {
        title: 'Tvådomarsystemet',
        icon: '👥',
        content: [
          'I handboll dömer alltid två domare tillsammans, och de har lika stor auktoritet. De två domarna har olika roller: måldomaren (som står vid mållinjen) och plandomaren (som rör sig längs sidlinjen). Denna arbetsfördelning gör att hela planen täcks effektivt och att det alltid finns en domare med god uppsikt över spelsituationen.',
          'Måldomaren positionerar sig nära mållinjen och har primärt ansvar för att bedöma händelser i och kring målområdet. Det inkluderar att avgöra om mål har gjorts, övervaka målvaktens spel och bedöma kontaktsituationer nära målet. Måldomaren rör sig från sida till sida längs mållinjen för att följa spelet.',
          'Plandomaren rör sig längs sidlinjen och täcker framför allt mittfältet och kontringssituationer. Plandomaren har god överblick över spelets uppbyggnad och bedömer ofta regelbrott som sker längre från målet. Vid snabba kontringar springer plandomaren med anfallet för att vara nära bollsituationen.',
        ],
      },
      {
        title: 'Byte av roller',
        icon: '🔄',
        content: [
          'Vid varje avkast (start av matchen, efter halvtid och efter varje mål) byter domarna roller. Den som var måldomare blir plandomare och vice versa. Detta byte är en grundläggande del av tvådomarsystemet och säkerställer att båda domarna delar på arbetsbelastningen och får variation i sina perspektiv.',
          'Bytet sker smidigt genom att domarna rör sig till sina nya positioner under tiden mellan målet och avkastet. Det är viktigt att bytet sker snabbt och utan att fördröja spelet. God kommunikation mellan domarna – genom ögonkontakt eller korta signaler – säkerställer att båda vet vilken roll de har.',
          'Under spelets gång kan det också uppstå situationer där domarna behöver byta sida tillfälligt, till exempel vid snabba kontringar. Det viktigaste är inte att följa ett stelt schema, utan att båda domarna alltid har bästa möjliga överblick. Flexibilitet och samarbete är nyckelorden.',
        ],
      },
      {
        title: 'Rörelsemönster',
        icon: '🔀',
        content: [
          'Ett grundläggande princip är att domaren alltid ska befinna sig utanför spelplanen eller åtminstone i utkanten av spelområdet. Du ska aldrig stå mellan spelarna och bollen, eftersom det både kan störa spelet och blockera din egen sikt. Håll dig i rörelse och anpassa din position efter var bollen och spelarna befinner sig.',
          'Måldomaren rör sig längs mållinjen i en lateral rörelse (från sida till sida) för att alltid ha bästa möjliga vinkel mot bollen och spelarna runt målområdet. Vid skottsituationer ska måldomaren positionera sig så att hen kan se om bollen passerar mållinjen och om det förekommer regelbrott i samband med skottet.',
          'Plandomaren rör sig upp och ned längs sidlinjen, från mittlinjen till ungefär frikastlinjen (9-meterslinjen). Vid anfallsuppbyggnad positionerar sig plandomaren diagonalt mot bollhållaren för att ha en bred vy av spelet. Vid kontringar springer plandomaren med i spelets riktning för att följa anfallet.',
          'Oavsett roll gäller: ha alltid fri sikt mot bollen och mot de spelare som är inblandade i spelsituationen. Anpassa din position konstant. En domare som står still missar mer än en domare som rör sig aktivt och söker de bästa vinklarna.',
        ],
      },
      {
        title: 'Handbollsdomarens 10 punkter',
        icon: '📝',
        content: [
          'Det finns tio grundläggande principer som varje handbollsdomare bör sträva efter att följa. Dessa punkter sammanfattar vad som krävs för att bli en kompetent och respekterad domare. De handlar om allt från fysisk förberedelse och regelkunskap till mod, respekt och arbetsglädje.',
          'Att vara fysiskt förberedd innebär att du orkar följa spelets tempo under hela matchen. Att kunna regelverket utan och innan ger dig trygghet i dina beslut. Att vara konsekvent betyder att liknande situationer bedöms likadant oavsett vilka lag som spelar eller hur matchställningen ser ut.',
          'Kommunikation, samarbete och mod hänger ihop. Tydliga tecken och en beslutsam visselpipa visar att du har kontroll. Att samarbeta med din meddomare gör er starkare som team. Och att vara modig innebär att du vågar ta svåra och impopulära beslut när situationen kräver det.',
          'Slutligen: visa respekt för alla på planen – spelare, tränare, publik och funktionärer. Håll tempot i matchen så att spelet flyter. Lär dig av varje match genom att reflektera efteråt. Och viktigast av allt – ha kul! En domare som trivs med sitt uppdrag dömer bättre och inspirerar andra.',
        ],
        list: [
          '1. Var alltid fysiskt förberedd',
          '2. Känn regelverket utan och innan',
          '3. Var konsekvent i dina beslut',
          '4. Kommunicera tydligt med tecken och visselpipa',
          '5. Samarbeta med din meddomare',
          '6. Var modig – ta svåra beslut',
          '7. Visa respekt för alla på planen',
          '8. Håll tempot i matchen',
          '9. Lär dig av varje match',
          '10. Ha kul!',
        ],
      },
      {
        title: 'Kroppsspråk och kommunikation',
        icon: '💬',
        content: [
          'En bra domare kommunicerar trygghet och kontroll genom sitt kroppsspråk. Stå rakt, gör tydliga och stora gester, och använd en bestämd visselpipa. Ditt kroppsspråk signalerar till alla i hallen huruvida du har kontroll över matchen. Om du utstrålar tveksamhet kommer spelare och tränare att ifrågasätta dina beslut oftare.',
          'Verbal kommunikation är ett komplement till domartecken och visselpipa. Det kan vara effektivt att kort informera en spelare om varför du blåste: "Tre steg", "Dubbeldribbling" eller "Hålla fast". Håll det kort och sakligt – du ska aldrig hamna i diskussion med en spelare. Om en spelare protesterar, stå fast vid ditt beslut och gå vidare.',
          'Samarbetet med din meddomare är avgörande för en väl genomförd match. Använd ögonkontakt och små tecken för att kommunicera under spelet. Under timeout och halvtid kan ni diskutera specifika situationer och stämma av er linje. Ni är ett team, och det bästa resultatet uppnås när ni arbetar harmoniskt tillsammans och stöttar varandra.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Matchdagen',
    subtitle: 'Allt du behöver veta om matchdagen',
    icon: '📋',
    heroDescription:
      'Nu har du lärt dig reglerna, domartecknen, bestraffningar och positionering. Men hur ser en riktig matchdag ut? I den här lektionen går vi igenom allt som händer runt en match – från administration och matchprotokoll till timeout-regler, skytteavgörande och praktiska frågor som jäv och ersättning. Det här är din guide till att vara redo för din första match.',
    sections: [
      {
        title: 'Matchadministration & EMP',
        icon: '💻',
        content: [
          'EMP (Elektroniskt Matchprotokoll) är det digitala systemet som används i svensk handboll för att registrera allt som händer under en match. Före matchen lämnar lagen in sina spelarlistor i systemet, och domaren verifierar att alla registreringar stämmer. Det innebär kontroll av laganmälan, spelarlegitimationer och att utrustningen uppfyller kraven.',
          'Under matchen registreras alla händelser i EMP: mål (vilken spelare och tidpunkt), varningar, utvisningar, diskvalifikationer, timeouts och andra viktiga händelser. Sekreteraren vid tidtagarbordet ansvarar för att föra protokollet, men domaren har det yttersta ansvaret för att protokollet är korrekt.',
          'Efter matchen signerar domarna matchprotokollet digitalt. Det är viktigt att kontrollera att alla händelser är korrekt registrerade innan signering. Om det finns avvikelser eller protester ska detta noteras i protokollet. EMP-systemet skickar automatiskt resultatet och protokollet till förbundet, vilket säkerställer en smidig och effektiv matchadministration.',
        ],
      },
      {
        title: 'Tidtagare och sekreterare',
        icon: '⏱️',
        content: [
          'Enligt Regel 18 har tidtagaren och sekreteraren viktiga roller vid tidtagarbordet. Tidtagaren ansvarar för att kontrollera matchklockan – att starta och stoppa tiden korrekt, hantera timeouts och se till att halvlekarna och eventuell övertid har rätt längd. Tidtagaren signalerar med en egen signal (inte visselpipa) vid sluttid och timeout.',
          'Sekreteraren hanterar matchprotokollet och registrerar alla viktiga händelser: mål, varningar, utvisningar, diskvalifikationer och lagtimeouts. Sekreteraren håller också koll på antalet utvisningar per spelare och meddelar domarna om en spelare har nått sin tredje utvisning (som innebär diskvalifikation).',
          'Både tidtagare och sekreterare ska vara neutrala och opartiska. I seniormatcher tillhandahålls de ofta av det arrangerande förbundet eller distriktet. I ungdomsmatcher är det vanligt att hemmalaget ansvarar för att tillsätta dessa funktionärer. Som domare ska du ha en kort genomgång med tidtagare och sekreterare före matchen för att säkerställa att alla förstår sina uppgifter.',
        ],
      },
      {
        title: 'Matchvärd',
        icon: '🏠',
        content: [
          'Matchvärden (den arrangerande föreningen) har ett stort ansvar för att matchen kan genomföras på ett tryggt och korrekt sätt. Föreningen ska se till att anläggningen är redo: planen ska vara i gott skick, målen ska vara fastsatta och godkända, och belysningen ska vara tillräcklig.',
          'Den arrangerande föreningen ansvarar också för att det finns omklädningsrum för båda lagen samt ett separat omklädningsrum för domarna. Matchfunktionärer (tidtagare, sekreterare och eventuellt matchvärd) ska vara på plats i god tid. Sjukvårdsutrustning och första hjälpen-utbildad personal ska finnas tillgänglig vid matcherna.',
          'En viktig uppgift för matchvärden är att ansvara för publikens beteende. Om åskådare beter sig hotfullt, stötande eller på annat sätt olämpligt är det matchvärdens ansvar att ingripa. Domaren kan i extrema fall avbryta matchen om säkerheten inte kan garanteras. God kommunikation mellan domarna och matchvärden före matchen förebygger de flesta problem.',
        ],
      },
      {
        title: 'Timeout-regler',
        icon: '⏸️',
        content: [
          'Enligt grundregeln (Regel 2:10) har varje lag rätt till en lag-timeout på 1 minut i varje halvlek av den ordinarie speltiden. Lag-timeout kan bara begäras av det lag som har bollinnehav. Begäran görs av lagets lagledare genom att lägga ett grönt kort på tidtagarbordet. Tidtagaren signalerar sedan timeout vid nästa spelavbrott.',
          'Under en timeout samlas spelarna kring sin tränare vid avbytarbänken. Domarna ska också använda tiden för att kort kommunicera med varandra – stämma av bedömningen av matchen, diskutera specifika situationer eller bekräfta bestraffningslinjen. Spelet återupptas efter 1 minut med det kast som situationen kräver.',
          'Vid förlängning (övertid) har lagen inte rätt till några lag-timeouts. Det är domaren som ger signal för att timeout ska börja (med tecken 15, T-tecknet) och att spelet ska återupptas (med en visselsignal). Tidtagaren ansvarar för att den 1 minut långa timeouten hålls.',
        ],
      },
      {
        title: 'Skytteavgörande',
        icon: '🎯',
        content: [
          'Om en match måste ha en vinnare (till exempel i cupspel eller slutspel) och den ordinarie matchtiden slutar oavgjort, spelas förlängning. Förlängningen består av 2 halvlekar om 5 minuter vardera, med 1 minuts paus mellan halvlekarna. Lagen byter planhalva och det sker lottning om avkast.',
          'Om matchen fortfarande är oavgjord efter förlängningen avgörs den genom skytteavgörande (straffslagskonkurrens). Varje lag utser 5 skytte som turas om att skjuta 7-meterskast. Lagen skjuter omväxlande och alla skott ska skjutas på samma mål. Domarna lottar om vilket lag som börjar.',
          'Om det efter de 5 skotten per lag fortfarande är oavgjort går det till sudden death. Lagen utser en skytt i taget som skjuter omväxlande. Den första omgången där ett lag gör mål och det andra missar avgör matchen. Alla spelare i laget får delta som skytte – man behöver inte begränsa sig till de som spelat under matchen, så länge de finns på spelarförteckningen.',
        ],
      },
      {
        title: 'Jäv och praktiska regler',
        icon: '⚖️',
        content: [
          'Jävsreglerna i svensk handboll är tydliga: en domare får inte döma matcher som involverar den egna föreningen eller nära släktingar. Om det finns risk för att domarens opartiskhet kan ifrågasättas ska domaren meddela detta till domaransvarig i distriktet och avstå från uppdraget. Dessa regler finns för att skydda både domaren och spelets integritet.',
          'Som domare får du ekonomisk ersättning för varje match du dömer. Ersättningen bestäms av distriktets domarersättningstabell och varierar beroende på serienivå och åldersklass. Reseersättning utgår ofta också. Ersättningen betalas ut av den arrangerande föreningen eller via förbundets system, beroende på distriktets rutiner.',
          'Efter att du har genomfört grundutbildningen och klarat det avslutande provet tilldelas du ditt domarintyg och kan börja döma matcher. Oftast börjar nya domare med ungdoms- och barnmatcher för att successivt arbeta sig upp till högre serier. Distriktsförbundet erbjuder vidareutbildning, mentorprogram och domarträffar som hjälper dig att utvecklas som domare. Välkommen in i domarvärlden!',
        ],
      },
    ],
  },
];
