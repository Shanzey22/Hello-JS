  
 m1=parseInt( prompt("Enter Marks of Subject1: "));
 m2=parseInt( prompt("Enter Marks of Subject2: "));
 m3=parseInt( prompt("Enter Marks of Subject3: "));
 m4=parseInt( prompt("Enter Marks of Subject4: "));
 m5=parseInt( prompt("Enter Marks of Subject5: "));

result=parseInt(m1+m2+m3+m4+m5);
avg = result/5;
 percentage=result/500*100;
 document.write("Marks of Subject1  :"+ "<b>" + m1 + "<b>" + "<br/>");
document.write("Marks of Subject2  :"+ "<b>" + m2 + "<b>" + "<br/>");
document.write("Marks of Subject3  :"+ "<b>" + m3 + "<b>" + "<br/>");
document.write("Marks of Subject4  :"+ "<b>" + m4 + "<b>" + "<br/>");
document.write("Marks of Subject5  :"+ "<b>" + m5 + "<b>" + "<br/>");
document.write("The Total is  :"+ "<b>" + result  +  "<b>" + "<br/>");
document.write("The Avg is  :"+ "<b>" + avg  +  "<b>" + "<br/>");

if(avg > 35)
{
    document.write("The Grade is  :"+ "<b>" + "Pass"  +  "<b>" + "<br/>" );

}
else
{
    document.write("The Grade is  :"+ "<b>" + "Fail"  +  "<b>" + "<br/>" );}

document.write("The Percentage is  :"+ "<b>" + percentage +  "<b>" + "<br/>");
