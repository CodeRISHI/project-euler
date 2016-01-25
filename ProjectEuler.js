//Project Euler - Problems

//**********CALLBACKS etc.**********

      //commas every 3 numbers
      function commaSeparateNumber(val){
         while (/(\d+)(\d{3})/.test(val.toString())){
           val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
         }
         return val;
      };

      //Prime Checker
      var isPrime = function (num) {
        for(var i = 2; i < Math.sqrt(num); i++) {
          if(num % i === 0) {
            return false;
          }
        }
        return true;
      }; //end function

//*********************************

//**********Multiples of 3 and 5**********
      var sumOfMult = function (num) {
        var sum = 0;
        var i = 1;
        var three, five, both;

        while (i < num) {
          if (i % 3 === 0 && i % 5 === 0) {
            both = i;
            sum += both;
            i++;
          } else if (i % 3 === 0) {
              three = i;
              sum += three;
              i++;
            } else if (i % 5 === 0) {
                five = i;
                sum += five;
                i++;
              } else {
                  i++;
                }
        }        
        return sum;
      };

      sumOfMult(100);

//*******************************************

//**********Even Fibonacci numbers**********

      var fibonacci = function (n) {
        if (n <= 2) {
          return 1;
        } else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2); //recursion
        }
      }; 

      var evenFibonacci = function (num) {
        var sum = 0;
        var evenArr = [];
        var tempArr = [];
        var k = 2;

        while (fibonacci(k) < num) {
          tempArr.push(fibonacci(k));
          k++;
        }

        _.each(tempArr, function (elem, index) {
          (tempArr[index] % 2 === 0) ? evenArr.push(tempArr[index]) : null;
        });

        _.each(evenArr, function (el, ind) {
          sum += evenArr[ind];
        });
        return sum;
      };

      evenFibonacci(4000000);

//*******************************************

//**********Largest Prime Factor**********

      var primeFactor = function (num) {
        var result = 0;
        var temp = 0;
        var primeArr = [];

        for (var i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            temp = parseInt(i);
            if (isPrime(temp)) {
              primeArr.push(temp);
            }
          }
        }

        //sort
        primeArr.sort(function(a,b) {
          return b - a;
        });

        result = parseInt(primeArr[0]);        
        return result;
      }; 

      primeFactor(13195);
      primeFactor(600851475143);

//*******************************************

//**********Largest Palindrome Product**********

      //isPalindrome
      var palindrome = function (str) {
        var strArr = str.split('');
        var palinArr = str.split('').reverse();

        for (var i = 0; i < palinArr.length; i++) {
          if (palinArr[i] === strArr[i]) {
          } else {
              return false;
            }
        }
        return true;
      };

      var palindromeProduct = function (num1,num2) {
        var product = 0;
        var resultArr = [];
        var ans = null;
        
        var ind1 = num1;
        var ind2 = num2;

        for (var i = ind1; i <= ind2; i++) {
          for (var j = ind1; j <= ind2; j++) {
            product = (i * j);
            if (palindrome(product.toString())) {
              resultArr.push(product);
            }
          }
        }

        //sort
        resultArr.sort(function(a,b) {
          return b - a;
        });

        ans = parseInt(resultArr[0]);        
        return ans;
      };

      palindromeProduct(91,99);

//*******************************************

//**********Smallest Multiple**********

      var smallestMultiple = function (num1, num2) {
        var result = 0;
        var count = 0;
        var tempNum = num2;

        while (count !== num2) {
          tempNum++;
          count = 0; //reinitialize count
          for (var j = num1; j <= num2; j++) {
            if (tempNum % j === 0) {
              count++;
            } else {
                break;
              }
          }
        }

        result = commaSeparateNumber(tempNum);
        return result;
      };

      smallestMultiple(1,10);
      smallestMultiple(1,20);

//*******************************************

//**********Sum Square Difference**********

      var sumSquareDiff = function (num) {
        var sumsq = 0;
        var sqsum = 0;
        var sum = 0;
        var diff = 0;
        var result = 0;

        for (var i = 1; i <= num; i++) {
          sumsq += Math.pow(i, 2);
          sum += i;
        }
        sqsum = Math.pow(sum, 2);

        diff = parseInt(sqsum - sumsq);
        result = commaSeparateNumber(diff);        
        return result;
      };

      sumSquareDiff(10);
      sumSquareDiff(100);

//*******************************************

//**********10001st Prime**********

      var isPrime2 = function (num) {
        for(var i = 2; i < num; i++) {
          if(num % i === 0) {
            return false;
          }
        }
        return true;
      };

      var ttoPrime = function (index) {
        var count = 0;
        var num = 0;
        var result = 0;

        while (count <= index) {
          num++; //increment num
          if (isPrime2(num)) {
            count++;        
          }
        }        
        result = commaSeparateNumber(num);        
        return result;
      };

      ttoPrime(6);
      ttoPrime(10001);

//*******************************************
      

//**********Largest Product**********

      var largestProd = function () {
        var num = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';

        // var num = '2358257654987321';
        var numArr = num.split('');        
        var newArr = [];
        var result = 0;

        var product = 1;

        for (var i = 0; i < numArr.length - 12; i++) {
          product = numArr[i]; //first no. is 'i'          
          for (var j = i+1; j <= i+12; j++) {
            product *= numArr[j];            
          }
          newArr.push(product);
        }        

        //sort
        newArr.sort(function(a,b) {
          return b - a;
        });

        result = commaSeparateNumber(newArr[0]);        
        return result;
      };

      largestProd();

//*******************************************

//**********Special Pythagorean Triplet**********

      var pythagoTrip = function () {
        //Triplet
        var a,b,c;
        var result = [];

        for (var i = 0; i < 500; i++) {
          a = i;
          for (var j = i+1; j <= 500; j++) {
            b = j;
            c = 1000 - (a + b);
            if (Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2) === 0) {
              result = [a, b, c];         
            }
          }
        }        
        return result;
      };

      pythagoTrip();

//*******************************************

//**********Sum of Primes**********

      var primeSum = function (num) {
        var primeSumResult = 0;
        var sum = 0;

        var primeArr = [];

        //primes
        for (var i = 2; i < num; i++) {
          if (isPrime(i)) {
            primeArr.push(parseInt(i));
            sum += i;
          }
        }        
        primeSumResult = commaSeparateNumber(sum);        
        return primeSumResult;
      };

      primeSum(10);
      primeSum(2000000);

//*******************************************

//**********Triangular Number**********

      var triangularNum = function (input) {
        var ans = 0;
        var count = 0;
        var divisor = [];
        var num = 1;
        var sum = 0;

        while (count < input) {
          sum += num;          
          num++;
          count = 0; 
          divisor = [];
          for (var i = 1; i <= sum; i++) {
            if (sum % i === 0) {
              divisor.push(i);
              count++;              
            }
          }          
        }        
        ans = commaSeparateNumber(sum);        
        return ans;
      };

      triangularNum(100);

//*******************************************

//**********Large Sum**********

      var numArr = [
        37107287533902102798797998220837590246510135740250,
        46376937677490009712648124896970078050417018260538,
        74324986199524741059474233309513058123726617309629,
        91942213363574161572522430563301811072406154908250,
        23067588207539346171171980310421047513778063246676,
        89261670696623633820136378418383684178734361726757,
        28112879812849979408065481931592621691275889832738,
        44274228917432520321923589422876796487670272189318,
        47451445736001306439091167216856844588711603153276,
        70386486105843025439939619828917593665686757934951,
        62176457141856560629502157223196586755079324193331,
        64906352462741904929101432445813822663347944758178,
        92575867718337217661963751590579239728245598838407,
        58203565325359399008402633568948830189458628227828,
        80181199384826282014278194139940567587151170094390,
        35398664372827112653829987240784473053190104293586,
        86515506006295864861532075273371959191420517255829,
        71693888707715466499115593487603532921714970056938,
        54370070576826684624621495650076471787294438377604,
        53282654108756828443191190634694037855217779295145,
        36123272525000296071075082563815656710885258350721,
        45876576172410976447339110607218265236877223636045,
        17423706905851860660448207621209813287860733969412,
        81142660418086830619328460811191061556940512689692,
        51934325451728388641918047049293215058642563049483,
        62467221648435076201727918039944693004732956340691,
        15732444386908125794514089057706229429197107928209,
        55037687525678773091862540744969844508330393682126,
        18336384825330154686196124348767681297534375946515,
        80386287592878490201521685554828717201219257766954,
        78182833757993103614740356856449095527097864797581,
        16726320100436897842553539920931837441497806860984,
        48403098129077791799088218795327364475675590848030,
        87086987551392711854517078544161852424320693150332,
        59959406895756536782107074926966537676326235447210,
        69793950679652694742597709739166693763042633987085,
        41052684708299085211399427365734116182760315001271,
        65378607361501080857009149939512557028198746004375,
        35829035317434717326932123578154982629742552737307,
        94953759765105305946966067683156574377167401875275,
        88902802571733229619176668713819931811048770190271,
        25267680276078003013678680992525463401061632866526,
        36270218540497705585629946580636237993140746255962,
        24074486908231174977792365466257246923322810917141,
        91430288197103288597806669760892938638285025333403,
        34413065578016127815921815005561868836468420090470,
        23053081172816430487623791969842487255036638784583,
        11487696932154902810424020138335124462181441773470,
        63783299490636259666498587618221225225512486764533,
        67720186971698544312419572409913959008952310058822,
        95548255300263520781532296796249481641953868218774,
        76085327132285723110424803456124867697064507995236,
        37774242535411291684276865538926205024910326572967,
        23701913275725675285653248258265463092207058596522,
        29798860272258331913126375147341994889534765745501,
        18495701454879288984856827726077713721403798879715,
        38298203783031473527721580348144513491373226651381,
        34829543829199918180278916522431027392251122869539,
        40957953066405232632538044100059654939159879593635,
        29746152185502371307642255121183693803580388584903,
        41698116222072977186158236678424689157993532961922,
        62467957194401269043877107275048102390895523597457,
        23189706772547915061505504953922979530901129967519,
        86188088225875314529584099251203829009407770775672,
        11306739708304724483816533873502340845647058077308,
        82959174767140363198008187129011875491310547126581,
        97623331044818386269515456334926366572897563400500,
        42846280183517070527831839425882145521227251250327,
        55121603546981200581762165212827652751691296897789,
        32238195734329339946437501907836945765883352399886,
        75506164965184775180738168837861091527357929701337,
        62177842752192623401942399639168044983993173312731,
        32924185707147349566916674687634660915035914677504,
        99518671430235219628894890102423325116913619626622,
        73267460800591547471830798392868535206946944540724,
        76841822524674417161514036427982273348055556214818,
        97142617910342598647204516893989422179826088076852,
        87783646182799346313767754307809363333018982642090,
        10848802521674670883215120185883543223812876952786,
        71329612474782464538636993009049310363619763878039,
        62184073572399794223406235393808339651327408011116,
        66627891981488087797941876876144230030984490851411,
        60661826293682836764744779239180335110989069790714,
        85786944089552990653640447425576083659976645795096,
        66024396409905389607120198219976047599490197230297,
        64913982680032973156037120041377903785566085089252,
        16730939319872750275468906903707539413042652315011,
        94809377245048795150954100921645863754710598436791,
        78639167021187492431995700641917969777599028300699,
        15368713711936614952811305876380278410754449733078,
        40789923115535562561142322423255033685442488917353,
        44889911501440648020369068063960672322193204149535,
        41503128880339536053299340368006977710650566631954,
        81234880673210146739058568557934581403627822703280,
        82616570773948327592232845941706525094512325230608,
        22918802058777319719839450180888072429661980811197,
        77158542502016545090413245809786882778948721859617,
        72107838435069186155435662884062257473692284509516,
        20849603980134001723930671666823555245252804609722,
        53503534226472524250874054075591789781264330331690
      ];

      var largeSum = function (digits) {
        var sum = 0;
        var resultSum = 0; //10-digits
        var ans = 0;
        var exp = 0;
        var expArr = [];

        for (var i = 0; i < numArr.length; i++) {
          sum += numArr[i];
        }

        resultSum = sum.toPrecision(digits);
        expArr = resultSum.toString().split(''); //splits all numbers scientific notation        
        exp = expArr[expArr.length - 2] + expArr[expArr.length - 1]; //just get last two digits of expArr -- exponent
        ans = commaSeparateNumber(parseInt(sum / Math.pow(10,((exp - (digits - 1))))));
        return ans;
      };

      largeSum(10);

//*******************************************

//**********Longest Collatz Sequence**********

      var collatz = function (num) {
        var tempNum = num;
        var count = 1;

        while (tempNum > 1) {
          if (tempNum % 2 === 0) {
            tempNum /= 2;
            count++;            
            collatz(tempNum); //recursive call
          } else if (tempNum % 2 !== 0) {
                tempNum = (3 * tempNum) + 1;
                count++;                
                collatz(tempNum); //recursive call
            } else if (tempNum <= 1) {
                return tempNum;
              }
        }
        return parseInt(tempNum), parseInt(count);
      };      

      var longestCollatz = function (maxNum) {
        var num = 2;
        var prevNum = num;
        var count = 1;
        var tempCount = 1;
        var tempNum = 0;

        //call collatz function
        for (var i = num; i <= maxNum; i++) {
          tempCount = collatz(i); //returns count

          if (tempCount > count) {
            count = tempCount;
            prevNum = parseInt(i);
          }
        }        
        return parseInt(prevNum), parseInt(count);
      };

      longestCollatz(20);

//*******************************************

//**********Power Digit Sum**********

      var powerDigitSum = function (exp) {
        var result = 0;
        var num = Math.pow(2, exp);
        var numArr = num.toString().split('');

        var sum = 0;

        for (var i = 0; i < numArr.length; i++) {
          sum += Number(numArr[i]);
        }

        result = commaSeparateNumber(parseInt(sum));
        return result;
      };

      powerDigitSum(10);

//*******************************************

//**********Number Letter Counts**********
      var NumLetterCount = function (str) {
        var newStr = str.split(', ').join('');        

        var ans = newStr.length;        
        return ans;
      };

      NumLetterCount('five, ten, fifteen');

//*************TO BE CONTINUED***************