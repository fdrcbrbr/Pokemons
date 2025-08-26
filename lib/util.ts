export function test() {
  return "test";
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 1001);
}

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