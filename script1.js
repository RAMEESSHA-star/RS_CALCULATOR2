function buttonclick(val)
{
    
    document.getElementById("inp").value=document.getElementById("inp").value+val
}


function clo(){
    document.getElementById("inp").value=" "

}
function equa(){
    let num2=inp.value
    let res=eval(num2)
    inp.value=res
}

