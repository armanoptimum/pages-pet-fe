import {
  ContentWrapperStyled,
  ImagesWrapperStyled,
  ProductStyled,
  NameStyled,
  PriceStyled,
  ButtonsWrapperStyled,
  SkuStyled,
  InformationBlockStyled,
  InformationListStyled,
  InformationItemStyled,
  ImageWrapperStyled,
} from './styles';
import Button from '@/components/shared/Button';
import { BUTTON_STYLES } from '@/components/shared/Button/constants';
import chatIcon from '@/assets/icons/chatIcon.svg';
import ProductLayout from '../layout'



const fetchPageData = async (type) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/?type=${type}`);
    const { data } = await res.json();
    return data;
  } catch(err) {
    return {
      data: []
    }
  }
};

const fetchData = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`);
    if (!res.ok) {
      throw new Error('Product not found');
    }
    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};


export async function getServerSideProps({ params }) {
  const product = await fetchData(params.id);
  const mockData = await fetchPageData('mock1');

  return {
    props: {
      product,
      mockData
    },
  };
}


const Product = ({ product, mockData }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductLayout mockData={mockData}>
      <ProductStyled>
        <ImagesWrapperStyled>
          <ImageWrapperStyled width={600} height={600} alt="detail image" src={product.img} />
        </ImagesWrapperStyled>

        <ContentWrapperStyled>
          <SkuStyled>{product.info.sku} SKU</SkuStyled>
          <NameStyled>{product.name}</NameStyled>
          <PriceStyled>{product.price} VND</PriceStyled>
          <ButtonsWrapperStyled>
            <Button>Contact Us</Button>
            <Button style={BUTTON_STYLES.OUTLINE} icon={chatIcon}>
              Chat with Monito
            </Button>
          </ButtonsWrapperStyled>
          <InformationBlockStyled>
            {Object.entries(product.info).map(([key, value]) => (
              <InformationListStyled key={key}>
                <InformationItemStyled>{key}</InformationItemStyled>
                <InformationItemStyled>{value}</InformationItemStyled>
              </InformationListStyled>
            ))}
          </InformationBlockStyled>
        </ContentWrapperStyled>
      </ProductStyled>
    </ProductLayout>
  );
};

export default Product;
