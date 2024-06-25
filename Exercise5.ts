class Calculator{
    private num1:number;
    private num2:number;

    constructor( )
    {
        this.num1= 0;;
        this.num2= 0;
    }

    /**
     * add
     */
    public addition(inum1:number , inum2:number ){ 
        this.num1 = inum1;
        this.num2 = inum2;    
        console.log(this.num1 + this.num2);
    } 

    public subtraction(inum1:number , inum2:number ){

        this.num1 = inum1;
        this.num2 = inum2; 

        console.log(this.num2 - this.num1);
    } 

    
    public multiplication(inum1:number , inum2:number ){
        this.num1 = inum1;
        this.num2 = inum2; 

        console.log(this.num2 * this.num1);
    } 

    public division(inum1:number , inum2:number ){
        this.num1 = inum1;
        this.num2 = inum2; 

        if(this.num2 !== 0 )
            {
                console.log(this.num1 / this.num2);
            }
            else{
                console.log('you can not divide by zero')
            }
        
    }

}


let cal = new Calculator();

cal.addition(1,1);
cal.division(2,2);