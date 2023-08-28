const loading = document.querySelector('.loading');
window.onload = function(){
    loading.classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", function(){
    loading.classList.remove('hidden');
})