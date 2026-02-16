import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Välkommen till Handbollsdomande',
    subtitle: 'Grunderna i handboll och domarskap',
    icon: 'handball',
    heroDescription:
      'Att vara handbollsdomare är ett av de mest givande uppdragen inom idrotten. Du blir en central del av spelet, utvecklar ledarskapsförmågor och bidrar till att varje match spelas rättvist. I den här lektionen får du lära dig grunderna i handboll och vad det innebär att ta steget in i domarrollen – en roll som bygger karaktär, ger självförtroende och gör dig till en viktig del av handbollsfamiljen.',
    sections: [
      {
        title: 'Varför bli domare?',
        icon: 'trophy',
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
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Det är din allra första match som domare. Du står i omklädningsrummet med din nya domardräkt, visselpipan i handen och hjärtat slår lite extra. Spelarna börjar samlas på planen och du märker att alla tittar på dig – de förväntar sig att du ska leda matchen.',
            question: 'Hur hanterar du nervositeten?',
            answer: 'Ta ett par djupa andetag, påminn dig om att du har tränat för detta. Gå ut med raka axlar och ett leende. Ingen förväntar sig att du ska vara perfekt – de förväntar sig att du gör ditt bästa. Fokusera på en sak i taget: först avkastet, sedan nästa situation.',
          },
          {
            type: 'tip',
            tip: 'Börja med att döma barnmatcher (U11–U13). Tempot är lägre, föräldrarna är generellt snällare mot nya domare, och du får öva på grunderna i lugn och ro. Många erfarna domare säger att barnmatcher var deras bästa läroperiod.',
          },
          {
            type: 'didYouKnow',
            fact: 'handboll är världens näst största inomhussport efter basket? Över 27 miljoner människor spelar handboll i mer än 180 länder. Sporten har funnits med i OS sedan 1972 (herrar) och 1976 (damer).',
          },
        ],
      },
      {
        title: 'Planen',
        icon: 'court',
        content: [
          'En handbollsplan mäter 40 meter på längden och 20 meter på bredden. Planen omges av en sidlinje på de långa sidorna och en mållinje (eller ytterlinje) på de korta sidorna. Mitt på varje mållinje står ett mål som är 2 meter högt och 3 meter brett.',
          'Framför varje mål finns ett målområde som avgränsas av en halvcirkelformad linje 6 meter från målet, den så kallade målområdeslinjen. Denna zon är reserverad för målvakten – utespelare får inte beträda den. Linjen räknas som en del av målområdet, vilket betyder att det räcker att trampa på linjen för att det ska räknas som inträngning.',
          'Utanför målområdet löper frikastlinjen (9-meterslinjen) som en streckad halvcirkel. Frikast utförs härifrån eller bakom denna linje. Sju meter rakt framför målet finns 7-meterslinjen, där straffkast (7-meterskast) utförs. Den är en meter lång och markerad mitt framför målet.',
          'Mitt på planen finns mittlinjen som delar planen i två halvor. Avkast (spelets start och efter mål) utförs från planens mittpunkt. Längs en av sidlinjerna finns byteszonen, som sträcker sig 4,5 meter åt vardera sidan om mittlinjen. Alla spelarbyten måste ske inom denna zon.',
        ],
        richBlocks: [
          {
            type: 'didYouKnow',
            fact: 'en handbollsplan är exakt lika stor som två basketplaner bredvid varandra? Och målet (3x2 meter) är det minsta av alla lagbollsporter i förhållande till planens storlek.',
          },
        ],
      },
      {
        title: 'Spelets grunder',
        icon: 'stopwatch',
        content: [
          'En ordinarie handbollsmatch för seniorer spelas i två halvlekar om 30 minuter vardera, med 10 minuters halvtidspaus. För ungdomshandboll varierar speltiden beroende på åldersklass: 2x25 minuter för U15–U16, 2x20 minuter för U14, och 2x15 minuter för U12–U13. Yngre åldersgrupper (U9–U11) spelar vanligtvis 1x20 eller 2x15 minuter.',
          'Varje lag får bestå av upp till 16 spelare, varav 7 befinner sig på planen samtidigt (6 utespelare och 1 målvakt). Byten kan göras löpande via byteszonen utan att meddela sekretariatet. Det finns ingen begränsning på antalet byten under en match.',
          'Bollstorleken varierar beroende på ålder och kön. Storlek 3 (58–60 cm, 425–475 g) används av herrar och pojkar 16 år och äldre. Storlek 2 (54–56 cm, 325–375 g) används av damer, flickor 14 år och äldre samt pojkar 12–16 år. Storlek 1 (50–52 cm, 290–330 g) används av flickor 8–14 år och pojkar 8–12 år. Storlek 0 (46–48 cm) används i minihandboll för de allra yngsta.',
        ],
      },
      {
        title: 'Mini- och barnhandboll',
        icon: 'handball',
        content: [
          'Mini- och barnhandboll är anpassade för att barnen ska lära sig handbollens grunder i en rolig och trygg miljö. Reglerna är förenklade och anpassade efter barnens ålder och utvecklingsnivå. Det viktigaste är att alla barn får spela, att de har kul och att de lär sig grundläggande färdigheter.',
          'Minihandboll spelas med 4 utespelare och en målvakt per lag. I U7 (7 år och yngre) och U8 spelas 4 mot 4 (utespelare) på en miniplan (20x12 meter). Alla barn ska delta lika mycket och resultatet är sekundärt. I U9 spelas också 4 mot 4 på miniplan, men kan övergå till 5 mot 5 på kortplan (26x20 meter). I U10 spelas 5 mot 5 på kortplan.',
          'I U11 (11 år och yngre) spelas 6 mot 6 på en fullstor plan (40x20 meter). Reglerna börjar likna de ordinarie reglerna mer, men med förenklingar – till exempel tillämpas inte 4-passningsregeln vid passivt spel i U14 och yngre, och bestraffningar är mildare.',
          'Genomgående för all barnhandboll gäller att fokus ska ligga på lärande och glädje, inte på resultat. Som domare i barnmatcher är din viktigaste uppgift att skapa en positiv och säker miljö där barnen kan utvecklas.',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'I barnmatcher: prata gärna med spelarna under spelets gång. Ett snabbt "Bra försök, men kom ihåg – max tre steg!" lär barnen reglerna samtidigt som du dömer. Det skapar en positiv atmosfär och gör att barnen faktiskt lär sig.',
          },
        ],
      },
      {
        title: 'Regler per åldersklass',
        icon: 'clipboard',
        content: [
          'Som domare är det viktigt att veta vilka regler som gäller i respektive åldersklass. Reglerna skiljer sig markant mellan de yngsta och de äldsta klasserna. Tabellen nedan visar en översikt baserad på Handbollförbundets bestämmelser för säsongen 2025/2026.',
          'Notera att vid sammanslagen klass är det alltid den yngre klassens spelregler som gäller.',
        ],
        highlights: [
          'U9–U10: Inga EMP, inga timeouter, mixade lag tillåtna',
          'U11–U13: EMP krävs, utbildningstimeout (UTB), väst som MV-tröja tillåten',
          'U14–U15: Klister tillåtet fr.o.m. U15, sju utespelare fr.o.m. U15',
          'U16–U19: Fullständiga regler, inklusive passivt spel och byte anfall/försvar',
        ],
        richBlocks: [
          {
            type: 'ruleTable',
            title: 'Lathund barn och ungdom 2025/2026',
            source: 'Källa: Handbollförbundet Öst, 2025-09-03',
            ageGroups: ['U19', 'U16', 'U15', 'U14', 'U13', 'U13 Östb.', 'U12', 'U12 Östb.', 'U11', 'U10', 'U9 Kort', 'U9 Mini'],
            rules: [
              { name: 'Speltid', values: ['2x25', '2x25', '2x25', '2x20', '2x20', '2x15', '2x15', '2x15', '2x15', '1x20', '1x20', '1x20'] },
              { name: 'Halvtidspaus', values: ['5 min', '5 min', '5 min', '5 min', '5 min', '5 min', '5 min', '5 min', '5 min', '(*)', '(*)', '(*)'] },
              { name: 'EMP', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Utbildad funktionär', values: ['FU2', 'FU1', 'FU1', 'FU1', 'FU1', 'FU1', 'FU1', 'FU1', 'NEJ', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Utbildad domare', values: ['DU3', 'DU3', 'DU3', 'DU3', 'DU3', 'DU3', 'DU2', 'DU2', 'DU2', 'DU2', 'DU2', 'DU1'] },
              { name: 'Schysstmatch möte', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Fair play-poäng', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Timeouter', values: ['2', '2', '2', 'UTB (**)', 'UTB (**)', 'UTB (**)', 'UTB (**)', 'UTB (**)', 'UTB (**)', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Resultatvisning', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA (***)', 'JA (***)', 'NEJ'] },
              { name: 'Max 16 spelare', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA'] },
              { name: 'Max 5 ledare', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA'] },
              { name: 'Mix flickor & pojkar', values: ['NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'JA', 'JA', 'JA', 'JA'] },
              { name: 'Sju utespelare', values: ['JA', 'JA', 'JA', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Passivt spel (****)', values: ['JA', 'JA', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Skott i huvudet', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'NEJ'] },
              { name: 'Avkastregel', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'NEJ'] },
              { name: 'Byte anfall/försvar', values: ['JA', 'JA', 'JA', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Punktmarkering', values: ['JA', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Klister', values: ['JA', 'JA', 'JA', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Väst som MV-tröja', values: ['NEJ', 'NEJ', 'NEJ', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA'] },
              { name: 'Sista 30 sek', values: ['NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ', 'NEJ'] },
              { name: 'Blått kort', values: ['JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA', 'JA'] },
            ],
            footnotes: [
              '(*) Paus efter 10 minuter. Pausen är cirka 2–3 minuter lång.',
              '(**) Utbildningstimeout (UTB) tas av domarna vid ett naturligt avbrott i mitten av respektive halvlek. Timeouten är 1 minut lång.',
              '(***) Resultat visas i hallen endast om båda lagen är överens. Om ett lag säger nej visas inget resultat.',
              '(****) 4-passningsregeln (regel 7:11–7:12) appliceras inte i ålderskullar där det står NEJ.',
            ],
          },
          {
            type: 'tip',
            tip: 'Som ny domare (DU1) kommer du oftast att döma U9–U12. Lär dig dessa klassers regler extra noga – det är din vardag de första säsongerna. Viktigast att komma ihåg: inga timeouter i U9–U10, utbildningstimeout i U11–U13, och väst som MV-tröja är tillåtet i U14 och yngre.',
          },
        ],
      },
      {
        title: 'Domarens roll',
        icon: 'referee',
        content: [
          'Domaren har flera viktiga uppgifter under en handbollsmatch. Den mest grundläggande är att upprätthålla reglerna och se till att matchen spelas på ett korrekt och rättvist sätt. Du är den yttersta auktoriteten på planen och dina beslut är slutgiltiga.',
          'En annan central uppgift är att säkerställa spelarnas säkerhet. Du ska reagera snabbt och bestämt vid farligt spel och se till att ingen spelare utsätts för onödig risk. Genom rätt bestraffningar skyddar du spelarna och upprätthåller respekten för reglerna.',
          'Domaren ska också hålla spelet flytande. Det innebär att du inte ska blåsa onödigt, utan använda fördelstanken (advantage rule) för att låta spelet fortsätta när ett avbrott skulle missgynna det drabbade laget. Du ska vara konsekvent i dina bedömningar genom hela matchen, så att båda lagen vet vad som gäller.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Under en U14-match springer en spelare mot mål i full fart. En försvarare knuffar hen lätt bakifrån, men spelaren behåller balansen och har fortfarande bollen. Spelaren befinner sig i fritt läge framför målvakten.',
            question: 'Blåser du eller låter du spelet fortsätta?',
            answer: 'Låt spelet fortsätta! Spelaren har fortfarande fördel – ett avbrott nu skulle ta bort målchansen. Det här är fördelstanken i praktiken. Notera dock regelbrottet och ge eventuell bestraffning vid nästa avbrott om det var tillräckligt grovt.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Spelregler i Fokus',
    subtitle: 'De viktigaste reglerna att kunna',
    icon: 'clipboard',
    heroDescription:
      'I den här lektionen dyker vi djupt ned i handbollens spelregler. Vi går igenom allt från bollhantering och målvaktsregler till målområdets betydelse och den viktiga fördelstanken. En god regelkunskap är grunden för varje bra domare – ju bättre du kan reglerna, desto säkrare och mer konsekvent blir du i dina beslut.',
    sections: [
      {
        title: 'Regelöversikt',
        icon: 'clipboard',
        content: [
          'Handbollens regelverk är uppdelat i 18 regler som täcker alla aspekter av spelet. Regel 1 handlar om planen och dess dimensioner. Regel 2 reglerar speltiden, slutsignalen och timeout. Regel 3 behandlar bollen – storlek och egenskaper. Regel 4 definierar lagets sammansättning, byten och utrustning.',
          'Regel 5 och 6 handlar om målvakten respektive målområdet – två av de mest speciella aspekterna av handboll. Regel 7 reglerar hur bollen får spelas: dribbla, passa, skjuta. Regel 8 är den stora regelkategorin som täcker regelbrott och osportsligt uppförande.',
          'Regel 9 avgör när ett mål är giltigt. Reglerna 10–14 behandlar olika kasttyper: avkast, inkast, målkast, frikast och 7-meterskast. Reglerna 15–18 reglerar bestraffningar, domarnas roll, tidtagaren och sekretariatet samt matchvärden. Tillsammans utgör dessa regler ramverket som du som domare ska upprätthålla.',
        ],
      },
      {
        title: 'Bollhantering',
        icon: 'handball',
        content: [
          'Reglerna för bollhantering är bland de vanligaste att döma under en match. Trestegarsregeln innebär att en spelare får ta maximalt tre steg med bollen i händerna. Efter tre steg måste spelaren passa, skjuta eller studsa bollen. Om spelaren tar fler än tre steg utan att studsa döms det som gångfel.',
          'Tresekondersregeln innebär att en spelare inte får hålla bollen stilla i mer än tre sekunder. Spelaren måste agera – passa, skjuta eller studsa – inom den tiden. Dubbeldribbling är inte tillåten: om en spelare studsar bollen, tar upp den och sedan studsar igen utan att ha passat, skjutit eller tappat bollen i en blockering, döms det som dubbeldribbling.',
          'Spelarna får använda händer, armar, huvud, bål, lår och knän för att spela bollen. Det är inte tillåtet att använda fötter eller underben – det är bara målvakten som får använda fötterna (och bara inom målområdet). Om en spelare spelar bollen med foten är det regelbrott, men om bollen träffar foten oavsiktligt och utan fördel kan domaren tillåta spelet att fortsätta.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'En spelare på det anfallande laget tar emot en pass, studsar bollen en gång, tar tre steg, och försöker passa vidare. Men medspelaren är täckt, så spelaren fångar tillbaka bollen och studsar igen.',
            question: 'Vad dömer du?',
            answer: 'Dubbeldribbling! Spelaren studsade bollen, tog upp den, och studsade igen. Det är inte tillåtet. Döm frikast för det försvarande laget. Ett vanligt misstag bland nya spelare – och ett vanligt domslut för nya domare att öva på.',
          },
          {
            type: 'scenario',
            scenario: 'Under en snabb kontring tar en spelare emot bollen vid mittlinjen och springer mot mål. Du räknar stegen: 1... 2... 3... spelaren tar ett till steg och skjuter.',
            question: 'Har spelaren gjort stegfel?',
            answer: 'Ja! Fyra steg utan att studsa är gångfel (stegfel). Döm frikast. Men tänk på att det första steget efter mottagning inte räknas om spelaren är i rörelse – det är "nollsteget". Så om spelaren redan var i rörelse vid mottagningen har hen faktiskt bara tagit tre steg. Kontexten avgör!',
          },
        ],
      },
      {
        title: 'Målvaktsregler',
        icon: 'goal',
        content: [
          'Målvakten har en unik roll i handboll och lyder under särskilda regler. Målvakten är den enda spelaren som får vistas i målområdet och får använda hela kroppen, inklusive fötterna, för att försvara målet. Inom målområdet har målvakten stor frihet att agera.',
          'Målvakten får lämna målområdet utan boll och deltar då i spelet som en vanlig utespelare. Det innebär att målvakten då måste följa samma regler som alla andra spelare – inga fötter, trestegarsregel och tresekondersregel gäller. Målvakten får dock inte lämna målområdet med bollen under kontroll, det vill säga efter att ha fångat eller stoppat bollen.',
          'En viktig detalj är att en utespelare aldrig får spela bollen till sin egen målvakt om målvakten befinner sig i målområdet och bollen är i rörelse mot målområdet. Om bollen redan är inne i målområdet får målvakten fritt spela den. Målvakten får inte heller plocka upp en boll som ligger stilla eller rullar på marken utanför målområdet medan målvakten själv står i målområdet.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Målvakten gör en räddning och springer ut från målområdet med bollen för att starta en snabb kontring. Hen dribblar bollen över mittlinjen och skjuter ett skott mot motståndarens mål!',
            question: 'Är detta tillåtet?',
            answer: 'Ja! Målvakten får lämna målområdet och delta som utespelare. Hen måste då följa vanliga utespelarregler (tre steg, tre sekunder, ingen dubbeldribbling). Det är ovanligt men fullt lagligt – och ganska spektakulärt!',
          },
        ],
      },
      {
        title: 'Målområdet',
        icon: 'shield',
        content: [
          'Målområdet avgränsas av målområdeslinjen som löper i en halvcirkel 6 meter från målet. Denna zon är exklusivt reserverad för målvakten. Ingen utespelare får beträda målområdet, varken med eller utan boll. Målområdeslinjen räknas som en del av målområdet – att trampa på linjen är samma sak som att kliva in i området.',
          'En viktig och spektakulär del av handbollen är att spelare får hoppa över målområdet för att skjuta. En spelare får alltså ta sats utanför målområdeslinjen, hoppa, och släppa bollen innan hen landar. Om bollen lämnar spelarens hand innan landning i målområdet är det tillåtet och kan resultera i mål. Om spelaren däremot landar i målområdet med bollen kvar i handen döms det som inträngning.',
          'Frikastlinjen (9-meterslinjen) är den streckade halvcirkeln utanför målområdet. Frikast utförs från eller bakom denna linje. Vid frikast ska det försvarande laget stå minst 3 meter från kastaren. 7-meterslinjen, rakt framför målet, används vid 7-meterssituationer – till exempel när en klar målchans förstörs genom regelbrott.',
        ],
      },
      {
        title: 'Fördelstanken',
        icon: 'strategy',
        content: [
          'Fördelstanken (advantage rule) är en av de absolut viktigaste principerna i handbollsdomarens verktygslåda. Grundtanken är enkel: om det lag som blivit utsatt för ett regelbrott fortfarande har fördel i spelsituationen, ska domaren låta spelet fortsätta istället för att blåsa. Att stoppa spelet skulle ju i så fall straffa det lag som redan blivit drabbat.',
          'I praktiken innebär det att du som domare ständigt måste bedöma: "Gynnas det angripande laget av att jag blåser, eller har de redan en bra situation trots regelbrottet?" Om en spelare blir knuffad men ändå lyckas passa till en medspelare i bra läge, bör du låta spelet fortsätta. Blås bara om regelbrottet faktiskt påverkar det angripande lagets möjligheter negativt.',
          'Fördelstanken kräver erfarenhet och mod. Det kan vara frestande att alltid blåsa vid regelbrott, men en bra domare har tålamod och läser spelet. Kom ihåg att du alltid kan ge en uppskjuten bestraffning – du kan till exempel låta spelet fortsätta och sedan ge en varning eller utvisning vid nästa avbrott om regelbrottet motiverar det.',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'Tänk "Vem gynnas om jag blåser?" innan du tar visselpipan till munnen. Om svaret är "det lag som begick regelbrottet" – låt spelet fortsätta. Fördelstanken handlar om att skydda det drabbade laget, inte om att vara snäll mot regelbrytaren.',
          },
          {
            type: 'didYouKnow',
            fact: 'i en genomsnittlig handbollsmatch blåser domarna mellan 80 och 120 gånger? Det är ungefär en signal per minut. Erfarna domare blåser ofta färre gånger – inte för att de missar mer, utan för att de använder fördelstanken bättre.',
          },
        ],
      },
      {
        title: 'Mål och resultat',
        icon: 'goal',
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
    icon: 'referee',
    heroDescription:
      'Kommunikation är en av domarens viktigaste färdigheter, och domartecken är ditt främsta verktyg. I en bullrig arena med publik, spelare och ledare som ropar är det dina handtecken som tydligt visar vilka beslut du fattar. I den här lektionen går vi igenom alla 17 officiella domartecken enligt IHF:s regelverk.',
    sections: [
      {
        title: 'Varför domartecken?',
        icon: 'megaphone',
        content: [
          'I en handbollshall kan ljudnivån vara mycket hög, särskilt vid spännande matcher med engagerad publik. Visselpipan fångar uppmärksamheten, men det är domartecknen som kommunicerar vad som har hänt och vilken dom som fattats. Utan tydliga tecken uppstår förvirring och frustration hos spelare, tränare och publik.',
          'Enligt IHF:s (Internationella Handbollförbundet) regelverk finns det 17 officiella domartecken. Varje tecken är noggrant definierat och har en specifik betydelse. Som domare måste du kunna alla tecken och använda dem korrekt och tydligt. Ett otydligt eller felaktigt tecken kan leda till missförstånd och underminera ditt förtroende.',
          'Att behärska domartecknen handlar inte bara om att kunna dem tekniskt – det handlar om att kommunicera med självförtroende. När du visar ett tecken ska du göra det med bestämdhet och tydlighet. Håll armen sträckt, gör stora gester och se till att alla i hallen kan se vad du signalerar.',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'Öva domartecknen framför en spegel hemma. Gör dem med full kraft och stora gester – det ska synas från andra sidan planen. Många nya domare gör för små och tveksamma tecken. Tänk "teater" – dina gester ska vara överdrivna snarare än diskreta.',
          },
          {
            type: 'didYouKnow',
            fact: 'de 17 domartecknen är identiska i hela världen? Oavsett om du dömer i Sverige, Japan eller Brasilien använder alla domare exakt samma tecken. Det är IHF (International Handball Federation) som fastställer dem.',
          },
        ],
      },
      {
        title: 'Grundläggande tecken',
        icon: 'referee',
        content: [
          'Tecken 1 – Inträngning i målområdet: Domaren pekar med sträckt arm mot målområdet för att signalera att en utespelare olovligt har beträtt målområdet. Detta tecken används också om en utespelare spelar bollen inom målområdet på ett otillåtet sätt.',
          'Tecken 2 – Felaktig dribbling (dubbeldribbling): Domaren gör en upprepande upp-och-ned-rörelse med handen för att visa att en spelare har gjort sig skyldig till dubbeldribbling. Denna signal ges ofta i kombination med en visselsignal för att stoppa spelet.',
          'Tecken 3 – För många steg eller håller bollen för länge: Domaren roterar armarna framåt runt varandra i en cirkulär rörelse framför kroppen. Detta tecken används vid gångfel (fler än tre steg) eller om spelaren hållit bollen längre än tre sekunder utan att studsa, passa eller skjuta.',
          'Tecken 4 – Fasthållning eller greppande: Domaren gör en gripande rörelse med slutna händer framför kroppen. Detta signalerar att en spelare har hållit fast en motståndare med armar, händer eller kropp på ett otillåtet sätt.',
          'Tecken 5 – Slå eller stöta emot: Domaren gör en slående rörelse med armen för att visa att en spelare har slagit, stött till eller på annat aggressivt sätt angripit en motståndare. Detta regelbrott kan leda till bestraffning beroende på graden av våld.',
          'Tecken 6 – Anfallsfoul (offensivt regelbrott): Domaren gör en skjutande rörelse med öppen handflata framåt. Detta tecken används när det anfallande laget begår ett regelbrott, till exempel att springa in i en försvarare som har etablerad position.',
          'Tecken 7 – Inkast (riktningsangivande): Domaren pekar med sträckt arm i den riktning som inkastet ska utföras. Armen pekar åt det håll som det kastande laget ska anfalla. Tecknet visas tydligt så att alla spelare vet vilket lag som får inkastet.',
        ],
        richBlocks: [
          {
            type: 'signal',
            number: 1,
            name: 'Inträngning i målområdet',
            description: 'Domaren pekar med sträckt arm mot målområdet.',
            usage: 'När en utespelare olovligt beträder målområdet eller spelar bollen inom det på ett otillåtet sätt.',
          },
          {
            type: 'signal',
            number: 2,
            name: 'Dubbeldribbling',
            description: 'Upprepande upp-och-ned-rörelse med handen.',
            usage: 'När en spelare studsar bollen, tar upp den och studsar igen utan att ha passat eller skjutit.',
          },
          {
            type: 'signal',
            number: 3,
            name: 'Steg / tidsspel',
            description: 'Armarna roterar framåt runt varandra i cirkulär rörelse.',
            usage: 'Vid gångfel (fler än tre steg) eller om spelaren hållit bollen längre än tre sekunder.',
          },
          {
            type: 'signal',
            number: 4,
            name: 'Fasthållning',
            description: 'Gripande rörelse med slutna händer framför kroppen.',
            usage: 'När en spelare håller fast en motståndare med armar, händer eller kropp.',
          },
          {
            type: 'signal',
            number: 5,
            name: 'Slå / stöta emot',
            description: 'Slående rörelse med armen framåt.',
            usage: 'När en spelare slår, stöter till eller aggressivt angriper en motståndare.',
          },
          {
            type: 'signal',
            number: 6,
            name: 'Anfallsfoul',
            description: 'Skjutande rörelse med öppen handflata framåt.',
            usage: 'När det anfallande laget begår ett regelbrott, t.ex. springer in i en försvarare med etablerad position.',
          },
          {
            type: 'signal',
            number: 7,
            name: 'Inkast',
            description: 'Sträckt arm pekar i den riktning inkastet ska utföras.',
            usage: 'Vid inkast – armen visar vilket lag som får inkastet och i vilken riktning.',
          },
        ],
      },
      {
        title: 'Kast- och speltecken',
        icon: 'handball',
        content: [
          'Tecken 8 – Frikast (riktningsangivande): Domaren pekar med sträckt arm i anfallsriktningen för det lag som får frikastet. Frikast är det vanligaste domslutet under en match och döms vid de flesta regelbrott. Det försvarande laget måste hålla 3 meters avstånd.',
          'Tecken 9 – Målvaktskast: Domaren pekar med sträckt arm mot målområdet för att signalera att målvakten ska utföra ett målvaktskast. Tecknet ges när bollen passerat yttre mållinjen efter att ha berörts av målvakten, eller när en motståndare beträtt målgården.',
          'Tecken 10 – Håll tre meters avstånd: Domaren sträcker ut en arm med handflatan utåt mot den spelare eller det lag som ska hålla avstånd. Tecknet används för att hålla tillbaka försvarsspelare vid frikast så att de håller minst 3 meters avstånd från kastaren.',
          'Tecken 11 – Passivt spel: Domaren höjer en arm med öppen handflata riktad mot det anfallande laget. Denna signal innebär att domaren bedömer att spelet är passivt och att det anfallande laget måste göra ett tydligare försök att nå avslut.',
          'Tecken 12 – Mål: Måldomaren ger två korta visselsignaler och pekar bestämt mot planens mittpunkt för att bekräfta att mål har gjorts. Detta är kanske det mest ikoniska domartecknet och signalerar tydligt för alla i hallen att bollen har passerat mållinjen och att målet är godkänt.',
        ],
        richBlocks: [
          {
            type: 'signal',
            number: 8,
            name: 'Frikast',
            description: 'Sträckt arm pekar i anfallsriktningen för det lag som får frikastet.',
            usage: 'Det vanligaste domslutet – vid de flesta regelbrott. Försvarande laget måste hålla 3 meters avstånd.',
          },
          {
            type: 'signal',
            number: 9,
            name: 'Målvaktskast',
            description: 'Sträckt arm pekar mot målområdet.',
            usage: 'När bollen passerat yttre mållinjen via målvakten, eller när en motståndare beträtt målgården.',
          },
          {
            type: 'signal',
            number: 10,
            name: 'Håll tre meters avstånd',
            description: 'Arm sträckt med handflatan utåt mot spelaren/laget.',
            usage: 'Vid frikast – håller tillbaka försvarsspelare så de håller minst 3 meters avstånd.',
          },
          {
            type: 'signal',
            number: 11,
            name: 'Passivt spel',
            description: 'Höjd arm med öppen handflata riktad mot anfallande laget.',
            usage: 'När domaren bedömer att spelet är passivt. Laget måste göra tydligare försök att nå avslut.',
            mandatory: true,
          },
          {
            type: 'signal',
            number: 12,
            name: 'Mål',
            description: 'Två korta visselsignaler, pekar bestämt mot planens mittpunkt.',
            usage: 'När bollen helt passerat mållinjen innanför målramen. Det mest ikoniska domartecknet!',
          },
        ],
      },
      {
        title: 'Bestraffnings- och kontrolltecken',
        icon: 'yellow-card',
        content: [
          'Tecken 13 – Varning, Diskvalifikation och Rapport: Domaren visar gult kort (varning), rött kort (diskvalifikation) eller blått kort (rapport till förbundet) tydligt mot den bestraffade spelaren och sedan mot tidtagarbordet. Varningen registreras i matchprotokollet. Varje spelare kan bara få en varning, och laget kan få maximalt tre varningar totalt.',
          'Tecken 14 – Utvisning 2 minuter: Domaren håller upp en arm med två fingrar sträckta mot den utvisade spelaren. Tecknet ska visas tydligt så att spelaren, sekretariatet och publiken ser vilken spelare som utvisas. Spelaren måste lämna planen och laget spelar undertal i 2 minuter.',
          'Tecken 15 – Timeout (time-out): Domaren bildar ett T med händerna – en hand hålls horisontellt medan den andra placeras vertikalt under. Detta tecken används för att signalera time-out, antingen begärd av ett lag eller beslutad av domaren. Tecknet ska visas tydligt mot tidtagarbordet.',
          'Tecken 16 – Tillåtelse att beträda planen under timeout: Domaren visar detta tecken för att ge tillåtelse åt två av de deltagarberättigade personerna att beträda spelplanen under en timeout, till exempel för att hjälpa en skadad spelare.',
          'Tecken 17 – Förvarningstecken för passivt spel: Domaren håller en arm höjd med öppen handflata. Armen hålls uppe som en förvarning till det anfallande laget att de riskerar att dömas för passivt spel. Efter denna signal har laget maximalt 4 passningar på sig att avsluta anfallet med ett skott mot mål.',
        ],
        richBlocks: [
          {
            type: 'signal',
            number: 13,
            name: 'Varning / Diskvalifikation / Rapport',
            description: 'Visar gult kort (varning), rött kort (diskvalifikation) eller blått kort (rapport).',
            usage: 'Tydligt mot spelaren och sedan mot tidtagarbordet. Max 1 varning per spelare, 3 per lag.',
          },
          {
            type: 'signal',
            number: 14,
            name: 'Utvisning 2 minuter',
            description: 'Arm uppåt med två fingrar sträckta mot den utvisade spelaren.',
            usage: 'Vid allvarligare regelbrott. Spelaren lämnar planen, laget spelar undertal i 2 minuter.',
          },
          {
            type: 'signal',
            number: 15,
            name: 'Timeout',
            description: 'T-form med händerna – en horisontell, en vertikal.',
            usage: 'Vid time-out begärd av lag eller beslutad av domaren. Visas tydligt mot tidtagarbordet.',
            mandatory: true,
          },
          {
            type: 'signal',
            number: 16,
            name: 'Tillåtelse att beträda planen',
            description: 'Becknande gest mot de personer som får beträda planen.',
            usage: 'Under timeout – ger tillåtelse åt max 2 personer att gå ut på planen (t.ex. vid skada).',
            mandatory: true,
          },
          {
            type: 'signal',
            number: 17,
            name: 'Förvarning passivt spel',
            description: 'Arm höjd med öppen handflata.',
            usage: 'Förvarning: laget har max 4 passningar på sig att avsluta anfallet med skott mot mål.',
          },
        ],
      },
      {
        title: 'Obligatoriska vs situationella',
        icon: 'clipboard',
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
    icon: 'yellow-card',
    heroDescription:
      'Att veta när och hur man bestraffar är avgörande för att upprätthålla rättvisa och säkerhet på planen. I den här lektionen lär du dig bestraffningsstegen – från frikast till diskvalifikation – samt reglerna kring passivt spel. En domare som behärskar bestraffningarna skapar trygghet och respekt hos alla på planen.',
    sections: [
      {
        title: 'Bestraffningsstegen',
        icon: 'red-card',
        content: [
          'Bestraffningarna i handboll följer en trappa från lättast till strängast: Frikast → Varning (gult kort) → 2 minuters utvisning → Diskvalifikation (rött kort) → Rapport till förbundet. Varje steg är allvarligare än det föregående, och som domare måste du bedöma vilken nivå som är lämplig utifrån situationen.',
          'Ett lag kan få maximalt 3 varningar (gula kort) totalt under en match. Efter tre varningar ska alla ytterligare bestraffningar för det laget vara minst 2 minuters utvisning. En enskild spelare kan få maximalt 1 varning. Om spelaren begår ytterligare regelbrott som motiverar bestraffning ska det bli 2 minuters utvisning.',
          'En spelare som får sin tredje 2-minutersutvisning under en match blir automatiskt diskvalificerad. Det är alltså tre chanser – sedan är spelaren ute för resten av matchen. Vid diskvalifikation spelar laget med en spelare mindre i 2 minuter, men efter de 2 minuterna får en annan spelare ersätta den diskvalificerade.',
          'I särskilt allvarliga fall, till exempel grovt våld eller hotfullt beteende, kan domaren skriva en rapport till förbundet. Rapporten leder till att ärendet behandlas av disciplinnämnden som kan utdöma ytterligare avstängningar eller böter.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'En spelare har redan fått en varning (gult kort) i första halvlek. I andra halvlek gör samma spelare ett tydligt fasthållningsfel. Laget har redan fått 3 varningar totalt.',
            question: 'Vilken bestraffning ger du?',
            answer: '2 minuters utvisning. Spelaren har redan fått sin enda tillåtna varning, och laget har nått maxgränsen på 3 varningar. Nästa steg i bestraffningstrappan är alltid utvisning. Visa tecken 14 (två fingrar) tydligt mot spelaren och tidtagarbordet.',
          },
          {
            type: 'tip',
            tip: 'Håll koll på bestraffningarna med en enkel mental modell: varje spelare har "tre liv" (3 utvisningar = diskvalifikation). Kommunicera gärna kort med spelaren: "Det här är din andra utvisning." Det visar att du har kontroll och ger spelaren en chans att lugna ner sig.',
          },
        ],
      },
      {
        title: 'Tillåten vs otillåten kontakt',
        icon: 'handshake',
        content: [
          'Handboll är en kontaktsport och viss fysisk kontakt är tillåten. Regel 8 definierar tydligt vad som är tillåtet och vad som inte är det. Tillåten kontakt inkluderar: att använda öppen hand för att blockera eller styra undan en motståndare, frontal kroppskontakt när man kämpar om position, och att använda böjd arm för kroppskontakt under löpning eller i kamp om bollen.',
          'Otillåten kontakt är betydligt bredare och inkluderar: att slå eller rycka bollen ur motståndarens händer, att blockera med armar, ben eller kropp på ett otillåtet sätt, att knuffa en motståndare (med eller utan boll), att springa eller hoppa in i en motståndare, att hålla fast (med armar, händer eller ben) samt att sätta krokben.',
          'Gränsen mellan tillåten och otillåten kontakt kan vara svår att bedöma, särskilt i snabba spelsituationer. Som domare måste du hela tiden fråga dig: "Påverkar kontakten motståndaren negativt? Hade kontakten spelaren i boll som mål, eller var det riktad mot kroppen?" Erfarenhet och matchträning hjälper dig att bli säkrare i dessa bedömningar.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'En försvarare ställer sig i vägen för en anfallare som springer i full fart. Anfallaren kraschar in i försvararen som står helt stilla med fötterna i golvet. Anfallaren faller och tappar bollen.',
            question: 'Vem begår regelbrott?',
            answer: 'Anfallaren! Om försvararen har etablerad position (står stilla, fötterna i golvet, möter anfallaren framifrån) och anfallaren springer in i hen, är det anfallsfoul (tecken 6). Frikast för det försvarande laget.',
          },
        ],
      },
      {
        title: 'Utvisning 2 minuter',
        icon: 'stopwatch',
        content: [
          'En 2-minutersutvisning ges vid allvarligare regelbrott. Typiska situationer inkluderar: upprepade regelbrott (progressiv bestraffning), regelbrott mot spelare med klart målläge, farlig kontakt mot huvud, hals eller strupe, hård kroppskontakt mot bål eller kastarm, samt att dra tillbaka en motståndare bakifrån.',
          'När en spelare utvisas i 2 minuter måste hen lämna planen och sitta på utvisningsbänken. Laget spelar med en spelare mindre under hela tvåminutersperioden. Tiden börjar räknas från tidpunkten då domaren blåser och visar utvisningstecknet. Om en målvakt utvisas måste hen bytas ut mot en annan målvakt eller utespelare.',
          'Det är viktigt att notera att en spelares tredje 2-minutersutvisning i samma match automatiskt leder till diskvalifikation. Domaren visar då rött kort direkt. Laget spelar undertal i 2 minuter som vanligt, men den diskvalificerade spelaren får inte delta i resten av matchen.',
        ],
      },
      {
        title: 'Diskvalifikation',
        icon: 'red-card',
        content: [
          'Diskvalifikation (rött kort) ges vid grova regelbrott som äventyrar motståndarens hälsa, avsiktligt våldsamt uppförande utanför spelsituationen, eller grovt osportsligt beteende av spelare, tränare eller lagledare. Diskvalifikation kan ges direkt, utan föregående varning eller utvisning, om situationen motiverar det.',
          'En diskvalificerad spelare måste omedelbart lämna planen och får inte delta i resten av matchen. Spelaren ska normalt bege sig till omklädningsrummet. Laget spelar med en spelare mindre i 2 minuter, men efter dessa 2 minuter kan en annan spelare gå in och laget återgår till fullt antal.',
          'Om ett regelbrott är så grovt att det motiverar en rapport till förbundet, markerar domaren detta genom att efter rött kort visa ett så kallat "blått kort" eller anteckna det särskilt i matchprotokollet. Rapporten skickas sedan till distriktsförbundet eller Svenska Handbollförbundet för vidare hantering av disciplinnämnden.',
        ],
      },
      {
        title: 'Filmning',
        icon: 'shield',
        content: [
          'Filmning (simulering) är när en spelare medvetet överdriver eller fejkar kontakt för att lura domaren att döma ett regelbrott som inte har skett. Detta beteende klassas som osportsligt uppförande och ska bestraffas direkt med 2 minuters utvisning.',
          'Vanliga former av filmning inkluderar att kasta sig i marken efter minimal eller ingen kontakt, att överdrivet grippa tag om ansiktet eller kroppen efter en lätt beröring, eller att dramatiskt falla bakåt när en motståndare är i närheten. Dessa beteenden underminerar spelets integritet och respekten för domaren.',
          'Som domare ska du vara uppmärksam på tecken på filmning: överdriven reaktion i förhållande till kontakten, fördröjd reaktion (spelaren faller först efter att ha insett att hen inte fick med sig bollen), eller att spelaren snabbt återhämtar sig efter att ha verkat svårt skadad. Tveka inte att bestraffa filmning – det skickar en tydlig signal om att sådant beteende inte tolereras.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'En spelare tar emot en lätt kontakt på axeln och kastar sig dramatiskt i golvet. Hen griper tag om knäet och verkar ha ont. Men 10 sekunder senare, när du blåser frikast åt andra hållet, reser sig spelaren snabbt och ser helt frisk ut.',
            question: 'Vad gör du?',
            answer: 'Bestraffa filmningen med 2 minuters utvisning! Fördröjd reaktion + snabb återhämtning är klassiska tecken på simulering. Visa tecken 14 (utvisning) och förklara kort för spelaren. Det skickar en tydlig signal till båda lagen.',
          },
        ],
      },
      {
        title: 'Passivt spel',
        icon: 'stopwatch',
        content: [
          'Passivt spel innebär att det anfallande laget inte gör något verkligt försök att skjuta eller göra mål. Istället håller de bollen i omlopp utan att angripa försvarsmuren eller söka avslut. Regeln finns för att förhindra att lag spelar på tid eller undviker spel – det strider mot handbollens snabba och offensiva karaktär.',
          'När domaren bedömer att det anfallande laget spelar passivt höjer hen armen med öppen handflata (tecken 17 – förvarningstecken för passivt spel). Från och med denna signal har det anfallande laget maximalt 4 passningar på sig att avsluta anfallet med ett skott mot mål. Om de inte skjuter inom dessa passningar döms frikast för det försvarande laget.',
          'Bedömningen av passivt spel kräver erfarenhet och känsla för spelet. Faktorer att ta hänsyn till inkluderar: gör det anfallande laget framåtrörelser? Söker de luckor i försvaret? Försöker de nå ett avslut? Om svaret är ja, även om det tar tid, är det inte nödvändigtvis passivt spel. Men om laget bara bollar runt utan avsikt att anfalla, ska förvarningssignalen ges. Ett skott mot mål nollställer förvarningen. Observera att 4-passningsregeln vid passivt spel tillämpas från U15 och uppåt – i U14 och yngre tillämpas inte denna regel.',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'Räkna passningarna högt i huvudet efter att du visat förvarningstecknet: "1... 2... 3... 4." Om den fjärde passningen inte leder till ett skott – blås direkt. Övning gör att räkningen blir automatisk.',
          },
          {
            type: 'didYouKnow',
            fact: 'regeln om passivt spel infördes för att förhindra att lag "frös" bollen och spelade på tid. Innan regeln fanns kunde lag i ledning hålla bollen i minuter utan att ens försöka skjuta. 4-passningsregeln (efter förvarning) tillkom 2001.',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Positionering & Rörelse',
    subtitle: 'Var ska domarna stå och hur ska de röra sig?',
    icon: 'strategy',
    heroDescription:
      'Bra positionering är grunden för bra domarskap. Om du inte ser vad som händer kan du inte fatta rätt beslut. I den här lektionen lär du dig tvådomarsystemet, hur domarna byter roller, och hur du ska röra dig på planen för att alltid ha bästa möjliga överblick. Vi går också igenom de tio viktiga principerna som varje handbollsdomare bör följa.',
    sections: [
      {
        title: 'Tvådomarsystemet',
        icon: 'referee',
        content: [
          'I handboll dömer alltid två domare tillsammans, och de har lika stor auktoritet. De två domarna har olika roller: måldomaren (som står vid mållinjen) och plandomaren (som rör sig längs sidlinjen). Denna arbetsfördelning gör att hela planen täcks effektivt och att det alltid finns en domare med god uppsikt över spelsituationen.',
          'Måldomaren positionerar sig nära mållinjen och har primärt ansvar för att bedöma händelser i och kring målområdet. Det inkluderar att avgöra om mål har gjorts, övervaka målvaktens spel och bedöma kontaktsituationer nära målet. Måldomaren rör sig från sida till sida längs mållinjen för att följa spelet.',
          'Plandomaren rör sig längs sidlinjen och täcker framför allt mittfältet och kontringssituationer. Plandomaren har god överblick över spelets uppbyggnad och bedömer ofta regelbrott som sker längre från målet. Vid snabba kontringar springer plandomaren med anfallet för att vara nära bollsituationen.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Du är plandomare. Plötsligt stjäl ett lag bollen vid mittlinjen och startar en snabb kontring – tre anfallare mot en försvarare. De rusar mot det mål som ligger längst bort från dig.',
            question: 'Vad gör du?',
            answer: 'Spring! Som plandomare måste du följa kontringar med full fart för att vara nära bollsituationen vid avslut. Sträva efter att ligga i nivå med eller strax bakom bollhållaren. Måldomaren vid det andra målet täcker målet, men du behöver se kontaktsituationer under vägen dit.',
          },
        ],
      },
      {
        title: 'Byte av roller',
        icon: 'strategy',
        content: [
          'Vid varje avkast (start av matchen, efter halvtid och efter varje mål) byter domarna roller. Den som var måldomare blir plandomare och vice versa. Detta byte är en grundläggande del av tvådomarsystemet och säkerställer att båda domarna delar på arbetsbelastningen och får variation i sina perspektiv.',
          'Bytet sker smidigt genom att domarna rör sig till sina nya positioner under tiden mellan målet och avkastet. Det är viktigt att bytet sker snabbt och utan att fördröja spelet. God kommunikation mellan domarna – genom ögonkontakt eller korta signaler – säkerställer att båda vet vilken roll de har.',
          'Under spelets gång kan det också uppstå situationer där domarna behöver byta sida tillfälligt, till exempel vid snabba kontringar. Det viktigaste är inte att följa ett stelt schema, utan att båda domarna alltid har bästa möjliga överblick. Flexibilitet och samarbete är nyckelorden.',
        ],
      },
      {
        title: 'Rörelsemönster',
        icon: 'court',
        content: [
          'Ett grundläggande princip är att domaren alltid ska befinna sig utanför spelplanen eller åtminstone i utkanten av spelområdet. Du ska aldrig stå mellan spelarna och bollen, eftersom det både kan störa spelet och blockera din egen sikt. Håll dig i rörelse och anpassa din position efter var bollen och spelarna befinner sig.',
          'Måldomaren rör sig längs mållinjen i en lateral rörelse (från sida till sida) för att alltid ha bästa möjliga vinkel mot bollen och spelarna runt målområdet. Vid skottsituationer ska måldomaren positionera sig så att hen kan se om bollen passerar mållinjen och om det förekommer regelbrott i samband med skottet.',
          'Plandomaren rör sig upp och ned längs sidlinjen, från mittlinjen till ungefär frikastlinjen (9-meterslinjen). Vid anfallsuppbyggnad positionerar sig plandomaren diagonalt mot bollhållaren för att ha en bred vy av spelet. Vid kontringar springer plandomaren med i spelets riktning för att följa anfallet.',
          'Oavsett roll gäller: ha alltid fri sikt mot bollen och mot de spelare som är inblandade i spelsituationen. Anpassa din position konstant. En domare som står still missar mer än en domare som rör sig aktivt och söker de bästa vinklarna.',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'Tänk "diagonal positionering": stå aldrig rakt bakom eller rakt framför bollhållaren. Positionera dig snett – då ser du både bollen och kontaktsituationerna runt omkring. Det ger dig bästa möjliga vy av spelet.',
          },
        ],
      },
      {
        title: 'Handbollsdomarens 10 punkter',
        icon: 'clipboard',
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
        icon: 'megaphone',
        content: [
          'En bra domare kommunicerar trygghet och kontroll genom sitt kroppsspråk. Stå rakt, gör tydliga och stora gester, och använd en bestämd visselpipa. Ditt kroppsspråk signalerar till alla i hallen huruvida du har kontroll över matchen. Om du utstrålar tveksamhet kommer spelare och tränare att ifrågasätta dina beslut oftare.',
          'Verbal kommunikation är ett komplement till domartecken och visselpipa. Det kan vara effektivt att kort informera en spelare om varför du blåste: "Tre steg", "Dubbeldribbling" eller "Hålla fast". Håll det kort och sakligt – du ska aldrig hamna i diskussion med en spelare. Om en spelare protesterar, stå fast vid ditt beslut och gå vidare.',
          'Samarbetet med din meddomare är avgörande för en väl genomförd match. Använd ögonkontakt och små tecken för att kommunicera under spelet. Under timeout och halvtid kan ni diskutera specifika situationer och stämma av er linje. Ni är ett team, och det bästa resultatet uppnås när ni arbetar harmoniskt tillsammans och stöttar varandra.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'En spelare protesterar högljutt mot ditt beslut och kommer fram mot dig med armar i luften. Medspelare försöker lugna ner hen, men spelaren fortsätter att klaga.',
            question: 'Hur hanterar du situationen?',
            answer: 'Stå lugnt, med raka axlar och avslappnat kroppsspråk. Säg kort: "Beslutet är fattat." Om spelaren fortsätter att protestera – varna med gult kort. Om hen fortfarande inte slutar, utvisning 2 minuter. Visa att du har kontroll utan att eskalera situationen.',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Matchdagen',
    subtitle: 'Allt du behöver veta om matchdagen',
    icon: 'whistle',
    heroDescription:
      'Nu har du lärt dig reglerna, domartecknen, bestraffningar och positionering. Men hur ser en riktig matchdag ut? I den här lektionen går vi igenom allt som händer runt en match – från administration och matchprotokoll till timeout-regler, skytteavgörande och praktiska frågor som jäv och ersättning. Det här är din guide till att vara redo för din första match.',
    sections: [
      {
        title: 'Matchadministration & EMP',
        icon: 'clipboard',
        content: [
          'EMP (Elektroniskt Matchprotokoll) är det digitala systemet som används i svensk handboll för att registrera allt som händer under en match. Före matchen lämnar lagen in sina spelarlistor i systemet, och domaren verifierar att alla registreringar stämmer. Det innebär kontroll av laganmälan, spelarlegitimationer och att utrustningen uppfyller kraven.',
          'Under matchen registreras alla händelser i EMP: mål (vilken spelare och tidpunkt), varningar, utvisningar, diskvalifikationer, timeouts och andra viktiga händelser. Sekreteraren vid tidtagarbordet ansvarar för att föra protokollet, men domaren har det yttersta ansvaret för att protokollet är korrekt.',
          'Efter matchen signerar domarna matchprotokollet digitalt. Det är viktigt att kontrollera att alla händelser är korrekt registrerade innan signering. Om det finns avvikelser eller protester ska detta noteras i protokollet. EMP-systemet skickar automatiskt resultatet och protokollet till förbundet, vilket säkerställer en smidig och effektiv matchadministration.',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'Kom till hallen minst 30 minuter före matchstart. Använd tiden till att: inspektera planen och målen, kontrollera laganmälningarna i EMP, prata med tidtagare och sekreterare, och göra en kort uppvärmning. En väl förberedd domare utstrålar trygghet.',
          },
        ],
      },
      {
        title: 'Tidtagare och sekreterare',
        icon: 'stopwatch',
        content: [
          'Enligt Regel 18 har tidtagaren och sekreteraren viktiga roller vid tidtagarbordet. Tidtagaren ansvarar för att kontrollera matchklockan – att starta och stoppa tiden korrekt, hantera timeouts och se till att halvlekarna och eventuell övertid har rätt längd. Tidtagaren signalerar med en egen signal (inte visselpipa) vid sluttid och timeout.',
          'Sekreteraren hanterar matchprotokollet och registrerar alla viktiga händelser: mål, varningar, utvisningar, diskvalifikationer och lagtimeouts. Sekreteraren håller också koll på antalet utvisningar per spelare och meddelar domarna om en spelare har nått sin tredje utvisning (som innebär diskvalifikation).',
          'Både tidtagare och sekreterare ska vara neutrala och opartiska. I seniormatcher tillhandahålls de ofta av det arrangerande förbundet eller distriktet. I ungdomsmatcher är det vanligt att hemmalaget ansvarar för att tillsätta dessa funktionärer. Som domare ska du ha en kort genomgång med tidtagare och sekreterare före matchen för att säkerställa att alla förstår sina uppgifter.',
        ],
      },
      {
        title: 'Matchvärd',
        icon: 'shield',
        content: [
          'Matchvärden (den arrangerande föreningen) har ett stort ansvar för att matchen kan genomföras på ett tryggt och korrekt sätt. Föreningen ska se till att anläggningen är redo: planen ska vara i gott skick, målen ska vara fastsatta och godkända, och belysningen ska vara tillräcklig.',
          'Den arrangerande föreningen ansvarar också för att det finns omklädningsrum för båda lagen samt ett separat omklädningsrum för domarna. Matchfunktionärer (tidtagare, sekreterare och eventuellt matchvärd) ska vara på plats i god tid. Sjukvårdsutrustning och första hjälpen-utbildad personal ska finnas tillgänglig vid matcherna.',
          'En viktig uppgift för matchvärden är att ansvara för publikens beteende. Om åskådare beter sig hotfullt, stötande eller på annat sätt olämpligt är det matchvärdens ansvar att ingripa. Domaren kan i extrema fall avbryta matchen om säkerheten inte kan garanteras. God kommunikation mellan domarna och matchvärden före matchen förebygger de flesta problem.',
        ],
      },
      {
        title: 'Timeout-regler',
        icon: 'whistle',
        content: [
          'Enligt grundregeln (Regel 2:10) har varje lag rätt till en lag-timeout på 1 minut i varje halvlek av den ordinarie speltiden. Lag-timeout kan bara begäras av det lag som har bollinnehav. Begäran görs av lagets lagledare genom att lägga ett grönt kort på tidtagarbordet. Tidtagaren signalerar sedan timeout vid nästa spelavbrott.',
          'Under en timeout samlas spelarna kring sin tränare vid avbytarbänken. Domarna ska också använda tiden för att kort kommunicera med varandra – stämma av bedömningen av matchen, diskutera specifika situationer eller bekräfta bestraffningslinjen. Spelet återupptas efter 1 minut med det kast som situationen kräver.',
          'Vid förlängning (övertid) har lagen inte rätt till några lag-timeouts. Det är domaren som ger signal för att timeout ska börja (med tecken 15, T-tecknet) och att spelet ska återupptas (med en visselsignal). Tidtagaren ansvarar för att den 1 minut långa timeouten hålls.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Det är 28:45 i andra halvlek. Det ena laget leder med ett mål och lägger sitt gröna kort på tidtagarbordet för att begära timeout. Men det andra laget har bollinnehav just nu.',
            question: 'Ska timeouten beviljas?',
            answer: 'Nej! Lag-timeout kan bara begäras av det lag som har bollinnehav. Laget som leder har inte bollen, så deras begäran avslås. Tidtagaren ska inte signalera timeout. Om laget får bollinnehav och kortet fortfarande ligger kvar, kan timeouten beviljas vid nästa spelavbrott.',
          },
        ],
      },
      {
        title: 'Skytteavgörande',
        icon: 'goal',
        content: [
          'Om en match måste ha en vinnare (till exempel i cupspel eller slutspel) och den ordinarie matchtiden slutar oavgjort, spelas förlängning. Förlängningen består av 2 halvlekar om 5 minuter vardera, med 1 minuts paus mellan halvlekarna. Lagen byter planhalva och det sker lottning om avkast.',
          'Om matchen fortfarande är oavgjord efter förlängningen avgörs den genom skytte-/straffavgörande. Varje lag utser 5 skytte som turas om att skjuta 7-meterskast. Lagen skjuter omväxlande och alla skott ska skjutas på samma mål. Domarna lottar om vilket lag som börjar.',
          'Om det efter de 5 skotten per lag fortfarande är oavgjort går det till sudden death. Lagen utser en skytt i taget som skjuter omväxlande. Den första omgången där ett lag gör mål och det andra missar avgör matchen. Alla spelare i laget får delta som skytte – man behöver inte begränsa sig till de som spelat under matchen, så länge de finns på spelarförteckningen.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Det är skytteavgörande i en cupfinal. Det är 4–4 efter 5 skott per lag. Sudden death. Första laget gör mål. Andra lagets skytt skjuter – men bollen träffar ribban och studsar ut!',
            question: 'Vad händer nu?',
            answer: 'Matchen är över! I sudden death räcker det att ett lag gör mål och det andra missar. Du blåser slutsignal, pekar mot det vinnande laget, och ser till att allt registreras korrekt i matchprotokollet. Ett intensivt men tydligt ögonblick som domare!',
          },
          {
            type: 'didYouKnow',
            fact: 'det längsta skytteavgörandet i handbollshistorien gick till 17 omgångar sudden death? Det innebär att lagen totalt sköt 44 straffkast/7-meterskast innan en vinnare korades.',
          },
        ],
      },
      {
        title: 'Jäv och praktiska regler',
        icon: 'handshake',
        content: [
          'Jävsreglerna i svensk handboll är tydliga: en domare får inte döma matcher som involverar den egna föreningen eller nära släktingar. Om det finns risk för att domarens opartiskhet kan ifrågasättas ska domaren meddela detta till domaransvarig i distriktet och avstå från uppdraget. Dessa regler finns för att skydda både domaren och spelets integritet.',
          'Som domare får du ekonomisk ersättning för varje match du dömer. Ersättningen bestäms av distriktets domarersättningstabell och varierar beroende på serienivå och åldersklass. Reseersättning utgår ofta också. Ersättningen betalas ut av den arrangerande föreningen eller via förbundets system, beroende på distriktets rutiner.',
          'Efter att du har genomfört grundutbildningen och klarat det avslutande provet tilldelas du ditt domarintyg och kan börja döma matcher. Oftast börjar nya domare med ungdoms- och barnmatcher för att successivt arbeta sig upp till högre serier. Distriktsförbundet erbjuder vidareutbildning, mentorprogram och domarträffar som hjälper dig att utvecklas som domare. Välkommen in i domarvärlden!',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'Gör en checklista inför varje match: Domardräkt? Visselpipa (ta med en extra!)? Gula och röda kort? Mynt för lottning? Klocka? Skor med bra grepp? Vatten? En bra rutin gör att du aldrig glömmer något viktigt.',
          },
          {
            type: 'didYouKnow',
            fact: 'de flesta domare som dömer Handbollsligan idag började sin karriär som tonåringar med att döma barnmatcher? Resan från din första U11-match till allsvenskan tar i snitt 5–8 år av aktivt domande och vidareutbildning.',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Kasttyper & 7-meterskast',
    subtitle: 'Alla kasttyper i detalj – från avkast till straffkast',
    icon: 'goal',
    heroDescription:
      'I handboll finns fem olika kasttyper som alla har specifika regler för utförande. Att behärska dessa regler är avgörande för att kunna döma korrekt. I den här lektionen går vi igenom varje kasttyp i detalj – avkast, inkast, målkast, frikast och 7-meterskast – med fokus på de vanligaste felsituationerna och hur du som domare ska agera.',
    sections: [
      {
        title: 'Översikt över kasttyper',
        icon: 'clipboard',
        content: [
          'Handbollens regelverk innehåller fem olika kasttyper som används för att starta eller återuppta spelet: avkast (Regel 10), inkast (Regel 11), målkast (Regel 12), frikast (Regel 13) och 7-meterskast (Regel 14). Varje kasttyp har specifika regler för var och hur kastet ska utföras, vilka spelare som får delta, och vilka avstånd som gäller.',
          'En grundprincip för alla kasttyper är att kastaren inte får spela bollen en andra gång innan den berört en annan spelare eller stolpe/ribba. Det innebär att du inte kan kasta bollen i väggen och fånga den själv – den måste beröra en annan spelare först. Denna regel gäller för alla fem kasttyperna.',
          'En annan viktig princip är att motståndarna vid de flesta kasttyper ska hålla ett visst avstånd från kastaren. Vid frikast och inkast är detta avstånd 3 meter. Vid 7-meterskast måste alla utespelare stå utanför frikastlinjen (9-meterslinjen). Som domare är det ditt ansvar att se till att dessa avstånd respekteras.',
        ],
      },
      {
        title: 'Avkast (Regel 10)',
        icon: 'handball',
        content: [
          'Avkast utförs från planens mittpunkt och används för att starta matchen, starta andra halvlek och återuppta spelet efter mål. Avkastet ska utföras inom 3 sekunder efter domarens visselsignal. Kastaren måste stå med minst en fot på mittlinjen och får röra sig i vilken riktning som helst med kastet.',
          'Vid avkast gäller att alla spelare i det kastande laget ska befinna sig på sin egen planhalva. Motståndarna får befinna sig var som helst på planen, men måste hålla minst 3 meters avstånd från kastaren. Spelet är igång direkt när bollen lämnar kastarens hand – det krävs ingen visselsignal efter kastet.',
          'Vanliga fel vid avkast: kastaren tar för lång tid (mer än 3 sekunder), medspelare befinner sig på motståndarens planhalva, eller motståndare står för nära kastaren. Som domare ska du vara uppmärksam på dessa detaljer, särskilt i snabba avkast efter mål där lagen ibland försöker ta genvägar.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Lag A gör mål. Lag B vill ta ett snabbt avkast och en spelare tar bollen och kastar från mittpunkten. Men två spelare i lag B står kvar på lag A:s planhalva.',
            question: 'Vad dömer du?',
            answer: 'Blås och låt avkastet göras om! Alla spelare i det kastande laget måste befinna sig på sin egen planhalva vid avkast. Det är ett av de vanligaste avkastfelen, särskilt vid snabba uppslag efter mål. Påminn spelarna kort om regeln.',
          },
        ],
      },
      {
        title: 'Inkast (Regel 11)',
        icon: 'court',
        content: [
          'Inkast döms när bollen helt passerat sidlinjen, eller när den sist berördes av en försvarsspelare innan den passerade yttre mållinjen (utanför målet). Inkastet utförs av det lag som inte sist rörde bollen. Kastaren ska stå med en fot på sidlinjen vid den plats där bollen lämnade planen.',
          'Motståndarna ska hålla minst 3 meters avstånd från kastaren vid inkast. Ingen visselsignal krävs för inkast – spelet kan återupptas direkt. Det är dock viktigt att kastaren utför inkastet från ungefär rätt plats. Mindre avvikelser (en meter eller så) är normalt acceptabla, men stora förflyttningar ska korrigeras.',
          'Ett vanligt misstag är att spelare inte håller foten på sidlinjen, eller att de springer för långt med bollen innan de kastar in den. Som domare behöver du inte vara pedantisk med exakt plats, men om det ger en tydlig fördel att flytta kastet ska du korrigera.',
        ],
      },
      {
        title: 'Målkast (Regel 12)',
        icon: 'goal',
        content: [
          'Målkast döms när bollen passerat yttre mållinjen efter att sist ha berörts av målvakten eller en försvarsspelare (och inte gått i mål). Målkastet utförs av målvakten inifrån målområdet. Ingen visselsignal behövs – målvakten får kasta direkt.',
          'Vid målkast måste motståndarna befinna sig utanför frikastlinjen (9-meterslinjen) tills bollen lämnat målområdet. Bollen är i spel när den passerar målområdeslinjen. Om målvakten kastar bollen och den inte passerar målområdeslinjen (till exempel om den studsar tillbaka) ska kastet göras om.',
          'Målkastet är unikt bland kasttyperna eftersom det inte kräver visselsignal. Det innebär att målvakten kan starta spelet snabbt, vilket ofta utnyttjas för snabba kontringar. Som domare ska du se till att motståndarna respekterar 9-meterslinjen men inte onödigt fördröja spelet genom att vara för strikt.',
        ],
      },
      {
        title: 'Frikast (Regel 13)',
        icon: 'whistle',
        content: [
          'Frikast är det absolut vanligaste domslutet under en handbollsmatch. Det döms vid de flesta regelbrott – gångfel, dubbelstudsar, inträngning i målområdet, otillåten kontakt och så vidare. Frikast innebär att det drabbade laget får kasta bollen från den plats där regelbrottet skedde.',
          'Om regelbrottet skedde mellan målområdeslinjen (6 meter) och frikastlinjen (9 meter) utförs frikastet från närmaste punkt på frikastlinjen. Kastaren ska ha en fot på golvet vid kastet. Motståndarna måste hålla minst 3 meters avstånd.',
          'Vid frikast nära frikastlinjen (9 meter) kan det försvarande laget bilda en mur på 9-meterslinjen. Domaren ska se till att muren håller korrekt avstånd. Om en spelare i muren rör sig framåt för tidigt (innan bollen lämnat kastarens hand) kan domaren blåsa om kastet eller, vid upprepade förseelser, bestraffa med progressiv bestraffning.',
          'En viktig detalj: efter domarens visselsignal har kastaren 3 sekunder på sig att utföra frikastet. Kastet ska utföras från ungefär rätt plats – domaren ska inte vara överdriven pedantisk med platsen, men om det ger en tydlig fördel att flytta kastet ska det korrigeras.',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'Vid frikast nära 9-meterslinjen: ställ dig så att du kan se både kastaren och muren. Om muren rör sig framåt upprepade gånger, ge en tydlig tillsägelse första gången och en progressiv bestraffning (varning/utvisning) om det fortsätter.',
          },
        ],
      },
      {
        title: '7-meterskast (Regel 14)',
        icon: 'red-card',
        content: [
          'Straffkast/7-meterskast döms när en klar målchans förstörs genom ett regelbrott, oavsett var på planen det sker. Det kan också dömas vid avsiktlig tillbakaspelning till egen målvakt i målområdet, eller om en spelare i det försvarande laget avsiktligt beträder sitt eget målområde för att förhindra anfall.',
          'Utförande: Kastaren ställer sig bakom 7-meterslinjen och ska skjuta mot mål inom 3 sekunder efter domarens signal. Sedan regeländringen 2016 är finter tillåtna vid 7-meterskast – kastaren får göra fintrörelse innan kastet, så länge bollen släpps inom tidsfristen på 3 sekunder. Kastaren får inte beröra eller passera 7-meterslinjen innan bollen har lämnat handen.',
          'Målvakten vid 7-meterskast: Målvakten måste stå på eller bakom 4-meterslinjen (som är 4 meter från målet) men får röra sig framåt efter att bollen lämnat kastarens hand. Om målvakten passerar 4-meterslinjen för tidigt och räddar skottet, ska kastet göras om. Om målvakten passerar för tidigt men skottet går in, räknas målet.',
          'Alla andra spelare ska vid 7-meterskast befinna sig utanför frikastlinjen (9-meterslinjen) och minst 3 meter från kastaren. De får inte beträda området mellan frikastlinjen och målområdeslinjen förrän bollen lämnat kastarens hand.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'En anfallsspelare har fri väg mot mål efter att ha passerat alla försvarare. Den sista försvararen tar tag i anfallsspelarens tröja bakifrån och stoppar genombrytningen.',
            question: 'Vad dömer du?',
            answer: '7-meterskast! En klar målchans har förstörts genom ett regelbrott. Dessutom ska försvararen bestraffas med 2 minuters utvisning (eller diskvalifikation om det var en grov aktion). Det räcker att målchansen var "klar" – spelaren behövde inte vara ensam med målvakten.',
          },
          {
            type: 'scenario',
            scenario: 'Vid ett 7-meterskast gör skytten en fintrörelse – hen låtsas skjuta, väntar på att målvakten kastar sig, och skjuter sedan i andra hörnet. Allt inom 3 sekunder.',
            question: 'Är det tillåtet?',
            answer: 'Ja! Sedan regeländringen 2016 är finter tillåtna vid 7-meterskast. Kastaren får finta och variera sin kaströrelse, så länge bollen släpps inom 3 sekunder efter domarens signal och kastaren inte passerar 7-meterslinjen. Det här är en viktig regeländring att känna till – tidigare krävdes en sammanhängande kaströrelse, men den regeln är borttagen.',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Spelarbyten, Utrustning & Speciella Situationer',
    subtitle: 'Byten, utrustningskrav och avbrott i spelet',
    icon: 'shield',
    heroDescription:
      'Reglerna kring spelarbyten, utrustning och speciella situationer är viktiga delar av domarkunskapen som ofta förbises i grundutbildningen. I den här lektionen lär du dig allt om byteszonen, utrustningsregler, blodregeln och hur du hanterar ovanliga situationer som kan uppstå under en match.',
    sections: [
      {
        title: 'Spelarbyten och byteszonen (Regel 4)',
        icon: 'court',
        content: [
          'Spelarbyten i handboll sker löpande under matchens gång via byteszonen. Byteszonen sträcker sig 4,5 meter åt vardera sidan om mittlinjen, alltså totalt 9 meter lång. Alla byten måste ske inom denna zon – en spelare som går ut eller in utanför byteszonen begår ett regelbrott.',
          'Byten kan göras hur många gånger som helst under en match och behöver inte anmälas till sekretariatet. Spelaren som ska av planen måste lämna planen innan ersättaren går in. Om ersättaren går in innan den utgående spelaren har lämnat planen räknas det som för många spelare på planen, vilket normalt bestraffas med 2 minuters utvisning.',
          'Notera att målvaktsbyten följer samma princip – en målvakt kan bytas ut mot en annan målvakt eller mot en utespelare (om laget vill spela utan målvakt) genom byteszonen. Den nya spelaren måste dock vara klädd i målvaktskläder om hen ska agera målvakt.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Under en snabb kontring springer en avbytare in på planen medan en medspelare fortfarande är kvar – det är tillfälligt 8 spelare på planen för lag A.',
            question: 'Vad dömer du?',
            answer: 'Frikast för motståndarlaget och 2 minuters utvisning för den spelare som orsakade felet (vanligtvis den som sprang in för tidigt). Om det var i en klar målchans kan det bli 7-meterskast. Notera att det är sekreteraren som ofta uppmärksammar domarna på detta via en signal.',
          },
        ],
      },
      {
        title: 'För många spelare på planen',
        icon: 'referee',
        content: [
          'Om ett lag har för många spelare på planen är det ett allvarligt regelbrott. Domaren ska omedelbart avbryta spelet, identifiera vilken spelare som orsakade övertaligheten, och ge den spelaren 2 minuters utvisning. Laget spelar sedan med ytterligare en spelare mindre under utvisningstiden.',
          'Det är sekreteraren vid tidtagarbordet som ofta först upptäcker att ett lag har för många spelare. Sekreteraren signalerar detta till domarna via en signal. Domarna ska sedan verifiera situationen och agera. Det är viktigt att domarna har en bra kommunikation med sekretariatet för att snabbt kunna hantera dessa situationer.',
          'Om övertaligheten sker vid ett byte (den utgående spelaren har inte hunnit av planen) är det normalt den inkommande spelaren som bestraffas. Om det är oklart vem som orsakade felet ska den spelare som senast gick in på planen utvisas.',
        ],
      },
      {
        title: 'Spelarutrustning (Regel 4:9)',
        icon: 'shield',
        content: [
          'Alla spelare i ett lag ska bära matchande dräkt (tröja och shorts i samma färg). Målvakten ska bära en färg som tydligt skiljer sig från båda lagens utespelare och från motståndarlagens målvakt. Tröjnummer ska vara synliga – minst 20 cm höga på ryggen och minst 10 cm på bröstet.',
          'Smycken av alla slag är förbjudna under match. Det inkluderar ringar, halsband, örhängen, armband och piercingar. Att tejpa över smycken är inte tillåtet – smyckena måste tas av helt. Som domare ska du kontrollera detta före match och inte tillåta spelare med synliga smycken att delta.',
          'Spelare får bära skyddsutrustning som knäskydd, armbågsskydd och huvudskydd, förutsatt att de är mjuka och inte utgör en fara för andra spelare. Glasögon med plastglas och sportband är tillåtna. Skor ska vara avsedda för inomhusbruk (inga svarta märkande sulor). Fitnesstrackers och smartklockor är förbjudna sedan regeländringen 2024.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Före match upptäcker du att en spelare har örhängen som hen har tejpat över med sportejp.',
            question: 'Godkänner du detta?',
            answer: 'Nej! Att tejpa över smycken är inte tillåtet enligt reglerna. Spelaren måste ta av örhängena helt för att få spela. Det spelar ingen roll hur väl tejpade de är – regeln är tydlig. Förklara vänligt men bestämt för spelaren och tränaren.',
          },
          {
            type: 'tip',
            tip: 'Gör en snabb utrustningskontroll av båda lagen 10-15 minuter före match. Kontrollera: matchande dräkter, synliga nummer, inga smycken, lämpliga skor. Det är mycket enklare att åtgärda problem innan matchen börjar än mitt i spelet.',
          },
        ],
      },
      {
        title: 'Blodregel och skador',
        icon: 'stopwatch',
        content: [
          'En spelare som blöder måste omedelbart lämna planen. Spelaren får inte återvända förrän blödningen har stoppats och såret täckts ordentligt. Eventuellt blod på kläder eller kropp ska torkas bort. Om spelaren inte kan stoppa blödningen inom rimlig tid ska hen ersättas.',
          'Om blod hamnar på planen ska spelet avbrytas och blodet torkas upp innan spelet återupptas. Detta är en hälsoregel som ska följas strikt. Som domare ska du vara uppmärksam på blödande spelare och agera snabbt.',
          'Vid skador får maximalt 2 personer från det skadade lagets bänk gå ut på planen för att hjälpa spelaren, och bara efter domarens tillåtelse (tecken 16). Den skadade spelaren ska i första hand transporteras av planen så att spelet kan återupptas. Om spelaren inte kan fortsätta spela får en ersättare gå in.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Under spelet märker du att en spelare blöder från ett sår på pannan. Spelaren verkar inte ha märkt det och fortsätter spela.',
            question: 'Vad gör du?',
            answer: 'Stoppa spelet vid lämpligt tillfälle (helst inte mitt i en målchans) och skicka av spelaren. Blödande spelare måste alltid av planen, oavsett om de själva vill fortsätta. Spelaren får komma tillbaka när såret är täckt och blödningen stoppad.',
          },
        ],
      },
      {
        title: 'Övriga speciella situationer',
        icon: 'strategy',
        content: [
          'Ibland uppstår situationer som inte är vanliga men som du som domare måste kunna hantera. Om en extra boll plötsligt hamnar på planen ska spelet avbrytas om det påverkar spelet. Spelet återupptas med det kast som situationen kräver, beroende på vilken bollposition som gällde vid avbrottet.',
          'Vid strömavbrott eller problem med belysningen ska spelet avbrytas. Vänta en rimlig tid (normalt upp till 30 minuter) för att se om problemet kan åtgärdas. Om belysningen inte återställs inom den tiden ska matchen avbrytas och rapporteras till förbundet.',
          'Om en domare skadar sig och inte kan fortsätta döma, ska den andra domaren fortsätta ensam om möjligt. Om ingen domare kan fortsätta avbryts matchen. I organiserade serier kan det ibland finnas en reservdomare som kan kliva in.',
          'Vid extern störning (till exempel publik som springer in på planen eller ett brandalarm) ska spelet avbrytas omedelbart. Spelarnas och funktionärernas säkerhet går alltid först. Domaren beslutar om matchen kan återupptas när situationen är under kontroll.',
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Fördjupad Regelkunskap',
    subtitle: 'Målvaktsfinesser, kontaktbedömning och nya regler',
    icon: 'strategy',
    heroDescription:
      'I den här lektionen fördjupar vi oss i regelområden som ofta ställer till problem för nya domare: tomt mål och 7 mot 6-spel, målvaktens tillbakaspelningsregel, fördjupad kontaktbedömning och de senaste regeländringarna. Dessa kunskaper hjälper dig att hantera de mer komplexa situationerna som uppstår i match.',
    sections: [
      {
        title: 'Tomt mål och 7 mot 6 (Regel 4:1)',
        icon: 'goal',
        content: [
          'Lag har rätt att spela utan målvakt och istället använda en extra utespelare – det kallas "7 mot 6" eller "tomt mål". Det sker genom att målvakten byts ut mot en utespelare via byteszonen. Den extra utespelaren måste vara tydligt markerad (ofta med en väst) om reglerna kräver det, men vanligtvis är det målvaktströjan som tas av.',
          'Vid spel med tomt mål gäller särskilda regler om motståndarlaget erövrar bollen. Om motståndarna har möjlighet att skjuta mot det tomma målet utan att en försvarare kan hinna tillbaka, räknas det som en klar målchans. Domaren ska inte blåsa – låt spelarna göra sitt.',
          'En viktig regel: om en utespelare i det lag som spelar med tomt mål beträder sitt eget målområde för att förhindra ett mål, döms 7-meterskast. Det gäller oavsett om spelaren faktiskt berör bollen eller inte – det räcker att hen beträder målområdet i en försvarssituation.',
          'Att döma tomt mål-spel kräver extra uppmärksamhet. Du måste hålla koll på om laget har bytt tillbaka till målvakt, att bytena sker korrekt, och att ingen utespelare agerar målvakt i målområdet.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Lag A spelar med tomt mål (7 mot 6). Lag B erövrar bollen och skjuter mot det tomma målet. En utespelare i lag A springer tillbaka och ställer sig i målområdet för att stoppa bollen.',
            question: 'Vad dömer du?',
            answer: '7-meterskast till lag B och 2 minuters utvisning för den utespelare som beträdde målområdet! En utespelare får aldrig agera målvakt i målområdet. Det spelar ingen roll om spelaren rör bollen eller inte – att beträda målområdet i en försvarssituation räcker.',
          },
        ],
      },
      {
        title: 'Målvaktsregler – fördjupning (Regel 5)',
        icon: 'handball',
        content: [
          'Tillbakaspelningsregeln är en av de mest missförstådda reglerna i handboll. Den innebär att en utespelare inte avsiktligt får spela bollen till sin egen målvakt om målvakten befinner sig i målområdet. Om detta sker döms 7-meterskast till motståndarlaget. Nyckelordet är "avsiktligt" – om bollen oavsiktligt studsar mot en medspelares kropp och hamnar hos målvakten är det inte tillbakaspelning.',
          'Vad räknas som avsiktlig tillbakaspelning? En pass riktad mot målvakten, att medvetet sparka bollen mot målområdet, eller att droppa bollen i golvet så att den rullar in till målvakten. Det krävs en aktiv handling riktad mot målvakten/målområdet.',
          'Målvakten får lämna målområdet och delta som utespelare (utan boll). Men om målvakten har kontroll över bollen i målområdet (efter räddning) får hen inte lämna målområdet med bollen. Hen måste spela bollen inifrån målområdet – antingen kasta den till en medspelare eller försöka göra ett kast mot motståndarens mål.',
          'Om målvakten befinner sig utanför målområdet med bollen gäller vanliga utespelarregler: tre steg, tre sekunder, ingen dubbeldribbling. Målvakten är i praktiken en vanlig utespelare utanför sitt eget målområde.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'En utespelare i lag A är pressad nära sitt eget målområde. Hen kastar bollen bakåt mot målvakten som står i målområdet. Målvakten fångar bollen.',
            question: 'Vad dömer du?',
            answer: '7-meterskast till motståndarlaget! Det här är en klassisk avsiktlig tillbakaspelning. Utespelaren passade medvetet bollen till målvakten i målområdet. Det spelar ingen roll att spelaren var pressad – regeln är tydlig.',
          },
          {
            type: 'tip',
            tip: 'Vid tillbakaspelning: fråga dig "Var passningen avsiktligt riktad mot målvakten/målområdet?" Om ja → 7-meterskast. Om bollen oavsiktligt studsade dit → inget fel. Det är avsikten som är avgörande.',
          },
        ],
      },
      {
        title: 'Fördjupad kontaktbedömning (Regel 8)',
        icon: 'handshake',
        content: [
          'Kontaktbedömning är en av domarens svåraste och viktigaste uppgifter. Den grundläggande frågan är alltid: "Var kontakten riktad mot bollen eller mot kroppen?" En försvarare som försöker nå bollen med öppen hand och i processen berör anfallaren gör generellt tillåten kontakt. Men en försvarare som tar tag i anfallaren utan att försöka nå bollen begår ett regelbrott.',
          'Farlig kontakt mot huvudet, halsen eller strupen ska alltid bestraffas strängt – minst 2 minuters utvisning, ofta diskvalifikation beroende på grad av fara. Det spelar ingen roll om kontakten var avsiktlig eller inte – det är resultatet som avgör vid farlig kontakt.',
          'Kontakt mot en spelare som befinner sig i luften (till exempel under ett flygskott) bedöms strängare. En spelare i luften kan inte kontrollera sin landning, och kontakt som tvingar hen att landa okontrollerat kan leda till allvarliga skador. Sådan kontakt ska normalt bestraffas med minst utvisning.',
          'Kontakt bakifrån ska generellt bedömas strängare än kontakt framifrån, eftersom spelaren som blir angripen bakifrån inte kan se och förbereda sig för kontakten. Att dra en spelare bakifrån, knuffa i ryggen eller knuffa/putta bakifrån är vanliga situationer som motiverar progressiv bestraffning.',
        ],
      },
      {
        title: 'Regeländringar 2024-2025',
        icon: 'clipboard',
        content: [
          'Filmning (simulering) bestraffas sedan 2024 hårdare. IHF har förtydligat att uppenbar filmning kan bestraffas med direkt diskvalifikation (rött kort) vid grova fall, inte bara utvisning som tidigare. Syftet är att stärkt motverka simulering som underminerar spelets trovärdighet.',
          'Utrustningsreglerna har skärpts: fitnesstrackers, smartklockor och liknande elektroniska enheter är sedan 2024 helt förbjudna under match. Tidigare fanns det en gråzon, men nu är regeln tydlig – inga elektroniska apparater på kroppen under spel.',
          'Vid tomt mål-spel har IHF förtydligat reglerna kring vad som händer när en utespelare beträder eget målområde: det ska alltid leda till 7-meterskast om det sker i en försvarssituation, oavsett om spelaren faktiskt berör bollen. Regeln har funnits länge men tillämpningen har blivit striktare.',
          'Domarna har också fått utökade befogenheter att använda videogranskning (VAR) i internationella toppmatcher. För dig som ny domare är detta inte aktuellt ännu, men det är bra att veta att handbollen rör sig i den riktningen. I nationella matcher i Sverige används ännu inte VAR.',
        ],
        richBlocks: [
          {
            type: 'didYouKnow',
            fact: 'IHF uppdaterar regelverket vartannat år, alltid jämna år (2024, 2026, etc.). Större regeländringar träder i kraft vid VM eller OS-turneringar och sprids sedan till alla nivåer. Som domare är det viktigt att hålla sig uppdaterad – ditt distriktsförbund erbjuder regeluppdateringsträffar.',
          },
          {
            type: 'tip',
            tip: 'Följ Svenska Handbollförbundets webbplats och ditt distriktsförbunds informationskanaler för att hålla dig uppdaterad om regeländringar. De flesta distrikt erbjuder årliga regelträffar där nyheterna gås igenom.',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: 'Redo för Match',
    subtitle: 'Praktisk förberedelse, matchledning och slutprövsövning',
    icon: 'trophy',
    heroDescription:
      'Grattis – du har nu gått igenom alla regelkunskaper som krävs för att bli handbollsdomare! I den här avslutande lektionen fokuserar vi på det praktiska: hur du förbereder dig inför din första match, hur du samarbetar med sekretariatet, hur du leder matchen, och hur du hanterar press och svåra situationer. Vi avslutar med mental förberedelse och tips för din fortsatta utveckling som domare.',
    sections: [
      {
        title: 'Checklista före match',
        icon: 'clipboard',
        content: [
          'Kom till hallen minst 30 minuter före matchstart. Använd tiden effektivt: inspektera planen (inga hinder, målen fastsatta, linjer synliga), kontrollera att nät finns i målen, och gör en snabb rundvandring. Kontrollera laganmälningarna i EMP – stämmer spelarlistorna? Är alla spelare behöriga?',
          'Packa din domarväska kvällen före: domardräkt (kontrollera att den är ren!), visselpipa, extra visselpipa (det är obligatoriskt att ha en reserv), gula och röda kort, mynt för lottning, klocka/tidtagarur, skor med bra grepp för inomhusbruk, vattenflaska och eventuellt energibar.',
          'Ha en kort genomgång med tidtagare och sekreterare före match. Förklara vad du förväntar dig: korrekt tidtagning, tydliga signaler vid timeout och utvisning, att sekreteraren meddelar vid tredje utvisning. Om tidtagare/sekreterare är oerfarna, ta dig extra tid att förklara deras roll.',
          'Gör en kort uppvärmning: jogg, sidoförflyttningar och sprintövningar. Du behöver vara fysiskt redo att följa spelets tempo från första visselsignal. En uppvärmd domare rör sig bättre, ser mer och fattar bättre beslut.',
        ],
        richBlocks: [
          {
            type: 'tip',
            tip: 'Gör samma rutin varje match. En fast förberedelserutin (30 min före: planinspekt → EMP-kontroll → sekreteriat-genomgång → uppvärmning → fokusering) minskar stress och gör att du aldrig glömmer något viktigt.',
          },
        ],
      },
      {
        title: 'Samarbete med sekretariatet under match',
        icon: 'handshake',
        content: [
          'Under matchen ska du kommunicera tydligt med tidtagarbordet. Vid mål: peka mot sekretariatet, visa målgörarens nummer och bekräfta med en nick. Vid utvisning: visa tydligt vilken spelare som utvisas (nummer) och visa tecken 14 mot sekretariatet.',
          'Sekreteraren har en viktig roll i att meddela dig om en spelare har fått sin 3:e utvisning. Denna signal (oftast en tydlig ljudsignal) betyder att spelaren automatiskt ska diskvalificeras. Du ska bekräfta med sekreteraren och visa rött kort till spelaren. Missa inte denna signal!',
          'Vid timeout ska du kommunicera med sekretariatet: bekräfta att timeouten är registrerad, kontrollera att rätt lag har fått sin timeout noterad, och stäm av med din meddomare under pausen. När 50 sekunder har gått signalerar tidtagaren, och du blåser för att återuppta spelet vid 60 sekunder.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Mitt under en match hör du en kraftig signal från tidtagarbordet. Sekreteraren visar tre fingrar och pekar på en spelare i lag B.',
            question: 'Vad betyder detta och vad gör du?',
            answer: 'Sekreteraren signalerar att spelaren har fått sin 3:e utvisning! Du ska vid nästa spelavbrott bekräfta med sekreteraren, visa rött kort (diskvalifikation) till spelaren, och skicka av hen. Laget spelar undertal i 2 minuter som vanligt, men spelaren får inte komma tillbaka.',
          },
        ],
      },
      {
        title: 'Spelförståelse och matchledning',
        icon: 'strategy',
        content: [
          'En bra domare läser spelet och anpassar sin ledning efter matchens karaktär. I matchens inledning (de första 5 minuterna) sätter du standarden – visa tidigt att du har kontroll genom att vara tydlig och konsekvent i dina beslut. Om du är slappt i början blir det svårt att strama åt senare.',
          'Tempomanagement innebär att du anpassar matchens tempo. Om matchen börjar bli hetsig och antalet regelbrott ökar, kan du medvetet sakta ner tempot genom att ta några sekunder extra vid frikast, ha en kort ordväxling med en kapten, eller begära timeout. Syftet är att sänka temperaturen utan att det känns som att du fördröjer.',
          'Var uppmärksam på eskaleringsmönster: om samma spelare hamnar i upprepade konflikter, om tränare börjar protestera allt mer, eller om publiken blir fientlig – då behöver du vara extra tydlig i dina beslut och kommunicera med din meddomare. Tidig intervention (en varning, ett kort samtal) kan förhindra att situationen eskalerar.',
          'Kom ihåg att du inte behöver ha rätt i 100% av fallen – men du behöver vara konsekvent. Om du dömer en situation på ett visst sätt i första halvlek, döm likadana situationer på samma sätt i andra halvlek. Konsekvens bygger förtroende.',
        ],
      },
      {
        title: 'Hantera press och svåra situationer',
        icon: 'megaphone',
        content: [
          'Protester tillhör vardagen som domare. Det viktigaste är att inte gå i försvarsställning. När en spelare eller tränare protesterar, stå lugnt med raka axlar och säg kort: "Beslutet är fattat." Gå sedan vidare. Du behöver aldrig förklara eller rättfärdiga dina beslut under pågående match.',
          'Om en tränare upprepade gånger stör matchen genom protester, osportsligt beteende eller kommentarer, kan du ge en varning till den lagansvarige. Vid fortsatt störning kan tränaren diskvalificeras, vilket innebär att hen måste lämna hallens spelområde. Dokumentera detta i matchprotokollet.',
          'Publikproblem (skrik, kastade föremål, hot) är matchvärdens ansvar. Om du som domare känner att säkerheten är hotad, avbryt matchen och kontakta matchvärden. Du har rätt att avbryta en match om du bedömer att det inte går att genomföra den på ett säkert sätt. Dokumentera alltid sådana händelser.',
          'Om du inser att du har gjort en felaktig dom: i princip är domarens beslut slutgiltiga. Men om du omedelbart inser att du gjort fel (till exempel blåst för frikast åt fel lag) kan du rätta dig inom några sekunder. Gör det kort och tydligt. Efter att spelet har återupptagits kan beslutet inte ändras.',
        ],
      },
      {
        title: 'Mental förberedelse',
        icon: 'trophy',
        content: [
          'Visualisering är ett kraftfullt verktyg. Kvällen före en match, lägg dig ner och visualisera hur du dömer matchen: du blåser bestämt, visar tydliga tecken, rör dig bra, hanterar en protest lugnt. Genom att mentalt "genomleva" matchen i förväg förbereder du hjärnan för att agera tryggt och självsäkert.',
          'Andning under match: om du märker att du blir stressad eller nervös, ta tre medvetna djupa andetag. Andas in genom näsan i 4 sekunder, håll i 2 sekunder, andas ut genom munnen i 6 sekunder. Denna enkla teknik sänker pulsen och hjälper dig att fokusera.',
          'Fokuspunkter: välj 1-2 saker att fokusera extra på i varje match. Till exempel: "Idag ska jag jobba på att visa tydliga tecken" eller "Idag ska jag vara extra noga med att kommunicera med min meddomare." Genom att ha specifika fokuspunkter utvecklas du snabbare som domare.',
          'Efter matchen: för matchdagbok. Skriv ner 3 saker som gick bra och 1 sak du vill förbättra. Det behöver inte vara långt – tre meningar räcker. Över tid ser du mönster i din utveckling och kan sätta mer riktade mål. Kontakta gärna ditt distrikts domarkontaktnät eller mentorprogram för stöd och vägledning.',
        ],
        richBlocks: [
          {
            type: 'scenario',
            scenario: 'Det är din tredje match som domare. En tränare skriker högt och protesterar mot varje beslut du tar. Spelarna i det laget börjar också ifrågasätta dina beslut. Du känner dig stressad.',
            question: 'Hur hanterar du situationen?',
            answer: 'Steg 1: Ta ett djupt andetag. Steg 2: Vid nästa avbrott, gå lugnt till tränaren och säg kort: "Jag behöver att du respekterar mina beslut. Fortsätter det här kommer jag att ge en varning." Steg 3: Om det fortsätter – varna den lagansvarige med gult kort. Steg 4: Prata kort med din meddomare under nästa avbrott. Du är inte ensam.',
          },
          {
            type: 'scenario',
            scenario: 'Du har just gjort en dom och inser direkt att du dömde fel – du blåste frikast för fel lag.',
            question: 'Vad gör du?',
            answer: 'Om du inser det omedelbart (inom några sekunder, innan spelet har fortsatt): korrigera beslutet direkt. Blås igen, visa åt rätt lag. Säg kort "Jag korrigerar – frikast åt lag X." Det visar mod och ärlighet. Om spelet redan har fortsatt kan du inte ändra beslutet – acceptera det, lär dig av det, och fokusera framåt.',
          },
          {
            type: 'tip',
            tip: 'Starta en matchdagbok redan från din första match. Tre enkla frågor efter varje match: "Vad gick bra?", "Vad kan jag förbättra?", "Vad tar jag med mig till nästa match?" Denna enkla vana kommer accelerera din utveckling enormt.',
          },
          {
            type: 'didYouKnow',
            fact: 'de flesta toppdomare i världen har dömt i över 10 år och började precis som du? Martin Gjeding (Danmark) och Ignacio García (Spanien), som dömt VM- och OS-finaler, började båda som tonårsdomare i lokala serier. Varje expert var en gång nybörjare.',
          },
        ],
      },
    ],
  },
];
