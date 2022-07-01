export interface IMeta  {
    pagination: IPagination;
}

export interface IPagination {
    current_page: number,
    next_page: number,
    prev_page: number,
    total_pages: number
}