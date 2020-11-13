export interface WorkorderTableProperties {
    sortOrder: SortOrder,
    page: number,
    itemsPerPage: number
}

export interface SortOrder {
    direction: string,
    property: string
}