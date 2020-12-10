inputForZoomId = document.createElement('input');
inputForZoomId.placeholder = 'Besprechungs-ID';
inputForZoomId.style.width = '200px';
inputForZoomId.style.marginBottom = '5px';

buttonForZoomId = document.createElement('button');
buttonForZoomId.textContent = 'Zoom öffnen';
buttonForZoomId.style.width = '118.562px';
buttonForZoomId.onclick = function() {
  window.open('https://zoom.us/wc/join/' + inputForZoomId.value, '_blank');
}

linkGenerator = document.getElementById('link-generator');
linkGenerator.style.textAlign = 'center';
linkGenerator.appendChild(inputForZoomId);
linkGenerator.appendChild(buttonForZoomId);
