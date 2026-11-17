import films from './films.json';
import theatre from './theatre.json';

// අලුත්ම අවුරුද්ද මුලින් එන විදියට
const byYearDesc = (a, b) => b.year - a.year;

export const allFilms = [...films].sort(byYearDesc);
export const allTheatre = [...theatre].sort(byYearDesc);

export const featuredFilm = allFilms.find((f) => f.featured);
export const featuredPlay = allTheatre.find((t) => t.featured);

// ප්‍රකාශයට පත් කරන සියලුම awards, production එකත් එක්ක
const collect = (items, kind) =>
    items.flatMap((item) =>
        (item.awards || []).map((award) => ({
            ...award,
            kind, // 'film' හෝ 'theatre'
            production: item.title,
            slug: item.slug,
        }))
    );

export const theatreAwards = collect(allTheatre, 'theatre');
export const filmAwards = collect(allFilms, 'film');
export const allAwards = [...theatreAwards, ...filmAwards];

// Awards (ජයග්‍රහණ) විතරක්, ඒ කියන්නේ finalist / screening නැතුව
export const winsCount = allAwards.filter((a) => a.type === 'win').length;