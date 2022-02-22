document.getElementById('on-button').addEventListener('click',function(){
    document.getElementById('bulb-on').style.display = 'inline'
    document.getElementById('bulb-off').style.display = 'none';
    document.getElementById('on-button').setAttribute("disabled",true)
    document.getElementById('off-button').removeAttribute("disabled")
});
document.getElementById('off-button').addEventListener('click',function(){
    document.getElementById('bulb-on').style.display = 'none'
    document.getElementById('bulb-off').style.display = 'inline';
    document.getElementById('off-button').setAttribute("disabled", true);
    document.getElementById('on-button').removeAttribute("disabled");
});
document.getElementById('remove-button').addEventListener('click',function(){
    document.getElementById('bulb-on').style.display = 'none'
    document.getElementById('bulb-off').style.display = 'none';
    document.getElementById('create-button').removeAttribute("disabled");
    document.getElementById('remove-button').setAttribute("disabled",true);
    document.getElementById('off-button').setAttribute("disabled", true);
    document.getElementById('on-button').setAttribute("disabled", true);
});
document.getElementById('create-button').addEventListener('click',function(){
    document.getElementById('bulb-on').style.display = 'none'
    document.getElementById('bulb-off').style.display = 'inline';
    document.getElementById('on-button').removeAttribute("disabled");
    document.getElementById('remove-button').removeAttribute("disabled");
    document.getElementById('create-button').setAttribute("disabled", true)
});