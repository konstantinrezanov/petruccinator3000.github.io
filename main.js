AOS.init();
$('#myTimeline').verticalTimeline({
    startLeft:false,
    alternate: false,
    arrows:false
});
let width=window.innerWidth
let height=window.innerHeight
let widthHalf=width/2
let heightHalf=height/2
var draw = SVG().addTo('#greeting_screen').size(width, height).attr('id', 'star')
var group = draw.group()
var polygon1 = draw.path('M12.2228 52.014L87.5 0.605474L162.777 52.014V154.986L87.5 206.395L12.2228 154.986V52.014Z')
group.add(polygon1)
var polygon2=draw.path('M50.0619 179.576L12.5567 103L50.0619 26.4237H124.938L162.443 103L124.938 179.576H50.0619Z')
group.add(polygon2)
var polygon3=draw.path('M87 26.9313L135.407 103L87 179.069L38.5927 103L87 26.9313Z')
group.add(polygon3)
var circle1=draw.path('M118.5 103.5C118.5 121.747 104.376 136.5 87 136.5C69.6244 136.5 55.5 121.747 55.5 103.5C55.5 85.2528 69.6244 70.5 87 70.5C104.376 70.5 118.5 85.2528 118.5 103.5Z')
group.add(circle1)
var text = draw.text("Hello there,\nI'm Petrucciantor3000")
if (width<768) {
    text.font({
        family:   'Chomsky'
      , anchor:   'middle',
        size: '2rem'
      }).center(widthHalf,heightHalf).fill('none').stroke('white').opacity(0)
} else {
    text.font({
        family:   'Chomsky'
      , anchor:   'middle',
        size: '5rem'
      }).center(widthHalf,heightHalf).fill('none').stroke('white').opacity(0)
}
new Vivus('star',{
    type: 'delayed',
    start:'autostart',
    duration: 180,
    delay:90,
    animTimingFunction: Vivus.EASE_IN
  });
group.fill('none').stroke('white').center(widthHalf,heightHalf)
group.animate(3000,'now').ease('<>').scale(2).rotate(90)
polygon1.animate(1000,3500, 'now').ease('<').scale(4).opacity(0)
polygon2.animate(1000,3500,'now').ease('<').rotate(90).scale(3).opacity(0)
circle1.animate(500,4500, 'now').ease('<').scale(0.5).opacity(0)
polygon3.animate(1000,4500,'now').ease('<').scale(4).opacity(0)
text.animate(1000,5000, 'now').ease('<').opacity(1)
var lastScrollTop = 0;
function unlockScroll(){
    let el=document.querySelector("body")
    el.style.overflowY="scroll"
}
setTimeout(unlockScroll, 6500);
new Vivus('penta', { type:'delayed', duration: 200, pathTimingFunction: Vivus.EASE_OUT });
new Vivus('eur', {type: 'sync', duration: 200, animTimingFunction: Vivus.EASE_IN });
new Vivus('soviet', { type:'oneByOne', duration: 200, pathTimingFunction: Vivus.EASE_OUT});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let elements=document.getElementsByTagName('object')
let index=getRandomInt(3) 
elements=elements[index]
elements.className='col-sm-4'