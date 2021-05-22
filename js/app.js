"use strict"


new Swiper('.slider-intro', {
    pagination: {
        el: '.slider-dottes',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-intro__button-next',
        prevEl: '.slider-intro__button-prev',
    },

    loop: true,
    spaceBetween: 32,
    // mousewheel: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    speed: 800,

    breakpoints: {
        // when window width is >= 320px
        320: {
            // slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 479.98px
        480: {
            // slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 'auto',
            spaceBetween: 32,
        }
    }
});


// =========================================================================

const swiperInsp = new Swiper('.slider-inspiration', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    centeredSlides: true,
    speed: 800,
    // mousewheel: true,


    effect: 'coverflow',
    coverflowEffect: {
        rotate: 10,
        stretch: 2,
        depth: 90,
        modifier: 2,
        slideShadows: false,
    },


    // If we need pagination
    pagination: {
        el: '.slider-inspiration__dottes',
        clickable: true,

    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-inspiration__button-right',
        // prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        608: {
            spaceBetween: 10
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 12,
        },
        992: {
            spaceBetween: 16,
        },
    }

});

//========================================================================================================================================================

const swiperTips = new Swiper('.slider-tips-trics__container', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 19,
    centeredSlides: true,
    speed: 800,
    initialSlide: 1,
    // mousewheel: true,
    // autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.slider-dottes',
        clickable: true,

    },

    // Navigation arrows
    navigation: {
        nextEl: '.slider-tips-trics__button-right',
        prevEl: '.slider-tips-trics__button-left',
    },

    breakpoints: {
        319: {
            // spaceBetween: 10,
            // slidesPerView: 1,
        },
        478: {
            slidesPerView: 'auto',
            // slidesPerView: 1,

            spaceBetween: 19,
        },
        // 992: {
        //     spaceBetween: 16,
        // },
    }

});

//========================================================================================================================================================

// let swiperProducts;
// let windowWidth = document.documentElement.clientWidth;
// if (windowWidth <= 612) {
//     swiperProducts = new Swiper('.products__slider', {
//         loop: true,
//         slidesPerView: 'auto',
//         spaceBetween: 10,
//         centeredSlides: true,
//         speed: 800,

//         navigation: {
//             nextEl: '.slider-products__button-right',
//             prevEl: '.slider-products__button-left',
//         },
//     });
// }

// const productsSlider = document.querySelector('.slider-products');
// let sliderInit;
// let dataSlider = productsSlider.getAttribute('data-ms');
// let sliderCheck = true;

// function gridToSlider() {
//     if (window.innerWidth <= dataSlider && sliderCheck) {
//         sliderInit = new Swiper('.slider-products', {
//             loop: true,
//             slidesPerView: 'auto',
//             spaceBetween: 10,
//             centeredSlides: true,
//             speed: 800,

//             navigation: {
//                 nextEl: '.slider-products__button-right',
//                 prevEl: '.slider-products__button-left',
//             },
//         });
//         swiperCheck = true;
//     }
//     if (window.innerWidth > dataSlider) {
//         swiperCheck = false;
//         if (productsSlider.classList.contains('swiper-container-initialized')) {
//             sliderInit.destroy();
//         }
//     }
// }

// if (productsSlider) {
//     gridToSlider();
//     window.addEventListener('resize', gridToSlider);
// }


//========================================================================================================================================================
// попробоваnь:

// if ((window.innerWidth || document.documentElement.clientWidth) < 612) {
//     swiperProducts = new Swiper('.products__slider', {
//         loop: true,
//         slidesPerView: 'auto',
//         spaceBetween: 10,
//         centeredSlides: true,
//         speed: 800,

//         navigation: {
//             nextEl: '.slider-products__button-right',
//             prevEl: '.slider-products__button-left',
//         },
//     });
// } else {
//     window.onresize = function (event) {
//         if ((window.innerWidth || document.documentElement.clientWidth) < 769) {
//             swiperProducts = new Swiper('.products__slider', {
//                 loop: true,
//                 slidesPerView: 'auto',
//                 spaceBetween: 10,
//                 centeredSlides: true,
//                 speed: 800,

//                 navigation: {
//                     nextEl: '.slider-products__button-right',
//                     prevEl: '.slider-products__button-left',
//                 },
//             });
//         }
//     };
// }
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support === true) {
        document.querySelector('html').classList.add('_webp');
    } else {
        document.querySelector('html').classList.add('_no-webp');
    }
});


// MENU BURGER ==================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}



//Gallery===============
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
    gallery_init();
}
function gallery_init() {
    for (let index = 0; index < gallery.length; index++) {
        const el = gallery[index];
        lightGallery(el, {
            counter: false,
            selector: 'a',
            download: false
        });
    }
}

// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();
"use strict";

//  Определение девайса =============================

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// Добавление классов PC и TOUCH ===================================================================================================

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let subMenuArrow = document.querySelectorAll('.menu__link_list');
    if (subMenuArrow.length > 0) {
        for (let index = 0; index < subMenuArrow.length; index++) {
            const menuArrow = subMenuArrow[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}
else {
    document.body.classList.add('_pc');
};


// SHOW MORE======================================================

const products = document.querySelector('.products');

products.addEventListener("click", function (e) {
    const targetElem = e.target;

    if (targetElem.classList.contains('products__button')) {
        if (!targetElem.classList.contains('_loading')) {
            targetElem.classList.add('_loading');
            showMoreProducts(targetElem);
        }
        e.preventDefault();
    }

})

async function showMoreProducts(targetElem) {
    const response = await fetch('data/more_cards.html');
    if (response.ok) {
        const text = await response.text();
        const cardsList = document.querySelector('.cards');
        cardsList.insertAdjacentHTML('beforeend', text);
        targetElem.classList.remove('_loading');
    } else {
        alert('Something goes wrong...');
    }
}

// ПОИСК ==========================================================

const searchHeaderIcon = document.querySelector('.search-header__icon');
const searchHeaderForm = document.querySelector('.search-header__form');


searchHeaderIcon.addEventListener("click", function (e) {
    searchHeaderForm.classList.toggle('_active');
    searchHeaderIcon.classList.toggle('_icon-search');
    searchHeaderIcon.classList.toggle('_close');
});

document.addEventListener("keydown", function (e) {
    if (e.code === 'Escape') {
        searchHeaderForm.classList.remove('_active');
        searchHeaderIcon.classList.remove('_close');
        searchHeaderIcon.classList.toggle('_icon-search');
    }
});

document.addEventListener("click", function (e) {
    if (!e.target.closest('.search-header__form') && !e.target.classList.contains('search-header__icon')) {
        searchHeaderForm.classList.remove('_active');
        searchHeaderIcon.classList.remove('_close');
        searchHeaderIcon.classList.add('_icon-search');
    }
});


// SPOLLERS ================================================

const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {

    // Получение слойлеров с медиа запросами
    const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
        return item.dataset.spollers.split(",")[0];
    });

    // Инициализация слойлеров с медиа запросами
    if (spollersMedia.length > 0) {
        const breakpointsArray = [];
        spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        // Получение уникальных брейкпоинтов
        let mediaQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        // Работа с каждым брейкпоинтом
        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            // Объекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            });
            // Событие
            matchMedia.addListener(function () {
                initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
        });
    }
    // Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add('_init');
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener("click", setSpollerAction);
            } else {
                spollersBlock.classList.remove('_init');
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener("click", setSpollerAction);
            }
        });
    }
    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
        if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
                if (hideSpollerBody) {
                    spollerTitle.removeAttribute('tabindex');
                    if (!spollerTitle.classList.contains('_active')) {
                        spollerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spollerTitle.setAttribute('tabindex', '-1');
                    spollerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    }
    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
                if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                    hideSpollersBody(spollersBlock);
                }
                spollerTitle.classList.toggle('_active');
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
        }
    }
}
//========================================================================================================================================================
//SlideToggle
let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}

//========================================================================================================================================================

//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
    if (inputs.length > 0) {
        for (let index = 0; index < inputs.length; index++) {
            const input = inputs[index];
            const input_g_value = input.getAttribute('data-value');
            input_placeholder_add(input);
            if (input.value != '' && input.value != input_g_value) {
                input_focus_add(input);
            }
            input.addEventListener('focus', function (e) {
                if (input.value == input_g_value) {
                    input_focus_add(input);
                    input.value = '';
                }
                form_remove_error(input);
            });
            input.addEventListener('blur', function (e) {
                if (input.value == '') {
                    input.value = input_g_value;
                    input_focus_remove(input);
                    if (input.classList.contains('_mask')) {
                        input_clear_mask(input, input_g_value);
                    }
                    if (input.getAttribute('data-type') === "pass") {
                        input.setAttribute('type', 'text');
                    }
                }
            });
        }
    }
}
function input_placeholder_add(input) {
    const input_g_value = input.getAttribute('data-value');
    if (input.value == '' && input_g_value != '') {
        input.value = input_g_value;
    }
}
function input_focus_add(input) {
    input.classList.add('_focus');
    input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
    input.classList.remove('_focus');
    input.parentElement.classList.remove('_focus');
}

let scr_body = document.querySelector('body');
// let scr_blocks = document.querySelectorAll('._scr-sector');
// let scr_items = document.querySelectorAll('._scr-item');
// let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
    let src_value = currentScroll = pageYOffset;
    let header = document.querySelector('header.header');
    if (header !== null) {
        if (src_value > 10) {
            header.classList.add('_scroll');
        } else {
            header.classList.remove('_scroll');
        }
    }
    scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
    //document.addEventListener("DOMContentLoaded", scroll_scroll);
    scroll_scroll();
}, 100);

//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
    for (let index = 0; index < goto_links.length; index++) {
        let goto_link = goto_links[index];
        goto_link.addEventListener('click', function (e) {
            let target_block_class = goto_link.getAttribute('href').replace('#', '');
            let target_block = document.querySelector('.' + target_block_class);
            _goto(target_block, 500);
            e.preventDefault();
            if (iconMenu.classList.contains('_active')) {
                iconMenu.classList.remove("_active");
                menuBody.classList.remove("_active");
                document.body.classList.remove('_lock');
            }
        });
    }
}
function _goto(target_block, speed, offset = 0) {
    let header = '';
    let options = {
        speedAsDuration: true,
        speed: speed,
        header: header,
        offset: 50,
        easing: 'easeOutQuad',
    };
    let scr = new SmoothScroll();
    scr.animateScroll(target_block, '', options);
}

