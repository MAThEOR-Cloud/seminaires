import type SeminarModel from '@/models/SeminarModel'

export default class SeminarService {
	getAll(): Promise<SeminarModel[]> {
		return new Promise<SeminarModel[]>((resolve, reject) => {
			resolve([
	    	{ id: 17, title: "Automatic Machine Learning with Metaheuristics", author: "Ali Muhammad Junaid", equip: "OMEGA", date: 1657188600, duration: 30, mail: "", },
	    	{ id: 16, title: "Toward an Optimal Consensus Protocol for Private Blockchains", author: "RIAHI Kenza", equip: "OMEGA", date: 1656585600, duration: 30, mail: "", },
	    	{ id: 15, title: "Data Analysis Frameworks for Patients Monitoring and Assessment in Connected Healthcare Applications", author: "Ghina Saad", equip: "MSD", date: 1655980800, duration: 30, mail: "", },
	    	{ id: 14, title: "Depth-varying joint segmentation/deconvolution of vines’ wood in fluorescence microscopy", author: "Ouali Sonia", equip: "IMTI", date: 1655376000, duration: 30, mail: "", },
	    	{ id: 13, title: "Étude de comportement multi-passerelle pour Un Déploiement LoRaWAN orienté trafic", author: "Abakar Kerima Saleh", equip: "IMTI", date: 1654771200, duration: 30, mail: "", },
	    	{ id: 12, title: "Image Compression by Partial Differential Equations", author: "Thomas Jacumin", equip: "Analyse", date: 1654769400, duration: 30, mail: "thomas.jacumin@uha.fr", },
	    	{ id: 11, title: "Intelligent document information extraction based on convolutional neural network (CNN), natural language processing (NLP) and graph neural network (GNN)", author: "Mouad HAMRI", equip: "MSD", date: 1654166400, duration: 30, mail: "", },
	    	{ id: 10, title: "A comparative study of newly developed metaheuristics for the discrete uncapacitated p-median problem", author: "Muhammad Sulaman", equip: "OMEGA", date: 1654164600, duration: 30, mail: "", },
	    	{ id: 9, title: "Piece-wise 3D reconstruction of Euler spirals from planar polygonal curves.", author: "Ali Fakih", equip: "OMEGA", date: 1652956800, duration: 30, mail: "", },
	    	{ id: 8, title: "Optimisation du déploiement de capteurs dans les smart buildings", author: "Khaoula Zaimen", equip: "OMEGA", date: 1652955000, duration: 30, mail: "", },
	    	{ id: 7, title: "Détection et classification des défauts sur les réseaux électriques en utilisant des outils de traitement du signal", author: "Gandorj Darambazar", equip: "IMTI", date: 1652352000, duration: 30, mail: "", },
	    	{ id: 6, title: "Un pont entre les Mathématiques et la Musique : le Tonnetz", author: "Victoria Callet", equip: "Algèbre (IRMA)", date: 1652350200, duration: 30, mail: "", },
	    	{ id: 5, title: "Apport des caméras Light-Field à la perception de l’environnement sur les véhicules autonomes", author: "Mohamad AL ASSAAD", equip: "IMTI", date: 1651747200, duration: 30, mail: "", },
	    	{ id: 4, title: "Conception d'une architecture supportant la technologie Li-Fi", author: "Louiza Hamada", equip: "RT", date: 1651745400, duration: 30, mail: "", },
	    	{ id: 3, title: "Tomographic diffraction microscopy", author: "Riadh Abbessi Asemare Mengistie Taddese", equip: "IMTI", date: 1651141200, duration: 60, mail: "", }, 
	    	{ id: 2, title: "Network Anomaly Detection in IoT : from Data Efficiency to Enhancing QoS", author: "Mustafa Al Samara", equip: "RT", date: 1649326800, duration: 60, mail: "", }, 
	    	{ id: 1, title: "Transport optimal entropique", author: "Armand Ley", equip: "Analyse", date: 1648722000, duration: 60, mail: "armand.ley@uha.fr", }, 
	    ])
		});//.then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));
	}
}