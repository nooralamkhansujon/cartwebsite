window.addEventListener('load',function(){
      document.querySelector('.preloader').classList.add('hidePreloader');
});


let CreateCars = (()=>{
   
    let cars = [];
    class Car{
        constructor(make,country,img,model,price,type,trans,gas,special){
            this.make    = make;
            this.country = country;
            this.img     = img;
            this.model   = model;
            this.price   = price;
            this.type    = type;
            this.trans   = trans;
            this.gas     = gas;
            this.special = special;
        }
    }
    
    function makeCar(make,country,img='image/car-default.jpeg',special=true,model="some Model",price=60000,type="sedan",trans="automatic",gas="50",){
       
        let car =new Car(make,country,img,model,price,type,trans,gas,special);
        cars.push(car);
    }

   
    // producs car 
    function produceCars(){
        makeCar("chevy","american");
        makeCar("mercodes",'german','image/car-german-1.jpeg',true);
        makeCar("bew",'german','image/car-german-2.jpeg');
        makeCar("bew",'german','image/car-german-3.jpeg',false,'some model');
        makeCar("bew",'german','image/car-german-4.jpeg',undefined,'other model');
        makeCar('merceds','german','image/car-german-5.jpeg',false);
    
        makeCar('chevy','american','image/car-american-1.jpeg');
        makeCar('chevy','american','image/car-american-2.jpeg',false);
        makeCar('chevy','american','image/car-american-3.jpeg',false);
        makeCar('chevy','american','image/car-american-4.jpeg',false);
        makeCar('chevy','american','image/car-american-5.jpeg',false);
        }
    produceCars();

    SpecialCars = cars.filter(car=>car.special == true);
    
    return {
        cars,SpecialCars
    }
  
})();

let  DisplaySpecialCars = ((CreateCars)=>{

          let specialCars = CreateCars.SpecialCars;
          let info   = document.querySelector('.featured-info');

          document.addEventListener('DOMContentLoaded',()=>{
                 info.innerHTML ='';
                 output = ''
                 specialCars.forEach(car=>{
                      
                    output +=`<!-- single item -->
                       <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                             <span data-img="${car.img}" class="featured-icon mr-2">
                                 <i class="fas fa-car"></i>
                             </span>
                             <h5 class="font-weight-bold mx-1">
                                  ${car.make}
                             </h5>
                             <h5 class="mx-1">
                                 ${car.model}
                            </h5>
                       </div>
                       <!-- end of single item -->`;
                 });

                 info.innerHTML = output;
          });

           info.addEventListener('click',(event)=>{
                     
                if(event.target.parentElement.classList.contains('featured-icon'))
                {
                       let img = event.target.parentElement.dataset.img;
                       console.log(img);
                       document.querySelector('.featured-photo').src=img;
                }
           });

})(CreateCars);

let DisplayCars = ((CreateCars)=>{
       
       let cars = CreateCars.cars;
       let inventory = document.querySelector('.inventory-container');
      document.addEventListener('DOMContentLoaded',()=>{
       
        inventory.innerHTML = '';
         let output = '';
          cars.forEach(car=>{
               output +=` <!-- single car -->
               <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single_item  ${car.country}">
                   <div class="card car-card ">
                       <img src="${car.img}" class="card-img-top car-img" alt="">
                       <!-- card body -->
                         <div class="card-body">
                             <div class="car-info d-flex justify-content-between">
                                 <!-- first child -->
                                 <div class="car-text text-uppercase">
                                 <h6 class="font-weight-bold">
                                     ${car.make}
                                 </h6>
                                 <h6>${car.model}</h6>
                                 </div>
                              <!-- second child  -->
                                 <h5 class="car-value align-self-center py-2 px-3" >
                                      $ <span class="car-price">
                                         ${car.price}
                                      </span>
                                 </h5>
                             </div>
                         </div>
                       <!-- end of card body -->
                       <div class="card-footer text-capitalize d-flex justify-content-between">
                           <p><span><i class="fas fa-car"></i></span>${car.type}</p>
                           <p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
                           <p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
                       </div>
                   </div>
                   <!-- end of card -->
               </div>
             <!-- end of single car -->`;
          });
 
          inventory.innerHTML= output;
 
      });
      
})(CreateCars);



let filterCars = (()=>{
    
    let filter_btns  = document.querySelectorAll('.filter-btn');
    
  
    filter_btns.forEach(btn=>{
           btn.addEventListener('click',(event)=>{

              let value = event.target.dataset.filter;
              let singleItem   = document.querySelectorAll('.single_item');
              singleItem.forEach(car=>{
                     
                  if(value =='all'){
                      car.style.display='block';
                  }
                  else{
                      (!car.classList.contains(value))?car.style.display="none":car.style.display="block";
                  }
              });
                
           });
    });
})();