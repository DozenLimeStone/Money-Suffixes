//MADE BY DOZENLIMESTONE ©: https://github.com/DozenLimeStone/Money-Suffixes
//FEEL FREE TO MODIFY FUNCTIONS HOWEVER YOU LIKE
function unformatMoney(stramount) {
    stramount=stramount.toLocaleString("fullwide",{useGrouping:false});
    if(isNaN(parseFloat(stramount))){return"Unvalid amount, source: unformatMoney. Can happen if someone puts a letter in front, or when a new bug appeared."; }
    const suffixes=['','k','m','b','t','q','qi','sx','sp','oc','no','de','un','do'];
    const inputtedsuffix=stramount.toLowerCase().replace(/[0-9.]/g,"");
    const inputtedsuffixposition=suffixes.indexOf(inputtedsuffix);
    const suffixposition=inputtedsuffixposition==-1?0:inputtedsuffixposition;
    const suffixremovedfromstramount=stramount.replace(inputtedsuffix,"");
    const separatedbydot=suffixremovedfromstramount.split(".");
    const afterdotlen=separatedbydot.length>1?separatedbydot[1].length:0;
    const numberofzeros=suffixposition*3;
    const stramountcleaned=suffixremovedfromstramount.slice(0,afterdotlen>numberofzeros?numberofzeros-afterdotlen:suffixremovedfromstramount.length);
    const actualzeros="0".repeat(Math.max(0,numberofzeros-afterdotlen));
    return stramountcleaned.replace(".","")+actualzeros;
}
