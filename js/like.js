




let like = 2;
let boo = true;
    popub_like_b1.onclick = function() { 
                           
        popup_tovar1.className = "popup-tovarNone";
        like = like-1;
        like_p.innerHTML = like; 
                                 
}
popub_like_b2.onclick = function() { 
                    
                   
        popup_tovar2.className = "popup-tovarNone";
        like = like-1;              
        like_p.innerHTML = like;  
               
}

popub_like_b3.onclick = function() { 
                    
                   
        popup_tovar3.className = "popup-tovarNone";
        like = like-1;              
        like_p.innerHTML = like;  
        
        boo = true;      
}



add_like.onclick = function() {
    if (boo == true) {
        popup_tovar3.className = "popup-tovar";
        like = like+1;
        like_p.innerHTML = like;
        boo = false;
    }
}
