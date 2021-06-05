/*Modo Nocturno*/
let modoNocturno = document.getElementById('modoNocturno');
modoNocturno.addEventListener('click', (e) =>{
    e.preventDefault();
    document.body.classList.toggle('nocturno');
    //localStorage para Modo Nocturno
    if (document.body.classList.contains('nocturno')) {
        localStorage.setItem('modo-nocturno', 'true');
        modoNocturno.textContent = 'Modo Diurno';
    }else{
        localStorage.setItem('modo-nocturno', 'false');
        modoNocturno.textContent = 'Modo Nocturno';
    }
});
if (localStorage.getItem('modo-nocturno') === 'true') {
    document.body.classList.add('nocturno');
    modoNocturno.textContent = 'Modo Diurno';
}else{
    document.body.classList.remove('nocturno');
    modoNocturno.textContent = 'Modo Nocturno';
}
/*Modo Nocturno*/