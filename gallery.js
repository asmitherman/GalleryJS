var chico = ['Bear','University Bar','Down Low','Parkside','Woodstocks']
var current

function shuffleGallery() {

    do {
      var new_place = chico[Math.floor(Math.random() * 5)]
    } while (current == new_place)

    current = new_place
    console.log(current)
}
