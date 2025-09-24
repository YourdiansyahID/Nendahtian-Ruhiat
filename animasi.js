<script>
document.addEventListener("DOMContentLoaded", () => {
  const dividers = document.querySelectorAll(".animated-divider");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, { threshold: 0.5 }); // aktif kalau 50% divider ada di layar

  dividers.forEach(divider => observer.observe(divider));
});
</script>
