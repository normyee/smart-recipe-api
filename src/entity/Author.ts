export class Author {
    readonly name: string;
    readonly email: string;

    constructor(name: string, email: string) {
        if (!name || name.trim().length === 0) {
            throw new Error('name is needed');
        }

        if (!email || !Author.isValidEmail(email)) {
            throw new Error('invalid email');
        }

        this.name = name.trim();
        this.email = email.trim().toLowerCase();
    }

    private static isValidEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}
