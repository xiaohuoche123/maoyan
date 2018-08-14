const swipeReducer=(prevState=[],action={})=>{

	let {type,payload}=action;

	switch(type){
		case "swipelist":
			return payload;
		default:
			return prevState;
	}
}

export default swipeReducer;