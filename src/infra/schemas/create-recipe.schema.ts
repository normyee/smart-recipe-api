import { z } from 'zod';

export const createRecipeSchema = z.object({
    title: z.string().min(1, 'title é obrigatório'),
    description: z.string().optional(),
    ingredients: z.array(z.string()).min(1, 'precisa ter ao menos 1 ingrediente'),
    howToCook: z.string().min(1, 'como cozinhar é obrigatório'),
    image: z.string().url('imagem precisa ser uma URL'),
    thumbnail: z.string().url('thumbnail precisa ser uma URL'),
    author: z.object({
        name: z.string().min(1, 'nome é obrigatório'),
        email: z.string().email('email inválido'),
    }),
});
