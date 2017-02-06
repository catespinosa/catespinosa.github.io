/*
  Please add all Javascript code to this file.
*/

function Newsfeed(url,main,title,image,rank,description,tags,link) {
  this.main = main;
  this.title = title;
  this.image = image;
  this.rank = rank;
  this.description = description;
  this.tags = tags;
  this.link = link;
  this.articles = [];
}

//var Mashable = new Newsfeed('new','title','image','shares.total','content.plain','channel','link')
//console.log(Mashable)

  var activeSite = "Digg"
  var activeSource = [];
  var sources = {
    Mashable: {
      url: "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json",
      keys: {
        main: 'new',
        title: 'title',
        image: "image",
        rank: 'shares.total',
        description: 'content.plain',
        tags: 'channel',  
        link: 'link'
      },
      data: {
        articles: []
      }
    },
    Digg: {
      url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
      //url: 'http://digg.com/api/news/popular.json',
      keys: {
        main: 'data.feed',
        title: "content.title",
        image: "content.media.images[0].url",
        rank: "digg_score",
        description: "content.description",
        tags: 'content.tags',//'content.tags[0].name'
        link: 'content.url'
      },
      data: {
        articles: [],
      }
    },
    Reddit: {
      url: "https://www.reddit.com/top.json",
      keys: {
        articles: "new",
        image: "feature_image"
      }
    }
  }

  //A higher level function called apiPull that takes in a single param which will be a function
  //The function passed in will will do something with response data  within the .done() method
  var status = true;
  function apiPull (func) { 
    return function(url){     
      return $.get(url)
        .fail(function(fail){
          status = false;
          console.log(fail);
        })
        .done(function(res){
          console.log(res);
           func(res)          
        })
      }
  }

  //passes data to source specific function to build obj and update view
  function updateView(res) { 
    if(activeSite === "Digg") { 
      buildDiggObj(res)
    }
    else if(activeSite === "Mashable") {
      buildMashObj(res)
    }
  }

var currentPull = apiPull(updateView)
var diggUrl = "1https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json"
var mashUrl = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json"
//create new

//build sites dropdown using handlebars 
var sites = { sites: Object.keys(sources)  }
handlebarsView('#navHeader',".feedSources", sites) 

//click event to source link that initiates api call
$('.feedSources').on("click", 'li a', function(event){
  var currentSite = $(this).html()
  if(currentSite == "Digg") {
    activeSite = "Digg"
    currentPull(diggUrl)
  }
  else if (currentSite == "Mashable") {
    activeSite = "Mashable"
    console.log(currentPull(mashUrl))
  }
})

function handlebarsView(sourceElem,destElem,data){
  console.log(data)
  var source = $(sourceElem).html();
  var template = Handlebars.compile(source);
  var createElems = $(destElem).append(template(data))
  //console.log(createElems)
}

function buildDiggObj(res) {
   var obj = { articles:[] }
   $.each(res.data.feed, function(index,articleObj){       
      obj.articles.push( { 
        "title": articleObj.content.title,
        "image": articleObj.content.media.images[0].url,
        "rank": articleObj.digg_score,
        "description": articleObj.content.description,
        "tags": articleObj.content.tags[0].name,
        "link": articleObj.content.url
      })//push
   })
   handlebarsView('#articles','#main',obj)
}

function buildMashObj(res) {
   var obj = { articles:[] }
   $.each(res.new, function(index,articleObj){      
      obj.articles.push( { 
        "title": articleObj.title,
        "image": articleObj.image,
        "rank": articleObj.shares.total,
        "description": articleObj.content.plain,
        "tags": articleObj.channel,
        "link": articleObj.link
       })//push
     //  //console.log(obj)
   })
   handlebarsView('#articles','#main',obj)
}