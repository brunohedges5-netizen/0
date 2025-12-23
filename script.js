function Type(text)
{
document.getElementById("txt").innerHTML="";
   var i = 0;
   var texta="";
   texta.length=0;
     texta=text;
            function type() {
                if (i < texta.length) {
                    if(texta.charAt(i)=="&"){
                    document.getElementById("txt").innerHTML += "<br>";
                    }else{
                    document.getElementById("txt").innerHTML += texta.charAt(i);
                    }
                    i++;
                    setTimeout(type, 12.5);
                }
            }
            type();
}
function facebook()
{
	window.location.href="https://m.facebook.com/100084549067130";
}
var text=`
 As AON co-advocates LLP, we are experts in litigation and experienced in managing individual and business legal claims. This means whatever concerns or problems you face, we can help. We understand that disputes can be overwhelming. However our team of seasoned legal experts are here to guide you efficiently and effectively through the dispute resolution process.
&&
As experienced dispute resolution lawyers, our approach is centred around communication and collaboration. We will collaborate closely with you to understand your unique situation, listen to your concerns, and tailor our legal strategies to meet your specific needs. Regardless of the nature of the conflict, be it a constitutional dispute, business dispute, employment matter, family issue, or any other legal matter, our top priority is to ensure that your voice is heard.
&&
We pride ourselves on our ability to adapt and innovate, offering a comprehensive range of dispute resolution services to accommodate your unique requirements. From mediation and negotiation to arbitration and litigation, our expertise spans the full spectrum of legal solutions. Our award-winning team is well-versed in handling complex cases both at a Kenyan and multi-jurisdictional level, navigating diverse legal landscapes, and delivering favourable outcomes for our clients.
&&
Whatever your preferred path, we will be there, advocating for the best possible outcome as your trusted partner and ally. Our commitment to providing excellent client service and our vast experience in the field of dispute resolution ensures that you are in capable hands throughout the resolution process.
&`;
Type(text)
        
            new Swiper(".hero", {
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });

            new Swiper(".card", {
                slidesPerView: 2,
                spacesBetween: 10,
                breakpoints: {
                    500: { slidesPerView: 3 }
                }
            });
       
function scrl1(){window.scrollTo(0,420)
}
function scrl2(){window.scrollTo(0,1000)
}