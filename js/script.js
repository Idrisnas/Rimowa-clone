// $(document).ready(function(){
//     $('.autoplay').slick({
//         dots: false,
//         infinite: true,
//       speed: 1000,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 2000,
//       });
//       $('.autoplays').slick({
//         dots: false,
//         infinite: true,
//       speed: 1000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 2000,
//       });
//       });


      document.getElementById("checkBtn").addEventListener("click", function () {
        let checkBtns = document.getElementById('checkBtns');
        let iconToggle = document.getElementById('iconToggle');

        if (checkBtns.style.display === 'block') {
            checkBtns.style.display = 'none';

            iconToggle.classList.remove('fa-angle-up');
            iconToggle.classList.add('fa-angle-down');
        } else {
            checkBtns.style.display = 'block';
            iconToggle.classList.remove('fa-angle-down');
            iconToggle.classList.add('fa-angle-up');
        }
    });

    // Get all size divs and add event listeners
    document.querySelectorAll('.checkBtns .size').forEach(function (sizeElement) {
        sizeElement.addEventListener('click', function () {
            let selectedText = sizeElement.querySelector('p').textContent;
            let selectedSize = sizeElement.querySelector('span').textContent;

            // change the p and span tag content in  selectedSize div
            document.getElementById('sizeName').textContent = selectedText;
            document.getElementById('sizeDimensions').textContent = selectedSize;

            // Close checkBtns  after selecting
            document.getElementById('checkBtns').style.display = 'none'; document.getElementById('iconToggle').classList.remove('fa-angle-up');
            document.getElementById('iconToggle').classList.add('fa-angle-down');
        });
    });

    document.getElementById("plusBtn").addEventListener("click", function () {
        console.log('working')
        let plusBtns = document.getElementById('plusBtns');
        let plusToggle = document.getElementById('plusToggle');
        let metBtns = document.getElementById('metBtns');

        if (plusBtns.style.display === 'block') {
            plusBtns.style.display = 'none';
            metBtns.style.display = 'none';
            plusToggle.classList.remove('fa-minus');
            plusToggle.classList.add('fa-plus');

        } else {
            plusBtns.style.display = 'block';
            metBtns.style.display = 'block';

            plusToggle.classList.remove('fa-plus');
            plusToggle.classList.add('fa-minus');
        }
       
    });
    document.getElementById("matBtn").addEventListener("click", function () {
        console.log('working')
        let matBtns = document.getElementById('matBtns');
        let matToggle = document.getElementById('matToggle');

        if (matBtns.style.display === 'block') {
            matBtns.style.display = 'none';
            matToggle.classList.remove('fa-minus');
            matToggle.classList.add('fa-plus');

        } else {
            matBtns.style.display = 'block';

            matToggle.classList.remove('fa-plus');
            matToggle.classList.add('fa-minus');
        }
       
    });

    document.getElementById("lifeBtn").addEventListener("click", function () {
        console.log('working')
        let matBtns = document.getElementById('lifeBtns');
        let matToggle = document.getElementById('lifeToggle');

        if (matBtns.style.display === 'block') {
            matBtns.style.display = 'none';
            matToggle.classList.remove('fa-minus');
            matToggle.classList.add('fa-plus');

        } else {
            matBtns.style.display = 'block';

            matToggle.classList.remove('fa-plus');
            matToggle.classList.add('fa-minus');
        }
       
    });

    document.getElementById("contBtn").addEventListener("click", function () {
        console.log('working')
        let matBtns = document.getElementById('contBtns');
        let matToggle = document.getElementById('contToggle');

        if (matBtns.style.display === 'block') {
            matBtns.style.display = 'none';
            matToggle.classList.remove('fa-minus');
            matToggle.classList.add('fa-plus');

        } else {
            matBtns.style.display = 'block';

            matToggle.classList.remove('fa-plus');
            matToggle.classList.add('fa-minus');
        }
       
    })

    document.getElementById("faqBtn").addEventListener("click", function () {
        console.log('working')
        let matBtns = document.getElementById('faqBtns');
        let matToggle = document.getElementById('faqToggle');

        if (matBtns.style.display === 'block') {
            matBtns.style.display = 'none';
            matToggle.classList.remove('fa-minus');
            matToggle.classList.add('fa-plus');

        } else {
            matBtns.style.display = 'block';

            matToggle.classList.remove('fa-plus');
            matToggle.classList.add('fa-minus');
        }
       
    })






   
