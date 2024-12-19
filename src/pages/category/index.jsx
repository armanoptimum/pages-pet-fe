import { bannerFourMock } from '@/components/Banner/data';
import Cards from '@/components/Cards';
import { CategoryContentWrapperStyled, CategoryStyled } from './styles';
import Filter from '@/components/Filter';
import Banner from '@/components/Banner';
import Layout from '@/layout';

const ITEMS_PER_PAGE = 16;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchPageData = async (type, page = 1, gender = '', color = '', breed = '', min = 0, max = Infinity) => {
  const res = await fetch(
    `${baseUrl}/api/home/?type=${type}&page=${page}&limit=${ITEMS_PER_PAGE}&gender=${gender}&color=${color}&breed=${breed}&min=${min}&max=${max}`
  );
  const { data, total } = await res.json();
  return { data, total };
};

export const getServerSideProps = async ({ query }) => {
  const { page = 1, gender = '', color = '', breed = '', min = 0, max = Infinity } = query;

  const { data, total } = await fetchPageData('mock3', page, gender, color, breed, min, max);
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return {
    props: {
      data,
      total,
      totalPages,
    },
  };
};

const Category = ({ data, total, totalPages }) => {
  return (
    <Layout>
      <CategoryStyled>
        <Banner {...bannerFourMock} style="secondary" reversed />
        <CategoryContentWrapperStyled>
          <Filter />
          <Cards
            pagination={totalPages}
            cardData={data}
            paragraph="Small Dog"
            header={`${total} puppies`}
            sectionType="secondary"
            colCountMax={3}
          />
        </CategoryContentWrapperStyled>
      </CategoryStyled>
    </Layout>
  );
};

export default Category;
