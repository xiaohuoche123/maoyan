const nowReducer=(prevState=[],action={})=>{

	let {type,payload}=action;

	switch(type){
		case "nowlist":
			return [...prevState,...payload];
		default:
			return prevState;
	}
}

export default nowReducer;