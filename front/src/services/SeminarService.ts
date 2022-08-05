import SeminarModel from '@/models/SeminarModel'

export default class SeminarService {
	getAll(): Promise<SeminarModel[]> {
		return new Promise<SeminarModel[]>((resolve, reject) => {
			resolve([
	    	{ id: 1, title: "Le transport optimal 1", author: "Armand Ley", equip: "IMTI", hour: 16, minutes: 0, },
	    	{ id: 2, title: "Le transport optimal 2", author: "Armand Ley", equip: "IMTI", hour: 16, minutes: 0, },
	    	{ id: 3, title: "Le transport optimal 3", author: "Armand Ley", equip: "IMTI", hour: 16, minutes: 0, },
	    	{ id: 4, title: "Le transport optimal 4", author: "Armand Ley", equip: "IMTI", hour: 16, minutes: 0, },
	    	{ id: 5, title: "Le transport optimal 5", author: "Armand Ley", equip: "IMTI", hour: 16, minutes: 0, },
	    	{ id: 6, title: "Le transport optimal 6", author: "Armand Ley", equip: "IMTI", hour: 16, minutes: 0, },
	    ])
		});//.then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));
	}
}