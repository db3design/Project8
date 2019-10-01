var alert = document.getElementById('alert');

// create the html for the banner
alert.innerHTML =
`
<div class="alert-banner">
<p class="message"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`
alert.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none"
    }
});
