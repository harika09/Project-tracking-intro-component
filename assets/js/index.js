// ===== Menu Toggle ==== //
function toggleMenu(){
    const menutoggle = document.querySelector(".menu__toggle");
    const navigation = document.querySelector(".navigation");
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}