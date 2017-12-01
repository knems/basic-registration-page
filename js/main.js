'use strict'

document.addEventListener('DOMContentLoaded', function(){
    let stateSelect = document.getElementById('state');
    stateSelect.style.color = '#97979e';

		let inputs = document.getElementsByTagName('input');

		for(let i=0; i < inputs.length; i++){
			inputs[i].addEventListener('focusin', function(){
				this.previousElementSibling.style.color = "unset";
			}, false);
			inputs[i].addEventListener('focusout', function(){
				this.previousElementSibling.style.color = "#595964";
			}, false);
		}

}, false);
