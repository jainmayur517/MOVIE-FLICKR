


var exp= require('express');
var app =exp();
var serve=require('express-static');
//app.use(serve(__dirname + '/public'));
var request=require('request');
app.set("view engine","ejs");


app.get("/",function(req,res){
  app.use(serve(__dirname + '/public'));
res.render("search");
})
app.get("/results",function(req,res){
    
var name=req.query.bm
request("https://api.themoviedb.org/3/search/movie?api_key=4d3d897644294d2ef0d6db5feff11716&query=" + name,function(error,response,body){

if(!error && response.statusCode==200){
var result=JSON.parse(body);
//console.log(result)
res.render("app", {data: result});
}
});
});

app.get("/results/:id",function(req,res){
    //console.log(req.params.id);
    var name=req.params.id;
    request("http://api.themoviedb.org/3/movie/"+name+"/casts?api_key=4d3d897644294d2ef0d6db5feff11716",function(error,response,body){
        var data = JSON.parse(body);
        //console.log(data)
        res.render("cast", {data:data})
        /*if(!error && response.statusCode==200){
            var data=JSON.parse(body);
            res.render("cast", {datadata});
            console.log("C")   
    }*/
    });
    });

app.get("/popularity",function(req,res){
request("https://api.themoviedb.org/3/discover/movie?api_key=4d3d897644294d2ef0d6db5feff11716&sort_by=popularity.desc",function(error,response,body){
    if(!error && response.statusCode==200){
        var data=JSON.parse(body);
        res.render("pop", {data});   
}
});
});


app.get("/toprated",function(req,res){
    request("https://api.themoviedb.org/3/discover/movie?api_key=4d3d897644294d2ef0d6db5feff11716&include_video=false&without_genres=99,10755&vote_count.gte=75&sort_by=vote_average.desc&page=2",function(error,response,body){
        if(!error && response.statusCode==200){
            var data=JSON.parse(body);
            res.render("toprated", {data});   
    }
    });
    });




app.get("/resultstv",function(req,res){
        var name=req.query.gm
        request("https://api.themoviedb.org/3/search/tv?api_key=4d3d897644294d2ef0d6db5feff11716&query=" + name,function(error,response,body){
        
        if(!error && response.statusCode==200){
        var result=JSON.parse(body);
        res.render("searchtv", {data:result});
        }
        });
        });



        app.get("/resultstv/:id",function(req,res){
            var name=req.params.id;
            
                     request("http://api.themoviedb.org/3/tv/"+name+"/credits?api_key=4d3d897644294d2ef0d6db5feff11716",function(error,response,body){
                        var gh=req.params.backdrop_path;         
                             var data=JSON.parse(body);
                             res.render("casttv", {data:data});   
                     
                     });
                     });          
         

 app.get("/topratedtv",function(req,res){
    request("http://api.themoviedb.org/3/tv/top_rated?api_key=4d3d897644294d2ef0d6db5feff11716",function(error,response,body){
        if(!error && response.statusCode==200){
            var data=JSON.parse(body);
            res.render("topratedtv", {data});   
    }
    });
    });
    
app.get("/populartv",function(req,res){
        request("https://api.themoviedb.org/3/discover/tv?api_key=4d3d897644294d2ef0d6db5feff11716&sort_by=popularity.desc",function(error,response,body){
            if(!error && response.statusCode==200){
                var data=JSON.parse(body);
                res.render("populartv", {data});   
        }
        //console.log("hello")
        });
        });   

        app.get("/trailer/:id",function(req,res){
            var name=req.params.id;
            request("http://api.themoviedb.org/3/movie/" + name + "/videos?api_key=4d3d897644294d2ef0d6db5feff11716",function(error,response,body){
                
                    var data=JSON.parse(body);
                    //console.log(data);
                    res.render("trailer", {data:data});   
        
            //console.log("hello")
            });
            });   


            //console.log($.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"));



       



app.listen(3000,function(){
console.log("server started!");
})
