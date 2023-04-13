const store={};

const subscribe=(eventname,callback)=>
{
   if(!store[eventname])
	{
	 store[eventname]=new set();	
	}
	store[storename].add(callback);
}

const UnSubscribe=(eventname,callback)=>
{
if(store[eventname])
  {
   store[eventname].delete(callback);
  }
}

const Publish =(eventname,payload)=>
{
	if(store[eventname])
{
	store[eventname].ForEach(callback=>
	{
	try{
    		callback(payload);
	   }
      catch(error){
		console.log(error);
	   }
	})

}

}
export default
{
	UnSubscribe,
	subscribe,
	Publish,

}