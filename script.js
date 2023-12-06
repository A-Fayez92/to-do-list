window.onload = function() {
  console.log('window - onload'); // 4th

    var metaTags = document.getElementsByTagName('meta');
    
var filteredTags = Array.from(metaTags).filter(function(tag) {

    var tagName = tag.getAttribute('name');
    var tagContent = tag.getAttribute('content');

    return tagName && tagContent && tagName === 'description' && tagContent === 'returns-portal-page';
});
   
if(filteredTags.length > 0)
{

    var subDomain = window.store_uuid;
    
    var iframeElement = document.createElement('iframe');
    
    iframeElement.src = 'https://' + subDomain + '.r.test'; 
    iframeElement.style.minWidth = '100%';
    iframeElement.style.minHeight = '100vh';

    
         var element = document.querySelector('.row');

    if (element) {
        element.appendChild(iframeElement);
    } 

    //public/zid/script.js
}
};


    



