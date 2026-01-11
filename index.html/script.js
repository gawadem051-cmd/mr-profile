function togglemode(){
    document.body.classList.toggle("dark");
}
<script>
function shareProfile() {
  if (navigator.share) {
    navigator.share({
      title: 'My Profile',
      text: 'Check out my profile',
      url: window.location.href
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Share not supported on this browser');
  }
}
</script>