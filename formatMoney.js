function formatMoney(amount) {
    const suffixes = ['', 'K', 'M', 'B', 'T', 'Q', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'Un'];
    if(amount.toString()=="Infinity"){return"Infinity"+suffixes.slice(-1);}
    else if(isNaN(amount)){return"Unvalid amount."}
    let stramount = BigInt(amount).toLocaleString("fullwide",{useGrouping:false});
    let where = (stramount.length) % 3;
    where += (!where) * 3;
    stramount = parseInt(parseFloat(stramount.slice(0, where) + '.'.repeat(!(where == stramount.length)) + stramount.slice(where)) * 100) / 100 + suffixes[parseInt((stramount.length - 1) / 3)];
    return stramount;
}
// 1000, celota 4, /3 je 1. doda na [1], 1.000
// 10000, celota 5, /3 je 1. doda na 1, 1.

// 1000, celota po 1.st 3 /3 je 1. doda [1]
// 10000, celota po 1. st 4, /3 je 1, %3 je 1, doda na [2] (/3+%3)
// 100000, celota po 1.st 5, /3 je 1, %3 je 2, doda na [3]
// 1000000, celota po 1.st 6, /3 je 2, %3 je 0, doda na [1] /3 je suffix, %3 je polozaj

// 100000, celota je 6, /3 je 2 (M), %3 je 0, doda na [0]
// 100, celota po 1.st je 2, /3 je 0, %3 je 2, doda na [2] %3==0
