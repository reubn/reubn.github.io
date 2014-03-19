$.get("https://api.github.com/users/reubn/repos")
  .done(function( data ) {
      for (var n = 0; n < data.length; n++) {
          if(data[n].fork == false && data[n].homepage != null){
              var icon = data[n].language.replace("JavaScript","json.png").replace("PHP","php.png").replace("CSS","css.png");
    $('#indexList > tbody').append("<tr class='even'><td class='indexcolicon'><img src='theme/icons/folder.png' alt='[DIR]' /></td><td class='indexcolname'><a href='http://" + (data[n].name + ".reubn.tk" ).replace(/reubn.github.io./g, "") + "'>" + (data[n].name + ".reubn.tk" ).replace(/reubn.github.io./g, "").toLowerCase() + "</a></td><td class='indexcollastmod'>" + data[n].updated_at.replace(/([a-zA-Z])(\d\d:\d\d)(:\d\d[a-zA-Z])/g," $2") + "</td><td class='indexcolsize'>" + data[n].size + "</td></tr>");
          }
      }
  });

