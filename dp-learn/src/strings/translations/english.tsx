// Strings for english localization

export const english = {
    global: {
        intro: 'Introduction',
        dpLearn: 'DP learn',
        dynProg: 'Dynamic programming',
        recursiveSolution: 'Recursive algorithm',
        recusionTree: 'Recursive calls tree',
        dynProgSolution: 'DP algorithm',
        start: 'Start',
        finish: 'Finish',
        step: 'Next step',
        table: 'Table',
        tables: 'Tables',
        evaluateStats: 'Evaluate statistics',
        numberOfCalls: 'calls/iterations',
        skipping: 'Skipping...',
        recursion: 'Recursion',
        dp: 'DP',
        invalidArg: 'Invalid input values!',
        srcCode: 'Source code',
        timeComplex: 'Time complexity',
        spaceComplex: 'Space complexity',
        speed: 'Speed',
        stepping: 'Step by step',
        theory: 'Theory',
        demo: 'Demo',
        stats: 'Statistics',
        theoreticValue: 'theoretical value',
        tableComparison: 'Table comparison',
        string: 'String',
        conclusion: 'Conclusion',
        done: 'Done.',
        similarProblems: 'Similar optimalization problems',
        partOfApp: 'is a part of the app'
    },
    menu: {
        coins: 'Minimum number of coins that make a given value',
        substring: 'Longest common substring',
        rod: 'Rod cutting',
        editDistance: 'Edit Distance',
        tree: 'Optimal binary search tree'
    },
    theoryGlobal: {
        eg: 'For example:',
    },
    demoGlobal: {
        assigning: 'Assigning',
        cycle: 'Loop',
        start: 'Start',
        array: 'Array',
        nextCycle: 'Next loop',
        solution: 'Solution',
        start0: 'Assigning value 0 to position 0',
        candidates: 'Selection of candidates',
        best: 'Selection of the best',
    },
    intro: {
        dpLearn: "Web application **DP learn** demonstrates principles and advantages of **Dynamic programming** **\"bottom-up\"(tabulation)** method on several optimalization problems. Each problem has its own *theory*, *demo* and *statistics* page.",
        fitVutbr: 'FIT BUT',
        fitVutbrHref: 'https://www.fit.vutbr.cz/',
        whatIsDpTitle: 'What is dynamic programming?',
        whatIsDpText1: 'Dynamic programming (**DP**) is a mathematical optimization method, which can be used to optimize inefficient recursive solution of a certain type of optimalization problems. Dynamic programming is also a computer programming method. Following are the two main properties of a problem that suggest that the given problem can be solved:',
        optSubstruct: '**optimal substructure** - results of subproblems can be used to obtain optimal solution of the given problem',
        repeating: '**overlapping subproblems** - function is recursively called again and again with the same parameters',
        whatIsDpText2: "In DP algorithm, results of subproblems are stored and that's why DP algorithm is much more efficient and faster than a naive recursive algorithm.",
        partsTitle: 'Demonstration of principles and advantages on optimization problems',
        partsText: 'Application contains 5 optimization problems, which can be solved by dynamic programming. Each problem has these 3 tabs',
        theoryTitle: 'Theory',
        theoryText: "This tab provides problem definition with concrete example followed by recursive and DP algorithms. After algorithm explanation is given its time and space complexity. Space complexity of DP algorithm doesn't contain helping structures for full solution building. Under recursive algorithm is listed the recursive calls tree and under DP algorithm the tables with values selection. Source codes in C language are provided contains one function solving the problem. Main function and helpers are easy to add. At the end, examples of similar optimization problems (table building is similar) are stated.",
        demoTitle: 'Demo',
        demoText: 'After the button is clicked, DP algorithm starts. You can choose speed or select "step by step". After the table is filled, value of optimal solution and also full solution shows up (in *Optimal binary search tree* only solution value is given). Also the formula describing values evaluation is given.',
        statsTitle: 'Statistics',
        statsText: 'After the button is clicked, charts and table comparing complexity of recursive and DP algorithm shows up. U časovej zložitosti je uvedená maximálna teoretická hodnota podľa funkcie zložitosti a skutočný počet rekurzívnych volaní alebo behov cykla pri DP algoritme. Priestorová zložitosť je vypočítaná z funkcie zložitosti. Okrem štatistík pre zadaný vstup aplikácia obsahuje niekoľko "vzorových" vstupov. Pod štatistikami sa nachádza ich slovné zhodnotenie.',
        references: 'References',
        geeksTitle: 'GeeksforGeeks',
        geeksHref: 'https://www.geeksforgeeks.org/',
        geeksText: 'theory and source codes for optimization problem are inspired by articles on this portal',
        algorithmsTitle: 'Introduction to Algorithms',
        algorithmsHref: 'https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844',
        algorithmsText: 'dynamic programming and some optimization problems theory',
        writeUs: 'Write Us',
        mail: 'dplearnwebapp@gmail.com'
    },
    coins: {
        coin: 'Coin',
        coins: 'Coins',
        value: 'Value',
        valueLower: 'value',
        theory: {
            title: 'Minimum number of coins that make a given value - theory',
            brief: {
                b1: 'We have infinite supply of coin with certain values **C = { c1, c2, ..., cN }**. **N** is number of coin values. We want to find minimum number of coins that make a given value **V**. Which coins we will use?',
                input1: 'C = { 2, 3, 5 }',
                input2: 'V = 7',
                b2: 'Which coins we need to get given value?',
                output1: '7 = 2 + 2 + 3',
                output2: '7 = 2 + 5',
                b3: 'Both options are valid. 2. option needs only 2 coins, so this is the optimal result. Minimum number of coins is **2**.',
            },
            recursion:{
                brief: "If given value is **0**, the result is also **0**. Otherwise, the program will loop through **N** coin values. For each coin which value is less or equal given value **V**, will be called the same function recursively with value **V** substracted by current coin's value. Number of used coins is incremented.",
                recTime: 'Time complexity is growing exponentially with given value **V**.',
                recSpace: 'Space complexity is pretty obvious - **N + 1**, where **N** is the number of coins and **1** is needed to store given value **V**.',
            },
            dp:{
                brief: 'Table is 1-dimensional array in this case. All values in array of size **V + 1** are set to **INT_MAX** at start excepting **0** at **0.** index. New value of the table cell is incremented value of some of the previous cells. Distance between cell which value is computed and cell which value is used depends on coins. If value is **4** for and there is coin **4**, max distance is **4**. Value of the last cell is the optimal solution at the end. For full solution building we need additional array.',
                dpTime: 'Due to nested loop in algorithm, **time complexity** is polynomic.',
                dpSpace: 'Additional space compared to recursive algorithm is needed to storing values in table.',
                input11: 'C = { 1, 2, 5 }',
                input12: 'V = 4',
                input21: 'C = { 1, 2, 4 }',
                input22: 'V = 4',
            },
            rod: 'Rod cutting',
            knapsackTitle: 'Knapsack problem',
            knapsackHref: 'https://www.gatevidyalay.com/0-1-knapsack-problem-using-dynamic-programming-approach/',
        },
        demo: {
            title: 'Minimum number of coins that make a given value - demo',
            brief: 'Please provide value to make (from 0 to 20) and comma separated coins (max. 15). Table cols symbolize coin values. First row will contain solutions for all values at the end. Second row is full solution building helper. Value of a cell in second row is value of highest used coin.',
            isNeeded: 'Number of coins',
            evalCoinsFor: 'Evaluating coins needed for value ',
            usedCoin: 'used coin',
            usedCoins: 'used coins',
            coinsNumber: 'Number of coins',
            usedCoinBig: 'Used coin',
        },
        stats: {
            title: 'Minimum number of coins that make a given value - statistics',
            brief: 'Please provide value to make (from 0 to 20) and comma separated coins (max. 15).',
            conclusion: "There could be noticeable difference between theoretical and real number of recursive calls. It's because real number depends on concrete coin values. Teoretical equals real value when **C: { 1,2 }** and **V = 2**. Number of calls or iterations in DP algorithm is growing when useless coins are provided.",
        }
    },
    rod: {
        prices: 'Prices',
        theory: {
            title: 'Cutting a rod - theory',
            brief: {
                b1: 'Majme oceľovú tyč dĺžky **L**. Túto tyč je potrebné narezať na menšie kusy. Na vstupe sú predajné ceny tyčí všetkých dĺžok od 1 po L: **P = { p1, p2, p3, ..., pL}**. Na aké dĺžky treba narezať tyč, aby súčet cien tyčí, ktoré vzniknú bol čo najvyšší?',
                input: 'P = { 1, 3, 5 }',
                b2: 'Na aké dĺžky sa dá tyč narezať?',
                output1: '3 = 1 + 1 + 1 => ceny: 1 + 1 + 1 = 3',
                output2: '3 = 1 + 2 => ceny: 1 + 3 = 4',
                output3: '3 = 3 => ceny 5 = 5',
                b3: 'Na aké dĺžky sa dá tyč narezať?',
            },
            recursion: {
                brief: 'Pre tyč dĺžky **0** musí byť aj najlepšia cena **0**. V opačnom prípade vypočítame najvyššie ceny pre všetky dĺžky tyče. Pri rekurzívnom algoritme sa teda budú dookola vypočítavať najvyššie ceny pre všetky dĺžky tyče.',
                recTime: '**Časová zložitosť** exponenciálne narastá s dĺžkou tyče (počtom zadaných cien).',
                recSpace: '**Priestorová zložitosť** sa rovná počtu zadaných cien.',
                input: 'P = { 1, 3, 5 }'

            },
            dp: {
                brief: 'V DP algoritme sa budú do tabuľky (jednorozmerného poľa) ukladať najvyššie možné ceny pre všetky dĺžky tyče. Pri výbere hodnoty do bunky sa berú do úvahy ceny **všetkých** dĺžok vypočítaných predtým (to znamená menších od aktuálnej). Ku každej bunke sa pripočítajú ceny takých dĺžok tak, aby výsledná dĺžka neprekročila aktuálne vypočítavanú. Do bunky sa vyberie súčet tých dĺžok (ich cien), ktoré dávajú najvyššiu predajnú cenu.',
                dpTime: 'Algoritmus obsahuje 1 vnorený cyklus, takže jeho **časová zložitosť** je polynomická - druhá mocnina počtu zadaných cien.',
                dpSpace: '**Priestorová zložitosť** sa oproti rekurzívnemu algoritmu zvýšila o veľkosť poľa potrebného na ukladanie výsledkov podproblémov.',
                outerCycle: 'Outer loop',
                input: 'P = { 1, 5, 6, 6, 9 }',
                i3: 'i = 3',
                i4: 'i = 4'
            },
            coins: 'Minimálny počet mincí na vytvorenie danej hodnoty'
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
    substring: {
        theory: {
            title: 'Najdlhší spoločný podreťazec - teória',
            brief: {
                b1: 'Na vstupe sú dva reťazce, **X** s dĺžkou **L1** a **Y** s dĺžkou **L2**. Aký je ich najdlhší spoločný podreťazec?',
                input1: "X = 'Unicasting'",
                input2: "Y = 'unitTesting'",
                b2: 'Aký je najdlhší spoločný podreťazec týchto dvoch reťazcov?',
                strX: "X = 'U|ni|ca|s||**ting**|'",
                strY: "Y = 'u|ni|tTe|s||**ting**|'",
                b3: 'Môžeme vidieť, že reťazce majú viacero spoločných podreťazcov. Najdlhší z nich je **ting** a má dĺžku  **4** znaky.',
                b4: 'Jednoduchým riešením by bolo zobrať každý podreťazec z prvého reťazca a zisťiť, či sa tento podreťazec nachádza aj v druhom reťazci. V prvom reťazci bude **O(L1 ^ 2)** podreťazcov. Pri využití **Knuth-Morris-Prattovho** algoritmu na vyhľadávanie všetkých podreťazcov v druhom reťazci by časová zložitosť tohoto riešenia bola **O((L1 ^ 2) * L2)**.',
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
            title: 'Editačná vzdialenosť - teória',
            brief: {
                b1: 'Na vstupe sú dva reťazce, **X** s dĺžkou **L1** a **Y** s dĺžkou **L2**.  K dispozícii sú 3 operácie: **pridanie**, **odobratie** a **nahradenie** znaku. Pomocou týchto operácií je treba upraviť prvý reťazec **X** tak, aby sa rovnal druhému reťazcu **Y**. Počet operácií musí byť čo najnižší. Ktoré operácie je treba vykonať?',
                input1: "X = 'AdRemovee'",
                input2: "Y = 'AddRemove'",
                b2: 'Ktoré operácie treba vykonať nad reťazcom X aby sa reťazce rovnali?',
                strX: "X = 'Ad|**+**|Remove|**-**|e'",
                strY: "Y = 'AddRemove'",
                b3: 'Do reťazca X je treba **pridať** znak d a **odstrániť** znak e',
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
                dpTime: '**Časová zložitosť** je polynomická - vypĺňanie tabuľky **L1 * L2**.',
                dpSpace: '**Priestorová zložitosť** je súčet dĺžok reťazcov + veľkosť tabuľky **L1 * L2**.',
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
        tree: 'Tree',
        theory: {
            title: 'Optimálny binárny vyhľadávací strom - teória',
            brief: {
                b1: 'Na vstupe je pole vyhľadávacích kľúčov **K** = { k1, k2, k3, ..., kN)**. Pre zjednodušenie si počet všetkých kľúčov označíme ako **N**. Druhé pole na vstupe obsahuje počet vyhľadaní jednotlivých kľúčov z prvého poľa **F** = { f1, f2, f3, ..., fN)**.. Index kľúča v prvom poli sa rovná indexu v druhom poli. Je treba vytvoriť binárny vyhľadávací strom, ktorý bude obsahovať všetky kľúče. Súčet cien všetkých vyhľadaní musí byť čo najnižší.',
                b2: 'Aká bude cena stromu a ako bude strom vyzerať?',
                strX: 'Ad|**+**|Remove|**-**|e',
                strY: 'AddRemove',
                b3: 'Do reťazca X je treba **pridať** znak d a **odstrániť** znak e',
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
                dpTime: '**Časová zložitosť** je vypĺňanie tabuľky **N ^ 3**, keďže v algoritme sú 3 vnorené cykly.',
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
            keysExample: '1, 2, 3, 4',
            freqsExample: '2, 4, 6, 8',
        },
        stats: {
            title: 'Optimálny binárny vyhľadávací strom - štatistiky',
            brief: 'Zadajte pole počtu vyhľadávaní jednotlivých kľúčov (pole vyhľadávacích kľučov nie je potreba).',
        }
    }
};
