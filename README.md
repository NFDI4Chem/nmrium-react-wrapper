# NMRium React Wrapper 
	 
This React wrapper is designed to embed [NMRium](https://www.nmrium.org/), the NMR spectra processing tool, into other web application using iframe. It is already used in [nmrXiv](https://nmrxiv.org/) and [Chemotion](https://www.chemotion.net/), and we recommend to use it with any platform embedding [NMRium](https://www.nmrium.org/).

## Our Wiki
Please find in [our wiki](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki) more details about:
- [Installation](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/Installation)
- [Wrapper Events](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/Wrapper-Events)

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
