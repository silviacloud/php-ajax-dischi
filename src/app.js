
    $(document).ready(function(){


      $.ajax({
        url: "api.php",
        method: "GET",
        success: function(data){

          var template = Handlebars.compile($("#album-template").html());


          for(var i=0; i<data.length; i++){
            var album = data[i];
            var context = template({
              cover: album.poster,
              title: album.title,
              artist: album.author,
              genre: album.genre,
              year: album.year
            });

            $(".container").append(context);
          }


        },

        error: function(stato){


        }

      });





});
