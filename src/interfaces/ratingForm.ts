export interface RatingForm {
    ok?:     boolean;
    rating: Rating[];
}

export interface Rating {
    _id:          string;
    usuarioId:    string;
    barberId:     string;
    calificacion: number;
    createdAt:    Date;
    updatedAt:    Date;
    __v:          number;
}
