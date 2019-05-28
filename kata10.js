


let calculateChange = function(total, cash) {
    if(cash < total)
    {
        return "this is invalid";
    }

    var change = (cash - total);
    console.log(change);
    var twentyDollars = 0;
    var tenDollars = 0;
    var fiveDollars= 0;
    var twoDollars= 0;
    var oneDollar= 0;
    var quarter= 0;
    var dime = 0;
    var nickel= 0;
    var penny = 0;

    while(change >= 2000)
    {
        twentyDollars ++;
        change -= 2000;

    }
    while(change >= 1000)
    {
        tenDollars++;
        change -= 1000;
    }
    while(change >= 500)
    {
        fiveDollars++;
        change -= 500;
    }
    while(change >= 200)
    {
        twoDollars++;
        change -= 200;
    }
    while(change >= 100)
    {
        oneDollar++;
        change -= 100;
    }
    while(change >= 25)
    {
        quarter++;
        change -= 25;
    }
    while(change >= 10)
    {
        dime++;
        change -= 10;
    }
    while(change >= 5)
    {
        nickel++;
        change -= 5;
    }
    while(change >= 1)
    {
        penny++;
        change -= 1;
    }





    return (twentyDollars === 0? "": ("twentyDollars: " +  twentyDollars) + ", ") +(tenDollars === 0?  "": ("tenDollars: " +tenDollars)+ ", ") +(fiveDollars === 0?  "": ("fiveDollars: " +fiveDollars)+ ", ") +(twoDollars === 0?  "": ("twoDollars: " +twoDollars)
        + ", ") +(oneDollar === 0?  "": ("oneDollar: " +oneDollar)+ ", ") +(quarter === 0?  "": ("quarter: " +quarter)+ ", ") +(dime === 0?  "": ("dime: " +dime)+ ", ") +(nickel === 0?  "": ("nickel: " +nickel)
        + ", ") +(penny === 0?  "": "penny: " +penny);
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));