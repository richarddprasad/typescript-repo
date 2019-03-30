import Hash from './hash';

class Person implements Hash {
    private firstName: string;
    private lastName: string;
    private age: number;
    private language: string;

    constructor(firstName: string, lastName: string,
        age: number, language: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.language = language;
    }

    hash(ht_size: number): number {
        let hash = this.firstName.charCodeAt(0) +
            this.lastName.charCodeAt(1) +
            this.age +
            this.language.charCodeAt(2);

        hash %= ht_size;
        return hash;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(newName: string): void {
        this.firstName = newName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(newName: string): void {
        this.lastName = newName;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(newAge: number): void {
        this.age = newAge;
    }

    public getLanguage(): string {
        return this.language;
    }

    public setLanguage(newLanguage: string): void {
        this.language = newLanguage;
    }
}

export default Person;
