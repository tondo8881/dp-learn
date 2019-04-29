// Strings for slovak localization

export const slovak = {
    global: {
        intro: 'Úvod',
        dpLearn: 'DP learn',
        dynamic: 'Dynamické',
        programming: 'programovanie',
        letsStart: 'Začnime',
        dynProg: 'Dynamické programovanie',
        recursiveSolution: 'Rekurzívny algoritmus',
        recusionTree: 'Strom rekurzívnych volaní',
        dynProgSolution: 'DP algoritmus',
        start: 'Štart',
        finish: 'Dokončiť',
        step: 'Ďalší krok',
        table: 'Tabuľka',
        tables: 'Tabuľky',
        result: 'Výsledok',
        evaluateStats: 'Vypočítať štatistiky',
        numberOfCalls: 'volaní/behov cyklu',
        microSeconds: 'Microseconds',
        nanoSeconds: 'Nanoseconds',
        skipping: 'Preskakujem...',
        recursion: 'Rekurzia',
        dp: 'DP',
        invalidArg: 'Chyba pri validácii vstupných hodnôt',
        srcCode: 'Zdrojový kód',
        timeComplex: 'Časová zložitosť',
        spaceComplex: 'Priestorová zložitosť',
        tryDemo: 'Vyskúšaj demo!',
        speed: 'Rýchlosť',
        stepping: 'Krokovanie',
        theory: 'Teória',
        demo: 'Demo',
        charts: 'Grafy',
        stats: 'Štatistiky',
        calls: 'volaní',
        theoreticValue: 'teoretická hodnota',
        tableComparison: 'Porovnanie v tabuľke',
        string: 'Reťazec',
        conclusion: 'Zhodnotenie',
        done: 'Hotovo.',
        similarProblems: 'Podobné optimalizačné úlohy',
        partOfApp: 'je súčasťou aplikácie'
    },
    menu: {
        coins: 'Minimálny počet mincí',
        substring: 'Najdlhší spoločný podreťazec',
        rod: 'Rezanie tyče',
        editDistance: 'Editačná vzdialenosť',
        tree: 'Optimálny binárny vyhľadávací strom'
    },
    theoryGlobal: {
        eg: 'Konkrétne zadanie:',
    },
    demoGlobal: {
        assigning: 'Priradzujem',
        cycle: 'Cyklus',
        start: 'Štart',
        array: 'Pole',
        nextCycle: 'Ďalší cyklus',
        solution: 'Riešenie',
        start0: 'Priradzujem hodnotu 0 na pozíciu 0',
        candidates: 'Výber kandidátov',
        best: 'Výber najlepšieho',
    },
    intro: {
        dpLearn: 'Webová aplikácia **DP learn** sa zaoberá technikou návrhu algoritmov s názvom **dynamické programovanie**, konkrétne prístupu "zdola-hore" (tabuľková metóda). Demonštruje jej princípy a výhody na konkrétnych úlohách. Pri každej úlohe je uvedená základná teória, grafické znázornenie priebehu DP algoritmu (demo) a porovnanie s rekurzívnym riešením (štatistiky).',
        fitVutbr: 'FIT VUT v Brne',
        fitVutbrHref: 'https://www.fit.vutbr.cz/',
        whatIsDpTitle: 'Čo je to dynamické programovanie?',
        whatIsDpText1: 'Dynamické programovanie (skrátene **DP**) je optimalizačná metóda, ktorá sa dá využiť pri riešení určitého typu optimalizačných úloh. Okrem toho, že je to optimalizačná metóda je DP aj programovacia technika - jeden z prístupov návrhu algoritmov. Pri tvorbe DP algoritmu vychádzame väčšinou z jednoduchého rekurzívneho algoritmu. Aby malo zmysel vytvárať DP algoritmus, musí mať úloha 2 vlastnosti:',
        optSubstruct: '**optimálna subštruktúra** - skladaním výsledkov podproblémov (ktoré vzniknú rozložením pôvodného problému) sa dá získať riešenie pôvodného problému',
        repeating: '**opakovanie podproblémov** - pri rekurzívnom algoritme je funkcia volaná opakovane s rovnakými parametrami',
        whatIsDpText2: 'Hlavná výhoda DP spočíva v tom, že využíva opakovanie sa podproblémov a preto vedie často k oveľa efektívnejšiemu a rýchlejšiemu riešeniu ako pri rekurzívnom algoritme. Výsledky menších podproblémov sú ukladané do dátovej štruktúry (poľa alebo tabuľky). Z týchto výsledkov sa postupne skladá optimálne riešenie úlohy.',
        partsTitle: 'Demonštrovanie princípov a výhod na úlohách',
        partsText: 'Aplikácia obsahuje 5 optimalizačných úloh, ktoré sa dajú riešiť dynamickým programovaním. Po zvolení konkrétnej úlohy sú k dispozícii 3 záložky:',
        theoryTitle: 'Teória',
        theoryText: 'Obsahuje zadanie úlohy s konkrétnym príkladom. Nasleduje popis rekurzívneho a DP algoritmu a ich časová a priestorová zložitosť. Pri rekurzívnom algoritme sa nachádza aj strom rekurzívnych volaní, aby bolo jasné, že sa podproblémy opakujú. Pri DP algoritme je na obrázkoch vysvetlené, akým spôsobom sú vypočítavané hodnoty buniek v tabuľke. K obom algoritmom sú dostupné zdrojové kódy v jazyku C. Ide vždy iba o jednu funkciu a prípadne globálne premenné. Vo funkciách sú často využívane konštanty z knižnice **limits.h** a pomocné funkcie, ktoré nie je náročné doplniť. Na záver sú uvedené príklady ďalších optimalizačných úloh s podobným princípom vypĺňania tabuľky.',
        demoTitle: 'Demo',
        demoText: 'Po zadaní vstupu sa spustí DP algoritmus "zdola-hore" - vypĺňanie tabuľky. Je možné zvoliť rýchlosť vypĺnania alebo ísť krok po kroku. Po vyplnení tabuľky sa zobrazí výsledok. Nachádza sa tu aj formula, ktorá popisuje výpočet hodnôt do buniek tabuľky.',
        statsTitle: 'Štatistiky',
        statsText: 'Po zadaní vstupu sú vykreslené grafy a tabuľka, ktoré porovnávajú zložitosť rekurzívneho a DP algoritmu. U časovej zložitosti je uvedená maximálna teoretická hodnota podľa funkcie zložitosti a skutočný počet rekurzívnych volaní alebo behov cykla pri DP algoritme. Priestorová zložitosť je vypočítaná z funkcie zložitosti. Okrem štatistík pre zadaný vstup aplikácia obsahuje niekoľko "vzorových" vstupov. Pod štatistikami sa nachádza ich slovné zhodnotenie.',
        references: 'Referencie',
        geeksTitle: 'GeeksforGeeks',
        geeksHref: 'https://www.geeksforgeeks.org/',
        geeksText: 'teória a zdrojové kódy k úlohám boli často inšpirované článkami na tomto portále',
        algorithmsTitle: 'Introduction to Algorithms',
        algorithmsHref: 'https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844',
        algorithmsText: 'teória k dynamickému programovaniu a niektorým úlohám',
        writeUs: 'Napíšte nám',
        mail: 'dplearnwebapp@gmail.com'
    },
    coins: {
        coin: 'Minca',
        coins: 'Mince',
        value: 'Hodnota',
        valueLower: 'hodnota',
        theory: {
            title: 'Minimálny počet mincí na vytvorenie danej hodnoty - teória',
            brief: {
                b1: 'Na vstupe máme mince rôznych hodnôt **C = { c1, c2, ..., cN }**. Pre zjednodušenie si počet všetkých mincí označíme ako **N**. Predpokladajme, že mincí každej hodnoty je neobmedzený počet, teda môžeme použiť ľubovolný počet mincí **c1, c2, ...**. Okrem mincí je na vstupe hodnota **V**, ktorá má vzniknúť súčtom hodnôt mincí. Pre súčet musí byť využitý čo najmenší počet mincí. Ktoré mince budú použité a aký je ich počet?',
                input1: 'C = { 2, 3, 5 }',
                input2: 'V = 7',
                b2: 'Ktoré mince budeme potrebovať?',
                output1: '7 = 2 + 2 + 3',
                output2: '7 = 2 + 5',
                b3: 'Obe možnosti dávajú správnu hodnotu, ale správny výsledok je 2. riešenie. Udáva minimálny počet mincí a to **2**.'
            },
            recursion: {
                brief:'Ak je zadaná hodnota rovná **0**, aj počet mincí bude **0**. Ak je hodnota väčšia ako 0, zoberieme postupne všetky mince, ktorých hodnota je menšia alebo rovná požadovanej hodnote. Od požadovanej hodnoty sa odpočíta hodnota mince a rekurzívne sa zavolá rovnaká metóda pre túto novú požadovanú hodnotu, pričom sa inkrementuje počet použitých mincí.',
                recTime: '**Časová zložitosť** exponenciálne narastá s požadovanou hodnotou **V**.',
                recSpace: '**Priestorová zložitosť** je zrejmá - **N + 1**, kde **N** je počet mincí a **1** potrebujeme na uloženie hodnoty **V**.',
            },
            dp: {
                brief: 'Na ukladanie výsledkov podproblémov potrebná dátová štruktúra typu pole o veľkosti zadanej hodnoty + 1. Na začiatku sú všetky položky v poli nastavené na hodnotu **INT_MAX**. Výnimkou je číslo **0** na **0.-tom** indexe. Vychádzame z toho, že ak je zadaná hodnota rovná 0, aj riešenie je 0. Čísla na ďalších indexoch sa budú na konci výpočtu rovnať počtu mincí potrebných na vytvorenie hodnoty, ktorá sa rovná danému indexu. Hodnota optimálneho riešenia teda bude na poslednom indexe. Nová hodnota bunky je vždy inkrementovaná hodnota niektorej z predchádzajúcich buniek. Vzialenosť medzi počítanou bunkou, a bunkou z ktorej berie hodnotu závisí od toho, aké máme mince. Ak máme dostať hodnotu **4** a máme aj mincu s hodnotou **4**, maximálna vzdialenosť, na ktorú sa vypočítava nová hodnota je **4**. Pre zostavenie celého riešenia je potrebné ďalšie pole, kde sa ukladajú použité tyče.',
                dpTime: 'Keďže algoritmus obsahuje vnorený cyklus, jeho **časová zložitosť** je polynomická - počet mincí vynásobený hodnotou.',
                dpSpace: '**Priestorová zložitosť** sa oproti rekurzívnemu algoritmu zvýšila iba o veľkosť poľa potrebného na ukladanie výsledkov podproblémov.',
                input11: 'C = { 1, 2, 5 }',
                input12: 'V = 4',
                input21: 'C = { 1, 2, 4 }',
                input22: 'V = 4',
            },
            rod: 'Rezanie tyče',
            knapsackTitle: 'Problém batohu',
            knapsackHref: 'https://www.gatevidyalay.com/0-1-knapsack-problem-using-dynamic-programming-approach/',
        },
        demo: {
            title: 'Minimálny počet mincí na vytvorenie danej hodnoty - demo',
            brief: 'Zadajte hodnotu (od 0 po 20), ktorú treba vytvoriť súčtom hodnôt mincí a hodnoty mincí oddelené čiarkami (maximálny počet je 15). Stĺpce tabuľky symbolizujú jednotlivé hodnoty, pre ktoré treba vypočítať minimálny počet mincí. V prvom riadku budú na konci minimálne počty mincí pre jednotlivé hodnoty. V druhom riadku budú pomocné hodnoty pre vytvorenie celého riešenia. Hodnota bunky je v tomto prípade hodnota najväčšej použitej mince.',
            isNeeded: 'Potrebný počet mincí',
            evalCoinsFor: 'Výpočet mincí pre vytvorenie hodnoty ',
            usedCoin: 'použitá minca ',
            usedCoins: 'použité mince',
            coinsNumber: 'Počet mincí',
            usedCoinBig: 'Použitá minca',
        },
        stats: {
            title: 'Minimálny počet mincí na vytvorenie danej hodnoty - štatistiky',
            brief: 'Zadajte hodnotu (od 0 po 20), ktorú treba vytvoriť súčtom hodnôt mincí a hodnoty mincí oddelené čiarkami (maximálny počet je 15).',
            conclusion: 'Oproti úlohe *Rezanie tyče* je v rekurzívnom riešení tejto úlohy značný rozdiel medzi teoretickým a reálnym počtom volaní, pretože ten závisí od konkrétných hodnôt mincí. Teoretická sa skutočnej hodnote rovná len v jednoduchom príklade, kedy **C: { 1,2 }** a **V = 2**. V ostatných príkladoch sa hodnoty približujú tým viac, čím "nezmyselnejšie" mince sú zadané. Aj keď je jasné, že jediná minca s hodnotou 20 stačí na vytvorenie hodnoty 20, algoritmus skúma aj všetky predchádzajúce hodnoty. Podobne je to aj pri DP algoritme.',
        }
    },
    rod: {
        prices: 'Ceny',
        theory: {
            title: 'Rezanie tyče - teória',
            brief: {
                b1: 'Majme oceľovú tyč dĺžky **L**. Túto tyč je potrebné narezať na menšie kusy. Na vstupe sú predajné ceny tyčí všetkých dĺžok od 1 po L: **P = { p1, p2, p3, ..., pL}**. Na aké dĺžky treba narezať tyč, aby súčet cien tyčí, ktoré vzniknú, bol čo najvyšší?',
                input: 'P = { 1, 3, 5 }',
                b2: 'Na aké dĺžky sa dá tyč narezať?',
                output1: '3 = 1 + 1 + 1 => ceny: 1 + 1 + 1 = 3',
                output2: '3 = 1 + 2 => ceny: 1 + 3 = 4',
                output3: '3 = 3 => ceny: 5 = 5',
                b3: 'Pri tomto konkrétnom vstupe vychádza ako najlepšia možnosť tyč vôbec nerezať! Tyč dĺžky 3 má najvyššiu cenu.',
            },
            recursion: {
                brief: 'Pre tyč dĺžky **0** musí byť aj najlepšia cena **0**. V opačnom prípade vypočítame najvyššie ceny pre všetky dĺžky tyče. Pri rekurzívnom algoritme sa teda budú dookola vypočítavať najvyššie ceny pre všetky dĺžky tyče.',
                recTime: '**Časová zložitosť** exponenciálne narastá s dĺžkou tyče (počtom zadaných cien).',
                recSpace: '**Priestorová zložitosť** sa rovná počtu zadaných cien.',
                input: 'P = { 1, 3, 5 }'
            },
            dp: {
                brief: 'V DP algoritme sa budú do tabuľky (jednorozmerného poľa) ukladať najvyššie možné ceny pre všetky dĺžky tyče. Pri výbere hodnoty do bunky sa berú do úvahy ceny **všetkých** dĺžok vypočítaných predtým (to znamená menších od aktuálnej). Ku každej bunke sa pripočítajú ceny takých dĺžok tak, aby výsledná dĺžka neprekročila aktuálne vypočítavanú. Do bunky sa vyberie súčet tých dĺžok (ich cien), ktoré dávajú najvyššiu predajnú cenu. Hodnota novej bunky sa môže odvíjať od všetkých predchádzajúcich buniek. Pre zostavenie celého riešenia je potrebné ďalšie pole, kde sa ukladajú použité tyče.',
                dpTime: 'Algoritmus obsahuje 1 vnorený cyklus, takže jeho **časová zložitosť** je polynomická - druhá mocnina počtu zadaných cien.',
                dpSpace: '**Priestorová zložitosť** sa oproti rekurzívnemu algoritmu zvýšila o veľkosť poľa potrebného na ukladanie výsledkov podproblémov.',
                outerCycle: 'Vonkajší cyklus',
                input: 'P = { 1, 5, 6, 6, 9 }',
                i3: 'i = 3',
                i4: 'i = 4'

            },
            coins: 'Minimálny počet mincí na vytvorenie danej hodnoty'
        },
        demo: {
            title: 'Rezanie tyče - demo',
            brief: 'Zadajte ceny jednotlivých dĺžok tyče (maximálne 15) oddelené čiarkami (dĺžky sú 1, 2, 3, ...). Stĺpce tabuľky symbolizujú dĺžky tyče. V prvom riadku budú na konci najvyššie dosiahnuteľné ceny pre jednotlivé dĺžky. V druhom riadku budú pomocné hodnoty pre vytvorenie celého riešenia. Hodnota bunky je v tomto prípade dĺžka najdlhšej použitej tyče pre danú dĺžku.',
            evalPriceFor: 'Výpočet najvyššej ceny pre dĺžku ',
            result: 'Najvyššia dosiahnuteľná cena: ',
            usedLength: 'použitá dĺžka ',
            usedLengths: 'použité dĺžky: ',
            length: 'Dĺžka',
            highestPrice: 'Najvyššia cena',
            usedLengthBig: 'Použitá dĺžka',
        },
        stats: {
            title: 'Rezanie tyče - štatistiky',
            brief: 'Zadajte ceny jednotlivých dĺžok tyče (maximálny počet je 20) oddelené čiarkami (dĺžky sú 1, 2, 3, ...).',
            conclusion: 'Časová zložitosť rekurzívneho algoritmu exponenciálne narastá s dĺžkou tyče (počtom zadaných cien). Kedže v rekurzívnom algoritme nie je žiadná podmienka, počet rekurzívnych volaní sa bude presne rovnať teoretickej hodnote zo vzorca (ako môžno vidieť po vypočítaní štatistík). Nezáleží ani na cenách jednotlivých dĺžok, iba na ich počte. DP algoritmus bude mať oproti teoretickej hodnote počet volaní nižší, pretože počet opakovaní vnútorného cyklu závisí od cien jednotlivých dĺžok. Zo štatistík vyplýva, že rekurzívny algoritmus nie je rýchlejší ako DP algoritmus ani pri veľmi jednoduchom vstupe.',
        }
    },
    substring: {
        theory: {
            title: 'Najdlhší spoločný podreťazec - teória',
            brief: {
                b1: 'Na vstupe sú dva reťazce, **X** s dĺžkou **L1** a **Y** s dĺžkou **L2**. Aký je ich najdlhší spoločný podreťazec?',
                input1: "'Unicasting'",
                input2: "'unitTesting'",
                b2: 'Aký je najdlhší spoločný podreťazec týchto dvoch reťazcov?',
                strX: "'U|ni|ca|s||**ting**|'",
                strY: "'u|ni|tTe|s||**ting**|'",
                b3: 'Môžeme vidieť, že reťazce majú viacero spoločných podreťazcov. Najdlhší z nich je **ting** a má dĺžku  **4** znaky.',
                b4: 'Jednoduchým riešením by bolo zobrať každý podreťazec z prvého reťazca a zisťiť, či sa tento podreťazec nachádza aj v druhom reťazci. V prvom reťazci bude **O(L1 ^ 2)** podreťazcov. Pri využití **Knuth-Morris-Prattovho** algoritmu na vyhľadávanie všetkých podreťazcov v druhom reťazci, časová zložitosť tohoto riešenia bude **O((L1 ^ 2) * L2)**.',
            },
            recursion:{
                brief: 'Ak je dĺžka jedného alebo druhého reťazca rovná **0**, výsledok bude **0**, pretože v jednom z reťazcov nebude žiadny podreťazec. Ak algoritmus narazí na zhodu znakov, pripočíta k výsledku hodnotu **1** a pokračuje porovnaním nasledujúcich dvoch znakov. Ak zhoda nenastane, nastáva rekurzívne volanie pre porovnanie ďalšieho znaku v prvom reťazci a ďalšieho znaku v druhom reťazci. Z týchto hodnôt sa vyberie maximum. Algoritmus je síce jednoduchý, ale veľmi neefektívny.',
                recTime: '**Časová zložitosť** sa exponenciálne zvyšuje s dĺžkou reťazcov.',
                recSpace: '**Priestorová zložitosť** je súčet dĺžok oboch reťazcov.',
                input1: "X = 'hw'",
                input2: "Y = 'sw'",
            },
            dp: {
                brief: 'Princíp algoritmu spočíva v hľadaní najdlhšieho spoločného **sufixu** v podreťazcoch oboch reťazcov. Dĺžky sufixov sa budú ukladať do dvojrozmerného poľa. Ak sa znak v stĺpci a riadku nerovná, do bunky sa vloží hodnota **0**. Ak sa rovnajú, tak sa vloží hodnota **1**, ak ide o prvý znak jedného alebo druhého reťazca, alebo sa inkrementuje predchádzajúca hodnota na diagonále (inkrementuje sa sufix). Okrem tabuľky potrebujeme navyše premenné na ukladanie pozície v tabuľke s najvyššou hodnotou sufixu. Vďaka tejto pozícii a hodnote v bunke vieme jednoducho vytvoriť aj celé riešenie úlohy, pretože vieme kde končí najdlhší sufix a poznáme jeho dĺžku.',
                dpTime: '**Časová zložitosť** je polynomická - vypĺňanie tabuľky **L1 * L2**.',
                dpSpace: '**Priestorová zložitosť** je súčet dĺžok reťazcov + veľkosť tabuľky.',
                input1: "X = 'dog'",
                input2: "Y = 'frog'",
                zero: 'Znaky sa nerovnajú - priradenie hodnoty 0',
                increment: 'Znaky sa rovnajú - inkrementovanie sufixu',
                one: 'Znaky sa rovnajú, ale ide o prvé znaky v reťazcoch - priradenie hodnoty 1',
                input3: "Y = 'dig'",
            },
            longestPalindromTitle: 'Najdlhší palindrom v reťazci',
            longestPalindromHref: 'https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/',
            longestIncSubseqTitle: 'Najdlhšia stúpajúca podsekvencia',
            longestIncSubseqHref: 'https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/',

        },
        demo: {
            title: 'Najdlhší spoločný podreťazec - demo',
            brief: 'Zadajte 2 reťazce - **X** a **Y** s maximálnou dĺžkou 20 znakov. Riadky tabuľky symbolizujú znaky reťazca **X**. Stĺpce tabuľky reprezentujú znaky reťazca **Y**. Hodnota bunky je dĺžka sufixu.',
            assignZero: 'priradzujem hodnotu 0',
            noMatch: 'žiadna zhoda. ',
            incrementPrevious: 'inkrementujem predchádzajúcu hodnotu',
            longestSubr: 'Najdlhší spoločný podreťazec',
            length: 'dĺžka'
        },
        stats: {
            title: 'Najdlhší spoločný podreťazec - štatistiky',
            brief: 'Zadajte 2 reťazce - **X** a **Y** s maximálnou dĺžkou 15 znakov.',
            conclusion: 'Aj keď sú reťazce úplne rozdielne, skutočná hodnota sa teoretickej pri rekurzívnom algoritme veľmi nepribližuje. Vysoký počet volaní aj pri dvoch rovnakých reťazcoch je dôkazom, že rekurzívny algoritmus je veľmi neefektívny. Teoretická aj reálna časová zložitosť sa pri DP algoritme budú vždy rovnať, pretože algoritmus vždy porovnáva každý znak reťazca X so všetkými znakmi druhého reťazca.'
        }
    },
    editDistance: {
        theory: {
            title: 'Editačná vzdialenosť - teória',
            brief: {
                b1: 'Na vstupe sú dva reťazce, **X** s dĺžkou **L1** a **Y** s dĺžkou **L2**.  K dispozícii sú 3 operácie: **pridanie**, **odobratie** a **nahradenie** znaku. Pomocou týchto operácií je potrebné upraviť prvý reťazec **X** tak, aby sa rovnal druhému reťazcu **Y**. Počet operácií musí byť čo najnižší a všetky majú rovnakú váhu. Ktoré operácie je treba vykonať?',
                input1: "X = 'AdRemovee'",
                input2: "Y = 'AddRemove'",
                b2: 'Ktoré operácie treba vykonať nad reťazcom X aby sa reťazce rovnali?',
                strX: "X = 'Ad|**+**|Remove|**-**|e'",
                strY: "Y = 'AddRemove'",
                b3: 'Do reťazca X je treba **pridať** znak d a **odstrániť** znak e.',
            },
            recursion: {
                brief1: 'Rekurzívne riešenie bude spočívať v porovnávaní oboch reťazcov znak po znaku z pravej stranky. Začneme teda posledným znakom. Ak sa posledný znak v prvom reťazci rovná poslednému znaku v druhom reťazci, znak ignorujeme a pokračujeme rekurzívne pre dĺžky **L1 - 1 a L2 - 2**. Druhý prípad je, že sa znaky nerovnajú (prípadne, že v druhom reťazci už nie sú ďalšie znaky). V tomto prípade je treba vyskúšať všetky 3 operácie:',
                op1: '**Vložíme** na koniec prvého reťazca rovnaký znak ako je na konci druhého reťazca. Dĺžka prvého reťazca je teraz L1 + 1, rekurzívne pokračujeme pre dĺžky reťazcov **L1 a L2 - 2**.',
                op2: '**Odoberieme** posledný znak z prvého reťazca. Dĺžka prvého reťazca je L1 - 1, rekurzívne pokračujeme pre dĺžky **L1 - 1 a L2**.',
                op3: '**Nahradíme** posledný znak, aby sa posledné znaky v oboch reťazcoch rovnali a rekurzívne pokračujeme pre dĺžky **L1 - 1 a L2 - 1**.',
                brief2: 'Z týchto troch vyberieme tú možnosť, ktorá viedla k optimálnemu riešeniu (bolo použitých najmenej operácií).',
                recTime: 'Časová zložitosť rekurzívneho riešenia rastie exponenciálne podľa dĺžok reťazcov. Keďže na výber sú 3 operácie, základ bude číslo **3**.',
                recSpace: '**Priestorová zložitosť** je súčet dĺžok oboch reťazcov.',
                input1: "X = 'a'",
                input2: "Y = 'bbcd'",
            },
            dp: {
                brief1: 'DP algoritmus porovnáva reťazce postupne z ľavej strany. Začne reťazcami s dĺžkou 0 a potom postupuje všetkými kombináciami dĺžok reťazcov. Ak je reťazec X prázdny, je treba vložiť všetky znaky druhého reťazca, hodnota bunky je teda poradové číslo stĺpca. Ak je reťazec Y prázdny, je treba odstrániť všetky znaky prvého reťazca, hodnota bunky je teda poradové číslo riadku. Ak sa znaky rovnajú, do bunky sa vloží predchádzajúca hodnota z diagonály - nie je treba žiadna operácia. Ak sa znaky nerovnajú, inkrementuje sa minimálna hodnota z nasledujúcich buniek:',
                dpOp1: 'predchádzajúci stĺpec - **pridanie** znaku',
                dpOp2: 'predchádzajúci riadok - **odstránenie** znaku',
                dpOp3: 'predchádzajúca hodnota z diagonály - **nahradenie** znaku',
                brief2: 'K zisteniu konkrétnych operácií, ktoré boli použité je treba pridať spätný priechod tabuľkou.',
                dpTime: '**Časová zložitosť** je polynomická - vypĺňanie tabuľky **(L1 + 1) * (L2 + 1)**.',
                dpSpace: '**Priestorová zložitosť** je súčet dĺžok reťazcov + veľkosť tabuľky.',
                input1: "X = 'AdRemovee'",
                input2: "Y = 'AddRemove'",
                match: 'Znaky sa rovnajú - priradenie hodnoty z diagonály',
                noMatch: 'Znaky sa nerovnajú - výber najnižšej hodnoty',
            },
            longestPalindromTitle: 'Najdlhšia palindromická podsekvencia',
            longestPalindromHref: 'https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/',
            longestCommonSubseqTitle: ' Najdlhšia spoločná podsekvencia',
            longestCommonSubseqHref: 'https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/',
        },
        demo: {
            title: 'Editačná vzdialenosť - demo',
            brief: 'Zadajte 2 reťazce - **X** a **Y** s maximálnou dĺžkou 20 znakov. Riadky tabuľky symbolizujú znaky reťazca **X**. Stĺpce tabuľky reprezentujú znaky reťazca **Y**. Prvý riadok a stĺpec symbolizujú prázdny reťazec. Hodnota bunky je počet operácií.',
            empty: 'Prázdny',
            stringXEmpty: 'Reťazec X je prázdny, vložíme všetky znaky stringu Y',
            stringYEmpty: 'Reťazec Y je prázdny, odstránime všetky znaky stringu X',
            charactersSame: 'Posledné znaky sa rovnajú, nie je potrebná operácia',
            charactersDiff: 'Posledné znaky sa nerovnajú, výber kandidátov',
            opNumber: 'Potrebný počet operácii',
            usedOps: 'použité operácie',
            insert: 'vlož',
            remove: 'odstráň',
            replace: 'nahraď',
        },
        stats: {
            title: 'Editačná vzdialenosť - štatistiky',
            brief: 'Zadajte 2 reťazce - **X** a **Y** s maximálnou dĺžkou 15 znakov.',
            conclusion: 'Pri veľmi krátkych (alebo prázdnych) reťazcoch je rekurzívny algoritmus rýchlejší ako DP algoritmus, ale jeho časová zložitosť sa dramaticky zvyšuje s dĺžkou oboch reťazcov. Súčet dĺžok reťazcov v poslednom vzorovom vstupe je 20, pričom reálny počet rekurzívnych volaní je **8-ciferné** oproti **121** opakovaní cyklu pri DP algoritme. Reálna časová zložitosť DP algoritmu sa vždy rovná teoretickej. Rovnako ako pri úlohe *Najdlhší spoločný podreťazec* algoritmus prejde celou tabuľkou.',
        }
    },
    tree: {
        arrayOfK: 'Pole vyhľadávacích kľúčov',
        arrayOfF: 'Pole počtu vyhľadaní kľučov',
        tree: 'Strom',
        theory: {
            title: 'Optimálny binárny vyhľadávací strom - teória',
            brief: {
                b1: 'Na vstupe je **utriedené** pole vyhľadávacích kľúčov **K = { k1, k2, k3, ..., kN)**. Pre zjednodušenie si počet všetkých kľúčov označíme ako **N**. Druhé pole na vstupe obsahuje počet vyhľadaní jednotlivých kľúčov z prvého poľa **F = { f1, f2, f3, ..., fN)**. Index kľúča v prvom poli sa rovná indexu v druhom poli. Je potrebné vytvoriť binárny vyhľadávací strom, ktorý bude obsahovať všetky kľúče. Súčet cien všetkých vyhľadaní musí byť čo najnižší. Cena vyhľadania sa násobí s každou úrovňou stromu - 1. úrověn = počet vyhľadaní * 1, 2. úroveň = počet vyhľadaní * 2 atď.',
                b2: 'Aká bude cena stromu a ako bude strom vyzerať?',
                b3: 'Prvý strom síce vyzerá zaujimavejšie, ale výsledná cena všetkých vyhľadaní v tomto strome je **44**. Cena vyhľadaní v druhom strome je **36**. Práve druhý strom je riešením úlohy.',
            },
            recursion: {
                brief: 'Rekurzívne riešenie bude spočívať v postupnom dosadzovaní všetkých kľúčov ako koreň stromu, koreň podstromu atď. Pre všetky takéto podstromy sa spočíta cena. Ak bude každý podstrom optimálny, získame optimálnu štruktúru celého stromu.',
                recTime: '**Časová zložitosť** exponenciálne narastá s počtom vyhľadávacích kľúčov.',
                recSpace: '**Priestorová zložitosť** je počet vyhľadávacích kľúčov. Algoritmus predpokladá utriedené poľe kľučov. Konkrétne hodnoty nemusí poznať.',
                input: 'F = { 1, 2, 3 }',
            },
            dp: {
                brief1: 'DP algoritmus najprv do buniek na diagonále tabuľky priradí počty vyhľadaní jednotlivých kľúčov. Následne budú do buniek na diagonále priradené ceny optimálneho stromu, ktorý môže byť vytvorený od kľúča v stĺpci ku kľúču v riadku. Bunky pod diagonálou zostanú prázdne. Hodnota bunka sa počíta ako súčet okolitých buniek (vyberú sa tie ktoré tvoria aktuálny podstrom). Ak je nová hodnota nižšia ako aktuálna, bunka sa aktualizuje. Výsledná cena optimálneho stromu sa na konci nachádza v poslednej bunke prvého riadku. Výpočet hodnoty bunky je popísaný nasledujúcou formulou:',
                brief2: 'Do tabuľky sa však ukladajú iba ceny. Ak by sme chceli zostaviť celý strom, museli by sme do ďalšej tabuľky ukladať aj použité kľúče. Kľúč predstavuje koreň podstromu, takže sme schopní na základe kľúčov z tabuľky zostaviť strom. Ako koreň celého stromu zvolíme kľúč z bunky s výslednou cenou. Vyberieme ďalší kľúč z poľa vľavo od koreňového kľúča. Ak je takýto kľuč jeden, rovno ho umiestnime do ľavého podstromu a pokračujeme tvorením pravého podstromu, pretože pole je utriedené a v ľavom podstrome už nebude žiadny iný kľúč. Ak je vľavo kľúčov viac, vyberieme dva a pozrieme sa do tabuľky, ktorý z týchto dvoch kľúčov bol vybraný ako koreň podstromu. Ak sa minú všetky kľúče naľavo, pokračujeme kľúčmi napravo, až pokým nebudú v strome umiestnené všetky kľúče.',
                dpTime: '**Časová zložitosť** je vypĺňanie tabuľky **N ^ 3**, keďže v algoritme sú 2 vnorené cykly.',
                dpSpace: '**Priestorová zložitosť** je počet kľúčov (konkrétne kľúče opäť netreba, ak nechceme vytvoriť celý strom) + veľkosť tabuľky **N * N**. Vo vzorovom kóde budeme naviac ukladať aj kľúče, ale pre lepšie porovnanie s rekurzívnym algoritmom sa táto hodnota do priestorovej zložitosti neráta.',
            },
            keysExample: 'K = { 1, 2, 3, 4 }',
            freqsExample: 'F = { 2, 4, 6, 8 }',
            keysExample2: 'K = { 1, 2, 3, 4, 8, 9 }',
            freqsExample2: 'F = { 2, 4, 6, 8, 9, 10 }',
            matrixMultTitle: 'Reťazové násobenie matíc',
            matrixMultHref: 'http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Dynamic/chainMatrixMult.htm',
        },
        demo: {
            title: 'Optimálny binárny vyhľadávací strom - demo',
            brief: 'Zadajte **utriedené** pole vyhľadávacích kľúčov a pole počtu vyhľadávaní jednotlivých kľúčov (v oboch prípadoch ide o čísla oddelené čiarkami, pričom maximálny počet je 15). Hodnota bunky symbolizuje cenu optimálneho stromu, ktorý môže byť vytvorený od kľúča v stĺpci ku kľúču v riadku. Preto na diagonále v tabuľke sú počty vyhľadaní (cena stromu s jedným uzlom je počet vyhľadaní) a bunky pod diagonálou sú prázdne. Hodnota v zátvorke je index v poli kľúčov - symbolizuje ktorý kľuč bol použitý ako koreň stromu pre daný podproblém. Pomocou týchto pomocných hodnôt sa dá vytvoriť celý strom. ',
            initialState: 'Počiatočný stav',
            evalChainLength: 'Výpočet hodnôt pre reťaz dĺžky ',
            assignedIntMax: 'Priradené INT_MAX',
            selectedToSum: 'Vybrané bunky pre sčítanie',
            nothingToDo: 'žiadna akcia.',
            nextCell: 'Výber ďalšej bunky',
            tree: 'Vyhľadávací strom',
            key: 'Kľúč',
            cost: 'Cena optimálneho stromu',
            keysExample: '1,2,3,4',
            freqsExample: '2,4,6,8',
        },
        stats: {
            title: 'Optimálny binárny vyhľadávací strom - štatistiky',
            brief: 'Zadajte pole počtu vyhľadávaní jednotlivých kľúčov (maximálny počet je 15). Poľe kľúčov nie je potreba.',
            conclusion: 'Aj pre veľmi jednoduchý strom je DP algoritmus efektívnejší ako rekurzívny. Môžeme si všimnúť, že pri oboch algoritmoch nezáleží na počtoch vyhľadaní ale len na počte kľúčov. V algoritmoch sa totiž nenachádza podmienka pre volanie/vykonanie cyklu, ktorá by brala do úvahy počet vyhľadaní.'
        }
    }
};
