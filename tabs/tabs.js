let articles = document.querySelectorAll(".content");






function vision(){
    let x = document.getElementById('vision');
    articles.forEach(function (article) {
        article.classList.remove("active");
        
    });
    x.classList.add("active");
    };

    function goals(){
        let x = document.getElementById('goals');
        articles.forEach(function (article) {
            article.classList.remove("active");
            
        });
        x.classList.add("active");
        };
    
        function hisstory(){
            let x = document.getElementById('history');
            articles.forEach(function (article) {
                article.classList.remove("active");
                
            });
            x.classList.add("active");
            };
        