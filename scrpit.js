const dcm=document.getElementById('sch');
dcm=addEventListener('keyup',search);
function search(){
    var a=document.querySelectorAll('p');

    for( var i=0;i<a.length;i++){
        var val=document.getElementById('sch').value.toLowerCase();
        if(a[i].innerHTML.toLowerCase.IndexOf(val) != -1){
            a[i].style.display="block"
        }
        else{
            a[i].style.display="none"
        }
    }
}

