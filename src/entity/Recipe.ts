import { Author } from "./Author";

export class Recipe {
    private readonly _id: string;
    private _author?: Author;
    private _title: string;
    private _description: string;
    private readonly _ingredients: string[];
    private _howToCook: string;
    private readonly _image: string;
    private readonly _thumbnail: string;

    constructor(
        id: string,
        title: string,
        description: string,
        ingredients: string[],
        howToCook: string,
        image: string,
        thumbnail: string
    ) {
        this._id = id;
        this.title = title;
        this.description = description;
        this.validateIngredients(ingredients);
        this._ingredients = [...ingredients];
        this.howToCook = howToCook;
        this._image = image;
        this._thumbnail = thumbnail;
    }

    get id(): string {
        return this._id;
    }

    get author(): Author {
        if (!this._author) {
            throw new Error("autor ainda não foi definido");
        }
        return this._author;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get ingredients(): string[] {
        return [...this._ingredients];
    }

    get howToCook(): string {
        return this._howToCook;
    }

    get image(): string {
        return this._image;
    }

    get thumbnail(): string {
        return this._thumbnail;
    }

    set title(value: string) {
        if (!value || value.trim().length === 0) {
            throw new Error("title é obrigatório e não pode ser vazio");
        }
        this._title = value.trim();
    }

    set description(value: string) {
        if (value && value.trim().length === 0) {
            throw new Error("description não pode ser só espaços");
        }
        this._description = value ? value.trim() : "";
    }

    set howToCook(value: string) {
        if (!value || value.trim().length === 0) {
            throw new Error("howToCook é obrigatório e não pode ser vazio");
        }
        this._howToCook = value.trim();
    }

    public adicionarAutor(author: Author): void {
        if (this._author) {
            throw new Error("autor já foi definido e não pode ser alterado");
        }

        if (!author) {
            throw new Error("autor inválido");
        }

        this._author = author;
    }

    private validateIngredients(ingredients: string[]) {
        if (!ingredients || ingredients.length === 0) {
            throw new Error("ingredients não podem ser vazios");
        }
    }
}
