const macOzeti = (evSahibiTakim, deplasmanTakimi) => {
  const periyotSkorlari = [];
  let evSahibiToplamSkor = 0;
  let deplasmanToplamSkor = 0;

  for (let i = 1; i <= 4; i++) {
    const evSahibiSkor = Math.floor(Math.random() * 15) + 12;
    const deplasmanSkor = Math.floor(Math.random() * 15) + 12;
    evSahibiToplamSkor += evSahibiSkor;
    deplasmanToplamSkor += deplasmanSkor;
    periyotSkorlari.push(
      `${i} Periyot: ${evSahibiTakim} ${evSahibiSkor} - ${deplasmanTakimi} ${deplasmanSkor}`
    );
  }

  if (evSahibiToplamSkor === deplasmanToplamSkor) {
    periyotSkorlari.push(
      `Maç ${evSahibiToplamSkor} - ${deplasmanToplamSkor} ile uzatmalara gitti`
    );
  } else {
    const macSonucu =
      evSahibiToplamSkor > deplasmanToplamSkor
        ? `${evSahibiTakim} ${evSahibiToplamSkor} - ${deplasmanToplamSkor} kazandı.`
        : `${evSahibiTakim} ${evSahibiToplamSkor} - ${deplasmanToplamSkor} kaybetti.`;
    periyotSkorlari.push(macSonucu);
  }

  return periyotSkorlari;
};
