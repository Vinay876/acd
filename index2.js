function next()
{
 document.getElementsByClassName('slide-container')[0].scrollBy({left: +document.getElementsByClassName('pics')[0].clientWidth,  behavior: 'smooth'})
}

function prev()
{
 document.getElementsByClassName('slide-container')[0].scrollBy({left: -document.getElementsByClassName('pics')[0].clientWidth,  behavior: 'smooth'})
}
