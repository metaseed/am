export interface IStorage {
    /**
     * return post id.
     */
    newPost(name: string): string;
    delPost(id: string): boolean;

}
