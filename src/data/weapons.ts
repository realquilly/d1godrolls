// Structured Destiny 1 legendary weapon god-roll data.
// Source: PvE and PvP god-roll threads from the Destiny 1 Discord server (transcribed from pve.md / pvp.md).
// Swords are omitted from both source threads (static rolls).

export type WeaponCategoryId =
  | "auto-rifle"
  | "pulse-rifle"
  | "scout-rifle"
  | "hand-cannon"
  | "shotgun"
  | "sniper-rifle"
  | "fusion-rifle"
  | "sidearm"
  | "rocket-launcher"
  | "machine-gun";

export type WeaponTier =
  | "recommended"
  | "omitted"
  | "dishonorable_mention"
  | "surplus_mention";

export interface PerkSlot {
  slot: string;
  perks: string[];
  note?: string;
}

export interface Archetype {
  id: string;
  categoryId: WeaponCategoryId;
  name: string;
  recommended: boolean;
  pvePerkPool: PerkSlot[];
  notes?: string;
}

export interface Weapon {
  id: string;
  name: string;
  categoryId: WeaponCategoryId;
  archetypeId: string;
  tier: WeaponTier;
  source: string;
  notes?: string;
  staticRoll?: boolean;
  requiresSkeletonKey?: boolean;
}

export interface WeaponCategory {
  id: WeaponCategoryId;
  name: string;
  group: "Primary" | "Special" | "Heavy";
  pvpPerkPool: PerkSlot[];
  pvpNotes?: string;
  pveGeneralNotes?: string[];
}

export const categories: WeaponCategory[] = [
  {
    id: "auto-rifle",
    name: "Auto Rifle",
    group: "Primary",
    pvpPerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel", "High Caliber Rounds", "Armor Piercing Rounds"] },
      { slot: "Damage", perks: ["Glass Half Full"] },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Hidden Hand"] },
      { slot: "Barrel/Mag", perks: ["Feather Mag", "Appended Mag", "Smallbore"] },
      { slot: "Specialized Perks", perks: ["Persistence"], note: "Required for low impact autos" },
    ],
  },
  {
    id: "pulse-rifle",
    name: "Pulse Rifle",
    group: "Primary",
    pvpPerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel", "Send It", "High Caliber Rounds"] },
      { slot: "Damage", perks: ["Glass Half Full", "Headseeker"] },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Hidden Hand"] },
      { slot: "Barrel/Mag", perks: ["Feather Mag", "Appended Mag"] },
    ],
  },
  {
    id: "scout-rifle",
    name: "Scout Rifle",
    group: "Primary",
    pvpPerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance"] },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Hidden Hand", "High Caliber Rounds", "Armor Piercing Rounds"] },
      { slot: "Barrel/Mag", perks: ["Feather Mag", "Appended Mag"] },
    ],
  },
  {
    id: "hand-cannon",
    name: "Hand Cannon",
    group: "Primary",
    pvpPerkPool: [
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel (favored on Low/Mid Impact)", "High Caliber Rounds", "Armor Piercing Rounds"] },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Hidden Hand", "Icarus", "Hot Swap"] },
    ],
  },
  {
    id: "shotgun",
    name: "Shotgun",
    group: "Special",
    pvpPerkPool: [
      { slot: "Barrel", perks: ["Accurized Ballistics (Best)", "Linear Compensator (Second)", "Aggressive Ballistics (Third, but best on High Impacts)", "Field Choke (Last)"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Utility", perks: ["Single Point Sling", "Full Auto", "Close and/or Personal"] },
    ],
  },
  {
    id: "sniper-rifle",
    name: "Sniper Rifle",
    group: "Special",
    pvpPerkPool: [
      { slot: "Utility", perks: ["Unflinching", "Spray and Play", "Quickdraw", "Snapshot"] },
      { slot: "Damage", perks: ["Luck in the Chamber (only on certain snipers)"] },
    ],
  },
  {
    id: "fusion-rifle",
    name: "Fusion Rifle",
    group: "Special",
    pvpPerkPool: [
      { slot: "Battery", perks: ["Enhanced Battery", "Accelerated Coils (favored on Mid/High Impact)"] },
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance"] },
      { slot: "Range", perks: ["Rangefinder", "Hammer Forged"] },
      { slot: "Utility", perks: ["Army of One", "Spray and Play", "Eye of the Storm"] },
      { slot: "Mag", perks: ["Casket Mag"] },
    ],
  },
  {
    id: "sidearm",
    name: "Sidearm",
    group: "Special",
    pveGeneralNotes: [
      "Sidearms are not generally suited for PvE activities whatsoever. This list is just aimed like the rest if you fancy them for fun and to keep some for your collections.",
      "Sidearms are generally useless for gameplay. Unless you're doing PvP and have a preferred roll for it, you won't find yourself using Sidearms unless you're completing bounties or quests that need them. Majority of uses with Sidearms need High Impact ones. There's only very few Mid Impact Sidearms that can be used due to their stats and mag sizes.",
    ],
    pvpPerkPool: [
      { slot: "Barrel", perks: ["Rifled Barrel", "Reinforced Barrel"] },
      { slot: "Mag", perks: ["Appended Magazine", "Feather Mag"] },
      { slot: "Range", perks: ["Rangefinder", "Hand Loaded", "High Caliber Rounds", "Armor Piercing Rounds"] },
      { slot: "Utility", perks: ["Army of One", "Hidden Hand", "Reactive Reload", "Snapshot", "Quickdraw"] },
      { slot: "Reload", perks: ["Feeding Frenzy", "Spray and Play", "Speed Reload"] },
    ],
  },
  {
    id: "rocket-launcher",
    name: "Rocket Launcher",
    group: "Heavy",
    pvpPerkPool: [
      { slot: "Launch", perks: ["Aggressive Launch (Best)", "Linear Compensator (Second)", "Hard Launch (Second)", "Warhead Verniers (Second)"] },
      { slot: "Utility", perks: ["Quickdraw", "Snapshot", "Grenades and Horseshoes", "Tripod", "Tracking"] },
      { slot: "Reload", perks: ["Speed Reload", "Spray and Play"] },
    ],
  },
  {
    id: "machine-gun",
    name: "Machine Gun",
    group: "Heavy",
    pvpPerkPool: [
      { slot: "Barrel", perks: ["Aggressive Ballistics (Best)", "Accurized Ballistics (Second)", "Field Choke (Third)", "Linear Compensator (Last)"] },
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Braced Frame"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel", "High Caliber Rounds", "Armor Piercing Rounds"] },
      { slot: "Utility", perks: ["Army of One", "Life Leech (only on Qullim's Terminus and First Citizen IX)", "Spray and Play", "Eye of the Storm", "Quickdraw", "Snapshot"] },
      { slot: "Mag", perks: ["Extended Mag"] },
      { slot: "Specialized Perks", perks: ["Persistence"], note: "Favored on Low Impact/Mid Impact" },
    ],
  },
];

export const archetypes: Archetype[] = [
  // AUTO RIFLE
  {
    id: "auto-rifle-low-impact", categoryId: "auto-rifle", name: "Low Impact", recommended: true,
    pvePerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Glass Half Full"] },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Hidden Hand"] },
      { slot: "Specialized Perks", perks: ["Focused Fire", "Persistence"], note: "Either one required" },
    ],
  },
  {
    id: "auto-rifle-mid-impact", categoryId: "auto-rifle", name: "Mid Impact", recommended: true,
    pvePerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Glass Half Full"] },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Hidden Hand"] },
      { slot: "Specialized Perks", perks: ["Focused Fire"] },
    ],
  },
  {
    id: "auto-rifle-high-impact", categoryId: "auto-rifle", name: "High Impact", recommended: true,
    pvePerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Glass Half Full"] },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Hidden Hand"] },
      { slot: "Specialized Perks", perks: ["Focused Fire"] },
    ],
  },

  // PULSE RIFLE
  {
    id: "pulse-rifle-low-impact", categoryId: "pulse-rifle", name: "Low Impact", recommended: true,
    pvePerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Glass Half Full"] },
      { slot: "Utility", perks: ["Zen Moment"], note: "Low drop-chance rolls" },
    ],
  },
  {
    id: "pulse-rifle-mid-impact", categoryId: "pulse-rifle", name: "Mid Impact", recommended: true,
    pvePerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Glass Half Full"] },
      { slot: "Utility", perks: ["Zen Moment"], note: "Low drop-chance rolls" },
    ],
  },
  {
    id: "pulse-rifle-high-impact", categoryId: "pulse-rifle", name: "High Impact", recommended: true,
    notes: "These are the only two viable high impact pulses. All other high impact pulses in the game are either only viable for PvP, or outright terrible.",
    pvePerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Glass Half Full", "Headseeker"], note: "Headseeker is a low-chance roll" },
      { slot: "Utility", perks: ["Zen Moment"], note: "Low drop-chance rolls" },
    ],
  },
  {
    id: "pulse-rifle-hakke-4-shot", categoryId: "pulse-rifle", name: "Hakke 4-Shot (Mid + High Impact)", recommended: true,
    pvePerkPool: [
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance", "Rodeo"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel", "Reinforced Barrel"], note: "Reinforced Barrel is a low-chance roll" },
      { slot: "Damage", perks: ["Crowd Control", "Glass Half Full", "Headseeker"], note: "Headseeker is a low-chance roll" },
    ],
  },

  // SCOUT RIFLE
  {
    id: "scout-rifle-low-impact", categoryId: "scout-rifle", name: "Low Impact", recommended: false,
    notes: "None are listed due to these having too low of damage and utility to keep. Go for Mids and Highs instead.",
    pvePerkPool: [
      { slot: "Damage", perks: ["Crowd Control", "Reactive Reload"], note: "Reactive Reload is a low-chance roll" },
      { slot: "Utility", perks: ["Triple Tap", "Army of One", "Grenadier", "Life Support"], note: "Life Support recommended" },
      { slot: "Specialized Perks", perks: ["Explosive Rounds"], note: "Required" },
    ],
  },
  {
    id: "scout-rifle-mid-impact", categoryId: "scout-rifle", name: "Mid Impact", recommended: true,
    pvePerkPool: [
      { slot: "Damage", perks: ["Crowd Control", "Reactive Reload"], note: "Reactive Reload is a low-chance roll" },
      { slot: "Utility", perks: ["Triple Tap", "Army of One", "Grenadier", "Life Support"], note: "Life Support recommended" },
      { slot: "Specialized Perks", perks: ["Explosive Rounds"], note: "Required" },
    ],
  },
  {
    id: "scout-rifle-high-impact", categoryId: "scout-rifle", name: "High Impact", recommended: true,
    pvePerkPool: [
      { slot: "Damage", perks: ["Crowd Control"] },
      { slot: "Utility", perks: ["Triple Tap", "Army of One", "Grenadier", "Life Support"], note: "Life Support recommended" },
      { slot: "Specialized Perks", perks: ["Explosive Rounds"], note: "Required" },
    ],
  },

  // HAND CANNON
  {
    id: "hand-cannon-low-impact", categoryId: "hand-cannon", name: "Low Impact", recommended: false,
    notes: "Low Impacts can't really get far for PvE. None are listed. Very, very few low impact HCs could be kept due to them being iconic with proper stats than impact to keep up. Slighted for PvP use only.",
    pvePerkPool: [
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Reactive Reload"], note: "Reactive Reload is a low-chance roll" },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Spray and Play", "Hidden Hand", "Outlaw", "Feeding Frenzy"] },
      { slot: "Specialized Perk", perks: ["Explosive Rounds"], note: "Required for PvE" },
    ],
  },
  {
    id: "hand-cannon-mid-impact", categoryId: "hand-cannon", name: "Mid Impact", recommended: true,
    pvePerkPool: [
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Final Round", "Luck in the Chamber", "Reactive Reload"], note: "Reactive Reload is a low-chance roll" },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Spray and Play", "Hidden Hand", "Outlaw", "Feeding Frenzy"] },
      { slot: "Specialized Perk", perks: ["Explosive Rounds"], note: "Required" },
    ],
  },
  {
    id: "hand-cannon-high-impact", categoryId: "hand-cannon", name: "High Impact", recommended: true,
    pvePerkPool: [
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Damage", perks: ["Crowd Control", "Final Round", "Luck in the Chamber", "Reactive Reload"], note: "Reactive Reload is a low-chance roll" },
      { slot: "Utility", perks: ["Army of One", "Grenadier", "Spray and Play", "Hidden Hand", "Outlaw", "Feeding Frenzy"] },
      { slot: "Specialized Perk", perks: ["Explosive Rounds"], note: "Required" },
    ],
  },

  // SHOTGUN
  {
    id: "shotgun-all", categoryId: "shotgun", name: "All Archetypes", recommended: true,
    pvePerkPool: [
      { slot: "Barrel", perks: ["Aggressive Ballistics (Best)", "Accurized Ballistics (Second)", "Field Choke (Third)", "Linear Compensator (Last)"] },
      { slot: "Utility", perks: ["Full Auto"] },
      { slot: "Reload", perks: ["Oiled Frame (Best)", "Flared Magwell (Second)", "Speed Reload (Last)"] },
      { slot: "Damage", perks: ["Final Round"] },
    ],
  },
  {
    id: "shotgun-void-hunter", categoryId: "shotgun", name: "Void Hunter Roll (Quiver build)", recommended: true,
    notes: "Only used for Void Hunters that use Quiver with their Super. With Quiver and Replenish being used during the Super, you can empty your reserves in 3 arrows with no issues if you practice enough.",
    pvePerkPool: [
      { slot: "Barrel", perks: ["Aggressive Ballistics (Best)", "Accurized Ballistics (Second)", "Field Choke (Third)", "Linear Compensator (Last)"] },
      { slot: "Utility", perks: ["Full Auto"] },
      { slot: "Reload", perks: ["Oiled Frame (Best)", "Flared Magwell (Second)", "Speed Reload (Last)"] },
      { slot: "Specialized Perk", perks: ["Replenish"], note: "Required for this setup" },
    ],
  },

  // SNIPER RIFLE
  {
    id: "sniper-rifle-low-impact", categoryId: "sniper-rifle", name: "Low Impact", recommended: false,
    notes: "Skip these. Some are fun but they're really not worth the trouble. Low Impacts are reserved for PvP use.",
    pvePerkPool: [
      { slot: "Utility", perks: ["Triple Tap", "Unflinching", "Spray and Play"] },
      { slot: "Mag", perks: ["Casket Mag", "Clown Cartridge"] },
      { slot: "Damage", perks: ["Luck in the Chamber"], note: "Low-chance roll" },
    ],
  },
  {
    id: "sniper-rifle-mid-impact", categoryId: "sniper-rifle", name: "Mid Impact", recommended: true,
    pvePerkPool: [
      { slot: "Utility", perks: ["Triple Tap", "Unflinching", "Spray and Play"] },
      { slot: "Mag", perks: ["Casket Mag", "Clown Cartridge"] },
      { slot: "Damage", perks: ["Luck in the Chamber"], note: "Low-chance roll" },
    ],
  },
  {
    id: "sniper-rifle-high-impact", categoryId: "sniper-rifle", name: "High Impact", recommended: true,
    pvePerkPool: [
      { slot: "Utility", perks: ["Triple Tap", "Unflinching", "Spray and Play"] },
      { slot: "Mag", perks: ["Casket Mag", "Clown Cartridge"] },
      { slot: "Damage", perks: ["Luck in the Chamber"], note: "Low-chance roll" },
    ],
  },

  // FUSION RIFLE
  {
    id: "fusion-rifle-low-impact", categoryId: "fusion-rifle", name: "Low Impact", recommended: false,
    notes: "Do not keep any. They're really not worth keeping. Avoid them. Not even worth using in PvP unless it's very specific Fusion Rifles in question.",
    pvePerkPool: [],
  },
  {
    id: "fusion-rifle-mid-impact", categoryId: "fusion-rifle", name: "Mid Impact", recommended: true,
    pvePerkPool: [
      { slot: "Battery", perks: ["Enhanced Battery", "Accelerated Coils"] },
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance"] },
      { slot: "Range", perks: ["Rangefinder", "Hammer Forged"] },
      { slot: "Utility", perks: ["Army of One", "Spray and Play", "Eye of the Storm", "Life Support"], note: "Eye of the Storm and Life Support are low-chance rolls" },
      { slot: "Mag", perks: ["Casket Mag"] },
    ],
  },
  {
    id: "fusion-rifle-high-impact", categoryId: "fusion-rifle", name: "High Impact", recommended: true,
    pvePerkPool: [
      { slot: "Battery", perks: ["Enhanced Battery", "Accelerated Coils"] },
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance"] },
      { slot: "Range", perks: ["Rangefinder", "Hammer Forged"] },
      { slot: "Utility", perks: ["Army of One", "Spray and Play", "Eye of the Storm", "Life Support"], note: "Eye of the Storm and Life Support are low-chance rolls" },
      { slot: "Mag", perks: ["Casket Mag"] },
    ],
  },

  // SIDEARM (no named weapons in the source thread for any tier)
  {
    id: "sidearm-low-impact", categoryId: "sidearm", name: "Low Impact (Do Not Use)", recommended: false,
    pvePerkPool: [
      { slot: "Stability", perks: ["Zen Moment", "Fitted Stock"] },
      { slot: "Barrel", perks: ["Rifled Barrel", "Reinforced Barrel"], note: "Reinforced Barrel is a low-chance roll" },
      { slot: "Mag", perks: ["Appended Magazine", "Feather Mag"], note: "Both are low-chance rolls; Feather Mag for large mags" },
      { slot: "Range", perks: ["Rangefinder", "Hand Loaded"] },
      { slot: "Utility", perks: ["Army of One", "Outlaw", "Hidden Hand", "Reactive Reload"], note: "Reactive Reload is a low-chance roll" },
      { slot: "Reload", perks: ["Feeding Frenzy", "Spray and Play", "Speed Reload"] },
      { slot: "Damage", perks: ["Crowd Control", "High Caliber Rounds"], note: "High Caliber Rounds mostly recommended" },
    ],
  },
  {
    id: "sidearm-mid-impact", categoryId: "sidearm", name: "Mid Impact (Only on Specific Sidearms)", recommended: true,
    pvePerkPool: [
      { slot: "Stability", perks: ["Zen Moment", "Fitted Stock"] },
      { slot: "Barrel", perks: ["Rifled Barrel", "Reinforced Barrel"], note: "Reinforced Barrel is a low-chance roll" },
      { slot: "Mag", perks: ["Appended Magazine", "Feather Mag"], note: "Both are low-chance rolls; Feather Mag for large mags" },
      { slot: "Range", perks: ["Rangefinder", "Hand Loaded"] },
      { slot: "Utility", perks: ["Army of One", "Outlaw", "Hidden Hand", "Reactive Reload"], note: "Reactive Reload is a low-chance roll" },
      { slot: "Reload", perks: ["Feeding Frenzy", "Spray and Play", "Speed Reload"] },
      { slot: "Damage", perks: ["Crowd Control", "High Caliber Rounds"], note: "High Caliber Rounds mostly recommended" },
    ],
  },
  {
    id: "sidearm-high-impact", categoryId: "sidearm", name: "High Impact (Best Recommendation)", recommended: true,
    pvePerkPool: [
      { slot: "Stability", perks: ["Zen Moment", "Fitted Stock"] },
      { slot: "Barrel", perks: ["Rifled Barrel", "Reinforced Barrel"], note: "Reinforced Barrel is a low-chance roll" },
      { slot: "Mag", perks: ["Appended Magazine", "Feather Mag"], note: "Both are low-chance rolls; Feather Mag for large mags" },
      { slot: "Range", perks: ["Rangefinder", "Hand Loaded"] },
      { slot: "Utility", perks: ["Army of One", "Outlaw", "Hidden Hand", "Reactive Reload"], note: "Reactive Reload is a low-chance roll" },
      { slot: "Reload", perks: ["Feeding Frenzy", "Spray and Play", "Speed Reload"] },
      { slot: "Damage", perks: ["Crowd Control", "High Caliber Rounds"], note: "High Caliber Rounds mostly recommended" },
    ],
  },

  // ROCKET LAUNCHER
  {
    id: "rocket-launcher-all", categoryId: "rocket-launcher", name: "All Launcher Variations", recommended: true,
    pvePerkPool: [
      { slot: "Launch", perks: ["Aggressive Launch (Best)", "Linear Compensator (Second)", "Hard Launch (Second)", "Warhead Verniers (Second)"] },
      { slot: "Reload", perks: ["Speed Reload", "Flared Magwell", "Spray and Play"] },
      { slot: "Mag", perks: ["Field Scout", "Tripod"] },
      { slot: "Damage", perks: ["Cluster Bomb"], note: "Required" },
    ],
  },

  // MACHINE GUN
  {
    id: "machine-gun-low-impact", categoryId: "machine-gun", name: "Low Impact", recommended: true,
    pvePerkPool: [
      { slot: "Barrel", perks: ["Aggressive Ballistics (Best)", "Accurized Ballistics (Second)", "Field Choke (Third)", "Linear Compensator (Last)"] },
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Utility", perks: ["Army of One", "Life Leech", "Life Support", "Spray and Play"], note: "Life Leech is a low-chance roll" },
      { slot: "Mag", perks: ["Extended Mag"] },
      { slot: "Damage", perks: ["High Caliber Rounds", "Armor Piercing Rounds"] },
      { slot: "Specialized Perk", perks: ["Persistence"], note: "Required" },
    ],
  },
  {
    id: "machine-gun-mid-impact", categoryId: "machine-gun", name: "Mid Impact", recommended: true,
    pvePerkPool: [
      { slot: "Barrel", perks: ["Aggressive Ballistics (Best)", "Accurized Ballistics (Second)", "Field Choke (Third)", "Linear Compensator (Last)"] },
      { slot: "Stability", perks: ["Perfect Balance", "Counterbalance"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Utility", perks: ["Army of One", "Life Support", "Spray and Play", "Unflinching", "Hidden Hand"] },
      { slot: "Frame", perks: ["Braced Frame"], note: "~50% of cases" },
      { slot: "Mag", perks: ["Extended Mag"] },
      { slot: "Damage", perks: ["High Caliber Rounds", "Armor Piercing Rounds"] },
      { slot: "Specialized Perk", perks: ["Persistence"], note: "~50% of cases" },
    ],
  },
  {
    id: "machine-gun-high-impact", categoryId: "machine-gun", name: "High Impact", recommended: true,
    pvePerkPool: [
      { slot: "Barrel", perks: ["Aggressive Ballistics (Best)", "Accurized Ballistics (Second)", "Field Choke (Third)", "Linear Compensator (Last)"] },
      { slot: "Range", perks: ["Rangefinder", "Rifled Barrel"] },
      { slot: "Utility", perks: ["Army of One", "Life Support", "Spray and Play", "Unflinching", "Hidden Hand"] },
      { slot: "Frame", perks: ["Braced Frame"], note: "~50% of cases" },
      { slot: "Mag", perks: ["Extended Mag"] },
      { slot: "Damage", perks: ["High Caliber Rounds", "Armor Piercing Rounds"] },
      { slot: "Specialized Perk", perks: ["Persistence"], note: "~25% of cases" },
    ],
  },
];

export const weapons: Weapon[] = [
  // AUTO RIFLE - Low Impact
  { id: "auto-rifle-low-impact--assembly-ii", name: "Assembly II", categoryId: "auto-rifle", archetypeId: "auto-rifle-low-impact", tier: "recommended", source: "New Monarchy Weapons Package / New Monarchy Vendor" },
  { id: "auto-rifle-low-impact--hex-caster-arc", name: "Hex Caster Arc", categoryId: "auto-rifle", archetypeId: "auto-rifle-low-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty / Crucible Match Drop" },
  { id: "auto-rifle-low-impact--arminius-d", name: "Arminius-D", categoryId: "auto-rifle", archetypeId: "auto-rifle-low-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "auto-rifle-low-impact--atheons-epilogue", name: "Atheon's Epilogue", categoryId: "auto-rifle", archetypeId: "auto-rifle-low-impact", tier: "recommended", source: "Vault of Glass 390", staticRoll: true },
  { id: "auto-rifle-low-impact--doctrine-of-passing", name: "Doctrine of Passing", categoryId: "auto-rifle", archetypeId: "auto-rifle-low-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty" },
  { id: "auto-rifle-low-impact--eidolon-ally", name: "Eidolon Ally", categoryId: "auto-rifle", archetypeId: "auto-rifle-low-impact", tier: "recommended", source: "Obtain Husk of the Pit Y3 and upgrade via The Crux of Darkness questline" },
  { id: "auto-rifle-low-impact--soulstealers-claw", name: "Soulstealer's Claw", categoryId: "auto-rifle", archetypeId: "auto-rifle-low-impact", tier: "recommended", source: "Challenge of the Elders" },
  { id: "auto-rifle-low-impact--the-unbent-tree", name: "The Unbent Tree", categoryId: "auto-rifle", archetypeId: "auto-rifle-low-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty" },

  // AUTO RIFLE - Mid Impact
  { id: "auto-rifle-mid-impact--the-continental", name: "The Continental", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "recommended", source: "Vanguard Weapons Package / Vanguard Quartermaster" },
  { id: "auto-rifle-mid-impact--suros-ari-41", name: "Suros ARI-41", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "auto-rifle-mid-impact--haakons-hatchet", name: "Haakon's Hatchet", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty", notes: "Second lowest drop chance." },
  { id: "auto-rifle-mid-impact--red-spectre", name: "Red Spectre", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty / Crucible Match Drop" },
  { id: "auto-rifle-mid-impact--extremophile-011", name: "Extremophile 011", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "recommended", source: "Dead Orbit Weapons Package / Dead Orbit Vendor" },
  { id: "auto-rifle-mid-impact--vision-stone", name: "Vision Stone", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty", staticRoll: true, notes: "Lowest drop chance from the bounty." },
  { id: "auto-rifle-mid-impact--zarinaea-d", name: "Zarinaea-D", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "auto-rifle-mid-impact--paleocontact-jpk-43", name: "Paleocontact JPK-43", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "omitted", source: "Dead Orbit Weapons Package (Taken King DLC only)" },
  { id: "auto-rifle-mid-impact--righteous-vii", name: "Righteous VII", categoryId: "auto-rifle", archetypeId: "auto-rifle-mid-impact", tier: "omitted", source: "New Monarchy Weapons Package (Taken King DLC only)" },

  // AUTO RIFLE - High Impact
  { id: "auto-rifle-high-impact--zero-day-dilemma", name: "Zero-Day Dilemma", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty / Crucible Quartermaster" },
  { id: "auto-rifle-high-impact--an-answering-chord", name: "An Answering Chord", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Vanguard Weapons Package / Legendary Engrams" },
  { id: "auto-rifle-high-impact--suros-ari-45", name: "Suros ARI-45", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "auto-rifle-high-impact--grim-citizen-iii", name: "Grim Citizen III", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty / Crucible Match Drop" },
  { id: "auto-rifle-high-impact--antipodal-hindsight", name: "Antipodal Hindsight", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty / Nightfall Drop" },
  { id: "auto-rifle-high-impact--shadow-price", name: "Shadow Price", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Sunrise Weekly Strike Bounty / Vanguard Weapons Package" },
  { id: "auto-rifle-high-impact--the-dealbreaker", name: "The Dealbreaker", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Crucible Weekly Auto Rifle Bounty / Nightfall Drop / Legendary Engrams" },
  { id: "auto-rifle-high-impact--does-not-bow", name: "Does Not Bow", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "The Shadow Thief [320/350]", requiresSkeletonKey: true, notes: "33% drop chance. Shares 2 other drops in the loot table." },
  { id: "auto-rifle-high-impact--genesis-chain", name: "Genesis Chain", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Wrath of the Machine 390", staticRoll: true },
  { id: "auto-rifle-high-impact--her-memory", name: "Her Memory", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Challenge of the Elders" },
  { id: "auto-rifle-high-impact--questing-beast", name: "Questing Beast", categoryId: "auto-rifle", archetypeId: "auto-rifle-high-impact", tier: "recommended", source: "Sunrise Weekly Bounty / Nightfall Drop" },

  // PULSE RIFLE - Low Impact
  { id: "pulse-rifle-low-impact--suros-pdx-45", name: "Suros PDX-45", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-low-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "pulse-rifle-low-impact--the-clever-dragon", name: "The Clever Dragon", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-low-impact", tier: "recommended", source: "Crucible Weekly Pulse Rifle Bounty" },
  { id: "pulse-rifle-low-impact--hawksaw", name: "Hawksaw", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-low-impact", tier: "recommended", source: "Crucible Weekly Pulse Rifle Bounty / Legendary Engrams" },
  { id: "pulse-rifle-low-impact--b-29-party-favor", name: "B-29 Party Favor", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-low-impact", tier: "recommended", source: "Crucible Weekly Pulse Rifle Bounty / Crucible Quartermaster" },
  { id: "pulse-rifle-low-impact--grasp-of-malok", name: "Grasp of Malok", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-low-impact", tier: "recommended", source: "Will of Crota [320/350]", requiresSkeletonKey: true, notes: "50/50 on the drop." },
  { id: "pulse-rifle-low-impact--the-waltz", name: "The Waltz", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-low-impact", tier: "recommended", source: "Future War Cult Weapon Package / Future War Cult Vendor" },

  // PULSE RIFLE - Mid Impact
  { id: "pulse-rifle-mid-impact--hopscotch-pilgrim", name: "Hopscotch Pilgrim", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Pulse Rifle Bounty / Crucible Match Drop" },
  { id: "pulse-rifle-mid-impact--suros-pdx-41", name: "Suros PDX-41", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-mid-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "pulse-rifle-mid-impact--nirwens-mercy", name: "Nirwen's Mercy", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Pulse Rifle Bounty", notes: "Iron Banner weapon; second lowest drop rate." },
  { id: "pulse-rifle-mid-impact--final-duty", name: "Final Duty", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-mid-impact", tier: "recommended", source: "Challenge of the Elders" },
  { id: "pulse-rifle-mid-impact--the-villainy", name: "The Villainy", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-mid-impact", tier: "omitted", source: "Future War Cult Weapon Package (Taken King DLC only)" },

  // PULSE RIFLE - High Impact
  { id: "pulse-rifle-high-impact--parthian-shot", name: "Parthian Shot", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-high-impact", tier: "recommended", source: "Vanguard Weapons Package / Vanguard Quartermaster" },
  { id: "pulse-rifle-high-impact--spare-change-25", name: "Spare Change.25", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-high-impact", tier: "recommended", source: "Crucible Weekly Pulse Rifle Bounty" },

  // PULSE RIFLE - Hakke 4-shot
  { id: "pulse-rifle-hakke-4-shot--apple-of-discord", name: "Apple of Discord", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-hakke-4-shot", tier: "recommended", source: "Vanguard Weapon Package / Legendary Engrams" },
  { id: "pulse-rifle-hakke-4-shot--herja-d", name: "Herja-D", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-hakke-4-shot", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "pulse-rifle-hakke-4-shot--lyudmilla-d", name: "Lyudmilla-D", categoryId: "pulse-rifle", archetypeId: "pulse-rifle-hakke-4-shot", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },

  // SCOUT RIFLE - Mid Impact
  { id: "scout-rifle-mid-impact--treads-upon-stars", name: "Treads Upon Stars", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Cerberus Vae III [320/350]", requiresSkeletonKey: true, notes: "Easiest to farm; guaranteed drop from the hoard chest in this strike." },
  { id: "scout-rifle-mid-impact--cryptic-dragon", name: "Cryptic Dragon", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Scout Bounty / Crucible Match Drop", notes: "Cannot roll Life Support; go for max damage with Crowd Control and Reactive Reload instead." },
  { id: "scout-rifle-mid-impact--the-wounded", name: "The Wounded", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Future War Cult Weapon Package / Future War Cult Vendor", notes: "Good starting Scout with a proper god roll until better Scouts drop." },
  { id: "scout-rifle-mid-impact--not-like-the-others", name: "Not Like the Others", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Vanguard Weapon Package / Legendary Engrams" },
  { id: "scout-rifle-mid-impact--nl-shadow-701x", name: "NL Shadow 701X", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Scout Bounty / Crucible Match Drop", notes: "Lower output than other scouts but still good to use." },
  { id: "scout-rifle-mid-impact--the-hero-formula", name: "The Hero Formula", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Scout Bounty / Crucible Quartermaster", notes: "Weakest Mid Impact but it can roll Life Support. There if you've got nothing else." },
  { id: "scout-rifle-mid-impact--lethe-noblesse", name: "Lethe Noblesse", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Challenge of the Elders" },
  { id: "scout-rifle-mid-impact--the-saterienne-rapier", name: "The Saterienne Rapier", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Crucible Weapon Package" },
  { id: "scout-rifle-mid-impact--the-distant-star", name: "The Distant Star", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Scout Bounty", notes: "Good, but the perk pool setup is weird." },
  { id: "scout-rifle-mid-impact--burning-eye", name: "Burning Eye", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Scout Bounty", staticRoll: true, notes: "Lowest drop rate from the bounty. Good luck getting one. Really." },
  { id: "scout-rifle-mid-impact--angels-advocate", name: "Angel's Advocate", categoryId: "scout-rifle", archetypeId: "scout-rifle-mid-impact", tier: "dishonorable_mention", source: "Vanguard Weapons Package / Vanguard Quartermaster", notes: "One of the lowest rated scout rifles in the game besides Hero Formula. Can roll Life Support but heavily unreliable. Temporary until you get something better." },

  // SCOUT RIFLE - High Impact
  { id: "scout-rifle-high-impact--keystone-01", name: "Keystone 01", categoryId: "scout-rifle", archetypeId: "scout-rifle-high-impact", tier: "recommended", source: "Dead Orbit Weapon Package / Dead Orbit Vendor", notes: "Great starting Scout with a god roll until you get a better one. Cannot roll Life Support." },
  { id: "scout-rifle-high-impact--badger-ccl", name: "Badger CCL", categoryId: "scout-rifle", archetypeId: "scout-rifle-high-impact", tier: "recommended", source: "Sunrise Weekly Strike Bounty / Vanguard Weapon Package", notes: "Most recommended High Impact to farm for; easier to farm than others." },
  { id: "scout-rifle-high-impact--colovances-duty", name: "Colovance's Duty", categoryId: "scout-rifle", archetypeId: "scout-rifle-high-impact", tier: "recommended", source: "Crucible Weekly Scout Bounty", notes: "Second lowest drop from the bounty. Known as one of the best High Impacts in the game." },
  { id: "scout-rifle-high-impact--hand-of-judgement", name: "Hand of Judgement", categoryId: "scout-rifle", archetypeId: "scout-rifle-high-impact", tier: "recommended", source: "Challenge of the Elders", notes: "Weird perk pool setup but still good. Rivals Colovance's Duty." },

  // HAND CANNON - Mid Impact
  { id: "hand-cannon-mid-impact--the-palindrome", name: "The Palindrome", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Crucible Weekly Hand Cannon Bounty / Crucible Match Drop / Crucible Quartermaster", notes: "Easiest to get. Can roll a hybrid (Explosive Rounds and Rifled Barrel on the same perk row)." },
  { id: "hand-cannon-mid-impact--eyasluna", name: "Eyasluna", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Crucible Weekly Hand Cannon Bounty / Crucible Match Drop", notes: "Highest rated Mid Impact HC with hybrid roll potential." },
  { id: "hand-cannon-mid-impact--imago-loop", name: "Imago Loop", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Echo Chamber [320/350] / Undying Mind [320/350]", requiresSkeletonKey: true, notes: "50/50 on both strikes for the drop. Can get hybrid roll." },
  { id: "hand-cannon-mid-impact--her-revenge", name: "Her Revenge", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Challenge of the Elders", notes: "Can do hybrid roll." },
  { id: "hand-cannon-mid-impact--stolen-pride", name: "Stolen Pride", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Challenge of the Elders", notes: "Can do hybrid roll." },
  { id: "hand-cannon-mid-impact--byronic-hero", name: "Byronic Hero", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Crucible Weekly Hand Cannon Bounty / Nightfall Drop", notes: "Underrated; can do just as well as Eyasluna and Palindrome. Lower stats in some rolls. Can get hybrid roll." },
  { id: "hand-cannon-mid-impact--the-wail", name: "The Wail", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Future War Cult Weapon Package / Future War Cult Vendor", notes: "Second easiest. Falls off later though — find a replacement." },
  { id: "hand-cannon-mid-impact--fatebringer", name: "Fatebringer", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Vault of Glass 390", staticRoll: true, notes: "Has Firefly on the last perk, which is known to be unreliable when paired with Explosive Rounds." },
  { id: "hand-cannon-mid-impact--gaheris-d", name: "Gaheris-D", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Third easiest, with great god roll potential in three ways." },
  { id: "hand-cannon-mid-impact--the-devil-you-know", name: "The Devil You Know", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Vanguard Weapon Package / Legendary Engrams", notes: "Can do hybrid roll." },
  { id: "hand-cannon-mid-impact--finnalas-peril", name: "Finnala's Peril", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Crucible Weekly Hand Cannon Bounty", notes: "Iron Banner weapon; second lowest drop rate. Can do hybrid roll." },
  { id: "hand-cannon-mid-impact--lord-high-fixer", name: "Lord High Fixer", categoryId: "hand-cannon", archetypeId: "hand-cannon-mid-impact", tier: "recommended", source: "Vanguard Weapon Package", notes: "Can do hybrid roll." },

  // HAND CANNON - High Impact
  { id: "hand-cannon-high-impact--judith-d", name: "Judith-D", categoryId: "hand-cannon", archetypeId: "hand-cannon-high-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Easiest to get with the package. Same god roll potential and perk pool as Gaheris-D." },
  { id: "hand-cannon-high-impact--ill-will", name: "ILL Will", categoryId: "hand-cannon", archetypeId: "hand-cannon-high-impact", tier: "recommended", source: "Crucible Weekly Hand Cannon Bounty / Crucible Match Drop", notes: "Niche — other High Impacts can do better. Can do hybrid roll." },
  { id: "hand-cannon-high-impact--the-lingering-song", name: "The Lingering Song", categoryId: "hand-cannon", archetypeId: "hand-cannon-high-impact", tier: "recommended", source: "Crucible Weekly Hand Cannon Bounty", notes: "Weird perk lineup but still works. Really low drop rate. Can have hybrid roll." },

  // SHOTGUN - All Archetypes
  { id: "shotgun-all--found-verdict", name: "Found Verdict", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Vault of Glass 390", staticRoll: true, notes: "Easiest Shotgun to farm. No reload perk, so use Single Point Sling." },
  { id: "shotgun-all--the-next-big-thing", name: "The Next Big Thing", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Legendary Engrams / Crucible Weekly Bounty", notes: "Highest damaging shotgun in Rise of Iron, rivaling Patch-A." },
  { id: "shotgun-all--the-comedian", name: "The Comedian", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Legendary Engrams / Vanguard Weapon Package" },
  { id: "shotgun-all--conspiracy-theory-d", name: "Conspiracy Theory-D", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Legendary Engrams" },
  { id: "shotgun-all--strongbow-d", name: "Strongbow-D", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "shotgun-all--jingukogo-d", name: "Jingukogo-D", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Lower output than some other shotguns. Still a good find with a god roll." },
  { id: "shotgun-all--matador-64", name: "Matador 64", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Crucible Shotgun Weekly Bounty / Crucible Match Drop", notes: "Cannot roll a reload perk — use Single Point Sling or Quickdraw." },
  { id: "shotgun-all--party-crasher-plus-1", name: "Party Crasher +1", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Crucible Shotgun Weekly Bounty / Crucible Match Drop" },
  { id: "shotgun-all--in-times-of-need", name: "In Times of Need", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Crucible Shotgun Weekly Bounty" },
  { id: "shotgun-all--two-to-the-morgue", name: "Two to the Morgue", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Crucible Weapon Package", notes: "Very high damage output." },
  { id: "shotgun-all--deidriss-retort", name: "Deidris's Retort", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Crucible Shotgun Weekly Bounty", notes: "Iron Banner weapon; second lowest drop rate. Very high damage output." },
  { id: "shotgun-all--stolen-will", name: "Stolen Will", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Winter's Run [320/350]", requiresSkeletonKey: true, notes: "Guaranteed drop from the hoard chest." },
  { id: "shotgun-all--her-champion", name: "Her Champion", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "recommended", source: "Challenge of the Elders" },
  { id: "shotgun-all--patch-a", name: "Patch-A", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "omitted", source: "Dead Orbit Weapon Rank Up Packages (Taken King DLC only)", notes: "Best damage output shotgun in Destiny 1. The Next Big Thing is the only shotgun that rivals it." },
  { id: "shotgun-all--burden-of-proof", name: "Burden of Proof", categoryId: "shotgun", archetypeId: "shotgun-all", tier: "omitted", source: "New Monarchy Weapon Rank Up Packages (Taken King DLC only)" },

  // SHOTGUN - Void Hunter Roll
  { id: "shotgun-void-hunter--stolen-will", name: "Stolen Will", categoryId: "shotgun", archetypeId: "shotgun-void-hunter", tier: "recommended", source: "Winter's Run [320/350]", requiresSkeletonKey: true, notes: "Guaranteed drop from the hoard chest." },
  { id: "shotgun-void-hunter--occams-razor", name: "Occam's Razor", categoryId: "shotgun", archetypeId: "shotgun-void-hunter", tier: "recommended", source: "Vanguard Weapons Package / Vanguard Quartermaster" },
  { id: "shotgun-void-hunter--44-curtain-call", name: "44 Curtain Call", categoryId: "shotgun", archetypeId: "shotgun-void-hunter", tier: "recommended", source: "Crucible Shotgun Weekly Bounty / Crucible Quartermaster" },
  { id: "shotgun-void-hunter--the-comedian", name: "The Comedian", categoryId: "shotgun", archetypeId: "shotgun-void-hunter", tier: "recommended", source: "Legendary Engrams / Vanguard Weapon Package" },
  { id: "shotgun-void-hunter--her-champion", name: "Her Champion", categoryId: "shotgun", archetypeId: "shotgun-void-hunter", tier: "recommended", source: "Challenge of the Elders" },

  // SNIPER RIFLE - Mid Impact
  { id: "sniper-rifle-mid-impact--aoife-rua-d", name: "Aoife Rua-D", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-mid-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Used for surplus strats." },
  { id: "sniper-rifle-mid-impact--bitter-edge-010", name: "Bitter Edge 010", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-mid-impact", tier: "recommended", source: "Dead Orbit Weapons Package / Dead Orbit Vendor" },
  { id: "sniper-rifle-mid-impact--deposition-vii", name: "Deposition VII", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-mid-impact", tier: "recommended", source: "New Monarchy Weapons Package / New Monarchy Vendor" },
  { id: "sniper-rifle-mid-impact--uzume-rr4", name: "Uzume RR4", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-mid-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package" },
  { id: "sniper-rifle-mid-impact--tamar-d", name: "Tamar-D", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-mid-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Used for surplus strats." },
  { id: "sniper-rifle-mid-impact--tao-hua-yuan", name: "Tao Hua Yuan", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Sniper Rifle Bounty / Legendary Engrams" },
  { id: "sniper-rifle-mid-impact--weylorans-march", name: "Weyloran's March", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Sniper Rifle Bounty", notes: "Iron Banner weapon; second lowest drop rate." },
  { id: "sniper-rifle-mid-impact--antinomy-xvi", name: "Antinomy XVI", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-mid-impact", tier: "omitted", source: "New Monarchy Weapons Package (Taken King DLC only)" },

  // SNIPER RIFLE - High Impact
  { id: "sniper-rifle-high-impact--1000-yard-stare", name: "1000-Yard Stare", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "recommended", source: "Legendary Engrams" },
  { id: "sniper-rifle-high-impact--but-not-forgotten", name: "But Not Forgotten", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "recommended", source: "Archon's Forge Drop", notes: "Niche due to a weird perk pool table." },
  { id: "sniper-rifle-high-impact--event-horizon", name: "Event Horizon", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "recommended", source: "Crucible Weapons Package / Crucible Quartermaster", notes: "Easiest possible High Impact to grab." },
  { id: "sniper-rifle-high-impact--eirene-rr4", name: "Eirene RR4", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Second easiest to grab." },
  { id: "sniper-rifle-high-impact--ex-machina", name: "Ex Machina", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "recommended", source: "Wrath of the Machine 390", staticRoll: true, notes: "Very niche with little options but still usable." },
  { id: "sniper-rifle-high-impact--ldr-5001", name: "LDR 5001", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "recommended", source: "Vanguard Weapons Package / Legendary Engrams", notes: "Same type as 1000-Yard Stare; practically identical with little difference." },
  { id: "sniper-rifle-high-impact--her-fury", name: "Her Fury", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "recommended", source: "Challenge of the Elders" },
  { id: "sniper-rifle-high-impact--y-09-longbow-synthesis", name: "Y-09 Longbow Synthesis", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "recommended", source: "Crucible Weapons Package" },
  { id: "sniper-rifle-high-impact--extrasolar-rr4", name: "Extrasolar RR4", categoryId: "sniper-rifle", archetypeId: "sniper-rifle-high-impact", tier: "omitted", source: "Dead Orbit Weapons Package (Taken King DLC only)" },

  // FUSION RIFLE - Mid Impact
  { id: "fusion-rifle-mid-impact--worlds-to-come-001", name: "Worlds To Come 001", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-mid-impact", tier: "recommended", source: "Dead Orbit Weapons Package / Dead Orbit Vendor" },
  { id: "fusion-rifle-mid-impact--each-new-day", name: "Each New Day", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Fusion Rifle Bounty / Crucible Quartermaster", notes: "Reportedly wonky damage numbers — half reliable." },
  { id: "fusion-rifle-mid-impact--panta-rhei", name: "Panta Rhei", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Fusion Rifle Bounty / Nightfall Drop / Legendary Engrams" },
  { id: "fusion-rifle-mid-impact--stellar-vestige", name: "Stellar Vestige", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-mid-impact", tier: "recommended", source: "Crucible Weekly Fusion Rifle Bounty" },

  // FUSION RIFLE - High Impact
  { id: "fusion-rifle-high-impact--77-wizard", name: "77 Wizard", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-high-impact", tier: "recommended", source: "Crucible Weekly Fusion Rifle Bounty / Crucible Match Drop" },
  { id: "fusion-rifle-high-impact--darkblades-spite", name: "Darkblade's Spite", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-high-impact", tier: "recommended", source: "The Sunless Cell [320/350]", requiresSkeletonKey: true, notes: "50/50 for the drop." },
  { id: "fusion-rifle-high-impact--the-waiting", name: "The Waiting", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-high-impact", tier: "recommended", source: "Future War Cult Weapon Package / Future War Cult Vendor", notes: "Easiest to get." },
  { id: "fusion-rifle-high-impact--thesan-fr4", name: "Thesan FR4", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-high-impact", tier: "recommended", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Second easiest to get." },
  { id: "fusion-rifle-high-impact--praetorian-foil", name: "Praetorian Foil", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-high-impact", tier: "recommended", source: "Vault of Glass 390", staticRoll: true, notes: "Very high damaging Fusion." },
  { id: "fusion-rifle-high-impact--saladins-vigil", name: "Saladin's Vigil", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-high-impact", tier: "recommended", source: "Archon's Forge", notes: "Very high damage output. Rivals Praetorian Foil." },
  { id: "fusion-rifle-high-impact--hitchhiker-fr4", name: "Hitchhiker FR4", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-high-impact", tier: "omitted", source: "Dead Orbit Weapons Package (Taken King DLC only)" },
  { id: "fusion-rifle-high-impact--the-vacancy", name: "The Vacancy", categoryId: "fusion-rifle", archetypeId: "fusion-rifle-high-impact", tier: "omitted", source: "Future War Cult Weapons Package (Taken King DLC only)" },

  // ROCKET LAUNCHER
  { id: "rocket-launcher-all--unto-dust-00", name: "Unto Dust 00", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "recommended", source: "Dead Orbit Weapon Package / Dead Orbit Vendor", notes: "Easiest Launcher to grab." },
  { id: "rocket-launcher-all--the-smolder", name: "The Smolder", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "recommended", source: "Legendary Engrams / Crucible Heavy Weekly Bounty", notes: "Highest damaging launcher in the game. True hybrid god roll potential (Reload, Tripod, Field Scout and Cluster Bomb all on one)." },
  { id: "rocket-launcher-all--steel-oracle-z-11", name: "Steel Oracle Z-11", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "recommended", source: "Crucible Weekly Heavy Bounty / Crucible Match Drop", notes: "Can roll hybrid." },
  { id: "rocket-launcher-all--the-warpath", name: "The Warpath", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "recommended", source: "Future War Cult Weapon Package / Future War Cult Vendor", notes: "Weaker than most Launchers but good if you have nothing else. Great mob control." },
  { id: "rocket-launcher-all--tormods-bellows", name: "Tormod's Bellows", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "recommended", source: "Crucible Weekly Heavy Bounty", notes: "Iron Banner weapon; second lowest drop rate." },
  { id: "rocket-launcher-all--the-nightmare", name: "The Nightmare", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "recommended", source: "Challenge of the Elders", notes: "Can roll hybrid." },
  { id: "rocket-launcher-all--the-ash-factory", name: "The Ash Factory", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "recommended", source: "Crucible Weekly Heavy Bounty / Crucible Match Drop", notes: "Only 1 rocket in the barrel — needs Tripod to offset the DPS loss." },
  { id: "rocket-launcher-all--choleric-dragon-srt-49", name: "Choleric Dragon SRT-49", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "recommended", source: "Legendary Engrams", notes: "Used with Disciplinarian for specific Wrath of the Machine raid encounters. Needs that perk to be worthwhile." },
  { id: "rocket-launcher-all--suros-jlb-42", name: "Suros JLB-42", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "surplus_mention", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Can run Surplus for surplus strats." },
  { id: "rocket-launcher-all--suros-jlb-47", name: "Suros JLB-47", categoryId: "rocket-launcher", archetypeId: "rocket-launcher-all", tier: "surplus_mention", source: "Gunsmith Armsday Package / Gunsmith Rank Up Package", notes: "Can run Surplus for surplus strats." },

  // MACHINE GUN - Low Impact
  { id: "machine-gun-low-impact--first-citizen-ix", name: "First Citizen IX", categoryId: "machine-gun", archetypeId: "machine-gun-low-impact", tier: "recommended", source: "New Monarchy Weapon Package / New Monarchy Vendor" },
  { id: "machine-gun-low-impact--diluvian-10-4x", name: "Diluvian 10/4x", categoryId: "machine-gun", archetypeId: "machine-gun-low-impact", tier: "recommended", source: "Vanguard Weapon Package / Legendary Engrams" },
  { id: "machine-gun-low-impact--corrective-measure", name: "Corrective Measure", categoryId: "machine-gun", archetypeId: "machine-gun-low-impact", tier: "recommended", source: "Vault of Glass 390", staticRoll: true },

  // MACHINE GUN - Mid Impact
  { id: "machine-gun-mid-impact--barons-ambition", name: "Baron's Ambition", categoryId: "machine-gun", archetypeId: "machine-gun-mid-impact", tier: "recommended", source: "Fallen S.A.B.E.R. [320/350]", requiresSkeletonKey: true, notes: "50/50 for the drop." },
  { id: "machine-gun-mid-impact--the-silvered-dread", name: "The Silvered Dread", categoryId: "machine-gun", archetypeId: "machine-gun-mid-impact", tier: "recommended", source: "Crucible Weekly Heavy Bounty" },
  { id: "machine-gun-mid-impact--unending-deluge-iii", name: "Unending Deluge III", categoryId: "machine-gun", archetypeId: "machine-gun-mid-impact", tier: "recommended", source: "Crucible Weekly Heavy Bounty / Crucible Match Drop" },
  { id: "machine-gun-mid-impact--zombie-apocalypse-wf47", name: "Zombie Apocalypse WF47", categoryId: "machine-gun", archetypeId: "machine-gun-mid-impact", tier: "recommended", source: "Crucible Weapon Package" },
  { id: "machine-gun-mid-impact--the-variable", name: "The Variable", categoryId: "machine-gun", archetypeId: "machine-gun-mid-impact", tier: "omitted", source: "Future War Cult Weapon Package (Taken King DLC only)" },

  // MACHINE GUN - High Impact
  { id: "machine-gun-high-impact--bane-of-the-taken", name: "Bane of the Taken", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "Challenge of the Elders" },
  { id: "machine-gun-high-impact--bonekruscher", name: "Bonekruscher", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "Vanguard Weapon Package / Vanguard Quartermaster" },
  { id: "machine-gun-high-impact--bretomarts-stand", name: "Bretomart's Stand", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "Crucible Weekly Heavy Bounty", notes: "Iron Banner weapon; second lowest drop rate." },
  { id: "machine-gun-high-impact--chaotic-neutral", name: "Chaotic Neutral", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "Crucible Weekly Heavy Bounty / Crucible Weapon Package / Crucible Quartermaster" },
  { id: "machine-gun-high-impact--ruin-wake", name: "Ruin Wake", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "Crucible Weekly Heavy Bounty / Legendary Engrams" },
  { id: "machine-gun-high-impact--qullims-terminus", name: "Qullim's Terminus", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "King's Fall 390", staticRoll: true },
  { id: "machine-gun-high-impact--harrowed-qullims-terminus", name: "Harrowed Qullim's Terminus", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "King's Fall 390", staticRoll: true },
  { id: "machine-gun-high-impact--the-swarm", name: "The Swarm", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "Vanguard Weapons Package / Nightfall Drop / Legendary Engrams" },
  { id: "machine-gun-high-impact--the-unseeing-eye", name: "The Unseeing Eye", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "recommended", source: "Crucible Weekly Heavy Bounty", staticRoll: true, notes: "Lowest drop rate." },
  { id: "machine-gun-high-impact--objection-iv", name: "Objection IV", categoryId: "machine-gun", archetypeId: "machine-gun-high-impact", tier: "omitted", source: "New Monarchy Weapon Package (Taken King DLC only)" },
];
