const sections = document.querySelectorAll('section');
// console.log(sections);

for(section of sections){
    //console.log(section);
    
    section.style.border = "2px solid steelblue";
    section.style.borderRadius = "15px";
    section.style.marginBottom = "5px";
    section.style.backgroundColor = "lightgrey";
    section.style.padding = "10px";

}

 const placesToVisit = document.getElementById('places-to-visit');
 placesToVisit.style.backgroundColor = "purple";

const placesContainer = document.getElementById('places-to-visit');
placesContainer.classList.add('white-text');
placesContainer.classList.remove('bold-text')