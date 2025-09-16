function tutorial() {
	this.tiles = [
		// --- Lignes 1 à 5 : ciel (vide) ---
		...Array(200*5).fill(0),

		// --- Lignes 6 à 10 : forêt avec troncs (4) + feuilles (5) ---
		...Array(200).fill(0).map((_,i)=> (i%10<3?5:0)),
		...Array(200).fill(0).map((_,i)=> (i%12===0?4: (i%10<3?5:0))),
		...Array(200).fill(0).map((_,i)=> (i%15===0?4: (i%10<3?5:0))),
		...Array(200).fill(0).map((_,i)=> (i%8<2?5:0)),
		...Array(200).fill(0).map((_,i)=> (i%20===0?4: (i%8<2?5:0))),

		// --- Lignes 11 à 20 : rivière horizontale ---
		...Array(200).fill(1).map((_,i)=> (i>50 && i<150?3:1)),
		...Array(200).fill(1).map((_,i)=> (i>48 && i<152?3:1)),
		...Array(200).fill(1).map((_,i)=> (i>52 && i<148?3:1)),
		...Array(200).fill(1).map((_,i)=> (i>50 && i<150?3:1)),
		...Array(200).fill(1).map((_,i)=> (i>48 && i<152?3:1)),
		...Array(200).fill(1).map((_,i)=> (i>52 && i<148?3:1)),
		...Array(200).fill(1),
		...Array(200).fill(1),
		...Array(200).fill(1),
		...Array(200).fill(1),

		// --- Lignes 21 à 30 : plaines avec rochers éparpillés ---
		...Array(200).fill(1).map((_,i)=> (i%30===0?2:1)),
		...Array(200).fill(1).map((_,i)=> (i%40===0?2:1)),
		...Array(200).fill(1).map((_,i)=> (i%25===0?2:1)),
		...Array(200).fill(1),
		...Array(200).fill(1),
		...Array(200).fill(1).map((_,i)=> (i%50===0?2:1)),
		...Array(200).fill(1),
		...Array(200).fill(1).map((_,i)=> (i%35===0?2:1)),
		...Array(200).fill(1),
		...Array(200).fill(1),

		// --- Lignes 31 à 40 : montagnes (rochers dominants) ---
		...Array(200).fill(2).map((_,i)=> (i%20<5?1:2)),
		...Array(200).fill(2).map((_,i)=> (i%15<3?1:2)),
		...Array(200).fill(2),
		...Array(200).fill(2).map((_,i)=> (i%25<5?1:2)),
		...Array(200).fill(2),
		...Array(200).fill(2).map((_,i)=> (i%18<4?1:2)),
		...Array(200).fill(2),
		...Array(200).fill(2).map((_,i)=> (i%22<6?1:2)),
		...Array(200).fill(2),
		...Array(200).fill(2),
	]

	this.limit = 200
}
