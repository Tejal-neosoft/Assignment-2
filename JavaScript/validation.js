function valid(){
    var n = document.getElementById('name').value;
   
   
    var m = document.getElementById('msg');
  
  
    var reg = /^[a-zA-Z]{2,100}$/;
   
   
    if(!reg.test(n)){
        m.innerHTML ="Please enter name";
        m.className = "alert alert-warning";
        return false;
    }
    else 
    
    {
        m.innerHTML ="<b>Suceess</b>";
        m.className = "alert alert-success";
        return true;
       
    }
}
function valid1(){
    var mail = document.getElementById('email').value;
    var m1 = document.getElementById('msg1');
    var regEmail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,6})$/;
    if(!regEmail.test(mail)){
        m1.innerHTML ="Please enter correct E-mail";
        m1.className = "alert alert-warning";
        return false;
    }
    else{
        m1.innerHTML ="<b>Suceess</b>";
        m1.className = "alert alert-success";
        return true;
    }
}
function valid2(){
    var mob = document.getElementById('phn').value;
    var m2 = document.getElementById('msg2');
    var regMob = /^[7-9][0-9]{9}$/;
    if(!regMob.test(mob)){
        m2.innerHTML ="Please enter correct mobile number";
        m2.className = "alert alert-warning";
        return false;
    }
    else{
        m2.innerHTML ="<b>Suceess</b>";
        m2.className = "alert alert-success";
        return true;
    }

}
function validation(){
    var condn = valid();
    var condn2 = valid2();
    var condn1 = valid1(); 

    return(condn && condn1 && condn2);
}