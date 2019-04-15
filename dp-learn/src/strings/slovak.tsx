// Strings for slovak localization

export const slovak = {
    global: {
        dpLearn: 'DP learn',
        dynamic: 'Dynamické',
        programming: 'programovanie',
        letsStart: 'Začnime',
        dynProg: 'Dynamické programovanie',
        recursiveSolution: 'Rekurzívny algoritmus',
        recusionTree: 'Strom rekurzívnych volaní',
        dynProgSolution: 'DP algoritmus',
        start: 'Štart',
        finish: 'Koniec',
        step: 'Ďalší krok',
        table: 'Tabuľka',
        tables: 'Tabuľky',
        result: 'Výsledok',
        evaluateStats: 'Vypočítať štatistiky',
        numberOfCalls: 'Počet rekurzívnych volaní / cyklov',
        microSeconds: 'Microseconds',
        nanoSeconds: 'Nanoseconds',
        skipping: 'Preskakujem...',
        recursion: 'Rekurzia',
        dp: 'DP',
        invalidArg: 'Chyba pri validácii vstupných hodnôt',
        srcCode: 'Zdrojový kód',
        timeComplex: 'Časová zložitosť     ',
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
        tree: 'Optimalizovaný binárny vyhľadávací strom'
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
    dp: {
        whatIsDpTitle: 'Čo je to dynamické programovanie',
        whatIsDpText: 'Dynamické programovanie (skrátene **DP**) je optimalizačná metóda, ktorá sa dá využiť pri riešení určitého typu optimalizačných úloh. Okrem toho, že je to optimalizačná metóda je DP aj programovacia technika - jeden z prístupov návrhu algoritmov. Táto webová aplikácia sa zaoberá návrhom DP algoritmov, ich grafickému znázorneniu a efektivite.',
        mainPrinciplesTitle: 'Hlavné princípy',
        mainPrinciplesText: 'Pri tvorbe DP algoritmu vychádzame väčšinou z jednoduchého rekurzívneho algoritmu. Aby malo zmysel vytvárať DP algoritmus, musí mať rekurzívne riešenie 2 vlastnosti: **optimálnu subštruktúru** a **opakovanie podproblémov**.',
        optSubstructTitle: 'Optimálna subštruktúra',
        optSubstructText: 'Pôvodný problém rozdelíme na podproblémy. Ak sa "skladaním" výsledkov jednotlivých podproblémov dá získať riešenie pôvodného problému, hovoríme, že riešenie má **optimálnu subštruktúru**.',
        repeatingTitle: 'Opakovanie podproblémov',
        repeatingText: 'Druhou vlastnosťou, ktorú musí rekurzívne riešenie spĺňať je **opakovanie podproblémov**. Zistiť, či sa pri rekurzívnom riešení opakujú podproblémy sa dá napríklad nakreslením **stromu rekurzívnych volaní**:',
        prosAndConsTitle: 'Výhody a nevýhody',
        prosAndConsText: 'Hlavná výhoda DP spočíva v tom, že využíva opakovanie sa podproblémov a preto vedie často k oveľa efektívnejšiemu a rýchlejšiemu riešeniu. Výsledky menších podproblémov sú ukladané do dátovej štruktúry (poľa alebo tabuľky). Ak algoritmus narazí znovu na podproblém, ktorý už bol predtým vyriešený, použije sa uložený výsledok. Rekurzívny algoritmus pri jednoduchom vstupe výsledok skôr ako DP algoritmus. Pri zložitom vstupe je ale DP algoritmus výrazne efektívnejší. **Exponenciálna** časová zložitosť rekurzívneho algoritmu môže byť znížená na **polynomickú**. Nevýhodou je vyššia pamäťová náročnosť z dôvodu vytvárania dátovej štruktúry na ukladanie výsledkov podproblémov.'
    },
    rod: {
        prices: 'Ceny',
        theory: {
            title: 'Rezanie tyče - teória',
            brief: {
                b1: 'Majme oceľovú tyč dĺžky **L**. Túto tyč je potrebné narezať na menšie kusy. Na vstupe sú predajné ceny tyčí všetkých dĺžok od 1 po L: **P = { p1, p2, p3, ..., pL}**. Na aké dĺžky treba narezať tyč, aby súčet cien tyčí, ktoré vzniknú bol čo najvyšší?',
                b2: 'Na aké dĺžky sa dá tyč narezať?',
                b3: 'Pri tomto konkrétnom vstupe vychádza ako najlepšia možnosť tyč vôbec nerezať! Tyč dĺžky 3 má najvyššiu cenu.',
            },
            recursion1: 'Pre tyč dĺžky **0** musí byť aj najlepšia cena **0**. V opačnom prípade vypočítame najvyššie ceny pre všetky dĺžky tyče. Pri rekurzívnom algoritme sa teda budú dookola vypočítavať najvyššie ceny pre všetky dĺžky tyče.',
            recTime: '**Časová zložitosť** exponenciálne narastá s dĺžkou tyče (počtom zadaných cien).',
            recSpace: '**Priestorová zložitosť** sa rovná počtu zadaných cien.',
            dynProg1: 'V DP algoritme sa budú do tabuľky (jednorozmerného poľa) ukladať najvyššie možné ceny pre všetky dĺžky tyče. Pri výbere hodnoty do bunky sa berú do úvahy ceny **všetkých** dĺžok vypočítaných predtým (to znamená menších od aktuálnej). Ku každej bunke sa pripočítajú ceny takých dĺžok tak, aby výsledná dĺžka neprekročila aktuálne vypočítavanú. Do bunky sa vyberie súčet tých dĺžok (ich cien), ktoré dávajú najvyššiu predajnú cenu.',
            dpTime: 'Algoritmus obsahuje 1 vnorený cyklus, takže jeho **časová zložitosť** je polynomická - druhá mocnina počtu zadaných cien.',
            dpSpace: '**Priestorová zložitosť** sa oproti rekurzívnemu algoritmu zvýšila o veľkosť poľa potrebného na ukladanie výsledkov podproblémov.',
            outerCycle: 'Vonkajší cyklus',
        },
        demo: {
            title: 'Rezanie tyče - demo',
            brief: 'Zadajte ceny jednotlivých dĺžok tyče (maximálne 15) oddelené čiarkami (dĺžky sú 1, 2, 3, ...). Stĺpce tabuľky symbolizujú dĺžky tyče. V prvom riadku budú na konci najvyššie dosiahnuteľné ceny pre jednotlivé dĺžky. V druhom riadku budú pomocné hodnoty pre vytvorenie kompletného riešenia. Hodnota bunky je v tomto prípade dĺžka najdlhšej použitej tyče pre danú dĺžku.',
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
            brief: 'Zadajte ceny jednotlivých dĺžok tyče (maximálne 20) oddelené čiarkami (dĺžky sú 1, 2, 3, ...).',
            conclusion: '**Časová zložitosť** rekurzívneho algoritmu exponenciálne narastá s dĺžkou tyče (počtom zadaných cien). Kedže v rekurzívnom algoritme nie je žiadná podmienka, počet rekurzívnych volaní sa bude presne rovnať teoretickej hodnote zo vzorca (ako môžno vidieť po vypočítaní štatistík). Nezáleží ani na cenách jednotlivých dĺžok, iba na ich počte. DP algoritmus bude mať oproti teoretickej hodnote počet volaní nižší, pretože počet opakovaní vnútorného cyklu závisí od cien jednotlivých dĺžok. Zo štatistík vyplýva, že rekurzívny algoritmus nie je rýchlejší ako DP algoritmus ani pri veľmi jednoduchom vstupe.',
        }
    },
    coins: {
        coin: 'Minca',
        coins: 'Mince',
        value: 'Hodnota',
        valueLower: 'hodnota',
        theory: {
            title: 'Minimálny počet mincí na vytvorenie danej hodnoty - teória',
            brief: {
                b1: 'Na vstupe máme mince rôznych hodnôt **C = { c1, c2, ..., cN }**. Pre zjednodušenie si počet všetkých mincí označíme ako **N**. Predpokladajme, že mincí každej hodnoty je neobmedzený počet, teda môžeme použiť ľubovolný počet mincí **c1**, **c2** atď. Okrem mincí je na vstupe hodnota **V**, ktorá má vzniknúť súčtom hodnôt mincí. Pre súčet musí byť využitý čo najmenší počet mincí. Ktoré mince budú použité a aký je ich počet?',
                b2: 'Ktoré mince budeme potrebovať?',
                b3: 'Obe možnosti dávajú správnu hodnotu, ale správny výsledok je 2. riešenie. Udáva minimálny počet mincí a to **2**.'
            },
            recursion1: 'Ak je zadaná hodnota rovná **0**, aj počet mincí bude **0**. Ak je hodnota väčšia ako 0, zoberieme postupne všetky mince, ktorých hodnota je menšia alebo rovná požadovanej hodnote. Od požadovanej hodnoty sa odpočíta hodnota mince a rekurzívne sa zavolá rovnaká metóda pre túto novú požadovanú hodnotu, pričom sa inkrementuje počet použitých mincí.',
            recTime: '**Časová zložitosť** exponenciálne narastá s požadovanou hodnotou **V**',
            recSpace: '**Priestorová zložitosť** je zrejmá - **N + 1**, kde **N** je počet mincí a **1** potrebujeme na uloženie hodnoty **V**.',
            dynProg1: 'Na ukladanie výsledkov podproblémov potrebná dátová štruktúra typu pole o veľkosti zadanej hodnoty + 1. Na začiatku sú všetky položky v poli nastavené na hodnotu **INT_MAX**. Výnimkou je číslo **0** na **0.-tom** indexe. Vychádzame z toho, že ak je zadaná hodnota rovná 0, aj riešenie je 0. Čísla na ďalších indexoch sa budú na konci výpočtu rovnať počtu mincí potrebných na vytvorenie hodnoty, ktorá sa rovná danému indexu. Hodnota optimálneho riešenia teda bude na poslednom indexe. Nová hodnota bunky je vždy inkrementovaná hodnota niektorej z predchádzajúcich buniek. Vzialenosť medzi počítanou bunkou, a bunkou z ktorej berie hodnotu závisí od toho, aké máme mince. Ak máme dostať hodnotu **4** a máme aj mincu s hodnotou **4**, maximálna vzdialenosť, na ktorú sa vypočítava nová hodnota je **4**.',
            dpTime: 'Keďže algoritmus obsahuje vnorený cyklus, jeho **časová zložitosť** je polynomická - počet mincí vynásobený hodnotou.',
            dpSpace: '**Priestorová zložitosť** sa oproti rekurzívnemu algoritmu zvýšila iba o veľkosť poľa potrebného na ukladanie výsledkov podproblémov.',
            rod: 'Rezanie tyče',
            knapsack: 'Problém batohu',


        },
        demo: {
            title: 'Minimálny počet mincí na vytvorenie danej hodnoty - demo',
            brief: 'Zadajte hodnotu (od 1 po 20), ktorú treba vytvoriť súčtom hodnôt mincí a hodnoty mincí oddelené čiarkami (maximálny počet je 5). Stĺpce tabuľky symbolizujú jednotlivé hodnoty, pre ktoré treba vypočítať minimálny počet mincí. V prvom riadku budú na konci minimálne počty mincí pre jednotlivé hodnoty. V druhom riadku budú pomocné hodnoty pre vytvorenie kompletného riešenia. Hodnota bunky je v tomto prípade hodnota najväčšej použitej mince.',
            isNeeded: 'Potrebný počet mincí',
            evalCoinsFor: 'Výpočet mincí pre vytvorenie hodnoty ',
            usedCoin: 'použitá minca ',
            usedCoins: 'použité mince',
            coinsNumber: 'Počet mincí',
            usedCoinBig: 'Použitá minca',
        },
        stats: {
            title: 'Minimálny počet mincí na vytvorenie danej hodnoty - štatistiky',
            brief: 'Zadajte hodnotu (od 1 po 20), ktorú treba vytvoriť súčtom hodnôt mincí a hodnoty mincí oddelené čiarkami (maximálny počet je 15).',
            conclusion: 'Oproti úlohe **Rezanie tyče** je v rekurzívnom riešení tejto úlohy veľký rozdiel medzi teoretickou maximálnou **časovou zložitosťou**. Tá veľmi závisí od konkrétných hodnôt mincí. Teoretická sa skutočnej hodnote rovná len v jednoduchom príklade, kedy **mince: 1,2** a **hodnota: 2**. V ostatných príkladoch sa hodnoty približujú tým viac, čím "nezmyselnejšie" mince sú zadané. Aj keď je jasné, že jediná minca s hodnotou 20 stačí na vytvorenie hodnoty 20, algoritmus skúma aj všetky predchádzajúce hodnoty. Podobne je to aj pri DP algoritme.',
        }
    },
    substring: {
        theory: {
            title: 'Najdlhší spoločný podreťazec - teória',
            brief: {
                b1: 'Na vstupe sú dva reťazce, **X** s dĺžkou **L1** a **Y** s dĺžkou **L2**. Aký je ich najdlhší spoločný podreťazec?',
                b2: 'Aký je najdlhší spoločný podreťazec týchto dvoch reťazcov?',
                strX: 'U|ni|ca|s|**|ting|**',
                strY: 'u|ni|tTe|s|**|ting|**',
                b3: 'Môžeme vidieť, že reťazce majú viacero spoločných podreťazcov. Najdlhší z nich je **ting** a má dĺžku  **4** znaky.',
                b4: 'Jednoduchým riešením by bolo zobrať každý podreťazec z prvého reťazca a zisťiť, či sa tento podreťazec nachádza aj v druhom reťazci. V prvom reťazci bude **O(L1 ^ 2)** podreťazcov. Pri využití **Knuth-Morris-Prattovho** algoritmu na vyhľadávanie všetkých podreťazcov v druhom reťazci, časová zložitosť tohoto riešenia bude **O((L1 ^ 2) * L2)**.',
            },
            recursion1: 'Ak je dĺžka jedného alebo druhého reťazca rovná **0**, výsledok bude **0**, pretože v jednom zo stringov nebude žiadny podřetazec. Ak algoritmus narazí na zhodu znakov, pripočíta k výsledku hodnotu **1** a pokračuje porovnaním nasledujúcich dvoch znakov. Ak zhoda nenastane, nastáva rekurzívne volanie pre porovnanie ďalšieho znaku v prvom reťazci a ďalšieho znaku v druhom reťazci. Z týchto hodnôt sa vyberie maximum. Algoritmus je síce jednoduchý, ale veľmi neefektívny.',
            recTime: '**Časová zložitosť** sa exponenciálne zvyšuje s dĺžkou reťazcov.',
            recSpace: '**Priestorová zložitosť** je súčet dĺžok oboch reťazcov.',
            dynProg1: 'Princíp algoritmu spočíva v hľadaní najdlhšieho spoločného **sufixu** v podreťazcoch oboch reťazcov. Dĺžky sufixov sa budú ukladať do dvojrozmerného poľa. Ak sa znak v stĺpci a riadku nerovná, do bunky sa vloží hodnota **0**. Ak rovnajú, tak sa vloží hodnota **1**, ak ide o prvý znak jedného alebo druhého reťazca, alebo sa inkrementuje predchádzajúca hodnota na diagonále (inkrementuje sa sufix). Okrem tabuľky potrebujeme navyše premenné na ukladanie pozície v tabuľke s najvyššou hodnotou sufixu. Vďaka tejto pozícii a hodnote v bunke vieme jednoducho vytvoriť aj kompletné riešenie úlohy, pretože vieme kde končí najdlhší sufix a poznáme jeho dĺžku.',
            dpTime: '**Časová zložitosť** je polynomická - vypĺňanie tabuľky **L1 * L2**.',
            dpSpace: '**Priestorová zložitosť** je veľkosť tabuľky + premenná na ukladanie aktuálnej hodnoty najdlhšieho sufixu (ak nepotrebujeme zostaviť kompletné riešenie, stačí nám len jeho hodnota, netreba pozíciu v tabuľke).',
            zero: 'Znaky sa nerovnajú - priradenie hodnoty 0',
            increment: 'Znaky sa rovnajú - inkrementovanie sufixu',
            one: 'Znaky sa rovnajú, ale ide o prvé znaky v reťazcoch - priradenie hodnoty 1',
        },
        demo: {
            title: 'Najdlhší spoločný podreťazec - demo',
            brief: 'Zadajte 2 reťazce - **X** a **Y** s maximálnou dĺžkou 20 znakov. Riadky tabuľky symbolizujú znaky reťazca **X**. Stĺpce tabuľky reprezentujú znaky reťazca **Y**. Ak sa rovná znak v riadku s riadkom v stĺpci, hodnota budnky bude nastavená na 1, alebo inkrementovaná, ak sa rovnali aj predchádzajúce znaky. K získaniu kompletného riešenia v tejto úlohe nie je potrebná žiadna dátová štruktúra navyše. Na konci bunka s najvyššou hodnotou predstavuje posledný znak najdlhšieho spoločného podreťazca. Stačí už len zobrať daný počet predchádzajúcich znakov z riadku alebo stĺpca.',
            assignZero: 'priradzujem hodnotu 0',
            noMatch: 'žiadna zhoda. ',
            incrementPrevious: 'inkrementujem predchádzajúcu hodnotu',
            longestSubr: 'Najdlhší spoločný podreťazec',
            length: 'dĺžka'
        },
        stats: {
            title: 'Najdlhší spoločný podreťazec - štatistiky',
            brief: 'Zadajte 2 reťazce - **X** a **Y** s maximálnou dĺžkou 15 znakov.',
            conclusion: '**TODO rekurzia casova zlozitost......** Teoretická aj reálna časová zložitosť sa pri DP algoritme budú vždy rovnať, pretože algoritmus vždy porovnáva každý znak reťazca X so všetkými znakmi druhého reťazca.'
        }
    },
    editDistance: {
        theory: {

        },
        demo: {
            title: 'Editačná vzdialenosť - demo',
            brief: 'Zadajte 2 reťazce - **X** a **Y** s maximálnou dĺžkou 20 znakov. Riadky tabuľky symbolizujú znaky reťazca **X**. Stĺpce tabuľky reprezentujú znaky reťazca **Y**. Prvý riadok a stĺpec symbolizujú prázdny reťazec. ',
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
            conclusion: 'Pri veľmi krátkych (alebo prázdnych) reťazcoch je rekurzívny algoritmus rýchlejší ako DP algoritmus, ale jeho časová zložitosť sa dramaticky zvyšuje s dĺžkou oboch reťazcov. Súčet dĺžok reťazcov v poslednom vzorovom vstupe je 20, pričom reálny počet rekurzívnych volaní je **8-ciferné** oproti **121** opakovaní cyklu pri DP algoritme. Reálna časová zložitosť DP algoritmu sa vždy rovná teoretickej. Rovnako ako pri úlohe **Najdlhší spoločný podreťazec** algoritmus prejde celou tabuľkou.',
        }
    },
    tree: {
        arrayOfK: 'Pole vyhľadávacích kľúčov',
        arrayOfF: 'Pole počtu vyhľadaní kľučov',
        theory: {

        },
        demo: {
            title: 'Optimalizovaný binárny vyhľadávací strom - demo',
            brief: 'Zadajte pole vyhľadávacích kľúčov a pole počtu vyhľadávaní jednotlivých kľúčov (v oboch prípadoch ide o čísla oddelené čiarkami). Hodnota bunky symbolizuje cenu optimálneho stromu, ktorý môže byť vytvorený od klúča v stĺpci ku kľuču v riadku. Preto na diagonále v tabuľke sú počty vyhľadaní (cena stromu s jedným uzlom je počet vyhľadaní) a bunky pod diagonálou sú prázdne. Hodnota v zátvorke je index v poli kľučov - symbolizuje ktorý kľuč bol použitý ako koreň stromu pre daný podproblém. Pomocou týchto pomocných hodnôt sa dá vytvoriť celý strom. ',
            initialState: 'Počiatočný stav',
            evalChainLength: 'Výpočet hodnôt pre reťaz dĺžky ',
            assignedIntMax: 'Priradené INT_MAX',
            selectedToSum: 'Vybrané bunky pre sčítanie',
            nothingToDo: 'žiadna akcia.',
            nextCell: 'Výber ďalšej bunky',
            tree: 'Vyhľadávací strom',
            key: 'Kľúč',
            cost: 'Cena optimálneho stromu',
        },
        stats: {
            title: 'Optimalizovaný binárny vyhľadávací strom - štatistiky',
            brief: 'Zadajte pole počtu vyhľadávaní jednotlivých kľúčov (pole vyhľadávacích kľučov nie je potreba).',
        }
    }
};
