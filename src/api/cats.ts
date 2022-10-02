export const getCatsData = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds');
  return await response.json();
}


