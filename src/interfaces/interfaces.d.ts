// The .d. in the name mean that this file only can contain definitions

export interface Category {
  id: number,
  name: string,
  active: number,
  image: string,
  background_color: string
};

export interface CategoryState {
  categories: Category[],
  category: Category | null
}

export interface CategoriesContextProps {
  categoryState: CategoryState,
  getCategories: () => void,
  selectCategory: (idCategory: number) => void
}

export interface Alert {
  msg: string,
  category: string
}

export type AlertState = {
  alert: Alert | null
}

export interface AlertContextProps {
  alertState: AlertState,
  // showAlert() is a function that receive two parameters and return nothing
  showAlert: (msg: string, category: string) => void 
}

interface Preference {
  id: number,
  name: string,
  added: number,
  active: number,
  stock: number,
  max_quantity_selectable: number,
  selected_quantity: number,
  group_preference_id: number
}

interface GroupPreference {
  id: number,
  max_quantity: number,
  name: string,
  minimum_required: number,
  preferences: Preference[]
}

export interface Product {
  id: number,
  name: string,
  description: string,
  barcode: string,
  price: number,
  active: number,
  stock: number,
  image: string,
  background_color: string,
  category_id: number,
  selected_quantity: number,
  groups_preference?: GroupPreference[]
}

export interface ProductState {
  products: Product[],
  product: Product | null,
  selectedpreferences: Preference[]
}

export interface ProductContextProps {
  productState: ProductState,
  getProducts: (idCategory: number) => void,
  selectProduct: (idProduct: number) => void,
  addPreference: (preference: Preference) => void,
  removePreference: (index: number) => void,
  cleanSelectedPreferences: () => void,
  changeProductQuantity: (quantity) => void
}