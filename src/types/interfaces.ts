export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface Path {
    title: string,
    path: string
}

export interface BreadcrumbElements {
    currentPathTitle: string,
    navigation: Path[]
}

export interface UserInfo {
    firstname: string,
    lastname?: string
}

export interface Message {
    fromUser?: UserInfo,
    message: string
}