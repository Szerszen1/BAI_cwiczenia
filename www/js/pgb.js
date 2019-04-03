function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function personalInfo() {

	info =  'Name: '     + 'Jakub'    + '\n' + 
			'Surname: '  + 'Szerszen' + '\n' + 
			'Email: ' + 'jakubmarekszerszen@gmail.com' + '\n';

	navigator.notification.alert(info);
	
}