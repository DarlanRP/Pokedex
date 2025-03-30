export function useHeightPokemon(height: number) {
  return (height / 10).toFixed(1) + "m";
}