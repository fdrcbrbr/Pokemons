export function test() {
  return "test";
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 1001);
}


export const capitalize = (str: string) => {
  if (!str) return str; 
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

