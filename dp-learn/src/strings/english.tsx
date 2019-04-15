// Strings for english localization

export const english = {
    global: {
        dpLearn: 'DP learn',
        dynamic: 'Dynamic',
        programming: 'programming',
        letsStart: "Let's start",
        dynProg: 'Dynamic programming',
        recursiveSolution: 'Solution using recursion',
        recusionTree: 'Recursion tree',
        dynProgSolution: 'Dynamic programming solution',
        start: 'Start',
        finish: 'Finish',
        step: 'Next step',
        table: 'Table',
        tables: 'Tables',
        result: 'Result',
        evaluateStats: 'Evaluate statistics',
        recCalls: 'recursive calls',
        numberOfCalls: 'Number of recursive calls / iterations',
        microSeconds: 'Microseconds',
        nanoSeconds: 'Nanoseconds',
        skipping: 'Skipping...',
        recursion: 'Recursion',
        dp: 'DP',
        invalidArg: 'Input values validation error',
        srcCode: 'Source code',
        timeComplex: 'Time complexity ',
        spaceComplex: 'Space complexity',
        tryDemo: 'Try out demo!',
        speed: 'Speed',
        stepping: 'Step by step',
        theory: 'Theory',
        demo: 'Demo',
        charts: 'Charts',
        stats: 'Statistics',
        calls: 'calls',
        theoreticValue: 'theoretical value',
        tableComparison: 'Table comparison',
        string: 'String',
        conclusion: 'Conclusion',
        done: 'Done.',
        similarProblems: 'Podobné optimalizačné úlohy',
        partOfApp: 'je súčasťou aplikácie'
    },
    theoryGlobal: {
        eg: 'For example:',
    },
    demoGlobal: {
        assigning: 'Assigning ',
        cycle: 'Cycle',
        start: 'Start',
        array: 'Array',
        nextCycle: 'Next cycle',
        solution: 'Solution',
        start0: 'Assigning value 0 at position 0',
        candidates: 'Selection of candidates',
        best: 'Selection of the best',
    },
    menu: {
        coins: 'Minimum coins',
        substring: 'Longest substring',
        rod: 'Cutting a rod',
        editDistance: 'Edit Distance',
        tree: 'Optimal binary search tree'
    },
    dp: {
        whatIsDpTitle: 'Čo je to Dynamické programovanie',
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
        prices: 'Prices',
        theory: {
            title: 'Cutting a rod - theory',
            brief: {
                b1: 'Majme oceľovú tyč dĺžky **L**. Túto tyč je potrebné narezať na menšie kusy. Na vstupe sú predajné ceny tyčí všetkých dĺžok od 1 po L: **P = { p1, p2, p3, ..., pL}**. Na aké dĺžky treba narezať tyč, aby súčet cien tyčí, ktoré vzniknú bol čo najvyšší?',
                b2: 'Na aké dĺžky sa dá tyč narezať?',
                b3: 'Na aké dĺžky sa dá tyč narezať?',
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
            title: 'Cutting a rod - demo',
            brief: 'Provide comma separated prices of lengths (lengths are 1, 2, 3, ...).',
            evalPriceFor: 'Evaluating biggest price for length ',
            result: 'Highest obtainable value: ',
            usedLength: 'used length ',
            usedLengths: 'used lengths: ',
            length: 'Length',
            highestPrice: 'Highest price',
            usedLengthBig: 'Used length',
        },
        stats: {
            title: 'Cutting a rod - statistics',
            brief: 'Zadajte ceny jednotlivých dĺžok tyče (maximálne 30) oddelené čiarkami (dĺžky sú 1, 2, 3, ...).',
            conclusion: '**Časová zložitosť** rekurzívneho algoritmu exponenciálne narastá s dĺžkou tyče (počtom zadaných cien). Kedže v rekurzívnom algoritme nie je žiadná podmienka, počet rekurzívnych volaní sa bude presne rovnať teoretickej hodnote zo vzorca (ako môžno vidieť po vypočítaní štatistík). Nezáleží ani na cenách jednotlivých dĺžok, iba na ich počte. DP algoritmus bude mať oproti teoretickej hodnote počet volaní nižší, pretože počet opakovaní vnútorného cyklu závisí od cien jednotlivých dĺžok. Zo štatistík vyplýva, že rekurzívny algoritmus nie je rýchlejší ako DP algoritmus ani pri veľmi jednoduchom vstupe.',
        }
    },
    coins: {
        coin: 'Coin',
        coins: 'Coins',
        value: 'Value',
        valueLower: 'value',
        theory: {
            title: 'Minimum number of coins that make a given value - theory',
            brief: {
                b1: 'There are coins **C = { C1, C2, ..., Cn }**. We want to find minimum number of coins that make a given value **V**, e.g.:',
                b2: 'Which coins we need to get given value?',
                b3: 'Both options are valid. 2. option needs only 2 coins, so this is our result. Minimum number of coins is **2**.',
            },
            recursion1: 'Program will loop through **N** coin values. For each coin which value is less or equal given value **V**, we will call the same method recursively with value **V** substracted by current coin\'s value. So, time complexity of this solution is exponential. Space complexity is pretty obvious - **N + 1**, where **N** is the number of coin types and **1** to store given value **V**.',
            recTime: 'Časová zložitosť exponenciálne narastá s požadovanou hodnotou **V**',
            recSpace: 'Priestorová zložitosť je zrejmá - **N + 1**, kde **N** je počet mincí a **1** potrebujeme na uloženie hodnoty **V**.',
            dynProg1: 'As can you see in recursion tree, some subproblems are recomputed again and again. Time complexity can be significantly minimize by storing partial results. So, let\'s try solve this problem by dynamic programming! In this example, we will need simple one-dimensional array.\n New value of the cell is incremented value of some previous cell. Distance between cell which is computed and cell which value is incremented depends on coins. If value is 4 for and there is coins 4, max distance is 4.',
            dpTime: 'Keďže algoritmus obsahuje vnorený cyklus, jeho **časová zložitosť** je polynomická - počet mincí vynásobený hodnotou.',
            dpSpace: '**Priestorová zložitosť** sa oproti rekurzívnemu algoritmu zvýšila iba o veľkosť poľa potrebného na ukladanie výsledkov podproblémov.',
            rod: 'Rezanie tyče',
            knapsack: 'Knapsack problem',
        },
        demo: {
            title: 'Minimum number of coins that make a given value - demo',
            brief: 'Dynamic programming solution. Please provide value to make and coins separated by \',\' (comma)',
            isNeeded: 'Number of coins: ',
            evalCoinsFor: 'Evaluating coins needed for value ',
            usedCoin: 'used coin',
            usedCoins: 'used coins',
            coinsNumber: 'Number of coins',
            usedCoinBig: 'Used coin',
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
            title: 'Longest common substring - demo',
            brief: 'Dynamic programming solution - simple version with **M x N** table.',
            assignZero: 'assigning value 0',
            noMatch: 'no match. ',
            incrementPrevious: 'incrementing previous value',
            longestSubr: 'Longest common substring',
            length: 'length'
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
            title: 'Edit distance - demo',
            brief: 'Provide 2 strings, which will be edit distance calculated for.',
            empty: 'Empty',
            stringXEmpty: 'String X is empty, insert all characters of stringY',
            stringYEmpty: 'String Y is empty, remove all characters of string X',
            charactersSame: 'Last characters are same, no operation needed',
            charactersDiff: 'Last characters are different, selection of candidates',
            opNumber: 'Number of operations',
            usedOps: 'used operations',
            insert: 'insert',
            remove: 'remove',
            replace: 'replace',
        },
        stats: {
            title: 'Editačná vzdialenosť - štatistiky',
            brief: 'Zadajte 2 reťazce - **X** a **Y** s maximálnou dĺžkou 30 znakov.',
            conclusion: 'Pri veľmi krátkych (alebo prázdnych) reťazcoch je rekurzívny algoritmus rýchlejší ako DP algoritmus, ale jeho časová zložitosť sa dramaticky zvyšuje s dĺžkou oboch reťazcov. Súčet dĺžok reťazcov v poslednom vzorovom vstupe je 20, pričom reálny počet rekurzívnych volaní je **8-ciferné** oproti **121** opakovaní cyklu pri DP algoritme. Reálna časová zložitosť DP algoritmu sa vždy rovná teoretickej. Rovnako ako pri úlohe **Najdlhší spoločný podreťazec** algoritmus prejde celou tabuľkou.',
        }
    },
    tree: {
        arrayOfK: 'Array of search keys',
        arrayOfF: 'Array of frequency counts',
        theory: {

        },
        demo: {
            title: 'Optimal binary search tree - demo',
            brief: 'Provide array of search keys and array of frequency counts (comma separated numbers in both cases).',
            initialState: 'Initial state',
            evalChainLength: 'Evaluating values for chain of length ',
            assignedIntMax: 'Assigned INT_MAX',
            selectedToSum: 'Selected cells to sum',
            nothingToDo: 'nothing to do.',
            nextCell: 'Moving to next cell',
            tree: 'Search tree',
            key: 'Key',
            cost: 'Cost of optimal tree',
        },
        stats: {
            title: 'Optimalizovaný binárny vyhľadávací strom - štatistiky',
            brief: 'Zadajte pole počtu vyhľadávaní jednotlivých kľúčov (pole vyhľadávacích kľučov nie je potreba).',
        }
    }
};
