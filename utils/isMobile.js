const isMobile = () => {

	const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	return windowWidth < 1024;

}

export default isMobile;