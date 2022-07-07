# nmr_displayer

Wrapping NMRium

### local development

```docker build -t nmrium-rw:dev .```

```
docker run \
	-it \
	--rm \
	-v ${PWD}:/app \
	-v /app/node_modules \
	-p 3001:3000 \
	-e CHOKIDAR_USEPOLLING=true \
	nmrium-rw:dev
```

### local development (docker-compose)

```docker-compose up -d --build```

```docker-compose stop```

### production build

```docker build -f Dockerfile.prod -t nmrium-rw:prod -m 8g .```

```docker run -it --rm -p 1337:80 nmrium-rw:prod```

### Wrapper Events 

NMRium wrapper uses a custom event to handle the communication between NMRium and the parent application, for that we create multiple events:

#### Events in action 
you can use the events helper functions or create message events manually. 

1. Helper function

```ts
import events from '../events';

events.trigger(eventName, data);

events.on(eventName, listenerHandler);

```

2. Message event

```ts
window.postMessage({ type: `nmr-wrapper:${eventName}`, data }, '*');

window.addEventListener(`message`, listenerHandler)
```

#### Events

|          name                |           data/handler             |                      description                                          |
|:----                         |-------------------                 | :----                                                                     |
|          load                |      LoadData Object               | load spectra and molecules                                                |
|          error               |     (error:Error)=>ErrorHanlder    | triggered once error happen at level of the wrapper                       |
|          dataChange          |    (data:NMRiumData)=>{}           | triggered when changes happen on the side of NMRIum                       | 



#### Load spectra and molfile files:
```ts
 import events from '../events';

events.trigger('load', {
			  data: [{data:ArrayBuffer,name:file1.dx},{data:ArrayBuffer,name:file2.dx}, ....etc],
			  type:"file"
			}
	       );
```

#### Load spectra and molfile from external URLs  example:
```ts
 import events from '../events';

events.trigger('load', {
			  data: [
			    'https://cheminfo.github.io/nmr-dataset-demo/cytisine/13c.jdx',
			    'https://cheminfo.github.io/bruker-data-test/data/zipped/aspirin-1h.zip',
			    ...etc
			  ],
			  type:"url"
			}
	       );
```

#### Load NMRium data example:

You can pass NMRium data that you get when you export the data from the NMRium or what you received from dataChange event
```ts
events.trigger('load', { 
                         data: {
				  spectra:[
				       source:{
					     jcampURL:""
					 }
				     ]
				},
		         type:"nmrium"
		       }
                  );
```

#### Error handler example:

```ts
events.on('error', (error)=>{
// you code here
});
```

#### Data change hander example:

```ts
events.on('dataChange', (data)=>{
// you code here
});
```



 
