






tab2.onclick = function() { 

    tab1_img.src = 'img/radioOFF.webp';
    tab2_img.src = 'img/radioON.png';
    


    tab1_content.className = 'tabs-blockNONE';
    tab2_content.className = 'tabs-block';

}


tab1.onclick = function() { 

    tab1_img.src = 'img/radioON.png';
    tab2_img.src = 'img/radioOFF.webp';
    console.log(1);


    tab2_content.className = 'tabs-blockNONE';
    tab1_content.className = 'tabs-block';

}


tab_button1.onclick = function() { 
    tab_button_img1.src = 'img/radioON.png';
    tab_button_img2.src = 'img/radioOFF.webp';
}
tab_button2.onclick = function() { 
    tab_button_img2.src = 'img/radioON.png';
    tab_button_img1.src = 'img/radioOFF.webp';
}

tab_button11.onclick = function() { 
    tab_button_img11.src = 'img/radioON.png';
    tab_button_img22.src = 'img/radioOFF.webp';
}
tab_button22.onclick = function() { 
    tab_button_img22.src = 'img/radioON.png';
    tab_button_img11.src = 'img/radioOFF.webp';
}

