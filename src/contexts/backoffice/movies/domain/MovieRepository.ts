import { PaginatedResponse } from "@/contexts/shared/domain/PaginatedResponse";
import { Movie } from "./Movie";

export interface MovieRepository {
    matching(): Promise<PaginatedResponse<Movie>>;
    search(id: string): Promise<Movie | null>;
    create(movie: Movie): Promise<void>;
    update(movie: Movie): Promise<void>;
    delete(id: string): Promise<void>;
}
