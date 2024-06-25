function sum(num1:number , num2:number):number{
    return num1 + num2;
}

function pi():number{
    const piValue = 3.1415926535;
    return piValue;
}

function returnTrue(word:string , optional?:boolean):string{
 
        if( optional)
            {
                return word.toUpperCase();
            }
            else{
                return word.toLowerCase();
            }
}