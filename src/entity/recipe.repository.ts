export interface RecipeRepository {
    create(dto: any): Promise<any>;
    // getById(id: string): Promise<any>;
    // getAll(): Promise<any>;
    // remove(): Promise<void>;
    // update(): Promise<any>;
}