$(document).ready(function() {
   
    $('#movieName').on('keypress',function(e) {
        if(e.which == 13) {
            search();
        }
    });

    $('#button').click(function() {
        // run an AJAX get request to the route you setup above...
        // respect the cross-domain policy by using the same domain
        // you used to access your index.html file!

        search();
    });

    function search(){

        var key= $('#movieName').val();
        $.ajax({
            url: "http://www.omdbapi.com/?t="+key+"&apikey=dad6fbb"
          }).done(function(data) {
            $('#title').html(data.Title);
            $('#poster').attr('src',data.Poster);
            $('#description').html('Year:'+data.Year+'<br>Rating:'+data.Ratings[0].Value+' <br> '+data.Actors+' <br>'+data.Plot);
            $('#more').attr('href','https://www.imdb.com/title/'+data.imdbID);
            youTubeSearch(data.Title,data.Year,data.Actors.split(',')[0]);
            $('#movieName').val('');
            $('#movieName').focus();
            $('#more').show();
      });

    }
});

