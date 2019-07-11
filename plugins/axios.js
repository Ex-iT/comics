export default function ({ $axios }) {
	$axios.onError(error => {
		console.log(error);
	});
}
