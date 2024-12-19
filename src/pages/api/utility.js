export const filterByGender = (data, genders) => {
  if (genders.length > 0 && genders[0] !== '') {
    console.log(genders[0]);
    data = data.filter((item) =>
      item.details.some((detail) => detail.key.toLowerCase() === 'gene' && genders.includes(detail.val.toLowerCase()))
    );
  }
  return data;
};

export const filterByColor = (data, colors) => {
  if (colors.length > 0 && colors[0] !== '') {
    data = data.filter((item) => colors.includes(item.color));
  }
  return data;
};

export const filterByBreed = (data, breeds) => {
  if (breeds.length > 0 && breeds[0] !== '') {
    data = data.filter((item) => breeds.includes(item.breed));
  }
  return data;
};

export const filterByPrice = (data, minPrice, maxPrice) => {
  data = data.filter((item) => {
    const price = +item.price?.replace(/\./g, '');
    return price >= minPrice && price <= maxPrice;
  });
  return data;
};
