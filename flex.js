    var right = document.querySelector('.right')
    var left = document.querySelector('.left')
    var dads = document.querySelectorAll('.dad')
    var $ = document.querySelector.bind(document)
    var img=document.querySelector('.show-img')
    var btns = document.querySelectorAll('.btn')
    var contact = document.querySelector('.contact')
    var chat = document.querySelector('.chat')
    var closes = document.querySelector('.close')
    var watch = document.querySelector('.watch')
    var hide = document.querySelector('.hide-history')
    var shows = document.querySelectorAll('.container-history')
    var historyShow = document.querySelector('.history')
    var input = document.querySelector('.search input')
    var next = document.querySelector('.icon-right')
    var pre = document.querySelector('.icon-left')
    var modal = document.querySelector('.modal')
    var container = document.querySelector('.all-container')
    var header = document.querySelector('.header')
    var btnsSale = document.querySelectorAll('.click-btn')
    var imgsSale = document.querySelector('.buysale-right-end-image')
    var end = document.querySelector('.buysale-right-end')
    var btnsBrand = document.querySelectorAll('.btn-brand ')
    var imgsBrand = document.querySelectorAll('.brand-container-all')
    var couponImages = document.querySelectorAll('.coupon-active')
    var iconLeft = document.querySelector('.coupon-icon-left')
    var iconRight = document.querySelector('.coupon-icon-right')
    var suggest = document.querySelectorAll('.suggest-center')
    var btnProduct = document.querySelector('.btn-product')
    var products = document.querySelectorAll('.product')
    var productsContainer = document.querySelectorAll('.product-all')

    var modaladver = document.querySelector('.modal-adver')
    var modaladverbody = document.querySelector('.modal-adver-body')


    var closeadver = document.querySelector('.modal-adver-body i')

    var adverimg = document.querySelector('.modal-adver-body img ')

    var body= document.querySelector('body')




        
    
    

    var nextimg = [
        "images/s4.webp",
        "images/s1.webp",
        "images/s2.webp",
        "images/s3.webp",
       
        ]

    var btnsale = 0
    var posi = 0
    function nextIMG() {
 
        posi++
        if(posi >= nextimg.length) {
            posi = 0
        }
        imgsSale.src=nextimg[posi]
        btnsale = btnsSale[posi]
        $('.click-btn.showbtn').classList.remove('showbtn')
        btnsale.classList.add('showbtn')
        btnsale++
    }


    setInterval(nextIMG,5000)
    btnsSale.forEach((item, posi) => {
        item.addEventListener('click',function() {
            btnsale = btnsSale[posi]
            imgsSale.src = nextimg[posi]
            $('.click-btn.showbtn').classList.remove('showbtn')
            btnsale.classList.add('showbtn')
            
        })
    })



var gay =[
    "images/ad1.png",
    "images/ad2.png",
    "images/ad3.png",
    "images/ad4.png",
    "images/ad5.png",
    "images/ad6.png",
    "images/ad7.png",
    "images/ad8.png",
    "images/ad9.png",







  
  

]


function increase() {
    for( var i =0; i<gay.length;i++) {
        
    }
    adverimg.src = gay[[Math.floor(Math.random()*9)]]

        
       


}
increase()


    function hideadver() {
        modaladver.classList.add('show')
    }

    closeadver.addEventListener('click',hideadver)
    modaladver.addEventListener('click',hideadver)
    modaladverbody.addEventListener('click',function(e) {
        e.stopPropagation()

    })






    




















    suggest.forEach((item, index) => {
        item.addEventListener('click',function() {
            productsAll=productsContainer[index]
            $('.product-all.active').classList.remove('active')
            $('.suggest-center.active').classList.remove('active')
            productsAll.classList.add('active')
            item.classList.add('active')
        })
    })

    


    function coupon2() {
        $('.coupon-active.active').classList.remove('active')
        couponImages[1].classList.add('active')
    }
    function coupon1() {
        $('.coupon-active.active').classList.remove('active')
        couponImages[0].classList.add('active')
    }


    iconRight.addEventListener('click', coupon2)
    iconLeft.addEventListener('click', coupon1)












    btnsBrand.forEach((item, index) => {
        item.addEventListener('click',function() {
            imgBrand= imgsBrand[index]
            $('.brand-container-all.active').classList.remove('active')
            imgBrand.classList.add('active')
            $('.btn-brand.show').classList.remove('show')
            item.classList.add('show')

        })
    })




btnsSale.forEach((item, index) => {
    item.addEventListener('click' , function() {
        imgSale = imgsSale[index]
        $('.buysale-right-end-image.active').classList.remove('active')
        imgSale.classList.add('active')
        $('.click-btn.showbtn').classList.remove('showbtn')
        item.classList.add('showbtn')


    })
})






    



function hideHistory() {
    historyShow.classList.remove('active')
    modal.classList.remove('active')

}

function showHistory() {
    historyShow.classList.add('active')
    modal.classList.add('active')
}
historyShow.addEventListener('click',function(e) {
    e.stopPropagation()
})
input.addEventListener('click', showHistory)
modal.addEventListener('click',hideHistory)
document.addEventListener('keydown',function(e)  {
    

    if(e.keyCode ==27) { 
        hideHistory()
    }
}
   
    
)





function showhis2(item, index) {
    shows[1].classList.add('active')
    hide.classList.add('active')
    watch.classList.remove('active')
    
}

function showhis1(item, index) {
    $('.container-history.active').classList.remove('active')
    hide.classList.remove('active')
    shows[1].classList.remove('active')
    shows[0].classList.add('active')
    watch.classList.add('active')









}

watch.addEventListener('click',showhis2)
hide.addEventListener('click',showhis1)







function show() {
    $('.dad.active').classList.remove('active')
    dads[1].classList.add('active')
    

}
function show2(item) {
    $('.dad.active').classList.remove('active')
    dads[0].classList.add('active')                                                                     

                                                                    


    

}

dads.forEach((item, index) => {

})



right.addEventListener('click',show)
left.addEventListener('click',show2)





function showChat() {
    contact.classList.toggle('showcontact')


}
    var showimgs = [
    "images/img1.webp",
    "images/img2.webp",
    "images/img3.webp",
    "images/img4.webp",
    "images/img5.webp",
    "images/img6.webp",
    "images/img7.webp",
    "images/img8.webp",
    "images/img9.webp",
    "images/img10.webp",
    "images/img11.webp",
    "images/img12.webp",
    ]
var index = 0
var btn = 0


function nexts() {
    
    index++
    if(index >= showimgs.length) {
        index = 0
    }
    img.src=showimgs[index]
    setTimeout(() => {
        img.style.animation = 'taoh ease-in 0.5s'
    },200)

    btn = btns[index]
    $('.btn.show').classList.remove('show')
    btn.classList.add('show')
    btn++


    

   
}

function previouss() {

    if(index >0 ) {
        index--
    }
    else {
        index =11
    }
     img.src=showimgs[index]
    btn = btns[index]
    $('.btn.show').classList.remove('show')
    btn.classList.add('show')
    btn++
 
        
    

    




}

next.addEventListener('click',nexts)
pre.addEventListener('click',previouss)
setInterval(nexts,4000)

btns.forEach((item, index) => {
    item.addEventListener('click',function() {
        btn = btns[index]
        img.src = showimgs[index]
        $('.btn.show').classList.remove('show')
        btn.classList.add('show')
    })
})














chat.addEventListener('click', showChat)

closes.addEventListener('click',showChat)







