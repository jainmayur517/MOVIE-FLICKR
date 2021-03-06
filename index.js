


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
request("https://api.themoviedb.org/3/search/movie?api_key=<api key without brackets>&query=" + name,function(error,response,body){

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
    request("https://api.themoviedb.org/3/movie/"+name+"?api_key=<api key without brackets>&query&append_to_response=credits,translations,videos,recommendations",function(error,response,body){
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

app.get("/popularity/:id",function(req,res){
    var name=req.params.id;
request("https://api.themoviedb.org/3/discover/movie?api_key=<api key without brackets>&sort_by=popularity.desc&page="+name,function(error,response,body){
    if(!error && response.statusCode==200){
        var data=JSON.parse(body);
        res.render("pop", {data});   
}
});
});






    app.get("/toprated/:id",function(req,res){
        var name=req.params.id;
        request("https://api.themoviedb.org/3/discover/movie?api_key=<api key without brackets>&include_video=false&without_genres=99,10755&vote_count.gte=75&sort_by=vote_average.desc&page="+name,function(error,response,body){
            if(!error && response.statusCode==200){
                var data=JSON.parse(body);
                res.render("toprated", {data:data});   
        }
        });
        });

        app.get("/upcoming",function(req,res){
    
            var name=req.query.bm
            request("http://api.themoviedb.org/3/movie/upcoming?api_key=<api key without brackets>&region=us",function(error,response,body){
            
            
            var result=JSON.parse(body);
            //console.log(result)
            res.render("upcoming", {data:result});
            
            });
            });



app.get("/resultstv",function(req,res){
        var name=req.query.gm
        request("https://api.themoviedb.org/3/search/tv?api_key=<api key without brackets>&query=" + name,function(error,response,body){
        
        if(!error && response.statusCode==200){
        var result=JSON.parse(body);
        res.render("topratedtv", {data:result});
        }
        });
        });



        app.get("/resultstv/:id",function(req,res){
            var name=req.params.id;
            
                     request("http://api.themoviedb.org/3/tv/"+name+"/credits?api_key=<api key without brackets>",function(error,response,body){
                        var gh=req.params.backdrop_path;         
                             var data=JSON.parse(body);
                             res.render("casttv", {data:data});   
                     
                     });
                     });          
         

 app.get("/topratedtv",function(req,res){
    request("http://api.themoviedb.org/3/tv/top_rated?api_key=<api key without brackets>",function(error,response,body){
        if(!error && response.statusCode==200){
            var data=JSON.parse(body);
            res.render("topratedtv", {data});   
    }
    });
    });
    
app.get("/populartv",function(req,res){
        request("https://api.themoviedb.org/3/discover/tv?api_key=<api key without brackets>&sort_by=popularity.desc",function(error,response,body){
            if(!error && response.statusCode==200){
                var data=JSON.parse(body);
                res.render("topratedtv", {data});   
        }
        //console.log("hello")
        });
        });   



        app.get("/networks1",function(req,res){
            request("https://api.themoviedb.org/3/discover/tv?api_key=<api key without brackets>&with_networks=213",function(error,response,body){
                if(!error && response.statusCode==200){
                    var data=JSON.parse(body);
                    res.render("topratedtv", {data});   
            }
            //console.log("hello")
            });
            });   

            app.get("/networks2",function(req,res){
                request("https://api.themoviedb.org/3/discover/tv?api_key=<api key without brackets>&with_networks=1024",function(error,response,body){
                    if(!error && response.statusCode==200){
                        var data=JSON.parse(body);
                        res.render("topratedtv", {data});   
                }
                //console.log("hello")
                });
                });   

                app.get("/networks3",function(req,res){
                    request("https://api.themoviedb.org/3/discover/tv?api_key=<api key without brackets>&with_networks=49",function(error,response,body){
                        if(!error && response.statusCode==200){
                            var data=JSON.parse(body);
                            res.render("topratedtv", {data});   
                    }
                    //console.log("hello")
                    });
                    });   

                    app.get("/networks4",function(req,res){
                        request("https://api.themoviedb.org/3/discover/tv?api_key=<api key without brackets>&with_networks=1738",function(error,response,body){
                            if(!error && response.statusCode==200){
                                var data=JSON.parse(body);
                                res.render("topratedtv", {data});   
                        }
                        //console.log("hello")
                        });
                        });   

        app.get("/trailer/:id",function(req,res){
            var name=req.params.id;
            request("http://api.themoviedb.org/3/movie/" + name + "/videos?api_key=<api key without brackets>",function(error,response,body){
                
                    var data=JSON.parse(body);
                    //console.log(data);
                    res.render("trailer", {data:data});   
        
            //console.log("hello")
            });
            });   


            



       


            

app.listen(process.env.PORT,process.env.IP);

//app.listen(3000,function(){
  //console.log("server started!");
  //})
