//Initial Ratings
const ratings = {
    sony: 1,
    samsung: 3,
    vizio: 1.8,
    panasonic: 2.5,
    philips: 4
}

const rateValue = {
    rate1: 0,
    rate2: 0,
    rate3: 0,
    rate4: 0,
    rate5: 0
}
 const realrate = []

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
        // document.querySelector(`.${rating} .stars-inner`).style.width = roundedStarPercent;

        //Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
   }
}

///Form elements
const productSelect = document.querySelector('#product-select')


// funtion to catch the stars
function getStarId(){

    for(let rate in rateValue){
        const selector = document.querySelector(`#${rate}`)
        //console.log(selector)
        selector.addEventListener('click', function(e) {
            const getAttr = e.target.getAttribute('value')
            const getClass =  e.target.getAttribute('class')
           const  p = realrate.push(getAttr)
           if(!getClass.includes('item')) {
            for (let i=0; i < 1 ; i++) {
                e.target.classList.add('item')
               const  add = (realrate.length - 1) + 1
                //Set width of star-inner to percentage
        document.querySelector(`.${rate} .stars-inner`).style.width = add;
               console.log(p) 
             }

           }else{
            e.target.classList.remove('item');
            realrate.pop()
           }
          
            
        })
        
    }
}

productSelect.addEventListener('change', (e) => {
    const  product = e.target.value
      document.querySelector('#head').innerHTML = `<h4> Rate ${product} 4k Tv </h4>`
         for(you in ratings){
          control = ratings[product]
          control.value = ratings[you]
         }
      //enable rating control
    getStarId()
  
  })

































// const ratingControl = document.querySelector('#rating-control')

// //Init product 
// let product;

// //Product select change
// productSelect.addEventListener('change', (e) => {
//     product = e.target.value;
//     //enable rating-control
//     ratingControl.disabled = false
//     ratingControl.value = ratings[product]
// })

// //rating control change 
// ratingControl.addEventListener('blur', (e) => {
//     const rating = e.target.value

//     //make sure input is not above five
//     if(rating > 5) {
//         alert('please rate 1-5')
//         return
//     }
//     //change rating 
//     ratings[product] = rating

//     getRatings()
// })
