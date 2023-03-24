# NMRium React Wrapper 
[![License](https://img.shields.io/badge/License-MIT%202.0-blue.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue.svg)](https://github.com/NFDI4Chem/nmrium-react-wrapper/graphs/commit-activity)
[![GitHub issues](https://img.shields.io/github/issues/NFDI4Chem/nmrium-react-wrapper.svg)](https://github.com/NFDI4Chem/nmrium-react-wrapper/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/NFDI4Chem/nmrium-react-wrapper.svg)](https://GitHub.com/NFDI4Chem/nmrium-react-wrapper/graphs/contributors/)
![Workflow](https://github.com/NFDI4Chem/nmrium-react-wrapper/actions/workflows/build.yml/badge.svg)

NMRium is a powerful tool for displaying and processing nuclear magnetic resonance (NMR) spectra. Based on the popular web framework React, NMRium is distributed as a react component which can be used as a standalone or embedded in an react web-application. 

To further enable integration in other applications developed with modern frameworks, the nmrium-react-wrapper project enables an iframe-based integration of NMRium into third-party applications built on any modern frameworks.

## Usage

### Links

#### Production:

[https://nmrium.nmrxiv.org](https://nmrium.nmrxiv.org) (currently vPRE-RELEASE - v0.33.0)

#### Development:

[https://nmriumdev.nmrxiv.org](https://nmriumdev.nmrxiv.org) (latest)

#### For older/specific versions

[https://nmrium.nmrxiv.org/releases/v0.33.0](https://nmrium.nmrxiv.org/releases/v0.33.0)

[https://nmrium.nmrxiv.org/releases/v0.34.0](https://nmrium.nmrxiv.org/releases/v0.34.0)

### Embed

```
<iframe href='https://nmriumdev.nmrxiv.org' height="500" width="100%"></iframe>
```

## Public Instance

NFDI4Chem - Jena offers a public instance of the nmrium wrapper for third-party applications to integrate into their interface without deploying an instance. Applications can then communicate with the NMRium via our standardised communication events and offer seamless integration. NOTE: None of the data (loaded and processed with NMRium on the public instance) will not reach our servers. Data will never reach the backend server hosting the applications, so there are no privacy concerns. 

To use the public instance in your application you need to whitelist your domain (local development doesnt need whitelisting).

To get whitelisted, provide the following details via an email or raise a GitHub issue.

* Domain:
* Organisation:
* Contact person (Name/Email):
* Usage details (Optional):

Emailing: info@nmrxiv.org or helpdesk@nfdi4chem.de

Raise an issue on GitHub - https://github.com/NFDI4Chem/nmrium-react-wrapper/issues

## [Wiki](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki)
- [Development](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/2.-Installation)
- [Wrapper Events](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/3.-Wrapper-Events)
- [Contribution](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/5.-Contribution)
- [Deployment](https://github.com/NFDI4Chem/nmrium-react-wrapper/wiki/4.-CI-CD)

## Versions

| NMRium React Wrapper Version | NMRium Version | NMRium Data Schema Version | Migration Script |
|:----           |:---                          | :----                        | :----            |
|        [Pre-release](https://github.com/NFDI4Chem/nmrium-react-wrapper/releases/tag/v0.0.1)           |     [v0.33.0](https://github.com/cheminfo/nmrium/releases/tag/v0.33.0)    |      [v3](/public/data/Data%20Schema%20Versions/V3/)                    |   [Migration script](https://github.com/cheminfo/nmr-load-save/blob/master/src/migration/migrateToVersion3.ts) |
|  v1.0.0      (coming soon)  | v0.34.0  (coming soon)|      [v4](/public/data/Data%20Schema%20Versions/V4/)              |  [Migration script](https://github.com/cheminfo/nmr-load-save/blob/master/src/migration/migrateToVersion4.ts) | 

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/NFDI4Chem/nmrium-react-wrapper/blob/main/LICENSE) file for details

## Maintained by
[NMRium React Wrapper](https://nmrium.nmrxiv.org) is developed and maintained by the [NFDI4Chem partners](https://www.nfdi4chem.de/) at the [Friedrich Schiller University](https://www.uni-jena.de/en/) Jena, Germany. 
The code for this web application is released under the [MIT license](https://opensource.org/licenses/MIT).


<p align="left"><a href="https://nfdi4chem.de/" target="_blank"><img src="https://www.nfdi4chem.de/wp-content/themes/wptheme/assets/img/logo.svg" width="50%" alt="NFDI4Chem Logo"></a></p>
