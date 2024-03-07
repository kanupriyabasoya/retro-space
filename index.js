const imageUrl = ["https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1507499739999-097706ad8914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1610508752370-8323ab10044b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"]
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
one.addEventListener('mouseover',(e)=>{
    document.body.style.background= `url("${imageUrl[0]}")`;
})
two.addEventListener('mouseover',(e)=>{
    document.body.style.background= `url("${imageUrl[1]}")`;
})
three.addEventListener('mouseover',(e)=>{
    document.body.style.background= `url("${imageUrl[2]}")`;
})

