//Initial Ratings
const ratings = {
    sony: 1.5,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    philips: 5
}
 const rateValue = {
     rate1: 1.5,
     rate2: 1,
     rate3: 1,
     rate4: 1,
     rate5: 0.5
 }

 // Initializing materilized form select
var select = document.querySelector('select');
M.FormSelect.init(select, {});

//Total stars
const starsTotal = 5; 

//Runing getRatings when the dom loads
document.addEventListener('DOMContentLoaded', getRatings)


//Get Rating
 function getRatings(){
   for(let rating in ratings) {
      //get percentage 
      const starPercentage = (ratings[rating] / starsTotal) * 100;
        // Rounding to the nearest 10
        const roundedStarPercent = `${Math.round(starPercentage / 10) * 10}%`
      

        //Set width of star-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = roundedStarPercent;

        //Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
   }
}


///Form elements
const productSelect = document.querySelector('#product-select')
const ratingControl = document.querySelector('#rating-control')

//Init product 
let product;

//Product select change
productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    console.log(product)
    //enable rating-control
    ratingControl.disabled = false
    ratingControl.value = ratings[product]
    
})

//rating control change 
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value

    //make sure input is not above five
    if(rating > 5) {
        alert('please rate 1-5')
        return
    }
    //change rating 
    ratings[product] = rating

    getRatings()
})

// //Rate control function 
// function rateControl(e){
//     for(rate in rateValue){
//         //getting rate button attribute
//         let addRateValue = 0
//         const selector = document.querySelector(`#${rate}`)
//         selector.addEventListener('click', function(e){
//             const getAttr = e.target.getAttribute('value')
//           const getClass =  e.target.getAttribute('class')
//             if(!getClass.includes('item')) {
//                 e.target.classList.add('item')
//             }else{
//                 e.target.classList.remove('item');
//             }
              
            
            
//         })

//     }
    
// }

// rateControl()