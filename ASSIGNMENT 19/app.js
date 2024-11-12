
document.getElementById('fileUpload').addEventListener('change', function (event) {
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = ''; 
    Array.from(event.target.files).forEach(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        previewContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });
  document.getElementById('publishBtn').addEventListener('click', () => {
    const content = document.getElementById('postContent').value;
    const privacy = document.getElementById('privacySelect').value;
    if (content) {
      alert(`Post published with content: "${content}" and privacy setting: ${privacy}`);
      document.getElementById('postContent').value = '';
      document.getElementById('previewContainer').innerHTML = '';
    } else {
      alert('Please write something before publishing.');
    }
  });
  document.getElementById('cancelBtn').addEventListener('click', () => {
    document.getElementById('postContent').value = '';
    document.getElementById('previewContainer').innerHTML = '';
  });
  