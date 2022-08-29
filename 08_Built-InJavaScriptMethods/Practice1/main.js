function get_countries() {
   $.ajax({
      url: "https://restcountries.com/v3.1/all",
      type: "GET",
      dataType: "json",
      success: function (data) {
         populate_countries(data);
         if (localStorage.selectedCountry) {
            $("#countries").val(localStorage.selectedCountry);
         }
      },
      error: function () {
         console.log("Error in the request");
      },
   });
}

function populate_countries(countries) {
   for (let i = 0; i < countries.length; i++) {
      //console.log(countries[i].name.common);
      let countryOption =
         "<option value='" +
         countries[i].altSpellings[0] +
         "'>" +
         countries[i].name.common +
         "</option>";
      document.getElementById("countries").innerHTML += countryOption;
   }
}

$("#countries").change(function () {
   // console.log("Selected box has been changed");
   localStorage.setItem("selectedCountry", $("#countries").val());
});
//countries
get_countries();
