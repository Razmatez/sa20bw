const formatDate = (date) => {

	let formattedDate = new Date(date);

	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	var day = formattedDate.getDate();
	var monthIndex = formattedDate.getMonth();
	var year = formattedDate.getFullYear();

	return day + " " + months[monthIndex] + " " + year;

}

export default formatDate;