import { mock1 } from './db/mock1';
import { mock2 } from './db/mock2';
import { mock3 } from './db/mock3';
import { mock4 } from './db/mock4';
import { filterByPrice, filterByBreed, filterByColor, filterByGender } from './utility';

const ITEMS_PER_PAGE = 16;

const fetchData = (type, page = 1, limit = ITEMS_PER_PAGE, colors = [], breeds = [], genders = [], min = 0, max = Infinity) => {
  let data = [];

  switch (type) {
    case 'mock1':
      data = mock1;
      break;
    case 'mock2':
      data = mock2;
      break;
    case 'mock3':
      data = mock3;
      break;
    case 'mock4':
      data = mock4;
      break;
    default:
      data = mock1;
  }

  data = filterByGender(data, genders);
  data = filterByColor(data, colors);
  data = filterByBreed(data, breeds);
  data = filterByPrice(data, min, max);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);

  return { paginatedData, total: data.length };
};

export default async function handler(req, res) {
    const { query } = req;
    const {
      type = 'mock1',
      page = 1,
      limit = ITEMS_PER_PAGE,
      color = [],
      breed = [],
      gender = [],
      min = 0,
      max = Infinity,
    } = query;


    const colors = color.split(',');
    const breeds = breed.split(',');
    const genders = gender.split(',');






    const { paginatedData, total } = fetchData(type, page, limit, colors, breeds, genders, min, max);
    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      data: paginatedData,
      total,
      totalPages,
    });
}
