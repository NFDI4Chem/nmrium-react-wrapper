# NMRium React Wrapper 
[![License](https://img.shields.io/badge/License-MIT%202.0-blue.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue.svg)](https://github.com/NFDI4Chem/nmrium-react-wrapper/graphs/commit-activity)
[![GitHub issues](https://img.shields.io/github/issues/NFDI4Chem/nmrium-react-wrapper.svg)](https://github.com/NFDI4Chem/nmrium-react-wrapper/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/NFDI4Chem/nmrium-react-wrapper.svg)](https://GitHub.com/NFDI4Chem/nmrium-react-wrapper/graphs/contributors/)
![Workflow](https://github.com/NFDI4Chem/nmrium-react-wrapper/actions/workflows/build.yml/badge.svg)

This React wrapper is designed to embed [NMRium](https://www.nmrium.org/), the NMR spectra processing tool, into other web applications using iframe. It is already used in [nmrXiv](https://nmrxiv.org/) and [Chemotion](https://www.chemotion.net/), and we recommend using it with any platform embedding [NMRium](https://www.nmrium.org/).

## [Wiki](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki)
- [Installation](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/Installation)
- [Contribution](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/Contribution)
- [Wrapper Events](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/Wrapper-Events)

## Versions

| NMRium React Wrapper Version | NMRium Version | NMRium Data Schema Version | Migration Script |
|:----           |:---                          | :----                        | :----            |
|        [Pre-release](https://github.com/NFDI4Chem/nmrium-react-wrapper/releases/tag/v0.0.1)           |     [v0.33.0](https://github.com/cheminfo/nmrium/releases/tag/v0.33.0)    |      [v3](/public/data/Data%20Schema%20Versions/V3/)                    |   [Migration script](https://github.com/cheminfo/nmr-load-save/blob/master/src/migration/migrateToVersion3.ts) |
|  v1.0.0      (coming soon)  | v0.34.0  (coming soon)|      [v4](/public/data/Data%20Schema%20Versions/V4/)              |  [Migration script](https://github.com/cheminfo/nmr-load-save/blob/master/src/migration/migrateToVersion4.ts) | 

### Sources 
- You can try out different versions of NMRium from this link: [https://cdn.nmrium.org/v0.33.0/index.html#/SamplesDashboard/4jld0i5hjhd/View](https://cdn.nmrium.org/v0.33.0/index.html#/SamplesDashboard/4jld0i5hjhd/View) by changing the version number in the link, for instance, to https://cdn.nmrium.org/v0.32.0/index.html#/SamplesDashboard/4jld0i5hjhd/View. 
- You can find the scripts for NMRium Data Schema Version following [this link](https://github.com/cheminfo/nmr-load-save/tree/master/src/migration).
- You can find the changes between the schema and its earlier version documented at the top of its corresponding script from the link above.
- You can find the original NMR files used to generate the Data Schema examples [following this link](https://drive.google.com/drive/folders/1pzr-SBy3Zg4fN7F612XmodIRDS5KPr46).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/NFDI4Chem/nmrium-react-wrapper/blob/main/LICENSE) file for details


## Maintained by
[NMRium React Wrapper](https://dev.nmrium.org/) is developed and maintained by the [NFDI4Chem partners](https://www.nfdi4chem.de/) at the [Friedrich Schiller University](https://www.uni-jena.de/en/) Jena, Germany. 
The code for this web application is released under the [MIT license](https://opensource.org/licenses/MIT).
