
//кнопки
let pup = document.getElementById('popup'),
btn = document.getElementById('button')

btn.onclick = function(){
pup.style.display="block";
btn.classList.remove('animated');
};

window.onclick = function(e){
if(e.target == pup){
    pup.style.display="none"
}
}


// для абоут стрелка поднимающая вверх 
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY>200)
})

function scrollTopTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}






// для перевода страницы
var arrLang = {
    "usa": {
        "owner": "Is the owner of a network of branded stores And the production of branded products of Turkish quality. Throughout Istanbul, in the places of Taksim, Besiktas, Uskudar, Kadikoy, Beylarbey, Bakirkoy, Esenyurt, there are 12 branded stores owned by Mert Unal. The most central and discount store is located in the heart of Istanbul at the Grand Bazaar.",
        "about": "About us",
        "products": "Products",
        "contacts": "Contacts",
        "main":"Main",
        "location":"Our central and main store has been open for 20 years and is located inside the Ali pasa mosque"
    },
    "ukr": {
        "owner": "Власник мережі фірмових магазинів та виробництво фірмової продукції турецької якості. По всьому Стамбулу, у місцях Таксим, Бешикташ, Ускюдар, Кадикёй, Бейларбей, Бакыркёй, Эсеньюрт розташовані 12 фірмових магазинів, що належать Мерту Уналу. Найбільший центральний та дисконтний магазин знаходиться в самому центрі Стамбулу на Гранд базаре.",
        "about": "Про нас",
        "products": "Продукція",
        "contacts": "Контакти",
        "main":"Головна сторінки",
        "location":"Наші центри і домашній покупці мають бути відкриті для 20 років і є розташовані всередині Ali pasa mosque."
    },
    "tr": {
        "owner": "Markalı mağaza ağının sahibi ve Türk kalitesinde markalı ürünlerin üretimi. İstanbul genelinde Taksim, Beşiktaş, Üsküdar, Kadıköy, Beylarbey, Bakırköy, Esenyurt lokasyonlarında Mert Ünal'a ait 12 adet markalı mağaza bulunmaktadır. En merkezi ve indirimli mağaza İstanbul'un kalbindeki Kapalıçarşı'da yer almaktadır.",
        "about": "Hakkımızda",
        "products": "Ürünler",
        "contacts": "iletişim numarası",
        "main":"Ana Sayfa",
        "location":"Merkez ve ana mağazamız 20 yıldır açık olup Ali Paşa Camii içerisinde yer almaktadır."
    },
    "arab": {
        "owner": "هو صاحب شبكة من المتاجر ذات العلامات التجارية وإنتاج منتجات ذات علامة تجارية ذات جودة تركية. في جميع أنحاء اسطنبول ، في أماكن تقسيم ، بشيكتاش ، أوسكودار ، كاديكوي ، بيلاربي ، باكيركوي ، إسنيورت ، هناك 12 متجرًا تجاريًا مملوكًا لميرت أونال. يقع المتجر الأكثر مركزية والخصم في قلب اسطنبول في البازار الكبير.",
        "about": "معلومات عنا",
        "products": "منتجات",
        "contacts": "جهات الاتصال",
        "main":"الصفحة الرئيسية",
        "location":"متجرنا المركزي والرئيسي مفتوح منذ 20 عامًا ويقع في مسجد علي باشا."
    }
}
      
  // Функция для изменения текста на странице
function changeLanguage(lang) {
    var menuElements = document.getElementsByClassName('block');
  
    var paragraphs = document.getElementsByClassName('lan');
    for (var i = 0; i < paragraphs.length; i++) {
        var key = paragraphs[i].getAttribute('data-translate-key');
        if (arrLang[lang] && arrLang[lang][key]) {
            paragraphs[i].textContent = arrLang[lang][key];
        } else {
            paragraphs[i].textContent = "Language text not available";
        }
    }

    for (var i = 0; i < menuElements.length; i++) {
        var key = menuElements[i].getAttribute('data-translate-key');
        if (arrLang[lang] && arrLang[lang][key]) {
            menuElements[i].textContent = arrLang[lang][key];
        } else {
            menuElements[i].textContent = "Language text not available";
        }
    }
}

  // Обработчик события для клика на кнопках языков
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('translate');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
        var lang = this.id;
        changeLanguage(lang);
        });
}
});





//автоматическая прокрутка всей галереии в продуктах

function applyAutoScrollToGallery(selector) {
    const galleries = document.querySelectorAll(selector);

    galleries.forEach(gallery => {
        let scrollAmount = 0;
        const scrollStep = 1;
        const scrollSpeed = 20;

        let scrollingInterval;

        function startAutoScroll() {
            scrollingInterval = setInterval(autoScroll, scrollSpeed);
        }

        function stopAutoScroll() {
            clearInterval(scrollingInterval);
        }

        function autoScroll() {
            scrollAmount += scrollStep;
            gallery.scrollTo(scrollAmount, 0);

            if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
                scrollAmount = 0;
            }
        }

        gallery.addEventListener('scroll', () => {
            scrollAmount = gallery.scrollLeft;
        });

        startAutoScroll();
    });
}

applyAutoScrollToGallery('.gallery-item');

