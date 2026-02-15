import { Quiz } from '@/types';

export const quizzes: Quiz[] = [
  // ============================================================
  // Quiz 1: Grunderna (lessonId: 1)
  // ============================================================
  {
    lessonId: 1,
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: 'Vilka är de officiella måtten på en handbollsplan?',
        options: [
          { text: '30 x 15 meter', isCorrect: false },
          { text: '40 x 20 meter', isCorrect: true },
          { text: '50 x 25 meter', isCorrect: false },
          { text: '36 x 18 meter', isCorrect: false },
        ],
        explanation:
          'En handbollsplan ska vara 40 meter lång och 20 meter bred enligt de officiella reglerna. Dessa mått gäller för alla seniormatcher och de flesta ungdomsmatcher. Det är viktigt för domaren att kunna bedöma om planen uppfyller kraven innan match.',
      },
      {
        id: 2,
        question: 'Hur långt från målet ligger målområdeslinjen?',
        options: [
          { text: '4 meter', isCorrect: false },
          { text: '5 meter', isCorrect: false },
          { text: '6 meter', isCorrect: true },
          { text: '7 meter', isCorrect: false },
        ],
        explanation:
          'Målområdeslinjen ligger 6 meter från målet och bildar en halvcirkel framför varje mål. Området innanför denna linje är reserverat för målvakten. Fältspelare får inte beträda målområdet, men de får hoppa in över linjen för att göra mål.',
      },
      {
        id: 3,
        question:
          'På vilket avstånd från målet befinner sig frikaströmslinjen (den streckade linjen)?',
        options: [
          { text: '7 meter', isCorrect: false },
          { text: '8 meter', isCorrect: false },
          { text: '9 meter', isCorrect: true },
          { text: '10 meter', isCorrect: false },
        ],
        explanation:
          'Frikaströmslinjen, ofta kallad 9-meterslinjen, är en streckad linje som ligger 9 meter från målet. Det är från denna linje (eller längre bort) som frikast utförs om regelöverträdelsen sker mellan 6- och 9-meterslinjen. Linjen är viktig för domarens placering vid frikast.',
      },
      {
        id: 4,
        question: 'Hur lång är en halvlek i en seniormatch i handboll?',
        options: [
          { text: '20 minuter', isCorrect: false },
          { text: '25 minuter', isCorrect: false },
          { text: '30 minuter', isCorrect: true },
          { text: '35 minuter', isCorrect: false },
        ],
        explanation:
          'En seniormatch i handboll spelas i två halvlekar om vardera 30 minuter, alltså 2 x 30 minuter. Halvtidspausen är normalt 10 minuter. Ungdomsmatcher har kortare halvlekar: 2x25 min (U15–U16), 2x20 min (U14), 2x15 min (U12–U13).',
      },
      {
        id: 5,
        question:
          'Hur många spelare per lag får befinna sig på planen samtidigt under en match?',
        options: [
          { text: '5 spelare', isCorrect: false },
          { text: '6 spelare', isCorrect: false },
          { text: '7 spelare', isCorrect: true },
          { text: '8 spelare', isCorrect: false },
        ],
        explanation:
          'Varje lag får ha högst 7 spelare på planen samtidigt, varav en är målvakt. De övriga 6 är fältspelare. Lagen kan också välja att spela utan målvakt och istället ha 7 fältspelare, vilket ibland används i taktiskt syfte.',
      },
      {
        id: 6,
        question: 'Vilken bollstorlek används i herrmatcher?',
        options: [
          { text: 'Storlek 1', isCorrect: false },
          { text: 'Storlek 2', isCorrect: false },
          { text: 'Storlek 3', isCorrect: true },
          { text: 'Storlek 0', isCorrect: false },
        ],
        explanation:
          'I herrmatcher används en boll i storlek 3 (omkrets 58–60 cm, vikt 425–475 g). Storlek 2 (54–56 cm, 325–375 g) används av damer och pojkar 12–16 år. Storlek 1 (50–52 cm, 290–330 g) används av flickor 8–14 år och pojkar 8–12 år. Som domare är det viktigt att kontrollera att rätt bollstorlek används.',
      },
      {
        id: 7,
        question: 'Vilket format spelas minihandboll i klassen Under 9?',
        options: [
          { text: '3 mot 3', isCorrect: false },
          { text: '4 mot 4', isCorrect: true },
          { text: '5 mot 5', isCorrect: false },
          { text: '6 mot 6', isCorrect: false },
        ],
        explanation:
          'Minihandboll för U9 spelas med 4 utespelare (plus målvakt) per lag på en miniplan (20x12 meter). Det ger barnen mer bollkontakt och mer utrymme att utveckla grundläggande färdigheter. Reglerna är också förenklade jämfört med seniorhandboll.',
      },
      {
        id: 8,
        question: 'Vad är domarens viktigaste uppgift under en handbollsmatch?',
        options: [
          { text: 'Att räkna mål korrekt', isCorrect: false },
          { text: 'Att se till att matchen håller tidsschemat', isCorrect: false },
          { text: 'Att säkerställa rättvist och regelrätt spel', isCorrect: true },
          { text: 'Att underhålla publiken med snabba beslut', isCorrect: false },
        ],
        explanation:
          'Domarens huvuduppgift är att säkerställa att matchen spelas rättvist och enligt reglerna. Det handlar om att skydda spelarnas säkerhet, tillämpa reglerna konsekvent och skapa förutsättningar för en bra match. Allt annat, som tidshållning och målräkning, är stödfunktioner till detta huvuduppdrag.',
      },
    ],
  },

  // ============================================================
  // Quiz 2: Spelregler (lessonId: 2)
  // ============================================================
  {
    lessonId: 2,
    passingScore: 75,
    questions: [
      {
        id: 1,
        question:
          'En spelare fångar bollen och börjar springa. Hur många steg får hen ta innan bollen måste passas, studsas eller skjutas?',
        options: [
          { text: '2 steg', isCorrect: false },
          { text: '3 steg', isCorrect: true },
          { text: '4 steg', isCorrect: false },
          { text: '5 steg', isCorrect: false },
        ],
        explanation:
          'En spelare får ta högst 3 steg med bollen i handen. Efter 3 steg måste bollen studsas, passas eller skjutas. Om spelaren tar fler steg döms det som gångfel och motståndarlaget får frikast.',
      },
      {
        id: 2,
        question:
          'En spelare har fångat bollen och står stilla. Hur många sekunder får hen hålla bollen innan den måste spelas vidare?',
        options: [
          { text: '2 sekunder', isCorrect: false },
          { text: '3 sekunder', isCorrect: true },
          { text: '5 sekunder', isCorrect: false },
          { text: '7 sekunder', isCorrect: false },
        ],
        explanation:
          'Regeln säger att en spelare får hålla bollen i högst 3 sekunder, oavsett om hen står stilla eller rör sig. Överskrids tiden döms det som tidsspel och motståndarlaget får frikast. Domaren måste kunna bedöma denna tidsgräns även i snabba situationer.',
      },
      {
        id: 3,
        question: 'Vad innebär "dubbelstuds" (dubbeldribbel) i handboll?',
        options: [
          { text: 'Att studsa bollen med båda händerna samtidigt', isCorrect: false },
          {
            text: 'Att fånga bollen efter studs och sedan börja studsa igen',
            isCorrect: true,
          },
          { text: 'Att studsa bollen två gånger i rad på samma ställe', isCorrect: false },
          { text: 'Att studsa bollen över mittlinjen', isCorrect: false },
        ],
        explanation:
          'Dubbeldribbel innebär att en spelare studsar bollen, fångar den, och sedan börjar studsa igen. Det är inte tillåtet. Efter att ha studsat och fångat bollen måste spelaren passa eller skjuta inom 3 steg/3 sekunder. Regelöverträdelsen ger frikast till motståndarlaget.',
      },
      {
        id: 4,
        question:
          'Under en match springer en fältspelare in i målområdet för att försvara. Är det tillåtet?',
        options: [
          { text: 'Ja, om spelaren inte rör bollen', isCorrect: false },
          { text: 'Ja, om målvakten ger tillåtelse', isCorrect: false },
          {
            text: 'Nej, bara målvakten får befinna sig i målområdet',
            isCorrect: true,
          },
          { text: 'Ja, om det är i försvarssyfte', isCorrect: false },
        ],
        explanation:
          'Endast målvakten får befinna sig i målområdet. Om en fältspelare beträder målområdet döms överträdelse. En försvarsspelare som kliver in i eget målområde ger frikast till motståndarlaget, och i vissa fall kan det bli 7-meterskast om det påverkar en klar målchans.',
      },
      {
        id: 5,
        question:
          'En spelare står med foten på målområdeslinjen. Räknas spelaren som varande i målområdet?',
        options: [
          { text: 'Nej, linjen räknas som utanför målområdet', isCorrect: false },
          { text: 'Ja, linjen räknas som en del av målområdet', isCorrect: true },
          { text: 'Det beror på om spelaren har bollen', isCorrect: false },
          { text: 'Domaren avgör från fall till fall', isCorrect: false },
        ],
        explanation:
          'Målområdeslinjen tillhör målområdet. Det innebär att en spelare som berör linjen anses befinna sig i målområdet. Denna regel är viktig att komma ihåg, särskilt vid nära situationer där spelare sätter ner foten nära 6-meterslinjen.',
      },
      {
        id: 6,
        question:
          'En anfallsspelare blir felaktigt tackad men lyckas ändå ge en bra passning till en medspelare i fritt läge. Vad bör domaren göra?',
        options: [
          { text: 'Blåsa direkt för frikast', isCorrect: false },
          { text: 'Ge en varning och sedan frikast', isCorrect: false },
          {
            text: 'Tillämpa fördelsregeln och låta spelet fortsätta',
            isCorrect: true,
          },
          { text: 'Alltid döma 7-meterskast i sådana situationer', isCorrect: false },
        ],
        explanation:
          'Fördelsregeln innebär att domaren inte ska avbryta spelet om det skulle missgynna det lag som blivit utsatt för regelöverträdelsen. Om det felande laget ändå förlorar bollen eller situationen inte leder till fördel kan domaren i efterhand döma frikast. Regeln finns för att hålla spelet flytande.',
      },
      {
        id: 7,
        question:
          'Under en match råkar en fältspelare sparka till bollen med foten. Vad gäller?',
        options: [
          { text: 'Det är alltid tillåtet', isCorrect: false },
          {
            text: 'Det är inte tillåtet för fältspelare, bara för målvakten i målområdet',
            isCorrect: true,
          },
          { text: 'Det är tillåtet om det inte var avsiktligt', isCorrect: false },
          { text: 'Det bestraffas alltid med 2 minuter', isCorrect: false },
        ],
        explanation:
          'Fältspelare får inte använda fot eller ben under knäet för att spela bollen. Målvakten däremot får använda foten för att rädda bollen inom målområdet. Om en fältspelare avsiktligt spelar bollen med foten döms frikast till motståndarlaget.',
      },
      {
        id: 8,
        question: 'Vad händer efter att ett mål har gjorts?',
        options: [
          { text: 'Det scorande laget gör avkast från eget målområde', isCorrect: false },
          {
            text: 'Spelet återupptas med avkast (uppkast) från planens mitt',
            isCorrect: true,
          },
          { text: 'Målvakten kastar ut bollen från målet', isCorrect: false },
          { text: 'Motståndarlaget gör inkast från sidlinjen', isCorrect: false },
        ],
        explanation:
          'Efter varje gjort mål återupptas spelet med avkast (uppkast) från planens mitt. Avkastet görs av det lag som fått mål emot sig. Spelet kan återupptas direkt efter domarens signal, och motståndarna behöver inte stå på sin egen planhalva.',
      },
      {
        id: 9,
        question:
          'En anfallsspelare hoppar in i målområdet, skjuter och gör mål innan hen landar. Godkänns målet?',
        options: [
          { text: 'Nej, spelaren befinner sig i målområdet', isCorrect: false },
          {
            text: 'Ja, om bollen lämnade handen innan spelaren landade i målområdet',
            isCorrect: true,
          },
          { text: 'Nej, man får aldrig hoppa in i målområdet', isCorrect: false },
          { text: 'Ja, men bara om det var en flygande spelare', isCorrect: false },
        ],
        explanation:
          'En spelare får hoppa in i målområdet för att skjuta, men bollen måste lämna spelarens hand innan hen landar i målområdet. Detta kallas ofta "flygmål" och är en viktig del av handbollsspelet. Landar spelaren med bollen kvar i handen döms målområdesöverträdelse.',
      },
      {
        id: 10,
        question: 'När räknas ett mål som godkänt i handboll?',
        options: [
          { text: 'När bollen nuddar nätet i målet', isCorrect: false },
          { text: 'När bollen passerar mållinjen delvis', isCorrect: false },
          {
            text: 'När hela bollen har passerat hela mållinjen mellan stolparna',
            isCorrect: true,
          },
          { text: 'När domaren blåser i visselpipan', isCorrect: false },
        ],
        explanation:
          'För att ett mål ska godkännas måste hela bollen ha passerat hela mållinjen mellan målstolparna och under ribban. Det räcker inte att bollen bara delvis passerar linjen. Domaren, framförallt måldomaren, måste ha bra position för att kunna bedöma dessa situationer korrekt.',
      },
    ],
  },

  // ============================================================
  // Quiz 3: Domartecken (lessonId: 3)
  // ============================================================
  {
    lessonId: 3,
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: 'Hur många officiella domartecken finns det i handboll?',
        options: [
          { text: '12', isCorrect: false },
          { text: '15', isCorrect: false },
          { text: '17', isCorrect: true },
          { text: '22', isCorrect: false },
        ],
        explanation:
          'Det finns 17 officiella domartecken i handboll enligt IHF:s regelverk. Dessa täcker allt från frikast och målvaktskast till bestraffningar och timeout. Det är viktigt att domaren behärskar alla tecken för att kunna kommunicera tydligt med spelare, funktionärer och publik.',
      },
      {
        id: 2,
        question:
          'Domaren formar ett T med händerna. Vad signalerar detta tecken?',
        options: [
          { text: 'Tekniskt fel', isCorrect: false },
          { text: 'Timeout (time-out)', isCorrect: true },
          { text: 'Tidsspel', isCorrect: false },
          { text: 'Tvåminutersutvisning', isCorrect: false },
        ],
        explanation:
          'T-tecknet signalerar timeout. Domaren bildar ett T genom att hålla ena handens handflata horisontellt ovanpå den andra handens fingrar som pekar uppåt. Timeout kan begäras av lagen eller dömas av domaren, till exempel vid skador.',
      },
      {
        id: 3,
        question:
          'Domaren roterar armarna runt varandra framför kroppen. Vilken regelöverträdelse signaleras?',
        options: [
          { text: 'Dubbelstuds', isCorrect: false },
          { text: 'Felaktig passning', isCorrect: false },
          {
            text: 'Gångfel (för många steg) eller tidsspel (håller bollen för länge)',
            isCorrect: true,
          },
          { text: 'Passivt spel', isCorrect: false },
        ],
        explanation:
          'Tecknet med roterande armar framför kroppen signalerar gångfel eller tidsspel. Dessa överträdelser har samma tecken eftersom konsekvensen är densamma: frikast till motståndarlaget. Domaren behöver inte skilja dem åt i signaleringen.',
      },
      {
        id: 4,
        question: 'Vilket av följande domartecken är ett av de som reglerna anger som obligatoriska?',
        options: [
          { text: 'Målvaktskast (tecken 9)', isCorrect: false },
          { text: 'Håll tre meters avstånd (tecken 10)', isCorrect: false },
          {
            text: 'Timeout (tecken 15)',
            isCorrect: true,
          },
          { text: 'Förvarningstecken för passivt spel (tecken 17)', isCorrect: false },
        ],
        explanation:
          'Timeout-tecknet (tecken 15) är ett av de tecken som reglerna specifikt anger som obligatoriska. Tillsammans med tecken 11 (passivt spel) och tecken 16 (tillåtelse att beträda planen under timeout) utgör de de obligatoriska domartecknen. Andra tecken som målvaktskast och förvarningstecken används när situationen kräver det.',
      },
      {
        id: 5,
        question: 'Hur signalerar domaren en 2-minutersutvisning?',
        options: [
          { text: 'Visar upp rött kort', isCorrect: false },
          {
            text: 'Sträcker upp en arm med två fingrar',
            isCorrect: true,
          },
          { text: 'Pekar mot utvisningsbänken', isCorrect: false },
          { text: 'Gör ett korsande tecken med armarna', isCorrect: false },
        ],
        explanation:
          'Domaren signalerar 2-minutersutvisning genom att sträcka upp en arm och visa två fingrar tydligt. Tecknet visas mot den utvisade spelaren så att denne, sekretariatet och publiken ser det klart. Det är ett av de vanligaste bestraffningstecknen.',
      },
      {
        id: 6,
        question:
          'Domaren håller upp en arm med öppen hand (handflatan framåt). Vad innebär denna signal?',
        options: [
          { text: 'Stopp i spelet', isCorrect: false },
          { text: 'Mål godkänt', isCorrect: false },
          {
            text: 'Förvarning om passivt spel',
            isCorrect: true,
          },
          { text: 'Frikast', isCorrect: false },
        ],
        explanation:
          'En upplyft arm med öppen handflata framåt signalerar förvarning om passivt spel (tecken 17). Det innebär att det anfallande laget har maximalt 4 passningar på sig att avsluta anfallet med ett skott mot mål, annars döms frikast till motståndarlaget.',
      },
      {
        id: 7,
        question: 'Hur visar domaren att det är frikast?',
        options: [
          { text: 'Blåser kort i visselpipan och pekar uppåt', isCorrect: false },
          {
            text: 'Blåser i visselpipan och pekar med armen i kastriktnigen',
            isCorrect: true,
          },
          { text: 'Gör en cirkelrörelse med armen', isCorrect: false },
          { text: 'Visar tummen upp mot det kastande laget', isCorrect: false },
        ],
        explanation:
          'Vid frikast blåser domaren i visselpipan och pekar med armen i den riktning som det kastande laget ska anfalla. Det ger en tydlig signal till alla på planen om vilket lag som fått frikastet och i vilken riktning spelet ska fortsätta.',
      },
      {
        id: 8,
        question:
          'Vilka av följande domartecken är alltid obligatoriska att visa enligt reglerna?',
        options: [
          { text: 'Frikast, målvaktskast och varning', isCorrect: false },
          { text: 'Målkast, avkast och sidlinjebyte', isCorrect: false },
          {
            text: 'Passivt spel, timeout och tillåtelse att beträda planen under timeout',
            isCorrect: true,
          },
          { text: 'Dubbelstuds, gångfel och tidsspel', isCorrect: false },
        ],
        explanation:
          'Tecken 11 (passivt spel), tecken 15 (timeout) och tecken 16 (tillåtelse att beträda planen under timeout) är de tecken som reglerna specifikt anger som obligatoriska. Dessa tecken är viktiga för matchadministrationen och spelarnas säkerhet.',
      },
    ],
  },

  // ============================================================
  // Quiz 4: Bestraffningar (lessonId: 4)
  // ============================================================
  {
    lessonId: 4,
    passingScore: 75,
    questions: [
      {
        id: 1,
        question:
          'I vilken ordning trappas bestraffningarna upp i handbollens bestraffningsstege?',
        options: [
          {
            text: 'Varning → frikast → 2 minuter → diskvalifikation',
            isCorrect: false,
          },
          {
            text: 'Frikast → varning → 2 minuter → diskvalifikation',
            isCorrect: true,
          },
          {
            text: '2 minuter → varning → frikast → diskvalifikation',
            isCorrect: false,
          },
          {
            text: 'Frikast → 2 minuter → varning → diskvalifikation',
            isCorrect: false,
          },
        ],
        explanation:
          'Bestraffningsstegen börjar med frikast för enklare regelöverträdelser, sedan varning (gult kort) för hårdare förseelser, följt av 2-minutersutvisning vid upprepade eller grövre förseelser, och slutligen diskvalifikation (rött kort) vid de allvarligaste förseelserna. Domaren ska följa denna trappa men kan hoppa över steg vid grova förseelser.',
      },
      {
        id: 2,
        question: 'Hur många varningar (gula kort) kan ett lag maximalt få?',
        options: [
          { text: '2 varningar', isCorrect: false },
          { text: '3 varningar', isCorrect: true },
          { text: '4 varningar', isCorrect: false },
          { text: '5 varningar', isCorrect: false },
        ],
        explanation:
          'Ett lag kan maximalt få 3 varningar under en match. Efter att ett lag har fått 3 varningar ska varje ytterligare bestraffningsbar förseelse av det lagets spelare leda till minst 2-minutersutvisning. Det innebär att domaren måste hålla koll på antalet varningar per lag.',
      },
      {
        id: 3,
        question:
          'En spelare får sin tredje 2-minutersutvisning i samma match. Vad blir konsekvensen?',
        options: [
          { text: 'Spelaren får en fjärde utvisning', isCorrect: false },
          { text: 'Spelaren får straffspark emot sig', isCorrect: false },
          {
            text: 'Spelaren diskvalificeras (rött kort)',
            isCorrect: true,
          },
          { text: 'Ingenting extra, spelaren sitter 2 minuter igen', isCorrect: false },
        ],
        explanation:
          'En spelare som får sin tredje 2-minutersutvisning i samma match diskvalificeras automatiskt. Spelaren måste lämna planen och avbytarbänken. Laget spelar med en spelare färre i 2 minuter, precis som vid en vanlig utvisning, men spelaren får inte komma tillbaka.',
      },
      {
        id: 4,
        question:
          'En spelare kastar sig i golvet för att simulera en förseelse ("filmar"). Hur ska domaren bestraffa detta?',
        options: [
          { text: 'Varning (gult kort)', isCorrect: false },
          {
            text: 'Omedelbar 2-minutersutvisning',
            isCorrect: true,
          },
          { text: 'Frikast utan personlig bestraffning', isCorrect: false },
          { text: 'Domaren ignorerar situationen', isCorrect: false },
        ],
        explanation:
          'Simulering, ofta kallat "filmning", bestraffas med omedelbar 2-minutersutvisning. Regeln finns för att skydda spelets trovärdighet och förhindra att spelare försöker lura domaren. Det krävs ingen föregående varning, utan utvisning ges direkt vid tydlig simulering.',
      },
      {
        id: 5,
        question:
          'Domaren har visat förvarningstecknet för passivt spel. Hur många passningar har det anfallande laget på sig att skjuta?',
        options: [
          { text: '2–3 passningar', isCorrect: false },
          { text: 'Maximalt 4 passningar', isCorrect: true },
          { text: '8–10 passningar', isCorrect: false },
          { text: 'Obegränsat antal, det handlar bara om tid', isCorrect: false },
        ],
        explanation:
          'Efter att förvarningstecknet för passivt spel har visats har det anfallande laget maximalt 4 passningar på sig att avsluta anfallet med ett skott mot mål. Om laget inte skjuter inom dessa passningar döms frikast till motståndarlaget. Observera att 4-passningsregeln tillämpas från U15 och uppåt – i U14 och yngre tillämpas inte denna regel.',
      },
      {
        id: 6,
        question:
          'I en närkamp mellan två spelare, vilken typ av kroppskontakt är TILLÅTEN?',
        options: [
          { text: 'Knuffa motståndaren med armbåge', isCorrect: false },
          { text: 'Greppa motståndarens arm eller tröja', isCorrect: false },
          {
            text: 'Blockera eller avleda med öppen hand',
            isCorrect: true,
          },
          { text: 'Skjuta undan motståndaren med axeln bakifrån', isCorrect: false },
        ],
        explanation:
          'I handboll är det tillåtet att använda öppen hand för att blockera eller avleda en motståndare framifrån eller från sidan. Att greppa, knuffa, slå eller tackla bakifrån är inte tillåtet. Gränsen mellan tillåten och otillåten kontakt är en av de viktigaste bedömningarna en domare gör.',
      },
      {
        id: 7,
        question: 'När ska domaren ge en direkt diskvalifikation (rött kort)?',
        options: [
          { text: 'Vid varje avsiktlig förseelse', isCorrect: false },
          { text: 'När en spelare protesterar mot domaren', isCorrect: false },
          {
            text: 'Vid grovt våldsamma förseelser som äventyrar spelarens hälsa',
            isCorrect: true,
          },
          { text: 'Efter den andra 2-minutersutvisningen', isCorrect: false },
        ],
        explanation:
          'Direkt diskvalifikation ges vid särskilt grova förseelser som innebär fara för motståndarens hälsa, till exempel slag, sparkar eller farliga tacklingar. Det kan också ges vid grovt osportsligt beteende. Domaren behöver inte ha gett tidigare bestraffningar innan rött kort delas ut.',
      },
      {
        id: 8,
        question:
          'En spelare i lag A får 2-minutersutvisning. Vad gäller för laget under utvisningstiden?',
        options: [
          { text: 'Laget spelar med en extra spelare istället', isCorrect: false },
          { text: 'Laget sätter in en ersättare direkt', isCorrect: false },
          {
            text: 'Laget spelar med en spelare färre i 2 minuter',
            isCorrect: true,
          },
          { text: 'Matchen pausas i 2 minuter', isCorrect: false },
        ],
        explanation:
          'När en spelare får 2-minutersutvisning måste laget spela med en spelare färre under hela utvisningstiden. Det innebär att laget spelar med 6 spelare istället för 7. Först efter att 2 minuter har passerat får en annan spelare gå in på planen för det undertaliga laget.',
      },
    ],
  },

  // ============================================================
  // Quiz 5: Positionering (lessonId: 5)
  // ============================================================
  {
    lessonId: 5,
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: 'Vilka är de två domarrollerna i en handbollsmatch?',
        options: [
          { text: 'Huvuddomare och biträdande domare', isCorrect: false },
          { text: 'Måldomare och plandomare', isCorrect: true },
          { text: 'Förstedomare och andredomare', isCorrect: false },
          { text: 'Linjedomare och mittdomare', isCorrect: false },
        ],
        explanation:
          'I handboll kallas de två domarrollerna måldomare och plandomare. Måldomaren står vid den mållinjen där anfallet riktas och fokuserar på händelser nära målet. Plandomaren står bakom det anfallande laget och har översikt över spelet på planen.',
      },
      {
        id: 2,
        question: 'När byter domarna roller (från måldomare till plandomare och tvärtom)?',
        options: [
          { text: 'Vid varje halvtidspaus', isCorrect: false },
          { text: 'Vid varje avkast (uppkast)', isCorrect: true },
          { text: 'Var tionde minut', isCorrect: false },
          { text: 'De byter aldrig, rollerna är fasta', isCorrect: false },
        ],
        explanation:
          'Domarna byter roller vid varje avkast, alltså efter varje mål. Den som var måldomare blir plandomare och tvärtom. Detta säkerställer att båda domarna delar på arbetsbelastningen och får varierande perspektiv på spelet under matchens gång.',
      },
      {
        id: 3,
        question: 'Var ska måldomaren huvudsakligen positionera sig?',
        options: [
          { text: 'Vid mittlinjen', isCorrect: false },
          { text: 'Bakom det anfallande laget', isCorrect: false },
          { text: 'Nära mållinjen', isCorrect: true },
          { text: 'Vid avbytarbänken', isCorrect: false },
        ],
        explanation:
          'Måldomaren ska stå nära mållinjen för att kunna bedöma situationer i och kring målområdet. Från denna position har domaren bäst uppsikt över målsituationer, målområdesöverträdelser och händelser i det anfallande lagets slutfas. Positionen justeras löpande utifrån var bollen befinner sig.',
      },
      {
        id: 4,
        question:
          'Vad är den första av domarens 10 principer för bra domarskap?',
        options: [
          { text: 'Kommunicera tydligt med spelarna', isCorrect: false },
          { text: 'Var alltid fysiskt förberedd', isCorrect: true },
          { text: 'Blås aldrig för sent', isCorrect: false },
          { text: 'Ha en bra regelkunskap', isCorrect: false },
        ],
        explanation:
          'Den första principen är "var alltid fysiskt förberedd". Utan god fysisk kapacitet kan domaren inte hänga med i spelet och hamnar i dåliga positioner. Fysisk förberedelse är grunden som allt annat vilar på – det spelar ingen roll hur bra regelkunskap man har om man inte hinner se vad som händer.',
      },
      {
        id: 5,
        question: 'Vad bör en domare UNDVIKA när det gäller positionering på planen?',
        options: [
          { text: 'Att stå nära sidlinjen', isCorrect: false },
          {
            text: 'Att stå mellan spelarna och bollen',
            isCorrect: true,
          },
          { text: 'Att röra sig diagonalt över planen', isCorrect: false },
          { text: 'Att stå nära målområdeslinjen', isCorrect: false },
        ],
        explanation:
          'En domare ska aldrig ställa sig mellan spelarna och bollen, eftersom det kan hindra spelet och skymma sikten. Domaren ska alltid positionera sig så att hen har fri sikt mot spelets händelser utan att vara i vägen. Bra positionering kräver ständig rörelse och anpassning.',
      },
      {
        id: 6,
        question: 'Hur bör en domare kommunicera sina beslut under en match?',
        options: [
          { text: 'Med låg profil och diskreta gester', isCorrect: false },
          { text: 'Genom att ropa högt till spelarna', isCorrect: false },
          {
            text: 'Med tydliga gester och en bestämd visselpipa',
            isCorrect: true,
          },
          { text: 'Genom att bara visa kort och inte blåsa', isCorrect: false },
        ],
        explanation:
          'Domaren ska kommunicera med tydliga, bestämda gester och en klar visselpipa. Tydlig kommunikation skapar förtroende hos spelare, ledare och publik. En domares kroppsspråk och signalgivning är lika viktiga som själva beslutet – ett bra beslut som ingen förstår tappar i värde.',
      },
      {
        id: 7,
        question:
          'Har de två domarna i en handbollsmatch lika stor bestämmanderätt?',
        options: [
          { text: 'Nej, måldomaren har alltid sista ordet', isCorrect: false },
          { text: 'Nej, den äldre domaren bestämmer', isCorrect: false },
          {
            text: 'Ja, de har lika stor bestämmanderätt',
            isCorrect: true,
          },
          { text: 'Det beror på matchens nivå', isCorrect: false },
        ],
        explanation:
          'Båda domarna har lika stor bestämmanderätt enligt reglerna. De är jämbördiga och ska samarbeta för att fatta korrekta beslut. Vid oenighet måste de snabbt kommunicera och komma överens. Det är därför samarbetet och kommunikationen mellan domarna är så viktigt.',
      },
      {
        id: 8,
        question: 'Vad är den sista av domarens 10 principer?',
        options: [
          { text: 'Var konsekvent i dina beslut', isCorrect: false },
          { text: 'Dokumentera alla händelser', isCorrect: false },
          { text: 'Analysera matchen efteråt', isCorrect: false },
          { text: 'Ha kul', isCorrect: true },
        ],
        explanation:
          'Den sista principen är "ha kul". Att döma handboll ska vara roligt, och en domare som trivs med sitt uppdrag presterar bättre. Det smittar av sig positivt på spelare och publik. Att komma ihåg varför man började döma – för att man tycker om handboll – är viktigt för långsiktig motivation.',
      },
    ],
  },

  // ============================================================
  // Quiz 6: Matchdagen (lessonId: 6)
  // ============================================================
  {
    lessonId: 6,
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: 'Vad står förkortningen EMP för i handbollssammanhang?',
        options: [
          { text: 'Elektronisk Matchplanering', isCorrect: false },
          { text: 'Elektroniskt Matchprotokoll', isCorrect: true },
          { text: 'Enhetlig Matchprocess', isCorrect: false },
          { text: 'Extern Matchprocedur', isCorrect: false },
        ],
        explanation:
          'EMP står för Elektroniskt Matchprotokoll. Det är det digitala systemet som används för att registrera matchhändelser som mål, bestraffningar och spelaruppgifter. Domarna ansvarar för att kontrollera att protokollet är korrekt ifyllt före, under och efter matchen.',
      },
      {
        id: 2,
        question: 'Hur många lag-timeout har varje lag rätt till per halvlek enligt grundregeln (Regel 2:10)?',
        options: [
          { text: '1', isCorrect: true },
          { text: '2', isCorrect: false },
          { text: '3', isCorrect: false },
          { text: '4', isCorrect: false },
        ],
        explanation:
          'Enligt Regel 2:10 har varje lag rätt till en (1) lag-timeout per halvlek av den ordinarie speltiden. Lag-timeout varar i 1 minut och är ett viktigt taktiskt verktyg för tränarna. Domaren och tidtagaren måste hålla reda på antalet använda lag-timeout.',
      },
      {
        id: 3,
        question: 'Har lagen rätt till lag-timeout under förlängning (övertid)?',
        options: [
          { text: 'Ja, 1 per lag', isCorrect: false },
          { text: 'Ja, 2 per lag', isCorrect: false },
          { text: 'Nej, inga lag-timeout i förlängningar', isCorrect: true },
          { text: 'Ja, obegränsat antal', isCorrect: false },
        ],
        explanation:
          'Enligt Regel 2:10 har lagen inte rätt till lag-timeout under förlängningar. Lag-timeout gäller bara under den ordinarie speltiden (de två halvlekarna om 30 minuter vardera).',
      },
      {
        id: 4,
        question: 'Hur lång är en lagtime-out i handboll?',
        options: [
          { text: '30 sekunder', isCorrect: false },
          { text: '1 minut', isCorrect: true },
          { text: '2 minuter', isCorrect: false },
          { text: '90 sekunder', isCorrect: false },
        ],
        explanation:
          'En lagtime-out varar i exakt 1 minut. Under denna tid kan laget samlas och tränaren kan ge instruktioner. Domaren ska signalera både start och slut av timeout. Det är viktigt att tiden hålls korrekt för att matchen ska löpa smidigt.',
      },
      {
        id: 5,
        question: 'Vem har rätt att begära lagtime-out, och när?',
        options: [
          { text: 'Vilken spelare som helst, när som helst', isCorrect: false },
          { text: 'Bara lagkaptenen, vid spelavbrott', isCorrect: false },
          {
            text: 'Lagets lagledare/tränare, när det egna laget har bollen (bollinnehav)',
            isCorrect: true,
          },
          { text: 'Domaren bestämmer helt själv', isCorrect: false },
        ],
        explanation:
          'Det är lagets lagledare eller tränare (lagansvarig) som kan begära timeout, och det får bara ske när det egna laget har bollinnehav. Begäran görs genom att lägga ett grönt kort på tidtagarbordet. Tidtagaren stoppar då spelet vid nästa spelavbrott.',
      },
      {
        id: 6,
        question:
          'Om en match slutar oavgjort och en vinnare måste utses, vad händer då?',
        options: [
          { text: 'Lottning avgör', isCorrect: false },
          { text: 'Den senaste målgöraren vinner', isCorrect: false },
          {
            text: 'Förlängning spelas, och vid fortsatt oavgjort avgörs det med straffläggning',
            isCorrect: true,
          },
          { text: 'Matchen spelas om en annan dag', isCorrect: false },
        ],
        explanation:
          'Om en vinnare måste utses spelas först förlängning (vanligtvis 2 x 5 minuter). Om det fortfarande är oavgjort går matchen till straffläggning (shoot-out). Reglerna för förlängning och straffläggning skiljer sig åt beroende på tävling, men grundprincipen är densamma.',
      },
      {
        id: 7,
        question: 'Hur många skyttar per lag deltar i en straffläggning (shoot-out)?',
        options: [
          { text: '3 skyttar', isCorrect: false },
          { text: '5 skyttar', isCorrect: true },
          { text: '7 skyttar', isCorrect: false },
          { text: '10 skyttar', isCorrect: false },
        ],
        explanation:
          'Vid straffläggning deltar 5 skyttar per lag. Varje skytt har ett försök i taget, och lagen skjuter omväxlande. Om det fortfarande är oavgjort efter alla 5 skyttar fortsätter straffläggningen med en skytt i taget tills en vinnare utses.',
      },
      {
        id: 8,
        question:
          'Vad är matchvärdens (arrangörens) viktigaste ansvar inför en match?',
        options: [
          { text: 'Att boka domarna', isCorrect: false },
          { text: 'Att sälja biljetter', isCorrect: false },
          {
            text: 'Att säkerställa en säker arena med omklädningsrum, funktionärer och sjukvårdsberedskap',
            isCorrect: true,
          },
          { text: 'Att ordna med TV-sändning', isCorrect: false },
        ],
        explanation:
          'Matchvärden (den arrangerande föreningen) ansvarar för att arenan är säker och att alla praktiska detaljer är ordnade: omklädningsrum för lag och domare, funktionärer vid tidtagarbord, sjukvårdsberedskap, och en spelbar plan. Domaren ska kontrollera att dessa krav är uppfyllda vid ankomst.',
      },
      {
        id: 9,
        question: 'Vad innebär jävsreglerna för domare?',
        options: [
          { text: 'En domare får inte döma matcher i sin egen serie', isCorrect: false },
          {
            text: 'En domare får inte döma matcher med sin egen klubb eller nära anhöriga',
            isCorrect: true,
          },
          { text: 'En domare får bara döma i sin hemstad', isCorrect: false },
          { text: 'En domare får inte döma samma lag två gånger', isCorrect: false },
        ],
        explanation:
          'Jävsreglerna innebär att en domare inte får döma matcher där den egna klubben deltar eller där nära anhöriga (familjemedlemmar) spelar eller har ledande roller. Reglerna finns för att säkerställa domarens opartiskhet och trovärdighet. Om jäv föreligger ska domaren anmäla det i förväg.',
      },
      {
        id: 10,
        question: 'Vad är tidtagarens huvudsakliga ansvar under en match?',
        options: [
          { text: 'Att räkna mål', isCorrect: false },
          { text: 'Att kontrollera spelarnas utrustning', isCorrect: false },
          {
            text: 'Att kontrollera matchklockan och matchens tid',
            isCorrect: true,
          },
          { text: 'Att kommunicera med publiken', isCorrect: false },
        ],
        explanation:
          'Tidtagarens huvudansvar är att sköta matchklockan och hålla koll på matchens tid. Det inkluderar att starta och stoppa klockan, signalera halvtid och matchslut, samt hantera timeout och utvisningstider. Tidtagaren är en viktig del av matchfunktionärsteamet som domarna samarbetar med.',
      },
    ],
  },
];
