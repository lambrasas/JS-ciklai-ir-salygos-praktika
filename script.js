// // spauzdina nuo 1 iki 5
// for(i=1; i<=5;i++){
//     console.log(i)
// }
// //susumuoja skaicius nuo 1 iki 5
// let p = 1;
// let sum = 0;
// while(p<=5){
//     sum = sum + p;
//     p++;
// }
// console.log(sum)

// //parodo lyginius skaicius
// for(let i=1; i<=10;i++ ){
//     if(i%2==0 ){
//         console.log(i)
//     }
// }
// //atvirksciai parodo
// for(let i=5;i>=1;i--){
// console.log("Atvirksciai " +i)
// }
// //ciklas kuris skaiciuoja kiek skaiciu dalinasi is 3 1-20 arrejuje

// function three(nums){
//     for(let i=0; i<nums.length;i++){
//         if(nums[i]%3===0){
//             console.log(nums[i])
//         }

//     }
// }
// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// three(nums)

// let numbers =[1,2,3,4,5,6,7,8,9,100,44]
// function findMax(numbers){
//     let max = numbers[0];
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]>max){
//             max=numbers[i]
//         }
        
//     } 
//     return max
// }
// let maxNumber=findMax(numbers);
// console.log("Didziausias skaicius: "+maxNumber);

// function printDivisors(num){
//     for(let i=1; i<=num; i++){
//         if(num%i===0){
//             console.log(i)
//         }
//     }
// }
// console.log("Skaiciaus 15 dalikliai: ")
// printDivisors(15)


// let givenArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function oddNums(givenArray){
//     let oddNumbers =[];
//     for(let i=;i<givenArray.length;i++){
//         if(givenArray[i] % 2 !== 0){
//             oddNumbers.push(givenArray[i])
//         }
//     }
//     return oddNumbers
// }
// let result = oddNums(givenArray)
// console.log(result)


// function primeNumbers(){
//     let primes = []
//     for(let i=2; i<=20;i++)
//     {
//         let isPrime= true
//         for(let j=2; j<i; j++)
//         {
//             if(i%j==0)
//             {
//                 isPrime=false
//                 break
//             }
            
//         }
//         console.log(i +" "+ isPrime )
//         if(isPrime){
//             primes.push(i)
            
//         }
//     }
//     console.log(primes)
// }
// primeNumbers()

// f0=0
// f1=1
// f2 = (2-1)+(2-2)
// 0 1  2    3    4    5   6   7
// 0 1 0+1 1+1  1+2   2+3  3+5 5+8

function fibonaci(number)
{
    let fibonaciSequence=[0,1]
    for(let i=0; i<number-2; i++)
    {
        let nextNumber = fibonaciSequence[i] + fibonaciSequence[i+1]
        fibonaciSequence.push(nextNumber);
    }
    
    console.log(fibonaciSequence)
}

fibonaci(10)

sum=0;
for(i=0;i<40;i=i+2){
    sum=sum+1
    if(i==30){
        sum--
    }
}
console.log(sum)

