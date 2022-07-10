export interface IMeta  {
    pagination: IPagination;
}

export interface IPagination {
    current_page: number,
    next_page: number,
    prev_page: number,
    total_pages: number
}

export interface ICommentBox {
    image: string,
    name: string,
    comment: string,
    days: string
}