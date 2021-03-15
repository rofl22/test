//стрелочки на слайдере
	img_down.onclick = function() { 
                    var change = document.getElementById("img");
                    var changeimg1 = document.getElementById("slider_img11")
                    var changeimg2 = document.getElementById("slider_img22")
                    var changeimg3 = document.getElementById("slider_img33")
                    var changeimg4 = document.getElementById("slider_img44")
                    var changeimg5 = document.getElementById("slider_img55")
                    
                    switch (change.src) {
  			
  						case (changeimg1.src):
  							change.src = changeimg5.src;
						    console.log('1');
						    break;
						case (changeimg2.src):
							change.src = changeimg1.src;
						    console.log('2');
						    break;
						case (changeimg3.src):
							change.src = changeimg2.src;
						    console.log('3');
						    break;
						case (changeimg4.src):
							change.src = changeimg3.src;
						    console.log('4');
						    break;
						case (changeimg5.src):
							change.src = changeimg4.src;
						    console.log('5');
						    break;	  
					}
}










//стрелочки на слайдере
	img_up.onclick = function() { 
                    var change = document.getElementById("img");
                    var changeimg1 = document.getElementById("slider_img11")
                    var changeimg2 = document.getElementById("slider_img22")
                    var changeimg3 = document.getElementById("slider_img33")
                    var changeimg4 = document.getElementById("slider_img44")
                    var changeimg5 = document.getElementById("slider_img55")
                    
                    switch (change.src) {
  			
  						case (changeimg1.src):
  							change.src = changeimg2.src;
						    console.log('1');
						    break;
						case (changeimg2.src):
							change.src = changeimg3.src;
						    console.log('2');
						    break;
						case (changeimg3.src):
							change.src = changeimg4.src;
						    console.log('3');
						    break;
						case (changeimg4.src):
							change.src = changeimg5.src;
						    console.log('4');
						    break;
						case (changeimg5.src):
							change.src = changeimg1.src;
						    console.log('5');
						    break;	  
					}
}














//переключение цветов слайдера
	let numberButton = 1;
	buttonG.onclick = function() { 
                    var change = document.getElementById("img");
                    
                    if (change.src != "img/slider1.1.png")
                    {
                        change.src = "img/slider1.1.png";
                        slider_img11.src = 'img/slider1.1.png';
                        slider_img22.src = 'img/slider1.3.png';
                        slider_img33.src = 'img/slider1.4.png';
                        slider_img44.src = 'img/slider1.5.png';
                        slider_img55.src = 'img/slider1.6.png';
                        numberButton = 1;
                        console.log(numberButton);
                    }
}

	buttonY.onclick = function() { 
                    var change = document.getElementById("img");
                    
                    if (change.src != "img/2.1.jpg")
                    {
                        change.src = "img/2.1.jpg";
                        slider_img11.src = 'img/2.1.jpg';
                        slider_img22.src = 'img/2.2.jpg';
                        slider_img33.src = 'img/2.3.jpg';
                        slider_img44.src = 'img/2.4.jpg';
                        slider_img55.src = 'img/2.5.jpg';
                        numberButton = 2;
                        console.log(numberButton);
                    }
}

	buttonR.onclick = function() { 
                    var change = document.getElementById("img");
                    
                    if (change.src != "img/3.1.jpg")
                    {
                        change.src = "img/3.1.jpg";
                        slider_img11.src = 'img/3.1.jpg';
                        slider_img22.src = 'img/3.2.jpg';
                        slider_img33.src = 'img/3.3.jpg';
                        slider_img44.src = 'img/3.4.jpg';
                        slider_img55.src = 'img/3.5.jpg';
                        numberButton = 3;
                        console.log(numberButton);
                    }
}

	buttonB.onclick = function() { 
                    var change = document.getElementById("img");
                    
                    if (change.src != "img/4.1.jpg")
                    {
                        change.src = "img/4.1.jpg";
                        slider_img11.src = 'img/4.1.jpg';
                        slider_img22.src = 'img/4.2.jpg';
                        slider_img33.src = 'img/4.3.jpg';
                        slider_img44.src = 'img/4.4.jpg';
                        slider_img55.src = 'img/4.5.jpg';
                        numberButton = 4;
                        console.log(numberButton);
                    }
}

	//кнопки переключиения картинок
	slider_img1.onclick = function() { 
                    var change = document.getElementById("img");
                    var change1 = document.getElementById("slider_img11");
                    
                    if (change.src != change1.src)
                    {
                        change.src = change1.src;
                        
                        console.log('changes');
                    }
}

	slider_img2.onclick = function() { 
                    var change = document.getElementById("img");
                    var change1 = document.getElementById("slider_img22");
                    
                    if (change.src != change1.src)
                    {
                        change.src = change1.src;
                        
                        console.log('changes');
                    }
}

	slider_img3.onclick = function() { 
                    var change = document.getElementById("img");
                    var change1 = document.getElementById("slider_img33");
                    
                    if (change.src != change1.src)
                    {
                        change.src = change1.src;
                        
                        console.log('changes');
                    }
}

	slider_img4.onclick = function() { 
                    var change = document.getElementById("img");
                    var change1 = document.getElementById("slider_img44");
                    
                    if (change.src != change1.src)
                    {
                        change.src = change1.src;
                        
                        console.log('changes');
                    }
}

	slider_img5.onclick = function() { 
                    var change = document.getElementById("img");
                    var change1 = document.getElementById("slider_img55");
                    
                    if (change.src != change1.src)
                    {
                        change.src = change1.src;
                        
                        console.log('changes');
                    }
}
