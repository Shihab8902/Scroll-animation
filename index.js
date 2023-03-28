//Grab all the scrollable items
const scrollContainer = document.querySelectorAll(".hidden");


//Intersection observer
//It is a class that observes it's given elements and can work with multiple elements
//This function will run when the visibility of any of its element changes

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});


//Now we say the observer function what to observe
scrollContainer.forEach((el)=> observer.observe(el));