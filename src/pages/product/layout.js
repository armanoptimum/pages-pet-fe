import React from 'react';
import Layout from '@/layout';
import Cards from '@/components/Cards';
import { ProductWrapperSyled } from './styles';

const ProductLayout = ({ children, mockData }) => {
  return (
    <Layout>
      <ProductWrapperSyled>
        <div>{children}</div>
        <Cards cardData={mockData} paragraph="Our Lovely Customer" colCountMax={4} />
        <Cards cardData={mockData} paragraph="Take a look at some of our pets" header="What's new?" colCountMax={4} />
      </ProductWrapperSyled>
    </Layout>
  );
};

export default ProductLayout;
