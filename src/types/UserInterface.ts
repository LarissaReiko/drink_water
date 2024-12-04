export interface IUser {
    name: string;
    photo: string | null;
    age?: number |null; 
}

const user: IUser = {
    name: 'Lari',
    photo: null,
    age: null,
};
