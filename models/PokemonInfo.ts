export interface PokemonInfo {
  id: number;
  name: string;
  /**
   * 擊敗該神奇寶貝所獲得的基礎經驗
   */
  base_experience: number;
  height: number;
  /**
   * 為每個物種設定一個神奇寶貝作為預設值。
   */
  is_default: boolean;
  /**
   * 排序的順序。基本上是按照全部標準，但會把同一家族的成員放在一起。
   */
  order: number;
  weight: number;
  /**
   * 該神奇寶貝可能具有的能力清單。
   */
  abilities: PokemonAbility[];
  /**
   * 該神奇寶貝可以呈現的形態列表。
   */
  forms: NamedAPIResource[];
  /**
   * 與神奇寶貝項目相關的遊戲索引清單（按世代）。
   */
  game_indices: VersionGameIndex[];
  /**
   * 該神奇寶貝遇到時可能持有的物品清單。
   */
  held_items: PokemonHeldItem[];
  /**
   * 指向位置區域列表的鏈接，以及與特定版本相關的遭遇詳細資訊。
   */
  location_area_encounters: string;
  /**
   * 與特定版本組相關的動作清單以及學習方法和等級詳細資訊。
   */
  moves: PokemonMove[];
  /**
   * 顯示該神奇寶貝前幾代的類型的詳細信息列表
   */
  past_types: PokemonTypePast[];
  /**
   * 遊戲中用於描繪該神奇寶貝的一組精靈
   */
  sprites: PokemonSprites;
  /**
   * 遊戲中用來描繪這隻神奇寶貝的一組叫聲。可以在以下位置找到各種哭聲
   */
  cries: PokemonCries;
  /**
   * 該神奇寶貝所屬的物種。
   */
  species: NamedAPIResource;
  /**
   * 該神奇寶貝的基本統計值列表。
   */
  stats: PokemonStat[];
  /**
   * 顯示該神奇寶貝擁有的類型的詳細資訊清單。
   */
  types: PokemonType[];
}

export interface PokemonAbility {
  /**
   * 不管這是否是隱藏能力
   */
  is_hidden: boolean;
  /**
   * 神奇寶貝類型的列出順序
   */
  slot: number;
  /**
   * 引用的神奇寶貝的型別。
   */
  ability: NamedAPIResource;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

export interface PokemonType {
  /**
   * 神奇寶貝類型的列出順序。
   */
  slot: number;
  /**
   * 引用的表單具有的型別。
   */
  type: NamedAPIResource;
}

export interface PokemonStat {
  /**
   * 神奇寶貝的統計數據。
   */
  stat: NamedAPIResource;
  /**
   * 統計中神奇寶貝的努力點 (EV)。
   */
  effort: number;
  /**
   * 統計資料的基值。
   */
  base_stat: number;
}

export interface PokemonMove {
  /**
   * 寶可夢可以學習的招式。
   */
  move: NamedAPIResource;
  /**
   * 寶可夢可以學習招式的版本詳情。
   */
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
}

export interface PokemonTypePast {
  /**
   * 所引用的神奇寶貝所持有的物品。
   */
  generation: NamedAPIResource;
  /**
   * 所引用的神奇寶貝的類型直至並包括列出的世代。
   */
  types: PokemonType[];
}

export interface PokemonSprites {
  /**
   * 該神奇寶貝在戰鬥中正面的預設描繪。
   */
  front_default: string;
  /**
   * 這隻神奇寶貝在戰鬥中正面的閃亮描繪。
   */
  front_shiny: string;
  /**
   * 這隻神奇寶貝在戰鬥中正面的女性形象。
   */
  front_female: string;
  /**
   * 這隻神奇寶貝在戰鬥中正面的閃亮女性形象。
   */
  front_shiny_female: string;
  /**
   * 該神奇寶貝在戰鬥中的預設背面圖。
   */
  back_default: string;
  /**
   * 這隻神奇寶貝在戰鬥中的背面的閃亮描繪。
   */
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonCries {
  /**
   * 這隻神奇寶貝哭泣的最新描述。
   */
  latest: string;
  /**
   * 這隻神奇寶貝的哭聲的遺產描述。
   */
  legacy: string;
}
