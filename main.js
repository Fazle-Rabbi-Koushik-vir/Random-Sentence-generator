    var nouns,verbs;



    nouns = [
     
        'The King',
        'The man',
        'The teacher',
        'The employee',
        'The animal',
        'The bus',
        'A chair',
        'Chocolate'
]

    verbs = [
  
        'likes',
        'hates',
        'goes',
        'runs',
        'enjoys',
        'tickles',
        'follows',
        'cant find'
]

    function randGen() {
            
            return Math.floor(Math.random() * 2);
            
        }
    
    function sentence(){
            var rand1 = Math.floor(Math.random() * 8);
            var rand2 = Math.floor(Math.random() * 8);
            var rand3 = Math.floor(Math.random() * 8);
	    

	        var content = nouns[rand1]+" "+verbs[rand2]+' '+nouns[rand3]+'.'

	    document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
            };
            sentence();
