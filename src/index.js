let firstNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let secondNum = ['null', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let thirdNum = ['null', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
module.exports =function toReadable(number) {
    if (number===0) return firstNum[0]
    if(number%100===0) return (firstNum[number/100]+ ' hundred ').trim()

    let strNum = String(number);
    if (strNum.length === 3) {
        return converNum(strNum[0],true)+converNum(strNum.substr(1,2))
    }

    if (strNum.length === 1){
        return firstNum[Number(strNum)]
    }
    return converNum(strNum)

}

function converNum(num, pos=false) {
    if (pos) {
        return firstNum[Number(num)] + ' hundred ';
    }

    if (Number(num) >= 11 && Number(num) <= 19) {
        return secondNum[Number(num[1])]
    }
    if (Number(num) % 10 === 0) {
        return thirdNum[Number(num/10)]
    }
    if (Number(num[0])=== 0) {
        return firstNum[Number(num)]
    }
    let num1 = num[0]
    let num2 = num[1]
    return thirdNum[Number(num1)] + ' ' + firstNum[Number(num2)]


}
