function compute()
{   
    //The variables principal, rate and years receives the data provided by the user
    
    var principal = document.getElementById("principal");    
    //This "if" forces the user to enter a positive amount
    if(principal.value<=0)
    {
        alert('Please enter a positive number');
        principal.focus();
        return false;
    }        
    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    //interest variable calculates the result required by the user
    var interest = principal.value * years * rate /100;

    //year variable converts the amount of years in the resulting calendar year
    var year = new Date().getFullYear()+parseInt(years);

    //This is the ouput that contains resulting values 
    result = document.getElementById("result").innerHTML="If you deposit <mark>"+principal.value+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
 
}
//Below function updates the slider with the percentage requested by user
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}