var current;
var chico = [
  {description: "The Bear" ,
   picture: "http://www.madisonbeargarden.com/wp-content/uploads/2012/12/Upstairs-Bar2-copy.jpg",
   from: "madisonbeargarden.com"
  },

  {description: "The Ubar" ,
   picture: "https://www.downtownchico.com/webart/listings/x17.jpg.pagespeed.ic.sqDZCnoKsl.jpg"/*URL of second*/ ,
   from: "downtownchico.com"
  },

  {description: "Down Lo" ,
   picture: "http://image.chicoer.com/storyimage/NA/20160417/NEWS/160419790/AR/0/AR-160419790.jpg&maxh=400&maxw=667"/*URL of second*/ ,
   from: "Chico Enterprise Record"/*domain of second*/
  },

  {description: "Parkside" ,
     picture: "https://s3-media1.fl.yelpcdn.com/bphoto/xBjsMV_fL9NZf8hlJ0eeRQ/o.jpg"/*URL of second*/ ,
     from: "yelp.com"/*domain of second*/
    },

  {description: "Woodstocks" ,
     picture: "http://www.chicobeerweek.net/wp-content/uploads/2016/09/woodstocks-240x300.jpg"/*URL of second*/ ,
     from: "chicobeerweek.com"/*domain of second*/
    },
];





function shuffleGallery() {

    do {
      // var new_place = chico[Math.floor(Math.random() * 5)]
      var i = Math.floor(Math.random() * 5)
    } while (current == i)

    current = i
    document.getElementById("picture").src = chico[i].picture;
    document.getElementById("caption").innerHTML = chico[i].description;
    document.getElementById("source").innerHTML = chico[i].from;

    console.log(current)
}
