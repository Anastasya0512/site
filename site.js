let form = document.forms.formsearch;
formsearch.addEventListener('submit', function(event) {
    event.preventDefault();
formData = new FormData(form);
    console.log(formData.get('textsearch'));
    swal.fire({
        title: "Умная водосвинка не смогла найти смысл вашего высказывания. It's sad :(",
        confirmButtonColor: "#f21c85", 
        confirmButtonText: 'Блин, ладно.',
        imageUrl: 'image/capybara.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
       });
});


