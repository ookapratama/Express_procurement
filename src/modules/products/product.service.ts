import Joi from 'joi';
import { db, getDB } from '../../config/db';
import { products } from '../../config/db/schema';
import { eq } from 'drizzle-orm';

const createProductSchema = Joi.object<ProductInput>({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Product name cannot be empty',
    'any.requires': 'Product name is required',
  }),
  quantity: Joi.number().integer().min(0).required().default(0).messages({
    'number.base': 'Product quantity must be a number',
    'number.min': 'Product quantity cannot be negative',
    'any.requires': 'Quantity is required',
  }),
  vendorId: Joi.number().integer().required().messages({
    'number.base': 'Product vendor must be a number',
    'number.min': 'Product quantity cannot be negative',
    'any.requires': 'Quantity is required',
  }),
});

const updateProductSchema = Joi.object<ProductUpdateInput>({
  name: Joi.string().trim().optional(),
  quantity: Joi.number().integer().min(0).required().default(0).optional(),
  vendorId: Joi.number().integer().required().optional(),
});

// read
export const gettAllProducts = async () => {
  return db.select().from(products);
};

// read by id
export const getProductById = async (id: number) => {
  const [product] = await db.select().from(products).where(eq(products.id, id));
  return product;
};

// create
export const createProduct = async (data: ProductInput) => {
  const [insert] = await db.insert(products).values(data);
  return insert;
};

// update
export const updateProduct = async (id: number, data: ProductUpdateInput) => {
  await db.update(products).set(data).where(eq(products.id, id));
  return getProductById;
};

// delete
export const deleteProduct = async (id: number) => {
  await db.delete(products).where(eq(products.id, id));
};
