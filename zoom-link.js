inputForZoomId = document.createElement('input');

buttonForZoomId = document.createElement('button');
buttonForZoomId.textContent = 'Zoom öffnen'
buttonForZoomId.onclick = function() {
  window.open('https://zoom.us/wc/join/' + inputForZoomId.value, '_blank');
}

linkGenerator = document.getElementById('link-generator');
linkGenerator.appendChild(inputForZoomId);
linkGenerator.appendChild(buttonForZoomId);
