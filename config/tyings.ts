interface IPaginate {
  current_page?: number
  first_page_url?: string
  from?: number
  last_page?: number
  last_page_url?: string
  total: number
  to?: number
}
type Tkv = {
  key: string
  value: string
}

// 资讯
export type TArticle = {
  id: number
  title: string
  ftitle: string
  type: string;
  keys?: string
  category: {id: number, title: string, type: number, img: string}
  img: string
  content: string
  description: string
  created_at: string
}
export interface IArticleList extends IPaginate{
  data: TArticle[]
}
export interface IArticle extends TArticle{
  cases: Pick<TArticle, 'id' | 'title' | 'img'>[]
  prev: Pick<TArticle, 'id' | 'title' | 'img'>
  next: Pick<TArticle, 'id' | 'title' | 'img'>
}

// 设计师
type TUser = {
  id: number
  name: string
  img: string
  level: number
  timer: number
  worktime?: string
  cases: Pick<TCases, 'id' | 'img' | 'title' | 'style' | 'area' | 'huxing'>[];
  cases_count?: number;
  info: {
    edu: string
    idea: string
    style: number[]
  }
}
export interface IUserList extends IPaginate{
  data: TUser[]
}
export interface IUser extends TUser{
  rooms: TRoomInfo[]
}

// 案例
export type TCases = {
  id: number
  title: string
  keywords: string
  description: string
  img: string
  area: string
  style: number
  huxing: number
  price: number
  user: Pick<TUser, 'id' | 'name' | 'img' | 'level' | 'timer' | 'cases' | 'info'>
  content: Tkv[]
  hits: number
  type?: number
  vr?: string
  created_at: string
}
export interface ICaseList extends IPaginate{
  data: TCases[]
}
export interface ICase extends TCases{
  anli: TCases[],
  prev: Pick<TCases, 'id' | 'title'>
  next: Pick<TCases, 'id' | 'title'>
}

// 工地
type TRoomInfo = {
  id: number
  name: string
  title: string
  img: string
  state: number
  huxing: number
  area: number
  time: string
}
export interface IRoom extends TRoomInfo{
  description: string
  user: Pick<TRoomInfo, 'id' | 'name' | 'img'>
  member: Pick<TRoomInfo, 'id' | 'name' | 'img'>
  content: {
    text: string
    state: number
    images: string[]
  }[]
}
export interface IRoomList extends IPaginate{
  data: TRoomInfo[]
}

export interface IWeb {
  title: string
  keywords: string
  description: string
  name: string
  tel: string
  kefu: string
  address: string
  beian: string
}

export interface IWebSite {
  web: IWeb
  area: string[]
  huxing: string[]
  level: string[]
  space: string[]
  state: string[]
  style: string[]
  year: string[]
  banner: {id: number; url: string; pc: string; m: string;}[]
  product: {title: string; desc: string; url: string; img: string}[],
}

// 栏目
export interface ICate {
  id: number
  title: string
  article: Pick<IArticle, 'id' | 'img' | 'title'>[]
}
// 首页
export interface IIndex {
  cases: Pick<TCases, 'id' | 'title' | 'style' | 'huxing' | 'type' | 'img'>[]
  cates: ICate[]
  designer: TUser[]
  rooms: Pick<IRoom, 'id' | 'title' | 'img' | 'state' | 'member'>[];
  articles: TArticle[];
  articleTop: TArticle
}
// 楼盘详情
export interface IFrool {
  id: number;
  name: string;
  desc: string;
  img: string;
  hit: string;
  cases?: TCases[];
  rooms?: TRoomInfo[];
  cases_count?: number;
  rooms_count?: number;
}
// 楼盘列表
export interface IFroolIndex extends IPaginate {
  data: IFrool[]
}