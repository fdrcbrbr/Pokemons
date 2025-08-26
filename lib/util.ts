export function test() {
  return "test";
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 1001);
}

/* export function getColorFromType(type: string): string {
  const colorMap: Record<string, string> = {
    grass: '#7AC74C',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
    stellar: '#C0C0C0',
  };
  const color = colorMap[type.toLowerCase()] || '#68A090';
  return `bg-[${color}] border-[${color}]`;
} */


// swicth function maps the colors with the types and add Tailwind rules es. rule"bg-" + color"[#A8A77A]"
export function getColorFromType( rule: string, type: string): string {
  switch (type.toLowerCase()) {
    case 'normal':
      return rule+'[#A8A77A]';
    case 'fire':
      return rule+'[#EE8130]';
    case 'water':
      return rule+'[#6390F0]';
    case 'grass':
      return rule+'[#7AC74C]';
    case 'electric':
      return rule+'[#F7D02C]';
    case 'ice':
      return rule+'[#96D9D6]';
    case 'fighting':
      return rule+'[#C22E28]';
    case 'poison':
      return rule+'[#A33EA1]';
    case 'ground':
      return rule+'[#E2BF65]';
    case 'flying':
      return rule+'[#A98FF3]';
    case 'psychic':
      return rule+'[#F95587]';
    case 'bug':
      return rule+'[#A6B91A]';
    case 'rock':
      return rule+'[#B6A136]';
    case 'ghost':
      return rule+'[#735797]';
    case 'dragon':
      return rule+'[#6F35FC]';
    case 'dark':
      return rule+'[#705746]';
    case 'steel':
      return rule+'[#B7B7CE]';
    case 'fairy':
      return rule+'[#D685AD]';
    case 'stellar':
      return rule+'[#C0C0C0]';
    case 'unknown':
      return rule+'[#68A090]';
    default:
      return rule+'gray-500';
  }
};

export const capitalize = (str: string) => {
  if (!str) return str; 
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};