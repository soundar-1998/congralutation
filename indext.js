function add(){
let a1 = Number(document.getElementById('t1').value)
let a2=Number(document.getElementById('t2').value)
let result=a1+a2;
alert(result);
document.getElementById('t3').value=result;
}

function subtraction(){
let a1=Number(document.getElementById('t1').value)
let a2=Number(document.getElementById('t2').value)
let result=a1-a2;
alert(result);
document.getElementById('t3').value=result;


}
function multiple(){
    let a1=Number(document.getElementById('t1').value)
let a2=Number(document.getElementById('t2').value)
let result=a1*a2;
alert(result);
document.getElementById('t3').value=result;

}function division(){
    let a1=Number(document.getElementById('t1').value)
let a2=Number(document.getElementById('t2').value)
let result=a1/a2;
alert(result);
document.getElementById('t3').value=result;

}function percentage(){
    let a1=Number(document.getElementById('t1').value)
    let a2=Number(document.getElementById('t2').value)
    let result=a1%a2;
    alert(result);
    document.getElementById('t3').value=result;
    
    
    }
    