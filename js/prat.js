var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
    slidesPerView: "1",
     autoplay: {
      delay: 5000,
        modules: [navigation]
       },
     navigation: {
      nextEl: '.swiper-button-next',

      prevEl: '.swiper-button-prev',
     }
});


function SwiperFuntion(selector, change, animation = "Right", delay = 0){
  const activeSlide = document.querySelector(".swiper-slide-active");
 activeSlide.querySelectorAll(selector).forEach(el=>{
  const aniClass = animation === "Right" ? "animate__fadeInRight":
      "animate__fadeInRight"
      

      if(change){
          el.classList.remove(aniClass, "animate__animated")
          el.removeAttribute ("style");
      }else{
          el.classList.add(aniClass, "animate__animated")
          el.style.animationDelay = `${delay}s`
           el.style.opacity = "1"

      }

  })
}


swiper.on("slideChange",function(){
  SwiperFuntion("h3",true, "right")
  SwiperFuntion("p",true, "right", 0.5)
  SwiperFuntion(".swiper-bg",true, "right", 0.8)
  
})
swiper.on("transitionEnd",function(){
  SwiperFuntion("h3",false,"right")
  SwiperFuntion("p",false,"right" ,0.3)
  SwiperFuntion(".swiper-bg",false,"right" ,0.3)
  
})
  SwiperFuntion("h3",false, "right")
  SwiperFuntion("p",false, "right" ,0.3)
  SwiperFuntion(".swiper-bg",false, "right" ,0.3)
  