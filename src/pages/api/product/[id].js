import { mock1 } from "../db/mock1";

const handler = (req, res) => {
  const { id } = req.query;
  const product = mock1.find((prod) => prod.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(product); 
};

export default handler;
