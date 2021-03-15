


let korz1 = 1;
let korz2 = 1;
let korz3 = 1;
let korz_count = 2;

let boo1 = true;
    count_korzB1_down.onclick = function() { 
        if (korz1 == 1) {
            popup_korz_tovar1.className = "popup-korz-tovarNone";
            korz_count = korz_count-1;
            korz_p.innerHTML = korz_count;
        }
        korz1 = korz1-1;
        count_korz1.innerHTML = korz1;                             
}

    korz = count_korz2.innerHTML;
    count_korzB2_down.onclick = function() { 
        if (korz2 == 1) {
            popup_korz_tovar2.className = "popup-korz-tovarNone";
            korz_count = korz_count-1;
            korz_p.innerHTML = korz_count;
        }
        korz2 = korz2-1;
        count_korz2.innerHTML = korz2;                              
}

    korz = count_korz3.innerHTML;
    count_korzB3_down.onclick = function() { 
        if (korz3 == 1) {
            popup_korz_tovar3.className = "popup-korz-tovarNone";
            korz_count = korz_count-1;
            boo1 = true;
            korz_p.innerHTML = korz_count;
        }
        korz3 = korz3-1;
        count_korz3.innerHTML = korz3;                                
}




  count_korzB1_up.onclick = function() { 
        
        korz1 = korz1+1;
        count_korz1.innerHTML = korz1;                             
}

    
    count_korzB2_up.onclick = function() { 
        
        korz2 = korz2+1;
        count_korz2.innerHTML = korz2;                              
}

    
    count_korzB3_up.onclick = function() { 
        
        korz3 = korz3+1;
        count_korz3.innerHTML = korz3;                                
}




 popub_korz_b1_del.onclick = function() {
        popup_korz_tovar1.className = "popup-korz-tovarNone";
        korz1 = 0;
        korz_count = korz_count - 1;
        korz_p.innerHTML = korz_count;
    }
    popub_korz_b2_del.onclick = function() {
        popup_korz_tovar2.className = "popup-korz-tovarNone";
        korz2 = 0;
        korz_count = korz_count - 1;
        korz_p.innerHTML = korz_count;
    }
    popub_korz_b3_del.onclick = function() {
        popup_korz_tovar3.className = "popup-korz-tovarNone";
        korz3 = 0;
        boo1 = true;
        korz_count = korz_count - 1;
        korz_p.innerHTML = korz_count;
    }


popup_tovar_del_all.onclick = function () {
        popup_korz_tovar1.className = "popup-korz-tovarNone";
        popup_korz_tovar2.className = "popup-korz-tovarNone";
        popup_korz_tovar3.className = "popup-korz-tovarNone";
        korz1 = 0;
        korz2 = 0;
        korz3 = 0;
        korz_count = 0;
        boo1 = true;
        korz_p.innerHTML = korz_count;

    }


    add_korz.onclick = function() {
        if (boo1 == true) {
            popup_korz_tovar3.className = "popup-korz-tovar";
            korz_count = korz_count+1;
            console.log(typeof(korz));
            korz_p.innerHTML = korz_count;
            boo1 = false;
        }
    }






/*

    popub_korz_b1_del.onclick = function() {
        popup_korz_tovar1.className = "popup-korz-tovarNone";
    }
    popub_korz_b2_del.onclick = function() {
        popup_korz_tovar2.className = "popup-korz-tovarNone";
    }
    popub_korz_b3_del.onclick = function() {
        popup_korz_tovar3.className = "popup-korz-tovarNone";
    }
    popup_tovar_del_all.onclick = function () {
        popup_korz_tovar1.className = "popup-korz-tovarNone";
        popup_korz_tovar2.className = "popup-korz-tovarNone";
        popup_korz_tovar3.className = "popup-korz-tovarNone";
    }
    let korz1 = 2;
    add_korz.onclick = function() {
        if (boo1 == true) {
            popup_korz_tovar3.className = "popup-korz-tovar3";
            korz1 = korz1+1;
            console.log(typeof(korz));
            korz_p.innerHTML = korz1;
            boo1 = false;
        }
    }












     count_korzB1_up.onclick = function() { 
        
        korz = korz+1;
        count_korz1.innerHTML = korz;                             
}

    korz = count_korz2.innerHTML;
    count_korzB2_up.onclick = function() { 
        
        korz = korz+1;
        count_korz2.innerHTML = korz;                              
}

    korz = count_korz3.innerHTML;
    count_korzB3_up.onclick = function() { 
        
        korz = korz+1;
        count_korz3.innerHTML = korz;                                
}
*/