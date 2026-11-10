const botonMenu=document.querySelector('.menu-boton');
const navegacion=document.querySelector('#navegacion');
botonMenu.addEventListener('click',()=>{
 const abierta=navegacion.classList.toggle('abierta');
 botonMenu.setAttribute('aria-expanded',String(abierta));
 botonMenu.setAttribute('aria-label',abierta?'Cerrar menú de navegación':'Abrir menú de navegación');
});
navegacion.querySelectorAll('a').forEach(enlace=>enlace.addEventListener('click',()=>{
 navegacion.classList.remove('abierta');botonMenu.setAttribute('aria-expanded','false');botonMenu.setAttribute('aria-label','Abrir menú de navegación');
}));
const formulario=document.querySelector('#formulario-contacto');
const respuesta=document.querySelector('#respuesta-formulario');
formulario.addEventListener('submit',(evento)=>{
 evento.preventDefault();
 if(!formulario.reportValidity())return;
 const nombre=document.querySelector('#nombre').value.trim();
 if(!nombre){respuesta.textContent='Por favor, escribe tu nombre.';return;}
 respuesta.textContent=`¡Gracias, ${nombre}! Tu mensaje fue validado correctamente. Esta es una demostración: no se enviaron datos.`;
 formulario.reset();
});
document.querySelector('#anio').textContent=new Date().getFullYear();
