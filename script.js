function getFormvalue() {
    const fname = document.getElementsByName("fname")[0];
	const lname = document.getElementsByName("lname")[0];

	alert(fname.value +" " + lname.value);

}
