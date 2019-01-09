document.addEventListener("DOMContentLoaded", DOMloaded => {
  // First set page to show the good fox
  const foxTag = (document.getElementById('fox'));
  const catTag = (document.getElementById('cat'));
  const divTag = (document.getElementById('caption'));
  foxTag.style.display = 'block';
  catTag.style.display = 'none';

  const trackingResource = document.querySelector(".tracking-resource");
  const resourceType = trackingResource.dataset.trackingType || "tracking";
  caption.innerHTML=`You have successfully blocked ${resourceType} resources. Please continue!`

  trackingResource.addEventListener("load", resourceLoaded => {
    const resource = resourceLoaded.target;
    catTag.style.display = 'block';
    foxTag.style.display = 'none';
    caption.innerHTML=`Your browser is not set up to block ${resourceType} resources. Please check your setup and try again.`
  });
});
