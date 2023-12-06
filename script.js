window.document.addEventListener('load', function() {
    
var metaTags = document.getElementsByTagName('meta');
    console.log(metaTags);
var filteredTags = Array.from(metaTags).filter(function(tag) {

    var tagName = tag.getAttribute('name');
    var tagContent = tag.getAttribute('content');

    return tagName && tagContent && tagName === 'description' && tagContent === 'returns-portal-page';
});
   console.log(filteredTags);

if(filteredTags.length > 0)
{

    var subDomain = window.store_uuid;
    console.log(subDomain);
    var iframeElement = document.createElement('iframe');
    console.log(iframeElement);
    iframeElement.src = 'https://' + subDomain + '.r.test'; 
    iframeElement.style.minWidth = '100%';
    iframeElement.style.minHeight = '100vh';


    var element = document.querySelector('.row');
console.log(element);
    if (element) {
        element.appendChild(iframeElement);
    } 
    //public/zid/script.js
}
});


