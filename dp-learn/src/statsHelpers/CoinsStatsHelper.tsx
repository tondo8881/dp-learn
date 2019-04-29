// Helper for passing methods parameters by reference
export interface ISimpleObjectParameter {
    value: number
}

export const recursiveCoins = (coins: number[], arrSize: number, value: number,  calls: ISimpleObjectParameter) => {
    ++calls.value;

    if (value === 0) {
        return 0;
    }

    let result = Number.MAX_VALUE;

    for (let i = 0; i < arrSize; i++) {
        if (coins[i] <= value) {
            const subResult = recursiveCoins(coins, arrSize, value - coins[i], calls);

            if (subResult !== Number.MAX_VALUE && subResult + 1 < result) {
                result = subResult + 1;
            }
        }
    }

    return result;
};

export const dpCoins = (coins: number[], arrSize: number, value: number, calls: ISimpleObjectParameter ) => {
    const table: number[] = [];
  
    table[0] = 0;
    calls.value = 0;

    for (let i = 1; i <= value; i++) {
        table[i] = Number.MAX_VALUE;
        for (let j = 0; j < arrSize; j++) {
            if (coins[j] <= i) {
                calls.value++;
                const subResult = table[i - coins[j]];
                if (subResult !== Number.MAX_VALUE && subResult + 1 < table[i]) {
                    table[i] = subResult + 1;
                }
            }
        }
    }

    return table[value];
};

export const recCoinsTime = (arrSize: number, value: number) => {
    return Math.pow(arrSize, value);
}

export const dpCoinsTime = (arrSize: number, value: number) => {
    return arrSize * value;
}

export const recCoinsSpace = (arrSize: number) => {
    return arrSize + 1;     // Store coins and given value
}

export const dpCoinsSpace = (arrSize: number) => {
    return arrSize + 1 + arrSize + 1;   // Store coins, given value, coins array for DP (size is coins number +1)
}

export const coinsExamples = [
    {
        coins: [1, 2],
        value: 2
    },
    {
        coins: [1,2,3,20],
        value: 20
    },
    {
        coins: [5,6,7,8,9,10,11,12,13,14],
        value: 15
    },
    {
        coins: [1,2,3,4,5,6,7,8,9,10],
        value: 15
    },
];