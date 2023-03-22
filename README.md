# NMRium React Wrapper 
	 
A React wrapper for [NMRium](https://www.nmrium.org/) that is already used in [nmrXiv](https://nmrxiv.org/) and [Chemotion](https://www.chemotion.net/), and we recommend to use it with any platform embedding [NMRium](https://www.nmrium.org/)

## Installation
### Dependencies
- [git](https://git-scm.com/).
- [Docker Desktop](https://www.docker.com/products/docker-desktop). 
- [Node.js](https://nodejs.org/en/about/).
- [React](https://reactjs.org/).

### Setup:
- Start Docker.
- Open your chosen directory in the terminal.
- Clone the [project from Github](https://github.com/NFDI4Chem/nmrium-react-wrapper) by running:
```bash
git clone https://github.com/NFDI4Chem/nmrium-react-wrapper.git
```
- Go to the project directory:
```bash
cd nmrium-react-wrapper
```
- check out the development branch:
```bash
git checkout development
```

### Local Development

- Builds Docker images:
```bash
docker build -t nmrium-rw:dev .
```

- Run docker:
```bash
docker run \
	-it \
	--rm \
	-v ${PWD}:/app \
	-v /app/node_modules \
	-p 3001:3000 \
	-e CHOKIDAR_USEPOLLING=true \
	nmrium-rw:dev
```

- Start the development server by opening a new terminal and running:
```bash
npm start
```

The development server will run on localhost:3000.

### Production Mode
To improve the load time, you can run the app in production mode instead:

- Builds Docker images from the production docker file:
```bash
docker build -f Dockerfile.prod -t nmrium-rw:prod -m 8g .
```

- Run docker:
```bash
docker run -it --rm -p 1337:80 nmrium-rw:prod
```

- Start the development server by opening a new terminal and running:

```bash
npm run build
```

The production server will run on localhost:1337.

## NMRium Version - Data Schema Version

| NMRium Version | NMRium Data Schema Version | NMRium React Wrapper Version | Migration Script |
|:----           |:---                        | :----                        | :----            |
|     v0.33.0    |      v3                    |        Pre-release           |   [Migrate To Version3 script](https://github.com/cheminfo/nmr-load-save/blob/master/src/migration/migrateToVersion3.ts) |
| v0.34.0  (coming soon)|      v4             |  v1.0.0      (coming soon)   |  [Migrate To Version4 script](https://github.com/cheminfo/nmr-load-save/blob/master/src/migration/migrateToVersion4.ts) | 

### Versions Update Protocol
- Whenever there is a new NMRium release (after complete tests):
  - Hamed Musallam sends an email to contact persons from nmrXiv and Chemotion including details on the data schema updates and version in the new release.
  - Noura Rayya updates NMRium version in the wrapper development environment.
  - Noura Rayya tests 1D and 2D Bruker, JCAMP, and NMReData files. 
  - When the tests are passed, Chandu Nainala approves having the new NMRium release in the production environment of the wrapper.
  - Noura Rayya sends an email to contact persons from nmrXiv and Chemotion including details on the data schema updates and version in the new release.

### Sources 
- You can find all the updates about the versions of NMRium React Wrapper and the used NMRium and Data Schema following the link: [Versions Update Protocol](#versions-update-protocol)
- You can try out different versions of NMRium from this link: [https://cdn.nmrium.org/v0.33.0/index.html#/SamplesDashboard/4jld0i5hjhd/View](https://cdn.nmrium.org/v0.33.0/index.html#/SamplesDashboard/4jld0i5hjhd/View) by changing the version number in the link, for instance, to https://cdn.nmrium.org/v0.32.0/index.html#/SamplesDashboard/4jld0i5hjhd/View. 
- You can find the scripts for NMRium Data Schema Version following [this link](https://github.com/cheminfo/nmr-load-save/tree/master/src/migration).
- You can find the changes between the schema and its earlier version documented at the top of its corresponding script from the link above.
- You can find examples of the NMRium Data Schema versions in the folder [Data Schema Versions](/public/data/Data%20Schema%20Versions/).
- You can find the original NMR files used to generate the Data Schema examples [following this link](https://drive.google.com/drive/folders/1pzr-SBy3Zg4fN7F612XmodIRDS5KPr46).

## Wrapper Events 
NMRium wrapper uses a custom event to handle the communication between NMRium and the parent application, for that we create [MessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)s by using a [window interface](https://developer.mozilla.org/en-US/docs/Web/API/Window). We provide two  events helper functions in /src/events/event.ts, which you can use by importing events.

```ts
import events from '../events';

events.trigger(eventName, data);

events.on(eventName, listenerHandler);

```

#### Events

|          name                |           data/handler             |                      description                                          |
|:----                         |-------------------                 | :----                                                                     |
|          load                |      LoadData Object               | load spectra and molecules                                                |
|          error               |     (error:Error)=>ErrorHanlder    | triggered once error happen at level of the wrapper                       |
|          dataChange          |    (data:NMRiumData)=>{}           | triggered when changes happen on the side of NMRium                       | 
|          actionRequest       |      ActionRequest Object          | export spectra viewer as blob                                             |
|          actionResponse      |      ActionResponse Object         | export spectra viewer as blob                                             |

#### Load spectra and molfile files:
```ts
 import events from '../events';

events.trigger('load', {
			  data: [File1,File2,....etc],
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

## Contribution
### Contribute to The Code
- **Branching**: Create a new branch from the`development`. The branch name should be all small with words separated by a hyphen. 
- **Pull requests**: Pull requests should go towards  (also known as a PR) to the `development` branch. Please link the issues which the pull request solves ti it. Finally, assign a reviewer.
- **Delete the stale branch**: After your branch is merged and the pull request is closed, please don't forget to delete your stale branch. 

### Contributors
- Hamed Musallam
- Lan Bao Quang Le
- Nisha Sharma
- Noura Rayya
- Venkata chandrasekhar Nainala (Chandu)


## Versions Details
Current NMRium version: 0.33.0

## Relevant Links
Here you can find the links to NMRium and all the repositories we are aware of which use the wrapper.

- [NMRium](https://www.nmrium.org/) 
- [nmrXiv](https://nmrxiv.org/) 
- [Chemotion](https://www.chemotion.net/)
=======
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
			  data: [File1,File2,....etc],
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